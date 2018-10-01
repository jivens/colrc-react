import React, { Component } from 'react';
import { Container, Divider, Grid, Header, Image } from 'semantic-ui-react'

class Colrc extends React.Component {
  render() {
    return (
      <div className='ui'>
        <div className='column'>
          <MainMenu />
          <Nav />
          <RootDictionary />
          <Footer />
        </div>
      </div>
    );
  }
}

class MainMenu extends React.Component {
  render() {
    return (
      <div className='ui three column centered grid'>
        <div className='column'>
          <Masthead />
          <OptionsList />
        </div>
      </div>
    );
  }
}

class Masthead extends React.Component {
  render() {
    return (
      <div>
        <div class='ui top attached header'>Coeur d'Alene Online Language Resource Center</div>
        <div class='ui attached segment'>
          <Titlebar />
        </div>
      </div>
    );
  }
}

class Titlebar extends React.Component {
  render() {
    return (
      <div className='ui'>
        <h2>Root Dictionary</h2>
      </div>
    );
  }
}

class OptionsList extends React.Component {
  render() {
    return (
      <ul>
        <li>dictionary</li>
        <li>history</li>
        <li>metadata</li>
      </ul>
    );
  }
}

class Nav extends React.Component {
  render() {
    return (
      <ul>
      	<li>Something</li>
      	<li>Somthing else</li>
      </ul>
    );
  }
}

class RootDictionary extends React.Component {
  render() {
    return (
      <div className='ui'>
        <Grid columns={5}>
          <Grid.Row>
        	   <RootElement className='row'
               root="√k'ʷl'1"
               occurrence="1"
               salish="k'ʷul'"
               nicodemus="k'u'l"
               english="† do, fix, make, to produce. ((stem), vt.)"
             />
         </Grid.Row>
         <Grid.Row>
           <RootElement className='row'
             root="√k'ʷl'1"
             occurrence="2"
             salish="k'ʷul'+l'"
             nicodemus="k'u'lu'l"
             english="born, made (to be...). ((lit. H/s was born), vi.)"
           />
         </Grid.Row>
        </Grid>
      </div>
    );
  }
}

class RootElement extends React.Component {
  render() {
    return (
      <div className='ui centered card'>
        <div className='content'>
          <Grid.Column>{this.props.root}</Grid.Column>
          <Grid.Column>{this.props.occurrence}</Grid.Column>
          <Grid.Column>{this.props.salish}</Grid.Column>
          <Grid.Column>{this.props.nicodemus}</Grid.Column>
          <Grid.Column>{this.props.english}</Grid.Column>
        </div>
      </div>
    );
  }
}

class Footer extends React.Component {
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
/*class Colrc extends Component {
  render() {
    return (
      <div className="Colrc">
        <header className="Colrc-header">
          <h1 className="Colrc-title">Welcome to the COLRC</h1>
        </header>
        <p className="Colrc-intro">
          To get started, edit <code>src/Colrc.js</code> and save to reload.  This is the object called 'COLRC' in our flow chart.
        </p>
      </div>
    );
  }
}*/

export default Colrc;
