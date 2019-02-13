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

class StemList extends Component {
  constructor() {
    super();
    this.state = { data: [], loading: true };
  }
  async componentDidMount() {
    try {
      const response = await fetch(`http://localhost:4000/stems`);
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

 	const getColumnWidth = (rows, accessor, headerText) => {
	  const maxWidth = 600
	  const magicSpacing = 22
	  const cellLength = Math.max(
	    ...rows.map(row => (`${row[accessor]}` || '').length),
	    headerText.length,
	  )
	  return Math.min(maxWidth, cellLength * magicSpacing)
	};

	  const stemData = [{
		category: "verb",
	    reichard: "atsqä'ä",
	    doak: "ʔacqeʔ",
	    salish: "acqaʔ",
	    nicodemus: "atsqa'",
	    english: "go out, singular and plural",
	    note: "final ä in Reichard form should be superscript --avf",

	  },

	  {
		category: "verb",
		reichard: "ats̕x̣",
	    doak: "ʔac'x̣",
	    salish: "acqaʔ",
	    nicodemus: "ats'qh",
	    english: "look at",
	    note: "apostrophe in Reichard form should be above s --avf",

	  },
	  {
	    category: "verb",
	    reichard: "ayx̣ʷ",
	    doak: "ʔac'x̣",
	    salish: "ʔayx̣ʷ",
	    nicodemus: "ayqhw(-t)",
	    english: "be tired",
	    note: "",

	  },
	  {
		category: "verb",
	    reichard: "ax̣il",
	    doak: "ʔax̣il",
	    salish: "ax̣il",
	    nicodemus: "aqhil",
	    english: "do thus",
	    note: "",

	  },
	  {
		category: "verb",
	    reichard: "aṛʷ",
	    doak: "ʔaʕʷ",
	    salish: "aʕʷ",
	    nicodemus: "a(w",
	    english: "be much, many",
	    note: "the r-dot sorts differently than in our current lists --avf",

	  },
	  {
		category: "verb",
	    reichard: "äpɬ",
	    doak: "ʔepɬʷ",
	    salish: "ɛpɫʷ",
	    nicodemus: "epɫ",
	    english: "there is, have",
	    note: "",

	  },
	  {
		category: "other",
	    reichard: "aˑˑˑ",
	    doak: "---",
	    salish: "a···",
	    nicodemus: "a···",
	    english: "with rising tone, oh!",
	    note: "no rows in this table have a Doak form, we could remove that column? --avf",

	  },

	  {
		category: "other",
	    reichard: "aˑˑˑ",
	    doak: "---",
	    salish: "a···",
	    nicodemus: "a···",
	    english: "with even tone, disapproval",
	    note: "",

	  },
	  {
		category: "other",
	    reichard: "ax̣iw̕ɬ",
	    doak: "---",
	    salish: "ax̣iw'ɫ",
	    nicodemus: "aqhi'wɫ",
	    english: "now, today",
	    note: "",

	  },
	  {
		category: "other",
	    reichard: "uts̕-ax̣íɬ",
	    doak: "---",
	    salish: "uc'-ax̣íɫ",
	    nicodemus: "uts'-aqhiɫ",
	    english: "because",
	    note: "Nicodemus form, i should be underlined --avf",

	  },
	  {
		category: "other",
	    reichard: "äy̕níɬ",
	    doak: "---",
	    salish: "---",
	    nicodemus: "---",
	    english: "no gloss",
	    note: "",

	  },
	  {
		category: "other",
	    reichard: "pintc or pinttc",
	    doak: "---",
	    salish: "pinč or pintč",
	    nicodemus: "pinch",
	    english: "always",
	    note: "",

	  },
	  {
		category: "noun",
	    reichard: "*aapᴐˊtar",
	    doak: "---",
	    salish: "apótar",
	    nicodemus: "apotar",
	    english: "apostle",
	    note: "the o in the Nicodemus form should be underlined --avf",

	  },

	  {
		category: "noun",
	    reichard: "aɬq̕ʷäˊt̕ut",
	    doak: "---",
	    salish: "aɫq'ʷɛ́t'ut",
	    nicodemus: "aɫq'wet'ut",
	    english: "Plummer (place name)",
	    note: "",

	  },
	  {
		category: "noun",
	    reichard: "---",
	    doak: "ɛsčíčɛʔ",
	    salish: "ɛsčíčɛʔ",
	    nicodemus: "eschiche'",
	    english: "horse, pet, domestic animal",
	    note: "",

	  },
	  {
		category: "noun",
	    reichard: "s-ʀin",
	    doak: "---",
	    salish: "s-ʕin",
	    nicodemus: "s-(in",
	    english: "catbird",
	    note: "",

	  },
	  {
		category: "noun",
	    reichard: "s-x̣ʷäˊṛʷ-x̣ʷäṛʷ",
	    doak: "---",
	    salish: "s-x̣ʷɛ́ʕʷ-x̣ʷɛʕʷ",
	    nicodemus: "s-qhwe(w-qhwe(w",
	    english: "fox",
	    note: "",

	  },
	  {
		category: "noun",
	    reichard: "s-x̣ʷụɬ-x̣ʷáɬ",
	    doak: "--",
	    salish: "x̣ʷəɫ-x̣ʷáɫ",
	    nicodemus: "qhwɫ-qhwaɫ",
	    english: "Rocky Mt. sheep",
	    note: "the a in the Nicodemus form should be underlined --avf",

	  },
	  ]

	  const columns = [{
	    Header: 'Type',
	    accessor: 'category',
	    width: getColumnWidth(stemData, 'category', 'Type'),
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
              <option value="verb">Verbs</option>
              <option value="noun">Nouns</option>
              <option value="other">Other</option>
            </select>,
	  	},
		{
	    Header: 'Reichard',
	    accessor: 'reichard',
	    filterMethod: (filter, rows) =>
        	matchSorter(rows, filter.value, { keys: ["reichard"], threshold: matchSorter.rankings.CONTAINS }),
            filterAll: true,
	  	},
	  {
	    Header: 'Doak',
	    accessor: 'doak',
	    filterMethod: (filter, rows) =>
        	matchSorter(rows, filter.value, { keys: ["doak"], threshold: matchSorter.rankings.CONTAINS }),
            filterAll: true,
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
	  	},
	  {
	    Header: 'English',
	    accessor: 'english',
	    style: { 'white-space': 'unset' },
	    filterMethod: (filter, rows) =>
        	matchSorter(rows, filter.value, { keys: ["english"], threshold: matchSorter.rankings.CONTAINS }),
            filterAll: true,
	  	},
	  {
	    Header: 'Note',
	    accessor: 'note',
	    style: { 'white-space': 'unset' },
	    filterMethod: (filter, rows) =>
        	matchSorter(rows, filter.value, { keys: ["note"], threshold: matchSorter.rankings.CONTAINS }),
            filterAll: true,
	  }
	  ];

	  const StemListIntro = () => (
	    <Accordion>
	        <AccordionItem>
	            <AccordionItemTitle>
	                <p className="u-position-relative">
	                Developer Note (temporary)
	                <div className="accordion__arrow" role="presentation" />
	            	</p>
	            </AccordionItemTitle>
	            <AccordionItemBody>
				<p> Developer note:  I choose to mock up the annotated stem list because it's the most complex of the lists we have on the production site.  I've added notes on font/display issues, all are signed --avf.  These shouldn't go into the db
				</p>
				</AccordionItemBody>
			</AccordionItem>

			<AccordionItem>
	            <AccordionItemTitle>
	            	<p className="u-position-relative">
			    	Introduction
	                <div className="accordion__arrow" role="presentation" />
	                </p>
			    </AccordionItemTitle>
			    <AccordionItemBody>
			        <p> This version of the stem list contains notes and comments based on the analysis of Ivy Doak. To access the list in a dictionary form, use the 'browse' or 'search' features above. Each entry begins with the stem identified by Reichard. The root identified by Doak is then presented, followed by a transliteration of the stem into the Salish and Nicodemus spelling systems. Notes are in the rightmost column. The stems are presented in several groups - first the 'verbs', then 'adverbs, interjections, and conjunctions', and finally the 'nouns'. Note that this list is currently under construction. Where we are missing information about a particular transcriptions of the Coeur d'Alene stem, you will find " -- "; forms for which we have no English translation are noted.
	        		</p>
	        		<p> You can also view <a href="r_stemlist.pdf" target="_blank">Reichard 1939</a> in its        original form (as a pdf), or as a <a href="original_stem_list.html" target="_blank">set of images</a> that you can view in your browser.
			       </p>
	            </AccordionItemBody>
	        </AccordionItem>
	    </Accordion>
  	);

    const dataOrError = this.state.error ?
      <div style={{ color: 'red' }}>Oops! Something went wrong!</div> :
      <ReactTable
        data={this.state.data}
        loading={this.state.loading}
        columns={columns}
        filterable
        defaultPageSize={5}
        className="-striped -highlight"
        className="left"
        filterable="true"
        filterAll="true"
      />;
	  return (
      <div className='ui content'>
        <StemListIntro />
        <h3>Annotated Stem List</h3>
        <p>Stem type as listed by Reichard, 'Other' = 'Adverbs, Interjections, Conjunctions'</p>
		    {dataOrError}
		</div>
	  );
	}
}



export default StemList;
