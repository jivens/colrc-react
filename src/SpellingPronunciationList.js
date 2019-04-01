import React, { Component } from 'react';
import { Grid, Menu } from 'semantic-ui-react';
import DecoratedTextSpan from './DecoratedTextSpan';
import ReactTable from "react-table";
import "react-table/react-table.css";
import matchSorter from 'match-sorter';
import SimpleKeyboard from './SimpleKeyboard';
import { Link } from 'react-router-dom';



class SpellingPronunciationList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    	data: [], 
    	loading: true, 
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch(`http://localhost:4000/spelling`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
      this.setState({ loading: false, data: json });
    } catch (error) {
      console.log("This is my Error: " + error);
      this.setState({ error: error });
    }
  }

  render() {

	const columns=[{
		Header: "List of Symbols",
		columns: [{
			Header: 'Nicodemus',
		    accessor: 'nicodemus',
			filterMethod: (filter, rows) =>
	        	matchSorter(rows, filter.value, { keys: ["nicodemus"], threshold: matchSorter.rankings.CONTAINS }),
	            filterAll: true,
		    Cell: row => ( <DecoratedTextSpan str={row.value} />	),
        },{
        	Header: 'Reichard',
        	accessor: 'reichard',
		    filterMethod: (filter, rows) =>
	        	matchSorter(rows, filter.value, { keys: ["reichard"], threshold: matchSorter.rankings.CONTAINS }),
	            filterAll: true,
        },{
        	Header: 'Salish',
        	accessor: 'salish',
	   	    filterMethod: (filter, rows) =>
	        	matchSorter(rows, filter.value, { keys: ["salish"], threshold: matchSorter.rankings.CONTAINS }),
	            filterAll: true,
        },{
        	Header: 'English',
        	accessor: 'english',
	  	    filterMethod: (filter, rows) =>
	        	matchSorter(rows, filter.value, { keys: ["english"], threshold: matchSorter.rankings.CONTAINS }),
	            filterAll: true,
        	Cell: row => ( <DecoratedTextSpan str={row.value} />	),

        },{
        	Header: 'Note',
        	accessor: 'note',
        	Cell: row => ( <span className="superscript">{row.value}</span> ),
		}]
	}];


    const dataOrError = this.state.error ?
      <div style={{ color: 'red' }}>Oops! Something went wrong!</div> :
      <ReactTable
        data={this.state.data}
        loading={this.state.loading}
        columns={columns}
        filterable
        defaultPageSize={20}
        className="-striped -highlight"
      />;

  return (     
	  	<div className='ui content'> 
	  		<SimpleKeyboard />
	  		<p></p>
			{dataOrError}
			<SpellFootnote />
		</div>
	);
  }
}

class SpellElement extends Component {
  render() {
    const color = this.props.color ? this.props.color : 'white';
    const spanStyle = this.props.spanStyle ? this.props.spanStyle : 'superscript';
    return (
      <Grid.Row color={color}>
        <Grid.Column width={2}>
          <DecoratedTextSpan
            str={this.props.nicodemus}
          />
        </Grid.Column>
        <Grid.Column width={2}>{this.props.reichard}</Grid.Column>
        <Grid.Column width={2}>{this.props.salish}</Grid.Column>
        <Grid.Column width={6}>
          <DecoratedTextSpan
            str={this.props.english}
          />
        </Grid.Column>
        <Grid.Column width={2}><span className={spanStyle}>{this.props.note}</span></Grid.Column>
      </Grid.Row>
    );
  }
}

class SpellFootnote extends Component {
  render() {
    return (
      <div className='ui content'>
        <p></p>
        <strong>Notes</strong>
		    <p></p>
		    <p><sup>1</sup>  An acute accent is used in the Reichard and Salishan systems to indicate that the vowel is stressed. Underlining is used for this purpose in the Nicodemus system.</p>
		    <p><sup>2</sup>  The symbol 'x' may be used in the Reichard and Salishan systems to write the sound /xʷ/ when it occurs before /u/.</p>
		    <p><sup>3</sup>  Nicodemus 1975a,b uses both '(' and ')' occasionally to write the pharyngeals.</p>
      </div>
    );
  }
}

export default SpellingPronunciationList;
