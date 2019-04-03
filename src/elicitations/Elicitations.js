import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import ReactTable from "react-table";
import matchSorter from 'match-sorter';
import { Link } from "react-router-dom";
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import SimpleKeyboard from "../utilities/SimpleKeyboard";

class Elicitations extends Component {
  constructor() {
    super();
    this.onDelete = this.onDelete.bind(this);
    this.loadElicitationData = this.loadElicitationData.bind(this);
    this.loadAudioFiles = this.loadAudioFiles.bind(this);
    this.state = {
    	data: [],
    	loading: true
     };
  }

  async componentDidMount() {
    this.loadElicitationData();
  }

  async loadElicitationData() {
    try {
      const response = await fetch(`http://localhost:4000/elicitations`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
      //console.log(json);
      // Find audio files for each elicitation from the static server
      let i = 0;
      while (i < json.length) {
        let audioJson = await this.loadAudioFiles(json[i]["id"]);
        json[i]["audiofiles"] = audioJson;
        i++;
      }
      console.log(json);
      this.setState({ loading: false, data: json });
    } catch (error) {
      console.log("This is my Error: " + error);
      this.setState({ error: error });
    }
  }

  async loadAudioFiles(elicitationId) {
    //console.log("Elicitation ID = " + elicitationId);
    try {
      const response = await fetch(`http://localhost:4000/audioFiles/?elicitationId=${elicitationId}`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
      //console.log(json);
      return json;
    } catch (error) {
      console.log("This is my Error: " + error);
      throw Error(error);
    }
  }

  async onDelete(id) {
    //console.log("In deletion");
    try {
      const body = {
        id: id
      };
      const path = 'http://localhost:4000/elicitations/' + id;
      const headers = {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*"
      };
      const response = await axios.delete(path, body, {headers});
      //console.log(response);
      //this.props.history.push(`/rootdictionary`);
      this.loadElicitationData();
    } catch (err) {
      console.log(err);
      this.loadElicitationData();
    }
  };

  render() {

  	const getColumnWidth = (rows, accessor, headerText) => {
  	  const maxWidth = 600
  	  const magicSpacing = 18
  	  const cellLength = Math.max(
  	    ...rows.map(row => (`${row[accessor]}` || '').length),
  	    headerText.length,
  	  )
  	  return Math.min(maxWidth, cellLength * magicSpacing)
  	};

    return (
      <div className='ui content'>
        <h3>Elicitations</h3>
        <p></p>
		    <p></p>
		    <SimpleKeyboard / >
		    <p></p>
      </div>
    );
  }
}

export default withRouter(Elicitations);
