import React, { Component } from 'react';
import { Divider, List } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHome, faFont, faSquareRootAlt, faLeaf, faBars } from '@fortawesome/free-solid-svg-icons';
import { faPagelines, faAudible } from '@fortawesome/free-brands-svg-icons';
import _ from "lodash";
import {
  Container,
  Icon,
  Image,
  Menu,
  Sidebar,
  Segment,
  Responsive
} from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';
//import './nav_helper.js';

library.add(faCoffee);

class Nav extends Component {

  render() {
    return (
  	<header>
      	<nav>
        	<div className='container'>
        		<div className="navWide">
        			<div className="wideDiv">
        				<h1 class="logo"><Link to="/"><FontAwesomeIcon icon={faHome} /></Link></h1>
        				<Link to="/">ABOUT</Link>
       			 		<Link to="/spelling">SPELLING</Link>
       			 		<Link to="/rootdictionary">ROOTS</Link>
       			 		<Link to="/stemlist">STEMS</Link>
       			 		<Link to="/affixlist">AFFIXES</Link>
       			 		<Link to="/texts">TEXTS</Link>
        			</div>
        		</div>
        		<div className="navNarrow">
        			<FontAwesomeIcon icon={faBars} onClick={this.burgerToggle} />
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
