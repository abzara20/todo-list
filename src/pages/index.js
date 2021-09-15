import React from "react";
import "semantic-ui-css/semantic.css";
import {
  Header,
  Container,
  Button,
  Grid,
  Segment,
  Form,
  Select,
  List,
} from "semantic-ui-react";

import Task from "../components/Task";

const HomePage = () => {
  return (
    <React.Fragment>
      <Container>
        <Grid>
          <Grid.Column width="4">
            <Button icon="bars"></Button>
          </Grid.Column>

          <Grid.Column width="8">
            <Header textAlign="center" as="h1">
              Todo List
            </Header>
          </Grid.Column>

          <Grid.Column textAlign="right" width="4">
            <Button color="green" icon="plus"></Button>
          </Grid.Column>
        </Grid>

        <Segment>
          <Header as="h2">New Task</Header>
          <Form>
            <Form.Field
              control="input"
              label="Task Name"
              placeholder="enter task name"
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
            />
            {/* Adding a button group, we can do some cool things here, and we put a button or, which adds a cool little circle with 'or' in it*/}
            <Button.Group fluid>
              <Button color="red">Cancel</Button>
              <Button.Or />
              <Button color="green">Add Task</Button>
            </Button.Group>
          </Form>
        </Segment>

        <List>
          {/* the colors are lowercase bc this is the only way this will work */}
          <Task name="Task 1" color="yellow"></Task>
          <Task name="Task 2" color="red"></Task>
          {/* doesn't matter if they are self-closing or not */}
          <Task name="Task 3" color="pink" />
        </List>
      </Container>
    </React.Fragment>
  );
};

export default HomePage;
