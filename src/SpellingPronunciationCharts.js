import React, { Component } from 'react';
import { Grid, Menu } from 'semantic-ui-react';
import DecoratedTextSpan from './DecoratedTextSpan';
import ReactTable from "react-table";
import "react-table/react-table.css";
import matchSorter from 'match-sorter';
import { Link } from 'react-router-dom'


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
      const response = await fetch(`http://localhost:4000/phonemes`);
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
				Header: 'orth',
				accessor: 'orthography',
				id: 'orthography',
				width: 80,
				filterMethod: (filter, row) => {
                    if (filter.value === "all") {
                      return true;
                    }
                    return row[filter.id] === filter.value;
                },
	    		Filter: ({ filter, onChange }) =>
	            <select
	              onChange={event => onChange(event.target.value)}
	              style={{ width: "100%" }}
	              value={filter ? filter.value : "N"}
	            >
	              <option value="N">N</option>
	              <option value="S">S</option>
	              <option value="R">R</option>
	              <option value="all">All</option>
	            </select>,
			},{
				Header: 'voice',
			    accessor: 'voice',
			    maxWidth: 80,
				filterMethod: (filter, row) => {
                    if (filter.value === "all") {
                      return true;
                    }
                    return row[filter.id] === filter.value;
                },
	    		Filter: ({ filter, onChange }) =>
	            <select
	              onChange={event => onChange(event.target.value)}
	              style={{ width: "100%" }}
	              value={filter ? filter.value : "all"}
	            >
	              <option value="VL">VL</option>
	              <option value="V">V</option>
	              <option value="RN">RN</option>
	              <option value="all">All</option>
	            </select>,			    
			},{
				Header: 'manner',
				accessor: 'manner',
				maxWidth: 70,
			},{
				Header: 'secondary',
				accessor: 'secondary',
				maxWidth: 100,
			},{
	        	Header: 'labial',
	        	accessor: 'labial',
	        	minWidth: 30,
	        },{
	        	Header: 'alveolar',
	       		accessor: 'alveolar',
	        	minWidth: 30,
	        },{
	        	Header: 'alveo-pal',
	        	accessor: 'alveopalatal',
	        	minWidth: 30,
	        },{
	        	Header: 'lateral',
	        	accessor: 'lateral',
	        	minWidth: 30,
	        },{
	        	Header: 'palatal',
	        	accessor: 'palatal',
	        	minWidth: 30,
	        },{
	        	Header: 'velar',
        		accessor: 'velar',
        		minWidth: 30,
	        },{
	        	Header: 'uvular',
	        	accessor: 'uvular',
	        	minWidth: 30,
	        },{
	        	Header: 'pharyngeal',
	        	accessor: 'pharyngeal',
	        	minWidth: 30,
	        },{
	        	Header: 'glottal',
	        	accessor: 'glottal',
	        	minWidth: 30,
	        },
	];

	

    const PhonemeCharts = () => (
		<div>
			<h3>Phoneme Charts</h3>
	
			<p>In the consonant chart, sounds are organized based on the location in the mouth where the tongue tip, blade, body or root come into closest contact with the relevant anatomical structure, with those structures listed from the front of the vocal tract (the lips) to the back (the glottis).  Readers may find various interactive IPA charts to be useful aids in understanding the charts presented here.</p>


			<p>In the vowel chart, sounds are organized based on the location in the mouth where apex of the tongue is located during pronunciation of the vowel, with the highest most front vowel (written 'i' in Salish orthography, and pronounced as in the English word 'bead') pronounced with the tongue in approximately the same position as it is for the resonant 'y'.  Back vowels such as 'u' are pronounced with rounded lips.</p>


		</div>
		);

    const dataOrError = this.state.error ?
      <div style={{ color: 'red' }}>Oops! Something went wrong!</div> :
      <ReactTable
        data={this.state.data}
        loading={this.state.loading}
        columns={columns}
        defaultPageSize={17}
        filterable
		defaultFiltered={[
				{
					id: 'orthography',
					value: 'N'
				}
			]}
        className="-striped -highlight"
      />;

  return (     
	  	<div className='ui content'> 
			<h3>Phoneme Chart - Consonants</h3> 
			<p>Key to abbreviations:  'orth' stands for 'orthography'.  You can select 'N' for 'Nicodemus', 'S' for 'Salish', 'R' for Reichard or 'All' to see all at once.  The values listed for 'voice' are, 'VL' for 'voiceless', 'V' for 'voiced', 'RN' for 'resonant' - a category that includes nasals and approximants.</p>
			<p></p>
			{dataOrError}
			<p></p>
			<PhonemeCharts />
		</div>
	);
  }
}


export default SpellingPronunciationCharts;
