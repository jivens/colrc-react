import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import MainMenu from './MainMenu';
import Nav from './Nav';
import RootDictionary from './RootDictionary';
import SpellingPronunciation from './SpellingPronunciation';
import About from './About';
import StemList from './StemList';
import AffixList from './AffixList';
import Audio from "./Audio";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class Colrc extends Component {
    render() {
      return (
        <Router>
        <Grid container verticalAlign='top'>
          <Grid.Row>
            <Grid.Column color='blue'>
              <Switch>
                <Route exact path="/">
                  <MainMenu title="About" />
                </Route>
                <Route exact path="/spelling">
                  <MainMenu title="Spelling and Pronunciation Guide" />
                </Route>
                <Route path="/rootdictionary">
                  <MainMenu title="Root Dictionary" />
                </Route>
                <Route path="/stemlist">
                  <MainMenu title="Stem List" />
                </Route>
                <Route path="/affixlist">
                  <MainMenu title="Affix List" />
                </Route>
				<Route path="/audio">
                  <MainMenu title="Audio Files" />
                </Route>
              </Switch>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={3}>
              <Nav />
            </Grid.Column>
            <Grid.Column width={13}>
              <Switch>
                <Route exact path="/" component={About} />
                <Route path="/spelling" component={SpellingPronunciation} />
                <Route path="/rootdictionary" component={RootDictionary} />
                <Route path="/stemlist" component={StemList} />
                <Route path="/affixlist" component={AffixList} />
				<Route path="/audio" component={Audio} />
              </Switch>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign='center'>
              <Footer />
            </Grid.Column>
          </Grid.Row>
        </Grid>
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
        project supported by the national science foundation awards BCS-1160627 and BCS-1160394
      </div>
    );
  }
}

export default Colrc;
