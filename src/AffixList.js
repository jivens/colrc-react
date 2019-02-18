import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import matchSorter from 'match-sorter';
import PropTypes from "prop-types";
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';
import "./AccordionTables.css";


class AffixList extends Component {
	render() {
 
 	const getColumnWidth = (rows, accessor, headerText) => {
	  const maxWidth = 600
	  const magicSpacing = 15
	  const cellLength = Math.max(
	    ...rows.map(row => (`${row[accessor]}` || '').length),
	    headerText.length,
	  )
	  return Math.min(maxWidth, cellLength * magicSpacing)
	};


	  const affixData = [{
	    type: 'Directional',
	    salish: 'ci-',
	    nicodemus: 'tsi-',
	    english: 'first, before',
	    link: <a href='http://www.archive.org/stream/rosettaproject_tqw_morsyn-2#page/n612/mode/2up' target="_blank" rel="noopener noreferrer">page 599 (420)</a>,
	  },

	 {
	    type: 'Directional',
	    salish: 'tɛ-',
	    nicodemus: 'te-',
	    english: 'thither',
	    link: <a href='http://www.archive.org/stream/rosettaproject_tqw_morsyn-2#page/n611/mode/2up' target="_blank" rel="noopener noreferrer">page 598 (416)</a>,
	  },
	  {
	    type: 'Directional',
	    salish: 'čic-',
	    nicodemus: 'chits-',
	    english: 'hither (toward speaker)',
	    link: <a href='http://www.archive.org/stream/rosettaproject_tqw_morsyn-2#page/n611/mode/2up' target="_blank" rel="noopener noreferrer">page 598 (412)</a>,
	  }, 
	 {
	    type: 'Directional',
	    salish: 'tkʷɛɫ-',
	    nicodemus: 'tkweɫ-',
	    english: 'go about to definite place',
	    link: <a href='http://www.archive.org/stream/rosettaproject_tqw_morsyn-2#page/n610/mode/2up' target="_blank" rel="noopener noreferrer">page 597 (410)</a>,
	  }, 
	  {
	    type: 'Directional',
	    salish: 'tɛp-',
	    nicodemus: 'tep-',
	    english: 'on the way',
	    link: <a href='http://www.archive.org/stream/rosettaproject_tqw_morsyn-2#page/n612/mode/2up' target="_blank" rel="noopener noreferrer">page 599 (418)</a>,
	  }, 
	  {
	    type: 'Directional',
	    salish: 'tus-',
	    nicodemus: 'tus-',
	    english: 'as far as',
	    link: <a href='http://www.archive.org/stream/rosettaproject_tqw_morsyn-2#page/n612/mode/2up' target="_blank" rel="noopener noreferrer">page 599 (419)</a>,
	  }, 
	  {
	    type: 'Locative',
	    salish: 'cɛn-',
	    nicodemus: 'tsen-',
	    english: 'under, off of',
	    link: <a href='http://www.archive.org/stream/rosettaproject_tqw_morsyn-2#page/n609/mode/2up' target="_blank" rel="noopener noreferrer">page 599 (420)</a>,
	  },

	 {
	    type: 'Locative',
	    salish: 'č-',
	    nicodemus: 'ch-',
	    english: 'on, attached to but not a part of, at a point',
	    link: <a href='http://www.archive.org/stream/rosettaproject_tqw_morsyn-2#page/n608/mode/2up' target="_blank" rel="noopener noreferrer">page 595 (395)</a>,
	  },
	  {
	    type: 'Locative',
	    salish: 'čt-',
	    nicodemus: 'cht-',
	    english: 'R notes the meaning of this morpheme is not clear',
	    link: <a href='http://www.archive.org/stream/rosettaproject_tqw_morsyn-2#page/n608/mode/2up' target="_blank" rel="noopener noreferrer">page 595 (397)</a>,
	  }, 
	 {
	    type: 'Locative',
	    salish: 'čɛt-',
	    nicodemus: 'chet-',
	    english: 'on a surface or object broader the subject, above, over',
	    link: <a href='http://www.archive.org/stream/rosettaproject_tqw_morsyn-2#page/n608/mode/2up' target="_blank" rel="noopener noreferrer">page 595 (398)</a>,
	  }, 
	  {
	    type: 'Locative',
	    salish: 'čs-',
	    nicodemus: 'chs-',
	    english: 'after, behind, for a purpose, in pursuit of',
	    link: <a href='http://www.archive.org/stream/rosettaproject_tqw_morsyn-2#page/n612/mode/2up' target="_blank" rel="noopener noreferrer">page 595 (399)</a>,
	  }, 
	  {
	  	type: 'Locative',
	    salish: 'hn-',
	    nicodemus: 'hn-',
	    english: 'in, onto, into, on',
	    link: <a href='http://www.archive.org/stream/rosettaproject_tqw_morsyn-2#page/n609/mode/2up' target="_blank" rel="noopener noreferrer">page 599 (419)</a>,
	  }, 
	  ];

	  const columns = [{
	    Header: 'Type',
	    accessor: 'type',
	    width: getColumnWidth(affixData, 'type', 'Type'),
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
	              <option value="all">Show All</option>
	              <option value="Directional">Directional</option>
	              <option value="Locative">Locative</option>
	            </select>,
	    //Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
	  	},
	  {
	    Header: 'Salish',
	    accessor: 'salish',
	    filterMethod: (filter, rows) =>
        	matchSorter(rows, filter.value, { keys: ["salish"], threshold: matchSorter.rankings.CONTAINS }),
            filterAll: true,
	  	},
	  {
	    Header: 'Nicodemus',
	    accessor: 'nicodemus',
	    filterMethod: (filter, rows) =>
        	matchSorter(rows, filter.value, { keys: ["nicodemus"], threshold: matchSorter.rankings.CONTAINS }),
            filterAll: true,
	    //Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
	  	}, 
	  {
	    Header: 'English',
	    accessor: 'english',
	    style: { 'white-space': 'unset' }, 
	    filterMethod: (filter, rows) =>
        	matchSorter(rows, filter.value, { keys: ["english"], threshold: matchSorter.rankings.CONTAINS }),
            filterAll: true,
	    //Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
	  	}, 
	  {
	    Header: 'Link',
	    accessor: 'link',
	    //Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
	  }
	  ];
	  
	  const AffixListIntro = () => (
	    <Accordion>
	        <AccordionItem>
	            <AccordionItemTitle>
	                <p className="u-position-relative">
	                Introduction
	                <div className="accordion__arrow" role="presentation" />
	            	</p>
	            </AccordionItemTitle>
	            <AccordionItemBody>
			      <p>
			        The the nearly 200 affixes included here come from <a href="http://www.archive.org/stream/rosettaproject_tqw_morsyn-2#page/n529/mode/2up" target="_blank" rel="noopener noreferrer">Reichard's 1938 grammar</a> (listed as 'Reichard 1938' on the left menu). Nearly all affixes are taken from Reichard 1938, these include a link to the relevant page of the original publication.  The sub-section in which the affix appears is given in parentheses "( )". A very small number of entries come from Doak 1997, which is not accessible online. Affixes that Reichard identified as variants of other forms are indicated as such, with links to the main entry given by Reichard.
			      </p>
				</AccordionItemBody>
			</AccordionItem>
	    </Accordion>
  	);

	  return (
      <div className='ui content'>
        <h3>Affixes</h3>
        <p></p>
        <AffixListIntro />
		<p></p>
		  <ReactTable
		    data={affixData}
		    columns={columns}
	   		defaultPageSize={5}
	   		className="-striped -highlight"
	   		className="left"
	   		filterable="true"
	   		filterAll="true"
        
		  />
		</div>
	  );
	}
}

export default AffixList;
