import React from "react";
import "semantic-ui-css/semantic.css";
import {
  Header,
  Segment,
  Form,
  Select,
  Button,
  Input,
} from "semantic-ui-react";
//import {Link} from 'gatsby';

const NewTaskForm = ({ closeNewTask, newTask, setNewTask, addNewTask }) => {
  function changeNewTask(e, { value, name }) {
    // the line takes the objects and steals them and makes a new obj
    const newTaskClone = { ...newTask };
    newTaskClone[name] = value;
    setNewTask(newTaskClone);

    // THIS DONT WORK
    // newTask[name] = value;

    // console log the attribute of change, and the change
    console.log(name, value);
  }
  return (
    <React.Fragment>
      <Segment>
        <Header as="h2">New Task</Header>
        <Form>
          <Form.Field
            control={Input}
            label="Task Name"
            placeholder="enter task name"
            value={newTask.name}
            onChange={changeNewTask}
            name="name"
          />

          {/* this is a dropdown menu for task colors using semantic ui */}
          {/* the string value 'select' did not work as control so we imported it to use it in brackets instead */}
          <Form.Field
            control={Select}
            label="Task Color"
            placeholder="choose task color"
            options={[
              { text: "Red", value: "red" },
              { text: "Pink", value: "pink" },
              { text: "Orange", value: "orange" },
              { text: "Yellow", value: "yellow" },
            ]}
            // make sure the name is the same as the value
            value={newTask.color}
            name="color"
            onChange={changeNewTask}
          />
          {/* Adding a button group, we can do some cool things here, and we put a button or, which adds a cool little circle with 'or' in it*/}
          <Button.Group fluid>
            <Button type="button" color="red" onClick={closeNewTask}>
              Cancel
            </Button>
            <Button.Or />
            <Button color="green" onClick={addNewTask} type="button">
              Add Task
            </Button>
          </Button.Group>
        </Form>
      </Segment>
    </React.Fragment>
  );
};

export default NewTaskForm;
