import React from "react";
import "semantic-ui-css/semantic.css";
import {
  Input,
  Segment,
  Form,
  Header,
  Button,
  Select,
} from "semantic-ui-react";
//import {Link} from 'gatsby';

const EditTaskForm = ({ index, list, closeForm, editTask }) => {
  // we are taking the information of the task we are going to edit and putting them in a variable
  const focusTask = list[index];
  console.log(focusTask);

  //   getter, setter and the original task value so that we can edit the task
  const [newTask, setNewTask] = React.useState(focusTask);

  function changeNewTask(e, { name, value }) {
    // the line takes the objects and steals them and makes a new obj
    // in js, without the dots it would change the original, so we gotta make a new obj
    // where it happens to be the same without actually changing the original
    const newTaskClone = { ...newTask };
    newTaskClone[name] = value;
    setNewTask(newTaskClone);

    // console log the attribute of change, and the change
    console.log(name, value);
  }

  function saveChanges() {
    editTask(index, newTask);
  }
  return (
    <React.Fragment>
      <Segment>
        <Header as="h2">Edit Task</Header>
        <Form>
          <Form.Field
            control={Input}
            label="Task Name"
            placeholder="enter task name"
            name="name"
            value={newTask.name}
            onChange={changeNewTask}
          />
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
          <Form.Field
            control={Select}
            label="Task Priority"
            placeholder="level of priority"
            options={[
              { text: "1", value: 1 },
              { text: "2", value: 2 },
              { text: "3", value: 3 },
              { text: "4", value: 4 },
            ]}
            // make sure the name is the same as the value
            value={newTask.rating}
            name="rating"
            onChange={changeNewTask}
          />
          {/* Adding a button group, we can do some cool things here, and we put a button or, which adds a cool little circle with 'or' in it*/}
          <Button.Group fluid>
            <Button type="button" color="red" onClick={closeForm}>
              Cancel
            </Button>
            <Button.Or />
            <Button color="green" type="button" onClick={saveChanges}>
              Confirm Edit
            </Button>
          </Button.Group>
        </Form>
      </Segment>
    </React.Fragment>
  );
};

export default EditTaskForm;
