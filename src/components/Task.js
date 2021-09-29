// here we made a components folder to create components that we would use repeatedly on our pages to save code
import React from "react";
import "semantic-ui-css/semantic.css";
import {
  List,
  Grid,
  Label,
  Button,
  Rating,
  Divider,
  Icon,
} from "semantic-ui-react";
//import {Link} from 'gatsby';

// here we are accepting props, from the home page where we use them as components
const Task = ({ name, color, rating, openEditTask, deleteTask, index }) => {
  // console log to check if they are there
  //   console.log(name, color);

  function editCurrentTask() {
    openEditTask(index);
  }

  function deleteCurrentTask() {
    deleteTask(index);
  }

  return (
    <React.Fragment>
      <List.Item>
        <Grid columns="3">
          <Grid.Column>
            {/* here we are placing the name and color from the props to affect the task */}
            <Label color={color} size="big">
              {name}
            </Label>
          </Grid.Column>
          <Grid.Column>
            <Rating rating={rating} maxRating={4} size="huge"></Rating>
            <Label tag color={color}>
              Priority
            </Label>
          </Grid.Column>
          <Grid.Column textAlign="right">
            <Button
              onClick={deleteCurrentTask}
              icon="trash"
              color="red"
            ></Button>
            {/* instead of editTask, we are using this to edit the specific task */}
            <Button
              onClick={editCurrentTask}
              icon="pencil"
              color="orange"
            ></Button>
          </Grid.Column>
        </Grid>
      </List.Item>
      <Divider horizontal>
        <Icon name="heart" />
      </Divider>
    </React.Fragment>
  );
};

export default Task;
