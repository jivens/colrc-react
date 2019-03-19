import React, { Component } from 'react';
import _ from 'lodash';
import { Grid, Image } from 'semantic-ui-react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import treeTableHOC from "react-table/lib/hoc/treeTable";
import matchSorter from 'match-sorter';
import PropTypes from "prop-types";
import "./AccordionTables.css";
import TextsTableBuilder from "./TextsTableBuilder";
import Audio from "./Audio";

class TextsList extends Component {
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

	const TreeTable = treeTableHOC(ReactTable);

	function getTdProps(state, ri, ci) {
	  console.log({ state, ri, ci });
	  return {};
	}
var media = [
  {
    id: "1",
    mediaTitle: "Reichard Texts"
  },
  {
    id: "2",
    mediaTitle: "Audio not associated with a Text"
  },
  {
    id: "3",
    mediaTitle: "Texts not associated with Reichard"
  }
];
var collections = [
  {
    id: "1",
    mediaId: "1",
    collectionTitle: "Story of Lynx",
    cycle: "Coyote Cycle",
    collectionVersion: "Tom Miyal",
    reichardNumber: "9a",
    fieldNotesNumber: "20"
  },
  {
    id: "2",
    mediaId: "1",
    collectionTitle: "Story of Lynx",
    cycle: "Coyote Cycle",
    collectionVersion: "Dorothy Nicodemus",
    reichardNumber: "9b",
    fieldNotesNumber: "21"
  },
  {
    id: "3",
    mediaId: "1",
    collectionTitle: "Rabbit and Jack Rabbit",
    cycle: "Myths not in the Coyote Cycle",
    collectionVersion: "",
    reichardNumber: "35",
    fieldNotesNumber: "37"
  },
  {
    id: "4",
    mediaId: "2",
    collectionTitle: "audio only",
    cycle: "",
    version: "",
    reichardNumber: "",
    fieldNotesNumber: ""
  }
];
var textItems = [
  {
    id: "1",
    collectionId: "1",
    typedImage: "typedImage1",
    typedPdf: "typedPdf1",
    metaDataTyped: "",
    handImage: "handImage1",
    handPdf: "handPdf1",
    metaDataHand: "",
    pubEnglImage: "PubEnglImage",
    pubEnglPdf: "PubEnglPdf"
  },
  {
    id: "2",
    collectionId: "2",
    typedImage: "",
    typedPdf: "",
    metaDataTyped: "",
    handImage: "",
    handPdf: "",
    metaDataHand: "",
    pubEnglImage: "",
    pubEnglPdf: ""
  },
  {
    id: "3",
    collectionId: "3",
    typedImage: "",
    typedPdf: "",
    metaDataTyped: "",
    handImage: "",
    handPdf: "",
    metaDataHand: "",
    pubEnglImage: "",
    pubEnglPdf: ""
  }
];
var audioItems = [
  {
    id: "1",
    collectionId: "3",
    audioTitle: "Part 1 - in Coeur d'Alene",
    audioLanguages: "Coeur d'Alene",
    audioLink: "",
    audioMetaData: ""
  },
  {
    id: "2",
    collectionId: "3",
    audioTitle: "Part 2 - begins in Coeur d'Alene, ends in English",
    audioLanguages: "Coeur d'Alene, English",
    audioLink: "",
    audioMetaData: ""
  },
  {
    id: "3",
    collectionId: "4",
    audioTitle: "When Deer Kills Children (Song, in Coeur d'Alene)",
    audioLanguages: "Coeur d'Alene",
    audioLink: "",
    audioMetaData: ""
  }
];

const combinedData = [ 
	{
		id: "1",
		mediaTitle: "Reichard Texts",
		collectionTitle: "Cricket Rides Coyote",
		reichardNumber: "20",
		fieldNotesNumber: "16",
		cycle: "Coyote Cycle",
		collectionVersion: "",
		typedImage: "crc_typed.png",
		typedPdf: "crc_typed.pdf",
		metaDataTyped: "crc_typed_meta",
		handImage: "crc_hand.png",
		handPdf: "crc_hand.pdf",
		metaDataHand: "crc_hand_meta",
		pubEnglImage: "crc_english.png",
		pubEnglPdf: "crc_english.png",
	},
	{
		id: "2",
		mediaTitle: "Reichard Texts",
		collectionTitle: "Chief Child of the Root (Transformer)",
		reichardNumber: "1",
		fieldNotesNumber: "1",
		cycle: "Chief Child of the Root (Transformer)",
		collectionVersion: "",
		typedImage: "ccr_typed.png",
		typedPdf: "ccr_typed.pdf",
		metaDataTyped: "ccr_typed_meta",
		handImage: "",
		handPdf: "",
		metaDataHand: "",
		pubEnglImage: "ccr_english.png",
		pubEnglPdf: "ccr_english.pdf",
	},			
	{
		id: "3",
		mediaTitle: "Reichard Texts",
		collectionTitle: "The girls who stole dentalia (Kidnapping)",
		reichardNumber: "24",
		fieldNotesNumber: "24",
		cycle: "Myths not in Coyote Cycle",
		collectionVersion: "version",
		typedImage: "gwsd_typed.png",
		typedPdf: "gwsd_typed.pdf",
		metaDataTyped: "gwsd_typed_meta",
		handImage: "gwsd_hand.png",
		handPdf: "gwsd_hand.pdf",
		metaDataHand: "gwsd_hand_meta",
		pubEnglImage: "gwsd_english.png",
		pubEnglPdf: "gwsd_english.pdf",
	}				
];
	const combinedColumns=[
	 {
    Header: "Texts",
    columns: [
	      {
	        Header: "Title",
	        accessor: "collectionTitle",
	      },
	      	      {
	        Header: "Cycle",
	        accessor: "cycle",
	      },
	    ]
	  },
	];

	  return (
      <div className='ui content'>
		<p></p>
		<ReactTable
          data={combinedData}
          columns={combinedColumns}
          defaultPageSize={10}
	   	  className="-striped -highlight"
	   	  /* defaultExpanded={{0:true, 1:true, 2:true}}*/
	   	  SubComponent={row => {
	   	  	return (
	   	  		<TextsTableBuilder 
	   	  			reichardNumber={row.original.reichardNumber}
	   	  			fieldNotesNumber={row.original.fieldNotesNumber}
	   	  			typedImage={row.original.typedImage}
	   	  			typedPdf={row.original.typedPdf}
	   	  			metaDataTyped={row.original.metaDataTyped}
	   	  			handImage={row.original.handImage}
	   	  			handPdf={row.original.handPdf}
	   	  			metaDataHand={row.original.metaDataHand}
	   	  			pubEnglImage={row.original.pubEnglImage}
	   	  			pubEnglPdf={row.original.PubEnglPdf}
	   	  		/>
	   	  	)
	   	  } }
	   	 />
	   </div>
	  );
	}
}


export default TextsList;
