import React from "react";
import "semantic-ui-css/semantic.css";
import { Header, Container, Button, Grid, List } from "semantic-ui-react";

import Task from "../components/Task";
import NewTaskForm from "../components/NewTaskForm";
import EditTaskForm from "../components/EditTaskForm";

const HomePage = () => {
  // let newTaskOpen = false;

  // this would be the default value for the inputs, gonna be referenced in order to clear out the form
  const initialNewTask = {
    name: "",
    color: "",
  };

  // this is a getter to get the state of the new task, the first part, the second is a setter to change the state
  const [newTaskOpen, setNewTaskOpen] = React.useState(false);
  const [newTask, setNewTask] = React.useState({
    name: "",
    color: "",
  });

  // creating a setter and list for the array of the list of objects
  const [list, setList] = React.useState([]);

  function openNewTask() {
    setNewTaskOpen(true);
  }
  function closeNewTask() {
    setNewTaskOpen(false);
  }
  function showNewTaskOpen() {
    console.log(newTaskOpen);
  }

  function addNewTask() {
    const listClone = [...list];
    // pushes the new task in to the array
    listClone.push(newTask);
    // changes the state of the array
    setList(listClone);
    //resets the values for the inputs
    setNewTask(initialNewTask);
    // closes menu
    closeNewTask();
  }
  // getter and setter for the edit task, with a default value that will make the openEdit task start false
  const [showEdit, setShowEdit] = React.useState(-1);
  // open the form to edit current task
  function openEditTask(index) {
    // here we are taking the index to open the form, either by checking if it is not a number OR if it is greater than 1
    // since index starts at 0
    setShowEdit(index);
    console.log("test");
  }

  function closeEditTask() {
    setShowEdit(-1);
  }
  // tjos will be the function that will edit a specific task
  function editTask(index, newValues) {
    console.log("edit ", index);
    const newList = list.map((task, i) => {
      if (i !== index) return task;
      return {
        name: newValues.name,
        color: newValues.color,
      };
    });

    setList(newList);
    // this above gonna change the list to the current one with the changes
  }

  function deleteTask() {
    // LOOKUP: Array.filter
  }

  // it does just like the comments below, but instead of doing it in two sections, it does it in one
  const taskList = list.map((task, index) => {
    return (
      <Task
        key={`${task.name}-${index}`}
        name={task.name}
        color={task.color}
        editTask={openEditTask}
        index={index}
      />
    );
  });

  // const taskList = [];

  // for each task in the list it will be pushed to taskList to be displayed by the Task component we made to display items on the todo list
  // we added a key using the name and index to ensure we get unique items and get rid of lack of key error
  // list.forEach((task, index) => {
  //   taskList.push(
  //     <Task key={`${task.name}-${index}`} name={task.name} color={task.color} />
  //   );
  // });
  return (
    <React.Fragment>
      <Container>
        <Grid>
          <Grid.Column width="4">
            <Button icon="bars" onClick={showNewTaskOpen}></Button>
          </Grid.Column>

          <Grid.Column width="8">
            <Header textAlign="center" as="h1">
              Todo List
            </Header>
          </Grid.Column>

          <Grid.Column textAlign="right" width="4">
            <Button color="green" icon="plus" onClick={openNewTask}></Button>
          </Grid.Column>
        </Grid>
        {/* this is an if else, to check if true or false, if true, display the menu, if false, display nothing*/}
        {newTaskOpen ? (
          <NewTaskForm
            closeNewTask={closeNewTask}
            newTask={newTask}
            setNewTask={setNewTask}
            addNewTask={addNewTask}
          />
        ) : null}

        <List>
          {/* the colors are lowercase bc this is the only way this will work */}
          {/* <Task name="Task 1" color="yellow"></Task>
          {/* doesn't matter if they are self-closing or not */}
          {/* <Task name="Task 3" color="pink" /> */}
          {taskList}
        </List>

        {/* this is the trunary that will send the index, in showEdit, and the array of tasks in list, and the function to  
        close the edit form, we don't need to send the open bc it opens with the pencil*/}
        {showEdit > -1 ? (
          <EditTaskForm
            index={showEdit}
            list={list}
            closeForm={closeEditTask}
            editTask={editTask}
          ></EditTaskForm>
        ) : null}
      </Container>
    </React.Fragment>
  );
};

export default HomePage;
