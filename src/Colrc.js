import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import MainMenu from './MainMenu';
import NavBar from './NavBar';
import Roots from './roots/Roots';
import SpellingPronunciation from './spelling/SpellingPronunciation';
import Home from './home/Home';
import Stems from './stems/Stems';
import Affixes from './affixes/Affixes';
import Audio from "./audio/Audio";
/*import ContactUs from './ContactUs';*/
import Texts from './texts/Texts';
import Bibliography from './bibliography/Bibliography';
import EditRoot from './roots/EditRoot';
import AddRoot from './roots/AddRoot';
import Elicitations from './elicitations/Elicitations';
import EditBib from './bibliography/EditBib';
import AddBib from './bibliography/AddBib';
import EditStem from './stems/EditStem';
import AddStem from './stems/AddStem';
import ImageViewer from './utilities/ImageViewer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import "react-table/react-table.css";
import './stylesheets/NavBar.css';
import './stylesheets/Colrc.css';
import './stylesheets/AccordionTables.css';

class Colrc extends Component {

    render() {

	  const rightItems = [
	  	  { to: "/", icon: 'search'},
	  	  { to: "/", icon: 'user'},
		  { to: "/", icon: 'cog'},
		  { to: "/", icon: 'ellipsis vertical'},
		];

      return (
        <Router>
          <NavBar rightItems={rightItems}>
          <MainMenu title='title' />
          <Grid container verticalAlign='top'>

            <Grid.Row>
              <Grid.Column>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/spelling" component={SpellingPronunciation} />
                  <Route path="/roots" component={Roots} />
                  <Route path="/stems" component={Stems} />
                  <Route path="/affixes" component={Affixes} />
  				  <Route path="/audio" component={Audio} />
  				  {/*<Route path="/contactus" component={ContactUs} />*/}
                  <Route path="/texts" component={Texts} />
                  <Route path="/bibliography" component={Bibliography} />
                  {/* <Route path="/rootdictionary/:id" exact component={EditRoot} /> */}
                  <Route path="/editroot" component={EditRoot} />
                  <Route path="/addroot" component={AddRoot} />
                  <Route path="/editbib" component={EditBib} />
                  <Route path="/addbib" component={AddBib} />
                  <Route path="/editstem" component={EditStem} />
                  <Route path="/addstem" component={AddStem} />
                  <Route path="/elicitations" component={Elicitations} />
                  <Route path="/imageviewer" component={ImageViewer} />
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
        <p>project supported by the national science foundation awards BCS-1160627 and BCS-1160394 and the national endowment for the humanities award PD-261031-18.</p>
      </div>
    );
  }
}

export default Colrc;
