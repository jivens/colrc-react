import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import ReactTable from "react-table";
import "react-table/react-table.css";

class TextsIntro extends Component {
  render() {
    return (
      <div className='ui content'>
        <p></p>
        <p>The unpublished field notes and typed manuscripts of Coeur d'Alene myths and tales presented in this archive were recorded in 1927 and 1929 by Gladys Reichard. The texts cover what Reichard classified into "myths and tales" and "tales with historical elements". The "myths and tales" are further divided into "Coyote cycle" and "myths not in Coyote cycle."</p>
		<p>The numbering of each text follows numbering of <a href="http://archive.org/stream/analysisofcoeurd41reic#page/n5/mode/2up" target="_blank" rel="noopener noreferrer">Reichard 1947</a> with the numbering of the typed manuscripts in parentheses "( )" directly preceding the title, the numbers corresponding to the field notes can found in the field note files. In addition, the titles reflect that resource and may differ from titles on field notes and typed manuscripts. Complete English translations of each text can also be found and come from An Analysis of Coeur d'Alene Indian Myths (<a href="http://archive.org/stream/analysisofcoeurd41reic#page/n5/mode/2up" target="_blank" rel="noopener noreferrer">Reichard 1947</a>).</p>

		<p>Analysis of some texts along with other excellent Coeur d'Alene resources can be found at Ivy Doak's <a href="http://ivydoak.com/Coeurd%27Alene/" target="_blank" rel="noopener noreferrer">Coeur d'Alene website</a>. The 1917 publication of Teit's <a href="https://archive.org/stream/folktalesofsalis00boas#page/118/mode/1up" target="_blank" rel="noopener noreferrer">Coeur d'Alene "tales"</a> which include different versions of a small number of the Coeur d'Alene texts in the archive can also be found online.</p>

		<p>The texts provided here were collected from photo-copies of Reichard's original manuscripts and quality varies from text to text. Files are available for download in PDF form or as image (PNG) files within the website (larger files will take longer to open).</p>

		<p>In the listings below, there are several choices you can select from. For those texts for which we have both hand-written and typed versions of the original field notes, click 'both' for images of the hand-written notes in the top half of your screen, and of the typed notes in the lower half. If you want to view the hand-written notes only, or the typed notes only, you can select 'image files' to see those resources right in your browser. You can select 'pdf' to open those files in Adobe .pdf format - and if you do so, your browser's settings for managing pdf files will determine whether the resource will appear in your browser, or whether you must download the resource and view it in a separate window. Note that the image resources (in the 'both' view, or separately) may take a few moments to load.</p>

		<p>Three of the texts listed below are also available in audio format here. These, and additional audio resources, are also available in the audio files section of this site.</p>
        <p></p>
        <p></p>
      </div>
    );
  }
}

class Texts extends Component {
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

   	const ccrData = [{
	    name: "Chief Child of the Root (Transformer)",
	    number: "1",
	    rNumber: "(1)",
	    typed: "image, pdf, metadata",
	    hand: "---", 
	    both: "---",
	    english: "image, pdf",
	    audio: "---",

	  },]

	 const coyoteData = [{
	    name: "Origin of Indian tribes (From Parts of Monster)",
	    number: "2",
	    rNumber: "(2)",
	    typed: "image, pdf, metadata",
	    hand: "---", 
	    both: "---",
	    english: "image, pdf",
	    audio: "---",

	  },
	  {
	    name: "Coyote Overpowers Sun",
	    number: "3",
	    rNumber: "(3)",
	    typed: "image, pdf, metadata",
	    hand: "image, pdf, metadata", 
	    both: "view",
	    english: "image, pdf",
	    audio: "---",

	  },
	  {
	    name: "Coyote steals his daughter-in-law",
	    number: "4",
	    rNumber: "(4)",
	    typed: "image, pdf, metadata",
	    hand: "image, pdf, metadata", 
	    both: "view",
	    english: "image, pdf",
	    audio: "---",

	  },
	  {
	    name: "Little Beaver",
	    number: "5",
	    rNumber: "(6)",
	    typed: "image, pdf, metadata",
	    hand: "image, pdf, metadata", 
	    both: "view",
	    english: "image, pdf",
	    audio: "---",

	  },
	  {
	    name: "Coyote devours his own children",
	    number: "6",
	    rNumber: "(7)",
	    typed: "image, pdf, metadata",
	    hand: "image, pdf, metadata", 
	    both: "view",
	    english: "image, pdf",
	    audio: "---",
	  },	  
	  {
	    name: "Coyote loses his eyes (Eye Juggling)",
	    number: "7",
	    rNumber: "(8)",
	    typed: "image, pdf, metadata",
	    hand: "---", 
	    both: "---",
	    english: "image, pdf",
	    audio: "---",
	  },	  
	  {
	    name: "Story of Lynx (by Tom Miyal)",
	    number: "9a",
	    rNumber: "(20)",
	    typed: "image, pdf, metadata",
	    hand: "image, pdf, metadata", 
	    both: "both",
	    english: "image, pdf",
	    audio: "---",
	  },
	  {
	    name: "Story of Lynx (by Dorthy Nicodemus)",
	    number: "9b",
	    rNumber: "(21)",
	    typed: "image, pdf, metadata",
	    hand: "image, pdf, metadata", 
	    both: "both",
	    english: "image, pdf",
	    audio: "---",

	  },	  
	  {
	    name: "Cricket Rides Coyote",
	    number: "20",
	    rNumber: "(16)",
	    typed: "image, pdf, metadata",
	    hand: "image, pdf, metadata", 
	    both: "both",
	    english: "image, pdf",
	    audio: "In Coeur d'Alene, In English",

	  },]

