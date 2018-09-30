import React, { Component } from 'react';

class Colrc extends React.Component {
  render() {
    return (
      <div className='ui three column centered grid'>
        <div className='column'>
          <MainMenu />
          <Nav />
          <Container />
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
          <Titlebar />
          <OptionsList />
        </div>
      </div>
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


class Container extends React.Component {
  render() {
    return (
      <div className='ui three column centered grid'>
        <div className='column'>
        	<RootDictionary />
        </div>
      </div>
    );
  }
}


class Footer extends React.Component {
  render() {
    return (
      <div className='ui three column centered grid'>
        <div className='column'>
        </div>
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
