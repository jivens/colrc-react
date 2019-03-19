import React, { Component } from 'react';
import {Grid, List, Container, Header, Segment, Label, Input, Menu } from 'semantic-ui-react';
import { Link } from "react-router-dom";

class MainMenu extends Component {
  render() {
    return (
    <div className="ui grid" id="Banner">
      <Grid columns={3}>
          <Grid.Column verticalAlign='top' width={16}>
            <Segment>
	           	<Label as={Link} to="/" name="about" color='blue' ribbon>
	          		COLRC
	        	</Label>
	        	<span>Coeur d'Alene Online Language Resource Center</span>
        	</Segment>
          </Grid.Column>
      </Grid>

      </div>
    );
  }
}

class SearchBox extends Component {
  render() {
	const inputBox = () => <Input icon='search' placeholder='Search...' />;

    return (

        <div>
          	<Input icon='search' size='mini'  />
        <p>Enter Special Characters</p>
        <p></p>
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
