import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import ReactTable from "react-table";
import "react-table/react-table.css";

class AffixList extends Component {
	render() {
	  const data = [{
	    salish: 'ci-',
	    nicodemus: 'tsi-',
	    english: 'first, before',
	    link: 'http://www.archive.org/stream/rosettaproject_tqw_morsyn-2#page/n612/mode/2up',
	    page: 'page 599 (420)'
	  },
	  {
	    salish: 'čic-',
	    nicodemus: 'chits-',
	    english: 'hither (toward speaker)',
	    link: 'http://www.archive.org/stream/rosettaproject_tqw_morsyn-2#page/n611/mode/2up',
	    page: 'page 598 (412)'
	  } 
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
	    //Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
	  	}, 
	  {
	    Header: 'Link',
	    accessor: 'link',
	    //Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
	  }, 
	  {
	    Header: 'Page',
	    accessor: 'page',
	    //Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
	  }, 
  ];

	  return (

		  <ReactTable
		    data={data}
		    columns={columns}
		  />
	  );
	}
}

export default AffixList;