	  const nonCoyoteData = [{
	    name: "Catbird",
	    number: "22",
	    rNumber: "(23)",
	    typed: "image, pdf, metadata",
	    hand: "image, pdf, metadata", 
	    both: "both",
	    english: "image, pdf",
	    audio: "---",
	  },
	 {
	    name: "Skunk and Fisher",
	    number: "23",
	    rNumber: "(22)",
	    typed: "image, pdf, metadata",
	    hand: "image, pdf, metadata", 
	    both: "both",
	    english: "image, pdf",
	    audio: "---",
	  },
	 {
	    name: "The girls who stole dentalia (Kidnapping)",
	    number: "24",
	    rNumber: "(24)",
	    typed: "image, pdf, metadata",
	    hand: "image, pdf, metadata", 
	    both: "both",
	    english: "image, pdf",
	    audio: "---",
	  },
	 {
	    name: "Thunder",
	    number: "25",
	    rNumber: "(26)",
	    typed: "image, pdf, metadata",
	    hand: "image, pdf, metadata", 
	    both: "both",
	    english: "image, pdf",
	    audio: "---",
	  },
	 ]

	  return (

      <div className='ui content'>
        <TextsIntro />
        <h3>A. Chief Child of the Root (Transformer)</h3>
		  <ReactTable
		    data={ccrData}
		    columns={[	    
			{
		   		Header: 'Text',
		    	columns: [
			    {
			    	Header: 'Name',
			    	accessor: 'name',
	    			style: { 'white-space': 'unset' } 
			    }, 

			    {
			    	Header: '#',
			    	accessor: 'number',
			    	width: getColumnWidth(ccrData, 'number', '#'),
			    },
			    {
			    	Header: 'orig.#',
			    	accessor: 'rNumber',
			    	width: getColumnWidth(ccrData, 'rNumber', 'orig.#'),
			    }
			  ]
			}, 
			{
				Header: 'Formats',
			    columns: [
			    {
			    	Header: 'Typed',
			    	accessor: 'typed',
			    },
			    {
			    	Header: 'Hand-written',
			    	accessor: 'hand',
			    },
			    {
			    	Header: 'Both',
			    	accessor: 'both',
			    },
			    {
			    	Header: 'English',
			    	accessor: 'english',
			    },
			    {
			    	Header: 'Audio',
			    	accessor: 'audio',
			    },
			  ]
		    },
		    ]}
	   		defaultPageSize={1}
	   		className="-striped -highlight"
	   		className="left"
		  />
        <h3>B. Coyote Cycle (2-21)</h3>
		  <ReactTable
		    data={coyoteData}
		    columns={[	    
			{
		   		Header: 'Text',
		    	columns: [
			    {
			    	Header: 'Name',
			    	accessor: 'name',
	    			style: { 'white-space': 'unset' } 
			    }, 

			    {
			    	Header: '#',
			    	accessor: 'number',
			    	width: getColumnWidth(coyoteData, 'number', '#'),
			    },
			    {
			    	Header: 'orig.#',
			    	accessor: 'rNumber',
			    	width: getColumnWidth(coyoteData, 'rNumber', 'orig.#'),
			    }
			  ]
			}, 
			{
				Header: 'Formats',
			    columns: [
			    {
			    	Header: 'Typed',
			    	accessor: 'typed',
			    },
			    {
			    	Header: 'Hand-written',
			    	accessor: 'hand',
			    },
			    {
			    	Header: 'Both',
			    	accessor: 'both',
			    },
			    {
			    	Header: 'English',
			    	accessor: 'english',
			    },
			    {
			    	Header: 'Audio',
			    	accessor: 'audio',
			    },
			  ]
		    },
		    ]}
	   		defaultPageSize={5}
	   		className="-striped -highlight"
	   		className="left"
		  />
        <h3>C. Texts not in the Coyote cycle (22-36)</h3>
		  <ReactTable
		    data={nonCoyoteData}
		    columns={[	    
			{
		   		Header: 'Text',
		    	columns: [
			    {
			    	Header: 'Name',
			    	accessor: 'name',
	    			style: { 'white-space': 'unset' } 
			    }, 

			    {
			    	Header: '#',
			    	accessor: 'number',
			    	width: getColumnWidth(coyoteData, 'number', '#'),
			    },
			    {
			    	Header: 'orig.#',
			    	accessor: 'rNumber',
			    	width: getColumnWidth(coyoteData, 'rNumber', 'orig.#'),
			    }
			  ]
			}, 
			{
				Header: 'Formats',
			    columns: [
			    {
			    	Header: 'Typed',
			    	accessor: 'typed',
			    },
			    {
			    	Header: 'Hand-written',
			    	accessor: 'hand',
			    },
			    {
			    	Header: 'Both',
			    	accessor: 'both',
			    },
			    {
			    	Header: 'English',
			    	accessor: 'english',
			    },
			    {
			    	Header: 'Audio',
			    	accessor: 'audio',
			    },
			  ]
		    },
		    ]}
	   		defaultPageSize={5}
	   		className="-striped -highlight"
	   		className="left"
		  />
		</div>
	  );
	}
}


export default Texts;
