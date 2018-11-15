import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import MainMenu from './MainMenu';
import Nav from './Nav';
import RootDictionary from './RootDictionary';
import SpellingPronunciation from './SpellingPronunciation';
import About from './About';
import StemList from './StemList';
import AffixList from './AffixList';
import AudioPlayer from './AudioPlayer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class Colrc extends Component {
  state = {
    roots : [
      {
        root: "√k'ʷl'1",
        occurrence: "1",
        salish: "k'ʷul'",
        nicodemus: "k'u'l",
        english: "† do, fix, make, to produce. ((stem), vt.)"
      },
      {
        root: "√k'ʷl'1",
        occurrence: "2",
        salish: "k'ʷul'+l'",
        nicodemus: "k'u'lu'l",
        english: "born, made (to be...). ((lit. H/s was born), vi.)"
      },
    ],
  };
    render() {
      const sources=[
        {src:'http://lasrv01.ipfw.edu/COLRC/audio/01_Track_1Crd_Little_Mosquito1.wav', type:'audio/wav', direct:false},
        {src:'http://lasrv01.ipfw.edu/COLRC/audio//01_Track_1Crd_LittleMosq1.mp3', type:'audio/mpeg', direct:true}
      ];
      const sources2=[
        {src:'http://lasrv01.ipfw.edu/COLRC/audio/02_Track2Crd_Little_Mosquito2.wav', type:'audio/wav', direct:false},
        {src:'http://lasrv01.ipfw.edu/COLRC/audio//02_Track2Crd_LittleMosq2.mp3', type:'audio/mpeg', direct:true}
      ];
      const audiolist=[
        {title:"Part 1 - in Couer d'Alene", sources:sources},
        {title:"Part 2 - in Couer d'Alene", sources:sources2}
      ];
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
              </Switch>
              <AudioPlayer sources={audiolist[0].sources} title={audiolist[0].title} />
              <AudioPlayer sources={audiolist[1].sources} title={audiolist[1].title} />
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
