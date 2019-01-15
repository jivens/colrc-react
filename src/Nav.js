import React, { Component } from 'react';
import { Divider, List } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
//import './nav_helper.js';

class Nav extends Component {
	
	burgerToggle = ( ) => {
		let linksEl = document.querySelector('.narrowLinks');
		if (linksEl.style.display === 'block') {
			linksEl.style.display = 'none';
		} else {
			linksEl.style.display = 'block';
		}
	};

	/*
	state = {
		open: false
	};

	onOpen = (evt) => {
		let open = this.state.open;
		open = !open;
		this.setState({ open });
	};

	setNavStyle = () => {
		const open = this.state.open;
		if ( open ) {
			return 'site-nav site-nav--open';
		} else {
			return 'site-nav--open';
		}
	};

	setMenuStyle = () => {
		const open = this.state.open;
		if ( open ) {
			return 'open menu-toggle';
		} else {
			return 'menu-toggle';
		}
	};
	*/

  render() {
    return (
  	<header>
      	<nav>
        	<div className='container'>
        		<div className="navWide">
        			<div className="wideDiv">
        				<Link to="/"><i className="fa faCoffee site-nav--icon"></i>About</Link>
       			 		<Link to="/spelling"><i className="fa faCoffee site-nav--icon"></i>Spelling</Link>
        			</div>
        		</div>
        		<div className="navNarrow">
        			<i className="fa fa-bars fa-2x" onClick={this.burgerToggle}></i>
        			<div className="narrowLinks">
        				<Link to="/" onClick={this.burgerToggle}> about</Link>
        				<Link to="/spelling" onClick={this.burgerToggle}> spelling</Link>
        			</div>
        		</div>
        	</div>
        </nav>
	</header>

    );
  }
}

export default Nav;
