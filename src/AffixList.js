import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import ReactTable from "react-table";
import "react-table/react-table.css";

class AffixListIntro extends Component {
  render() {
     return (
      <div className='ui content'>
      <p>
        The the nearly 200 affixes included here come
        from <a href="http://www.archive.org/stream/rosettaproject_tqw_morsyn-2#page/n529/mode/2up" target="_blank" rel="noopener noreferrer">Reichard's 1938 grammar</a> (
        listed as 'Reichard 1938' on the left menu). Nearly all affixes are taken from Reichard 1938,
        these include a link to the relevant page of the original publication.  The sub-section which
        the affix appears is given in parentheses "( )". A very small number of entries come from
        Doak 1997, which is not accessible online. Affixes that Reichard identified as variants of
        other forms are indicated as such, with links to the main entry given by Reichard.
      </p>
      <p></p>
      </div>
    );
  }
}

class AffixList extends Component {
	render() {
	  const directionalData = [{
	    salish: 'ci-',
	    nicodemus: 'tsi-',
	    english: 'first, before',
	    link: <a href='http://www.archive.org/stream/rosettaproject_tqw_morsyn-2#page/n612/mode/2up' target="_blank" rel="noopener noreferrer">page 599 (420)</a>,
	  },

	 {
	    salish: 'tɛ-',
	    nicodemus: 'te-',
	    english: 'thither',
	    link: <a href='http://www.archive.org/stream/rosettaproject_tqw_morsyn-2#page/n611/mode/2up' target="_blank" rel="noopener noreferrer">page 598 (416)</a>,
	  },
	  {
	    salish: 'čic-',
	    nicodemus: 'chits-',
	    english: 'hither (toward speaker)',
	    link: <a href='http://www.archive.org/stream/rosettaproject_tqw_morsyn-2#page/n611/mode/2up' target="_blank" rel="noopener noreferrer">page 598 (412)</a>,
	  }, 
	 {
	    salish: 'tkʷɛɫ-',
	    nicodemus: 'tkweɫ-',
	    english: 'go about to definite place',
	    link: <a href='http://www.archive.org/stream/rosettaproject_tqw_morsyn-2#page/n610/mode/2up' target="_blank" rel="noopener noreferrer">page 597 (410)</a>,
	  }, 
	  {
	    salish: 'tɛp-',
	    nicodemus: 'tep-',
	    english: 'on the way',
	    link: <a href='http://www.archive.org/stream/rosettaproject_tqw_morsyn-2#page/n612/mode/2up' target="_blank" rel="noopener noreferrer">page 599 (418)</a>,
	  }, 
	  {
	    salish: 'tus-',
	    nicodemus: 'tus-',
	    english: 'as far as',
	    link: <a href='http://www.archive.org/stream/rosettaproject_tqw_morsyn-2#page/n612/mode/2up' target="_blank" rel="noopener noreferrer">page 599 (419)</a>,
	  }, 
	  ];

	  const locativeData = [{
	    salish: 'cɛn-',
	    nicodemus: 'tsen-',
	    english: 'under, off of',
	    link: <a href='http://www.archive.org/stream/rosettaproject_tqw_morsyn-2#page/n609/mode/2up' target="_blank" rel="noopener noreferrer">page 599 (420)</a>,
	  },

	 {
	    salish: 'č-',
	    nicodemus: 'ch-',
	    english: 'on, attached to but not a part of, at a point',
	    link: <a href='http://www.archive.org/stream/rosettaproject_tqw_morsyn-2#page/n608/mode/2up' target="_blank" rel="noopener noreferrer">page 595 (395)</a>,
	  },
	  {
	    salish: 'čt-',
	    nicodemus: 'cht-',
	    english: 'R notes the meaning of this morpheme is not clear',
	    link: <a href='http://www.archive.org/stream/rosettaproject_tqw_morsyn-2#page/n608/mode/2up' target="_blank" rel="noopener noreferrer">page 595 (397)</a>,
	  }, 
	 {
	    salish: 'čɛt-',
	    nicodemus: 'chet-',
	    english: 'on a surface or object broader the subject, above, over',
	    link: <a href='http://www.archive.org/stream/rosettaproject_tqw_morsyn-2#page/n608/mode/2up' target="_blank" rel="noopener noreferrer">page 595 (398)</a>,
	  }, 
	  {
	    salish: 'čs-',
	    nicodemus: 'chs-',
	    english: 'after, behind, for a purpose, in pursuit of',
	    link: <a href='http://www.archive.org/stream/rosettaproject_tqw_morsyn-2#page/n612/mode/2up' target="_blank" rel="noopener noreferrer">page 595 (399)</a>,
	  }, 
	  {
	    salish: 'hn-',
	    nicodemus: 'hn-',
	    english: 'in, onto, into, on',
	    link: <a href='http://www.archive.org/stream/rosettaproject_tqw_morsyn-2#page/n609/mode/2up' target="_blank" rel="noopener noreferrer">page 599 (419)</a>,
	  }, 
	  ];

	  const columns = [{
	    Header: 'Salish',
	    accessor: 'salish',
	    //Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
	  	},
	  {
	    Header: 'Nicodemus',
	    accessor: 'nicodemus',
	    //Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
	  	}, 
	  {
	    Header: 'English',
	    accessor: 'english',
	    style: { 'white-space': 'unset' } 
	    //Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
	  	}, 
	  {
	    Header: 'Link',
	    accessor: 'link',
	    //Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
	  }];


	  return (
      <div className='ui content'>
        <AffixListIntro />
        <h3>Directional Prefixes</h3>
		  <ReactTable
		    data={directionalData}
		    columns={columns}
	   		defaultPageSize={5}
	   		className="-striped -highlight"
		  />
		<h3>Locative Prefixes</h3>
		  <ReactTable
		    data={locativeData}
		    columns={columns}
		    defaultPageSize={5}
	   		className="-striped -highlight"
		  />
		</div>
	  );
	}
}

export default AffixList;
