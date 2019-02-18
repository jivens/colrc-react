import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import DecoratedTextSpan from './DecoratedTextSpan';
import ReactTable from "react-table";
import "react-table/react-table.css";
import matchSorter from 'match-sorter';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';
import "./AccordionTables.css";

class SpellingPronunciation extends Component {
  constructor() {
    super();
    this.state = { data: [], loading: true };
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

	  const SpellingPronunciationIntro = () => (
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
			          Coeur d'Alene has been spelled using at least three different
			          systems - the "Reichard Orthography" (see Reichard 1938),
			          the "Nicodemus Orthography" (see Nicodemus 1975a,b)
			          and the "Salishan Orthography". What we refer to as the
			          Reichard Orthography is a variation of the transcription system
			          used by many linguists and anthropologists trained by Franz Boas at
			          Columbia University in the first half of the 20th century. The
			          Nicodemus Orthography was developed for use by the Coeur d'Alene
			          community. The Salishan Orthography is used by many linguists and
			          anthropologists today to transcribe Coeur d'Alene. You will find it
			          used in contemporary scholarly work about the language. This site
			          is intended to support users who want to use any of these systems.
			        </p>
			        <p></p>
			        <p>
			          The list below shows how the symbols used in each of these three
			          systems correspond to each other. Not all of the sounds used in
			          the Coeur d'Alene language are familiar to English speakers, but
			          many of them are. Sounds in Coeur d'Alene that are also found in
			          English words are listed with examples from English so that
			          learners can familiarize themselves with those sounds.
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
        defaultPageSize={20}
        className="-striped -highlight"
      />;

  return (     
	  	<div className='ui content'>    
	        <h3>Spelling and Pronunciation Guide</h3>
	        <p></p>
	        <SpellingPronunciationIntro />
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

export default SpellingPronunciation;
