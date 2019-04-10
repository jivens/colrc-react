import React, { Component } from 'react';
import ReactTable from "react-table";
import matchSorter from 'match-sorter';
import { withRouter } from 'react-router-dom';

class TextsList extends Component {
  constructor() {
    super();
    this.loadTextsData = this.loadTextsData.bind(this);
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
      const json = await response.json();
      console.log(json);
      //Find files for each text from the static server
      	let i = 0;
      	while (i < json.length) {
        //	let textJson = await this.loadTextFiles(json[i]["id"]);
        	let j = 0;
        	while (j < json[i]["textfiles"].length) {
          	json[i]["textfiles"][j]["src"] = staticPath + json[i]["textfiles"][j]["subdir"] + "/" + json[i]["textfiles"][j]["src"];
          j++;
       }
        //json[i]["textfiles"] = textJson;
        json[i]["key"] = json[i]["id"];
        i++;
      }
      console.log(json);
      this.setState({ loading: false, data: json });
    } catch (error) {
      console.log("This is my Error: " + error);
      this.setState({ error: error });
    }
  }
	weblink(link, page) {
		return (
			link === '' ? page : <a href={link} target="_blank" rel="noopener noreferrer">{page}</a>
		);
	}
 render() {
	
	const columns = [
	    {
		    Header: 'Title',
		    accessor: 'title',
	    },
	    {
		    Header: 'Artist',
		    accessor: 'artist',
	    },
	    {
	    	Header: 'Cycle',
	      	accessor: 'cycle',
	    }
	];

    const subcolumns = [

		{
			Header: 'Versions',
			accessor: 'versions',
	    	Cell: ({row, original}) => (this.weblink(original.src, original.title)),		
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
           			data={row.original.textfiles}
           			columns={subcolumns}
          			defaultPageSize={row.original.textfiles.length}
           			showPagination={false}
           			/>
           		);
           	}} 
	   	  />
    return (
      <div className='ui content'>
        <h3>Texts</h3>
        <p></p>
        {dataOrError}
      </div>
    );
  }
}

export default withRouter(TextsList);

