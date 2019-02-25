import React, { Component } from 'react';
import { Grid, Menu } from 'semantic-ui-react';
import DecoratedTextSpan from './DecoratedTextSpan';
import ReactTable from "react-table";
import "react-table/react-table.css";
import matchSorter from 'match-sorter';
import { Link } from 'react-router-dom'
import consonant_inventory from './images/consonant_inventory.jpg';
import vowel_inventory from './images/vowel_inventory.jpg';


class SpellingPronunciationCharts extends Component {
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
		}];

	

    const PhonemeCharts = () => (
		<div>
			<h3>Phoneme Charts</h3>
	
			<p>In the consonant chart, sounds are organized based on the location in the mouth where the tongue tip, blade, body or root come into closest contact with the relevant anatomical structure, with those structures listed from the front of the vocal tract (the lips) to the back (the glottis).  Readers may find various interactive IPA charts to be useful aids in understanding the charts presented here.</p>
			<h4>Consonants of Coeur d'Alene</h4>
			<img className="consonant_inventory" src={consonant_inventory} alt="consonant inventory"/>

			<p>In the vowel chart, sounds are organized based on the location in the mouth where apex of the tongue is located during pronunciation of the vowel, with the highest most front vowel (written 'i' in Salish orthography, and pronounced as in the English word 'bead') pronounced with the tongue in approximately the same position as it is for the resonant 'y'.  Back vowels such as 'u' are pronounced with rounded lips.</p>
			<h4>Vowels of Coeur d'Alene</h4>
			<img className="vowel_inventory" src={vowel_inventory} alt="vowel inventory"/>
		</div>
		);

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
			<h3>Phoneme Charts</h3> 
			{dataOrError}
			<p></p>
			<PhonemeCharts />
		</div>
	);
  }
}


export default SpellingPronunciationCharts;
