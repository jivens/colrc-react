import React, { Component } from 'react';
import {Grid, List } from 'semantic-ui-react';

class MainMenu extends Component {
  render() {
    return (
      <Grid container verticalAlign='middle' columns={2}>
        <Grid.Row>
          <Grid.Column color='blue' width={10}>
            <Masthead title={this.props.title} />
          </Grid.Column>
          <Grid.Column color='blue' width={3}>
            <OptionsList />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

class Masthead extends Component {
  render() {
    return (
      <Grid container verticalAlign='middle' columns={1}>
        <Grid.Row color='blue'>
          <Grid.Column textAlign='center'>
            Coeur d'Alene Online Language Resource Center
          </Grid.Column>
        </Grid.Row>
        <Grid.Row color='blue'>
          <Titlebar
            title={this.props.title}
          />
        </Grid.Row>
      </Grid>
    );
  }
}

class Titlebar extends Component {
  render() {
    return (
        <Grid.Column textAlign='center'><h2>{this.props.title}</h2></Grid.Column>
    );
  }
}

class OptionsList extends Component {
  render() {
    return (
      <Grid container verticalAlign='middle' centered >
        <Grid.Row color='blue' centered>
          <Grid.Column centered>
              dictionary | history | metadata
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default MainMenu;
