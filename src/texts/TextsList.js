import React, { Component } from 'react';
import ReactTable from "react-table";
import matchSorter from 'match-sorter';
import AudioPlayer from "../audio/AudioPlayer";
import SimpleKeyboard from "../utilities/SimpleKeyboard";
import { withRouter } from 'react-router-dom';

class TextsList extends Component {
  constructor() {
    super();
    this.loadTextsData = this.loadTextsData.bind(this);
    this.loadAudioFiles = this.loadAudioFiles.bind(this);
    this.sourcefiles = this.sourcefiles.bind(this);
    this.state = {
    	data: [],
    	loading: true
     };
  }

  async componentDidMount() {
    this.loadTextsData();
  }
  
  async loadTextsData() {
    try {
      const staticPath = 'http://localhost:3500/texts/';
      const response = await fetch(`http://localhost:4000/texts?_embed=textfiles`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      let json = await response.json();
      console.log(json);
      //Find files for each text from the static server
      	let i = 0;
      	while (i < json.length) {
        	let audioJson = await this.loadAudioFiles(json[i]["id"]);
        	let j = 0;
        	while (j < json[i]["textfiles"].length) {
          	json[i]["textfiles"][j]["src"] = staticPath + json[i]["textfiles"][j]["subdir"] + "/" + json[i]["textfiles"][j]["src"];
          j++;
       }
        json[i]["audiofiles"] = audioJson;
        json[i]["key"] = json[i]["id"];
        i++;
      }
      json=this.sourcefiles(json);
      console.log(json);
      this.setState({ loading: false, data: json });
    } catch (error) {
      console.log("This is my Error: " + error);
      this.setState({ error: error });
    }
  }

  async loadAudioFiles(textId) {
    //console.log("Elicitation ID = " + elicitationId);
	const staticPath = 'http://localhost:3500/texts/';
    try {
      const response = await fetch(`http://localhost:4000/audiosets/?_embed=audiofiles&textId=${textId}`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
      //console.log(json);
  	  let i = 0;
  	  while (i < json.length) {
    	let j = 0;
    	while (j < json[i]["audiofiles"].length) {
      		json[i]["audiofiles"][j]["src"] = staticPath + json[i]["audiofiles"][j]["subdir"] + "/" + json[i]["audiofiles"][j]["src"];
        	j++;
      	}
      	i++;
      }
      return json;
    } catch (error) {
      console.log("This is my Error: " + error);
      throw Error(error);
    }
  }

sourcefiles(json) {
  	let i = 0;
  	let k = 0;
  	while (i < json.length) {
  		json[i]["sourcefiles"] = [];
  		let j=0;
  		while (j < json[i]["textfiles"].length) {
  			json[i]["sourcefiles"].push(
  				{
  					src: json[i]["textfiles"][j].src,
  					title: json[i]["textfiles"][j].title,
  					fileType: "text",
  					key: k
  				}
  			);
  			j++; k++;
  		}
  		j=0;
  		while (j < json[i]["audiofiles"].length) {
   			json[i]["sourcefiles"].push(
  				{
  					speaker: json[i]["audiofiles"][j].speaker,
  					title: json[i]["audiofiles"][j].title,
  					sources: json[i]["audiofiles"][j].audiofiles,
  					fileType: "audio",
  					key: k
  				}
  			);
  			j++; k++;
  		}
  		i++;
   	}
   	return json;
 }

	weblink(link, page) {
		return (
			link === '' ? page : <a href={link} target="_blank" rel="noopener noreferrer">{page}</a>
		);
	}
 render() {
 	//const sources1=[
					//{src: "http://localhost:3500/texts/CricketRidesCoyote/CricketRidesCoyote_Crd.wav",
						//"type": "audio/wav",
					//},
					//{src: "http://localhost:3500/texts/CricketRidesCoyote/CricketRidesCoyote_Crd.mp3",
					//	"type": "audio/mp3",
					//}				
	//];

 	//const sources2=[
					//{src: "http://localhost:3500/texts/CricketRidesCoyote/CricketRidesCoyote_Engl.wav",
						//"type": "audio/wav",
					//},
					//{src: "http://localhost:3500/texts/CricketRidesCoyote/CricketRidesCoyote_Engl.mp3",
						//"type": "audio/mp3",
					//}				
	//];
  	//const testRecord = [
	  	//{
		    //"key": 1,
		    //"speaker": "Lawrence Nicodemus",
			//"source": <AudioPlayer title="Cricket Rides Coyote - Coeur d'Alene" sources={sources1} key={sources1.key}/>
	  	//},
	  	//{
		    //"key": 2,
		    //"speaker": "Lawrence Nicodemus",
			//"source": <AudioPlayer title="Cricket Rides Coyote - English" sources={sources2} key={sources2.key} />
	  	//},
	  	//{
	  		//"key": 3,
	  		//"speaker": "Dorthy Nicodemus or Tom Miyal (unconfirmed)",
	  		//"source": <a href="http://localhost:3500/texts/CricketRidesCoyote/CricketRidesCoyote_Hand.pdf" target="_blank" rel="noopener noreferrer">Hand written fieldnotes</a>
	  	//}
 //];	
	const columns = [
	    {
		    Header: 'Title',
		    accessor: 'title',
	    },
	    {
	    	Header: 'Speaker',
	    	accessor: 'speaker',
	    },
	    {
	    	Header: 'Cycle',
	      	accessor: 'cycle',
	    },
	];

    const subcolumns = [

		{
			Header: 'Versions',
			accessor: 'source',
	    	Cell: ({row, original}) => 
	    	(
	    		original.fileType === "text" 
	    		? this.weblink(original.src, original.title)
	    		: <AudioPlayer key={original.key} title={original.title} sources={original.sources} />
	    	),
	    	//Cell: ({row, original}) => (original.msType), 
		}
    ];
    const dataOrError = this.state.error ?
         <div style={{ color: 'red' }}>Oops! Something went wrong!</div> :
         <ReactTable
           data={this.state.data}
           loading={this.state.loading}
           columns={columns}
           filterable
           SubComponent={row => {
           		return (
           		<ReactTable
           			data={row.original.sourcefiles}
           			//data={testRecord}
           			columns={subcolumns}
           			//defaultPageSize={testRecord.length}
          			defaultPageSize={row.original.sourcefiles.length}
           			showPagination={false}
           			/>
           		);
           	}} 
	   	  />
    return (
      <div className='ui content'>
        <h3>Texts</h3>
        <SimpleKeyboard />
        <p></p>
        {dataOrError}
      </div>
    );
  }
}

export default withRouter(TextsList);

