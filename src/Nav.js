import React, { Component } from 'react';
import {Divider, List } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import './Nav.css';
//import './nav_helper.js';

class Nav extends Component {
  render() {
    return (
      /* <div className='ui left content card'> */
      <header>
        <div className='container'>
          <nav className='site-nav--open'>
            <ul>
              {/* <li><i className="fa fa-home site-nav--icon"></i>in the archive</li> */}
              {/* <Divider /> */}
           	  <li><Link to="/"><i className="fa fa-home site-nav--icon"></i>about</Link></li>
              <li><Link to="/spelling"><i className="fa fa-home site-nav--icon"></i>spelling and punctuation guide</Link></li>
              {/* <List.Item><Link to="/rootdictionary">root dictionary</Link></List.Item> */}
              {/* <List.Item><Link to="/stemlist">stem lists</Link></List.Item> */}
              {/* <List.Item><Link to="/affixlist">affix lists</Link></List.Item> */}
              {/* <List.Item><Link to="/audio">audio files</Link></List.Item> */}
              {/* <List.Item><Link to="/texts">texts</Link></List.Item> */}
              {/* <List.Item>methodological sources</List.Item> */}
              {/* <List.Item><Link to="/bibliography">bibliography</Link></List.Item> */}
              {/* <List.Item>advanced search</List.Item> */}
              {/* <List.Item>source files</List.Item> */}
              {/* <List.Item><Link to="/contactus">contact us</Link></List.Item> */}
              {/* <Divider /> */}
              {/* <List.Item>on the web</List.Item> */}
              {/* <Divider /> */}
              {/* <List.Item><a href="http://* www.cdatribe-nsn.gov/" target="_blank" rel="noopener noreferrer">Coeur d'Alene homepage</a></List.Item> */}
              {/* <List.Item><a href="http:// ivydoak.com/Coeurd%27Alene/grammar/crgrammar.htm" target="_blank" rel="noopener noreferrer">ivy doak's grammatical sketch</a></List.Item> */}
              {/* <List.Item><a href="http://archive.org/stream/annualreportofbu45smit#page/36/mode/2up" target="_blank" rel="noopener noreferrer">boas and teit 1930</a></List.Item> */}
              {/* <List.Item><a href="http://www.sfu.ca/nwjl/Articles/V004_N02/LyonNicodemusCards.html" target="_blank" rel="noopener noreferrer">lyon 2010</a></List.Item> */}
              {/* <List.Item><a href="http://archive.org/stream/rosettaproject_tqw_morsyn-2#page/n529/mode/2up" target="_blank" rel="noopener noreferrer">reichard 1938</a></List.Item> */}
              {/* <List.Item><a href="http://archive.org/stream/analysisofcoeurd41reic#page/n5/mode/2up" target="_blank" rel="noopener noreferrer">reichard 1947</a></List.Item> */}
              {/* <List.Item><a href="http://archive.org/stream/folktalesofsalis00boas#page/119/mode/1up" target="_blank" rel="noopener noreferrer">teit 1917</a></List.Item> */}
            </ul>
          </nav>
          <div class="menu-toggle">
            <div class="hamburger"></div>
          </div>
        </div>
      </header>
    );
  }
}

export default Nav;
