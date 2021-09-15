// here we made a components folder to create components that we would use repeatedly on our pages to save code
import React from "react";
import "semantic-ui-css/semantic.css";
import { List, Grid, Label, Button } from "semantic-ui-react";
//import {Link} from 'gatsby';

// here we are accepting props, from the home page where we use them as components
const Task = ({ name, color }) => {
  // console log to check if they are there
  //   console.log(name, color);
  return (
    <React.Fragment>
      <List.Item>
        <Grid columns="2">
          <Grid.Column>
            {/* here we are placing the name and color from the props to affect the task */}
            <Label color={color} size="big">
              {name}
            </Label>
          </Grid.Column>
          <Grid.Column textAlign="right">
            <Button icon="trash" color="red"></Button>
            <Button icon="pencil" color="orange"></Button>
          </Grid.Column>
        </Grid>
      </List.Item>
    </React.Fragment>
  );
};

export default Task;
