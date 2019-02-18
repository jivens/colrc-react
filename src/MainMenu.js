import React, { Component } from 'react';
import {Grid, List, Container, Header, Segment, Label } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import './NavBar.css';

class MainMenu extends Component {
  render() {
    return (
    <div className="ui grid" id="Banner">
      <Grid verticalAlign='middle' columns={3}>
          <Grid.Column width={13}>
            <Segment>
	           	<Label as={Link} to="/" name="about" color='blue' ribbon>
	          		COLRC
	        	</Label>
	        	<span>Coeur d'Alene Online Language Resource Center</span>
        	</Segment>
          </Grid.Column>
          <Grid.Column width={3}>
            <OptionsList />
          </Grid.Column>
      </Grid>
      </div>
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
