import React, { Component } from 'react';
import { Container, Divider, Grid, Header, Image } from 'semantic-ui-react'

class Colrc extends React.Component {
  render() {
    return (
      <Grid container verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column color='blue'>
            <MainMenu />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={3}>
            <Nav />
          </Grid.Column>
          <Grid.Column width={13}>
            <RootDictionary />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Footer />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

class MainMenu extends React.Component {
  render() {
    return (
      <Grid container verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column color='blue' width={13}>
            <Masthead />
          </Grid.Column>
          <Grid.Column color='blue' width={3}>
            <OptionsList />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

class Masthead extends React.Component {
  render() {
    return (
      <div color='blue'>
        <div className='ui top centered attached header' color='blue'>Coeur d'Alene Online Language Resource Center</div>
        <div className='ui attached centered segment' color='blue'>
          <Titlebar />
        </div>
      </div>
    );
  }
}

class Titlebar extends React.Component {
  render() {
    return (
        <h2 color='blue' className='ui centered'>Root Dictionary</h2>
    );
  }
}

class OptionsList extends React.Component {
  render() {
    return (
      <ul className='float right'>
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
      <ul className='ui left' position='left'>
      	<li>Something</li>
      	<li>Somthing else</li>
      </ul>
    );
  }
}

class RootDictionary extends React.Component {
  render() {
    return (
      <div className='ui right content' postion='right'>
        <Grid celled='internally' padded='horizontally'>
          <RootElement
            root="√k'ʷl'1"
            occurrence="1"
            salish="k'ʷul'"
            nicodemus="k'u'l"
            english="† do, fix, make, to produce. ((stem), vt.)"
          />
           <RootElement
             root="√k'ʷl'1"
             occurrence="2"
             salish="k'ʷul'+l'"
             nicodemus="k'u'lu'l"
             english="born, made (to be...). ((lit. H/s was born), vi.)"
           />
        </Grid>
      </div>
    );
  }
}

class RootElement extends React.Component {
  render() {
    return (
      <Grid.Row>
        <Grid.Column width={2}>{this.props.root}</Grid.Column>
        <Grid.Column width={1}>{this.props.occurrence}</Grid.Column>
        <Grid.Column width={2}>{this.props.salish}</Grid.Column>
        <Grid.Column width={2}>{this.props.nicodemus}</Grid.Column>
        <Grid.Column width={6}>{this.props.english}</Grid.Column>
      </Grid.Row>
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
