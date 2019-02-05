import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import ReactTable from "react-table";
import "react-table/react-table.css";

class StemListIntro extends Component {
  render() {
    return (
      <div className='ui content'>

        <p>Developer note:  I choose to mock up the annotated stem list because it's the most complex of the lists we have on the production site.  I've added notes on font/display issues, all are signed --avf.  These shouldn't go into the db</p>
        <p>
          This version of the stem list contains notes and comments based on the analysis of Ivy Doak. To access the list in a dictionary form, use the 'browse' or 'search' features above. Each entry begins with the stem identified by Reichard. The root identified by Doak is then presented, followed by a transliteration of the stem into the Salish and Nicodemus spelling systems. Notes are in the rightmost column. The stems are presented in several groups - first the 'verbs', then 'adverbs, interjections, and conjunctions', and finally the 'nouns'. Note that this list is currently under construction. Where we are missing information about a particular transcriptions of the Coeur d'Alene stem, you will find " -- "; forms for which we have no English translation are noted
        </p>
        <p>
          You can also view <a href="r_stemlist.pdf" target="_blank">Reichard 1939</a> in its
          original form (as a pdf), or as
          a <a href="original_stem_list.html" target="_blank">set of images</a> that you can view
          in your browser.
        </p>
        <br />
      </div>
    );
  }
}

class StemList extends Component {
  render() {
	  const verbsData = [{
	    reichard: "atsqä'ä",
	    doak: "ʔacqeʔ",
	    salish: "acqaʔ",
	    nicodemus: "atsqa'", 
	    english: "go out, singular and plural",
	    note: "final ä in Reichard form should be superscript --avf",

	  },

	  {
	    reichard: "ats̕x̣",
	    doak: "ʔac'x̣",
	    salish: "acqaʔ",
	    nicodemus: "ats'qh", 
	    english: "look at",
	    note: "apostrophe in Reichard form should be above s --avf",

	  },
	  {
	    reichard: "ayx̣ʷ",
	    doak: "ʔac'x̣",
	    salish: "ʔayx̣ʷ",
	    nicodemus: "ayx̣ʷ(-t)", 
	    english: "be tired",
	    note: "",

	  },
	  {
	    reichard: "ax̣il",
	    doak: "ʔax̣il",
	    salish: "ax̣il",
	    nicodemus: "aqhil", 
	    english: "do thus",
	    note: "",

	  },
	  {
	    reichard: "aṛʷ",
	    doak: "ʔaʕʷ",
	    salish: "aʕʷ",
	    nicodemus: "a(w", 
	    english: "be much, many",
	    note: "the r-dot sorts differently than in our current lists --avf",

	  },
	  {
	    reichard: "äpɬ",
	    doak: "ʔepɬʷ",
	    salish: "ɛpɫʷ",
	    nicodemus: "epɫ", 
	    english: "there is, have",
	    note: "",

	  },
	  ]

	  const adverbsData = [{
	    reichard: "aˑˑˑ",
	    doak: "---",
	    salish: "a···",
	    nicodemus: "a···", 
	    english: "with rising tone, oh!",
	    note: "no rows in this table have a Doak form, we could remove that column? --avf",

	  },

	  {
	    reichard: "aˑˑˑ",
	    doak: "---",
	    salish: "a···",
	    nicodemus: "a···", 
	    english: "with even tone, disapproval",
	    note: "",

	  },
	  {
	    reichard: "ax̣iw̕ɬ",
	    doak: "---",
	    salish: "ax̣iw'ɫ",
	    nicodemus: "aqhi'wɫ", 
	    english: "now, today",
	    note: "",

	  },
	  {
	    reichard: "uts̕-ax̣íɬ",
	    doak: "---",
	    salish: "uc'-ax̣íɫ",
	    nicodemus: "uts'-aqhiɫ", 
	    english: "because",
	    note: "Nicodemus form, i should be underlined --avf",

	  },
	  {
	    reichard: "äy̕níɬ",
	    doak: "---",
	    salish: "---",
	    nicodemus: "---", 
	    english: "no gloss",
	    note: "",

	  },
	  {
	    reichard: "pintc or pinttc",
	    doak: "--",
	    salish: "pinč or pintč",
	    nicodemus: "pinch", 
	    english: "always",
	    note: "",

	  },
	  ]

	 const nounsData = [{
	    reichard: "*aapᴐˊtar",
	    doak: "---",
	    salish: "apótar",
	    nicodemus: "apotar", 
	    english: "apostle",
	    note: "the o in the Nicodemus form should be underlined --avf",

	  },

	  {
	    reichard: "aɬq̕ʷäˊt̕ut",
	    doak: "---",
	    salish: "aɫq'ʷɛ́t'ut",
	    nicodemus: "aɫq'wet'ut", 
	    english: "Plummer (place name)",
	    note: "",

	  },
	  {
	    reichard: "---",
	    doak: "ɛsčíčɛʔ",
	    salish: "ɛsčíčɛʔ",
	    nicodemus: "eschiche'", 
	    english: "horse, pet, domestic animal",
	    note: "",

	  },
	  {
	    reichard: "s-ʀin",
	    doak: "---",
	    salish: "s-ʕin",
	    nicodemus: "s-(in", 
	    english: "catbird",
	    note: "",

	  },
	  {
	    reichard: "s-x̣ʷäˊṛʷ-x̣ʷäṛʷ",
	    doak: "---",
	    salish: "s-x̣ʷɛ́ʕʷ-x̣ʷɛʕʷ",
	    nicodemus: "s-qhwe(w-qhwe(w", 
	    english: "fox",
	    note: "",

	  },
	  {
	    reichard: "s-x̣ʷụɬ-x̣ʷáɬ",
	    doak: "--",
	    salish: "x̣ʷəɫ-x̣ʷáɫ",
	    nicodemus: "qhwɫ-qhwaɫ", 
	    english: "Rocky Mt. sheep",
	    note: "the a in the Nicodemus form should be underlined --avf",

	  },
	  ]

	  const columns = [{
	    Header: 'Reichard',
	    accessor: 'reichard',
	  	},
	  {
	    Header: 'Doak',
	    accessor: 'doak',
	  	},
	  {
	    Header: 'Salish',
	    accessor: 'salish',
	  	},
	  {
	    Header: 'Nicodemus',
	    accessor: 'nicodemus',
	  	}, 
	  {
	    Header: 'English',
	    accessor: 'english',
	    style: { 'white-space': 'unset' } 
	  	}, 
	  {
	    Header: 'Note',
	    accessor: 'note',
	    style: { 'white-space': 'unset' } 
	  }
	  ];


	  return (
      <div className='ui content'>
        <StemListIntro />
        <h3>Annotated Stem List</h3>
        <h4>Verbs</h4>
		  <ReactTable
		    data={verbsData}
		    columns={columns}
	   		defaultPageSize={5}
	   		className="-striped -highlight"
	   		className="left"
		  />
		 <h4>Adverbs, Interjections, Conjunctions</h4>
		  <ReactTable
		    data={adverbsData}
		    columns={columns}
	   		defaultPageSize={5}
	   		className="-striped -highlight"
	   		className="left"
		  />
		 <h4>Nouns</h4>
		  <ReactTable
		    data={nounsData}
		    columns={columns}
	   		defaultPageSize={5}
	   		className="-striped -highlight"
	   		className="left"
		  />
		</div>
	  );
	}
}

  

export default StemList;
