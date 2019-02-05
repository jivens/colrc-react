import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import ReactTable from "react-table";
import "react-table/react-table.css";

class RootDictionaryIntro extends Component {
  render() {
    return (
      <div className='ui content'>
        <p></p>
        The root dictionary presented here was compiled by John Lyon and
        Rebecca Greene-Wood and contains nearly 1,400 roots and about
        7690 "word" forms. The data come from Lawrence Nicodemus's
        Coeur d'Alene dictionary. The original work was published by UMOPL
        and can be found at <a href="http://meltr.org/Publications/" target="_blank" rel="noopener noreferrer">Lyon and Greene-Wood 2007</a>. All material is
        copyrighted by the Coeur d'Alene Tribe and may not be copied in
        any format without written permission from the Coeur d'Alene Tribe.
        <p></p>
        <p></p>
        For reasons of searchability and clarity of presentation, the
        organization of the dictionary has been altered from its original form.
        Within a root header, the entries are organized beginning with the
        least complex and move towards more complex forms. Each entry is
        separated by a new line and numbered. The entries first appear in the
        Salishan orthography, then the Nicodemus, and finally an English
        translation. Nicodemus sometimes identifies the simplest forms as
        (stem), but not in all cases. Intransitive and simple nominalized
        forms directly follow, then reduplicated forms, complex forms (those
        with lexical suffixes), and finally transitive forms and compounds.
        The following symbols are used to separate the different types of
        entries: intransitive (†), transitive (‡), complex (//), and
        compound (§) entries. Entries begin with a root skeleton followed
        by the transliterated Coeur d'Alene, followed by Nicodemus's English
        translation, grammatical notations, and additional information.
        <p></p>
      </div>
    );
  }
}

class RootDictionary extends Component {
  render() 
  {
	const getColumnWidth = (rows, accessor, headerText) => {
	  const maxWidth = 600
	  const magicSpacing = 18
	  const cellLength = Math.max(
	    ...rows.map(row => (`${row[accessor]}` || '').length),
	    headerText.length,
	  )
	  return Math.min(maxWidth, cellLength * magicSpacing)
	};

  	const rootData = [{
	    root: '√a',
	    number: '1',
	    salish: "a",
	    nicodemus: "a",
	    english: "† hello. (gr.)",
	  },
	  {
	    root: '√a',
	    number: '2',
	    salish: 'a',
	    nicodemus: 'a?',
	    english: 'so. (lit. Is that so?), (adv.)',
	  },
	  {
	    root: '√a',
	    number: '3',
	    salish: "a·",
	    nicodemus: "aaaa...!",
	    english: "cut out, knock off!, quit, stop. (lit. Cut it out!, Knock it off, quit it, Stop it!), (imper.)",
	  },
	  {
	    root: '√a',
	    number: '4',
	    salish: "aye",
	    nicodemus: "aye",
	    english: "hey. (adv.)",
	  },
	  {
	    root: '√bc',
	    number: '1',
	    salish: "buc",
	    nicodemus: "buts",
	    english: "† boots. (n.)",
	  },
	  {
	    root: '√bc',
	    number: '2',
	    salish: "ec+búc+buc=šn",
	    nicodemus: "etsbutsbutsshn",
	    english: "// boots (to be wearing...). ((lit. He is wearing boots), n.)",
	  },
	  {
	    root: '√bc',
	    number: '3',
	    salish: "s+búc+buc=šn",
	    nicodemus: "sbutsbutsshn",
	    english: "boot. ((lit. a borrowed root), n.)",
	  },
	  {
	    root: '√bc',
	    number: '4',
	    salish: "s+búc+buc=šn+mš",
	    nicodemus: "sbutsbutsshnmsh",
	    english: "rubber boots (putting on...). (vt, pl.n.)",
	  },
	  {
	    root: '√bl',
	    number: '1',
	    salish: "bu·lí",
	    nicodemus: "buuli",
	    english: "† bull. (n.)",
	  },
	  {
	    root: '√bm 1',
	    number: '1',
	    salish: "bam",
	    nicodemus: "bam",
	    english: "† go (...fast and far), speeded (be...), be versatile. ((stem), vi.)",
	  },
	  {
	    root: '√bm 1',
	    number: '2',
	    salish: "bam",
	    nicodemus: "bam",
	    english: "intoxicated. ((stem), vi.)",
	  },
	  {
	    root: '√bm 1',
	    number: '7',
	    salish: "niʔ+b[a]m+p=aw'es",
	    nicodemus: "ni'bmpa'wes",
	    english: "// orgy. ((lit. there is speeding or intoxication among them), n.)",
	  },
	  {
	  	root: "√dlq'ʷ",
	  	number: '7',
	  	salish: "tiʔxʷ+eɫ+n+dol+dolq'ʷ+t=íl'š+n",
	  	nicodemus: "ti'khweɫndoldolq'wti'lshn",
	  	english: "confirmed. ((lit. He gained strength, he received the rite of confirmation), vi.)",
	  },
	  ];

	  const columns = [{
	    Header: 'Root',
	    accessor: 'root',
	    width: getColumnWidth(rootData, 'root', 'Root'),
	    //Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
	  	},
	  {
	    Header: '#',
	    accessor: 'number',
	    width: getColumnWidth(rootData, 'number', '#'),
	    //Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
	  	}, 
	  {
	    Header: 'Salish',
	    accessor: 'salish',
	    //width: getColumnWidth(rootData, 'salish', 'Salish'),
	    //Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
	  	}, 
	  {
	    Header: 'Nicodemus',
	    accessor: 'nicodemus',
	    //width: getColumnWidth(rootData, 'nicodemus', 'Nicodemus'),
	    //Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
	  },
	  {
	    Header: 'English',
	    accessor: 'english',
	    style: { 'white-space': 'unset' } 
	    //Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
	  	}, ];

    return (
      <div className='ui content'>
       <RootDictionaryIntro />
        <h3>Lyon and Green-Wood's Root Dictionary</h3>
		  <ReactTable
		    data={rootData}
		    columns={columns}
	   		defaultPageSize={10}
	   		className="-striped -highlight"
		  />
      </div>
    );
  }
}

class RootElement extends Component {
  render() {
    const color = this.props.color ? this.props.color : 'white';
    return (
      <Grid.Row color={color}>
        <Grid.Column width={2}>{this.props.root}</Grid.Column>
        <Grid.Column width={2}>{this.props.occurrence}</Grid.Column>
        <Grid.Column width={2}>{this.props.salish}</Grid.Column>
        <Grid.Column width={2}>{this.props.nicodemus}</Grid.Column>
        <Grid.Column width={8}>{this.props.english}</Grid.Column>
      </Grid.Row>
    );
  }
}

export default RootDictionary;
