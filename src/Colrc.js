import React, { Component } from 'react';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'

import MainMenu from './MainMenu';
import NavBar from './NavBar';
import RootDictionary from './RootDictionary';
import SpellingPronunciation from './SpellingPronunciation';
import About from './About';
import StemList from './StemList';
import AffixList from './AffixList';
import Audio from "./Audio";
import ContactUs from './ContactUs';
import Texts from './Texts';
import AudioPlayer from './AudioPlayer';
import Bibliography from './Bibliography';
import EditRoot from './EditRoot';
import AddRoot from './AddRoot';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBars } from '@fortawesome/free-solid-svg-icons';
import ErrorBoundary from "./ErrorBoundary";
import 'semantic-ui-css/semantic.min.css';
import './NavBar.css';
import './Colrc.css';


class Colrc extends Component {

    render() {

	  const rightItems = [
	  	  { to: "/", name: "Login"},
		  { to: "/", name: "Register"},
		  { to: "/", icon: "search" }
		];

      return (
        <Router>
          <NavBar rightItems={rightItems}>
          <MainMenu title='title' />
          <Grid container verticalAlign='top'>

            <Grid.Row>
              <Grid.Column>
                <Switch>
                  <Route exact path="/" component={About} />
                  <Route path="/spelling" component={SpellingPronunciation} />
                  <Route path="/rootdictionary" component={RootDictionary} />
                  <Route path="/stemlist" component={StemList} />
                  <Route path="/affixlist" component={AffixList} />
  				  <Route path="/audio" component={Audio} />
  				  <Route path="/contactus" component={ContactUs} />
                  <Route path="/texts" component={Texts} />
                  <Route path="/bibliography" component={Bibliography} />
                  {/* <Route path="/rootdictionary/:id" exact component={EditRoot} /> */}
                  <Route path="/editroot" component={EditRoot} />
                  <Route path="/addroot" component={AddRoot} />
                  {/* <Route component={NotFound} /> */}
                </Switch>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign='center'>
                <Footer />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </NavBar>

      </Router>
      );
    }
}

class Footer extends Component {
  render() {
    return (
      <div className='ui bottom centered'>
        <p></p>
        <p>coeur d'alene online language resource center copyright 2009</p>
        project supported by the national science foundation awards BCS-1160627 and BCS-1160394 and the national endowment for the humanities award PD-261031-18.
      </div>
    );
  }
}

export default Colrc;
