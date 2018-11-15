import React, { Component } from 'react';
import {Divider, List } from 'semantic-ui-react';
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div className='ui left content card'>
        <List padded='horizontally'>
          <List.Item>in the archive</List.Item>
          <Divider />
      	  <List.Item><Link to="/">about</Link></List.Item>
          <List.Item><Link to="/spelling">spelling and punctuation guide</Link></List.Item>
          <List.Item><Link to="/rootdictionary">root dictionary</Link></List.Item>
          <List.Item><Link to="/stemlist">stem lists</Link></List.Item>
          <List.Item><Link to="/affixlist">affix lists</Link></List.Item>
          <List.Item><Link to="/texts">texts</Link></List.Item>
          <List.Item>audio files</List.Item>
          <List.Item>methodological sources</List.Item>
          <List.Item>bibliography</List.Item>
          <List.Item>advanced search</List.Item>
          <List.Item>source files</List.Item>
          <List.Item><Link to="/contactus">contact us</Link></List.Item>
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

export default Nav;
