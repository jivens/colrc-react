import React, { Component } from 'react';
import { Container, Divider, Grid, Header, Image, List } from 'semantic-ui-react'

class Colrc extends React.Component {
  render() {
    return (
      <Grid container verticalAlign='top'>
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
      <Grid container verticalAlign='middle'>
        <Grid.Row color='blue'>
          <Grid.Column textAlign='center'>
            Coeur d'Alene Online Language Resource Center
          </Grid.Column>
        </Grid.Row>
        <Grid.Row color='blue'>
          <Titlebar />
        </Grid.Row>
      </Grid>
    );
  }
}

class Titlebar extends React.Component {
  render() {
    return (
        <Grid.Column textAlign='center'><h2>Root Dictionary</h2></Grid.Column>
    );
  }
}

class OptionsList extends React.Component {
  render() {
    return (
      <ul className='float right'>
        <List.Item>dictionary</List.Item>
        <List.Item>history</List.Item>
        <List.Item>metadata</List.Item>
      </ul>
    );
  }
}

class Nav extends React.Component {
  render() {
    return (
      <div className='ui left content card'>
        <List>
          <List.Item>in the archive</List.Item>
          <Divider />
      	  <List.Item>about</List.Item>
          <List.Item>spelling and punctuation guide</List.Item>
          <List.Item>root dictionary</List.Item>
          <List.Item>stem lists</List.Item>
          <List.Item>affix lists</List.Item>
          <List.Item>texts</List.Item>
          <List.Item>audio files</List.Item>
          <List.Item>methodological sources</List.Item>
          <List.Item>bibliography</List.Item>
          <List.Item>advanced search</List.Item>
          <List.Item>source files</List.Item>
          <List.Item>contact us</List.Item>
          <Divider />
          <List.Item>on the web</List.Item>
          <Divider />
          <List.Item>Coeur d'Alene homepage</List.Item>
          <List.Item>ivy doak's grammatical sketch</List.Item>
          <List.Item>boas and teit 1930</List.Item>
          <List.Item>lyon 2010</List.Item>
          <List.Item>reichard 1938</List.Item>
          <List.Item>reichard 1947</List.Item>
          <List.Item>teit 1917</List.Item>
        </List>
      </div>
    );
  }
}

class RootDictionary extends React.Component {
  render() {
    return (
      <div className='ui content'>
        <Grid celled='internally' padded='horizontally' verticalAlign='top'>
          <RootElement
            color='blue'
            root='Root'
            occurrence='#'
            salish='Salish'
            nicodemus='Nicodemus'
            english='English'
          />
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
    const color = this.props.color ? this.props.color : 'white';
    return (
      <Grid.Row color={color}>
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
