import React, { Component } from 'react';
import { Divider, List } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHome, faFont, faSquareRootAlt, faLeaf } from '@fortawesome/free-solid-svg-icons';
import { faPagelines, faAudible } from '@fortawesome/free-brands-svg-icons';
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
        				<Link to="/">ABOUT</Link>
       			 		<Link to="/spelling">SPELLING</Link>
       			 		<Link to="/rootdictionary">ROOTS</Link>
       			 		<Link to="/stemlist">STEMS</Link>
       			 		<Link to="/affixlist">AFFIXES</Link>
       			 		<Link to="/texts">TEXTS</Link>
        			</div>
        		</div>
        		<div className="navNarrow">
        			<i className="fa fa-bars fa-2x" onClick={this.burgerToggle}></i>
        			<div className="narrowLinks">
        				<Link to="/" onClick={this.burgerToggle}><FontAwesomeIcon icon={faHome} /> ABOUT</Link>
        				<Link to="/spelling" onClick={this.burgerToggle}><FontAwesomeIcon icon={faFont} /> SPELLING</Link>
        				<Link to="/rootdictionary" onClick={this.burgerToggle}><FontAwesomeIcon icon={faSquareRootAlt} /> ROOTS</Link>
        				<Link to="/stemlist" onClick={this.burgerToggle}><FontAwesomeIcon icon={faPagelines} /> STEMS</Link>
         				<Link to="/affixlist" onClick={this.burgerToggle}><FontAwesomeIcon icon={faLeaf} /> AFFIXES</Link>
        				<Link to="/texts" onClick={this.burgerToggle}><FontAwesomeIcon icon={faAudible} /> TEXTS</Link>

        			</div>
        		</div>
        	</div>
        </nav>
	</header>

    );
  }
}

export default Nav;
