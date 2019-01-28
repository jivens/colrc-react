import React, { Component } from 'react';
import {Grid, List, Container, Header } from 'semantic-ui-react';
import './NavBar.css';

class MainMenu extends Component {
  render() {
    return (
    <div class="ui grid" id="Banner">
      <Grid verticalAlign='middle' columns={3}>
          <Grid.Column width={13}>
            <Masthead title={this.props.title} />
          </Grid.Column>
          <Grid.Column width={3}>
            <OptionsList />
          </Grid.Column>
      </Grid>
      </div>
    );
  }
}

class Masthead extends Component {
  render() {
    return (
      <Grid verticalAlign='middle' columns={2}> 
          <Grid.Column textAlign='center'>
            <h3>Coeur d'Alene Online Language Resource Center</h3>
          </Grid.Column>
          <Grid.Column textAlign='center'>
          <Titlebar
            title={this.props.title}
          />
          </Grid.Column>
      </Grid>
    );
  }
}

class Titlebar extends Component {
  render() {
    return (
		<h3>{this.props.title}</h3>
    );
  }
}

class OptionsList extends Component {
  render() {
    return (

          <Grid.Column>
          	<ul>
              <li>dictionary</li>
              <li>history</li>
              <li>metadata</li>
            </ul>
          </Grid.Column>

    );
  }
}

export default MainMenu;
