import React, { Component, lazy, Suspense } from 'react';
import { Grid } from 'semantic-ui-react';
import ReactTable from "react-table";
import {createResource} from "simple-cache-provider";
import {cache} from "./cache";
import Api from "./Api";
import ErrorBoundary from "./ErrorBoundary";
import "react-table/react-table.css";
import matchSorter from 'match-sorter';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';
//import 'react-accessible-accordion/dist/minimal-example.css';
//import 'react-accessible-accordion/dist/fancy-example.css';
import "./AccordionTables.css";

let RootsResource = createResource( async () => {
   const response = await Api.getRoots();
   const json = await response.json();

   return json;
});

class RootDictionary extends Component {
  constructor() {
    super();
    this.onDelete = this.onDelete.bind(this);
    this.loadRootData = this.loadRootData.bind(this);
    this.state = {
    	data: [],
    	loading: true,
    	numberSelected: false,
	    salishSelected: false,
	    nicodemusSelected: true,
	    englishSelected: true,
     };
  }

 	 handleNumberChange(value) {
	    this.setState({ numberSelected: !this.state.numberSelected });
	  };

  	 handleSalishChange(value) {
	    this.setState({ salishSelected: !this.state.salishSelected });
	  };

	 handleNicodemusChange(value) {
	    this.setState({ nicodemusSelected: !this.state.nicodemusSelected });
	  };

	handleEnglishChange(value) {
	    this.setState({ englishSelected: !this.state.englishSelected });
	  };

  async componentDidMount() {
    this.loadRootData();
  }

  async loadRootData() {
    try {
      const response = await fetch(`http://localhost:4000/roots`);
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

  async onDelete(id) {
    console.log("In deletion");
    try {
      const body = {
        id: id
      };
      const path = 'http://localhost:4000/roots/' + id;
      const headers = {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*"
      };
      const response = await axios.delete(path, body, {headers});
      console.log(response);
      //this.props.history.push(`/rootdictionary`);
      this.loadRootData();
    } catch (err) {
      console.log(err);
      this.loadRootData();
    }
  };

  render() {

  	const { salishSelected, nicodemusSelected, englishSelected, numberSelected } = this.state;

 	const Checkbox = props => (
  		<input type="checkbox" {...props} />
		)

  	const RootDictionaryIntro = () => (
    <Accordion>
        <AccordionItem>
            <AccordionItemTitle>
                <p className="u-position-relative">
                Introduction
                <div className="accordion__arrow" role="presentation" />
            	</p>
            </AccordionItemTitle>
            <AccordionItemBody>
	            <p>The root dictionary presented here was compiled by John Lyon and Rebecca Greene-Wood and contains nearly 1,400 roots and about 7690 "word" forms. The data come from Lawrence Nicodemus's Coeur d'Alene dictionary. The original work was published by UMOPL and can be found at <a href="http://meltr.org/Publications/" target="_blank" rel="noopener noreferrer">Lyon and Greene-Wood 2007</a>. All material is copyrighted by the Coeur d'Alene Tribe and may not be copied in any format without written permission from the Coeur d'Alene Tribe.
			    </p>
			</AccordionItemBody>
		</AccordionItem>

		<AccordionItem>
            <AccordionItemTitle>
            	<p className="u-position-relative">
		    	Guide to Entries
                <div className="accordion__arrow" role="presentation" />
                </p>
		    </AccordionItemTitle>
		    <AccordionItemBody>
			    <p>For reasons of searchability and clarity of presentation, the organization of the dictionary has been altered from its original form. Within a root header, the entries are organized beginning with the least complex and move towards more complex forms. Each entry is separated by a new line and numbered. The entries first appear in the Salishan orthography, then the Nicodemus, and finally an English translation. Nicodemus sometimes identifies the simplest forms as (stem), but not in all cases. Intransitive and simple nominalized forms directly follow, then reduplicated forms, complex forms (those with lexical suffixes), and finally transitive forms and compounds. The following symbols are used to separate the different types of entries: intransitive (†), transitive (‡), complex (//), and compound (§) entries. Entries begin with a root skeleton followed by the transliterated Coeur d'Alene, followed by Nicodemus's English translation, grammatical notations, and additional information.
			    </p>
            </AccordionItemBody>
        </AccordionItem>
    </Accordion>
);

const handleEdit = (row) => {

};

const handleDelete = (row) => {

};

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
	    accessor: 'id',
        show: false
	  	},
    {
	    Header: 'Root',
	    accessor: 'root',
	    filterMethod: (filter, rows) =>
        	matchSorter(rows, filter.value, { keys: ["root"], threshold: matchSorter.rankings.CONTAINS }),
            filterAll: true,
	    width: getColumnWidth(rootData, 'root', 'Root'),
	    //Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
	  	},
	  {
	    Header: '#',
	    accessor: 'number',
	    filterMethod: (filter, rows) =>
        	matchSorter(rows, filter.value, { keys: ["#"], threshold: matchSorter.rankings.CONTAINS }),
            filterAll: true,
	    width: getColumnWidth(rootData, 'number', '#'),
	    show: numberSelected,
	    //Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
	  	},
	  {
	    Header: 'Salish',
	    accessor: 'salish',
	    filterMethod: (filter, rows) =>
        	matchSorter(rows, filter.value, { keys: ["salish"], threshold: matchSorter.rankings.CONTAINS }),
            filterAll: true,
        show: salishSelected,
        //width: getColumnWidth(rootData, 'salish', 'Salish'),
	    //Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
	  	},
	  {
	    Header: 'Nicodemus',
	    accessor: 'nicodemus',
	    filterMethod: (filter, rows) =>
        	matchSorter(rows, filter.value, { keys: ["nicodemus"], threshold: matchSorter.rankings.CONTAINS }),
            filterAll: true,
	    show: nicodemusSelected,
	    //width: getColumnWidth(rootData, 'nicodemus', 'Nicodemus'),
	    //Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
	  },
	  {
	    Header: 'English',
	    accessor: 'english',
	    filterMethod: (filter, rows) =>
        	matchSorter(rows, filter.value, { keys: ["english"], threshold: matchSorter.rankings.CONTAINS }),
            filterAll: true,
	    style: { 'white-space': 'unset' },
		show: englishSelected,
	    //Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
	  	},
      {
        Header: '',
        Cell: ({row, original}) => (
          <div>
            <Link to={{
              pathname: '/editroot/',
              search: '?id=' + original.id +
              '&root=' + original.root +
              '&number=' + original.number +
              '&salish=' + original.salish +
              '&nicodemus=' + original.nicodemus +
              '&english=' + original.english
            }} >
              <button>Edit</button>
            </Link>
            <button onClick={() => this.onDelete(original.id)}>Delete</button>
          </div>
        )
      }
    ];

    //let roots = RootsResource.read(cache);
/*
    <table>
      <thead>
      <tr>
          <th>Root</th>
          <th>#</th>
          <th>Salish</th>
          <th>Nicodemus</th>
          <th>English</th>
      </tr>
      </thead>
      <tbody>
      {this.state.data.map(r =>
          <tr key={r.id}>
              <td>{r.root}</td>
              <td>{r.number}</td>
              <td>{r.salish}</td>
              <td>{r.nicodemus}</td>
              <td>{r.english}</td>
          </tr>
      )}
      </tbody>
    </table>
*/
/*
    <ErrorBoundary>
      <React.Suspense fallback={<div>Loading</div>}>
        <ReactTable
          data={roots}
          columns={columns}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </React.Suspense>
    </ErrorBoundary>
*/

  const CheckboxRoot = () => (
		<div className="checkBoxMenu">
		  <label className="checkBoxLabel">#</label>
		  <input
		  	name="number"
            type="checkbox"
            checked={this.state.numberSelected}
            onChange={this.handleNumberChange.bind(this)}
          />
		  <label className="checkBoxLabel">Salish</label>
		  <input
		  	name="salish"
            type="checkbox"
            checked={this.state.salishSelected}
            onChange={this.handleSalishChange.bind(this)}
          />
          <label className="checkBoxLabel">Nicodemus</label>
          <input
            name="nicodemus"
            type="checkbox"
            checked={this.state.nicodemusSelected}
            onChange={this.handleNicodemusChange.bind(this)}
          />
          <label className="checkBoxLabel">English</label>
          <input
            name="english"
            type="checkbox"
            checked={this.state.englishSelected}
            onChange={this.handleEnglishChange.bind(this)}
          />
		</div>
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
      />;

    return (
      <div className='ui content'>
        <h3>Lyon and Green-Wood's Root Dictionary</h3>
        <p></p>
        <RootDictionaryIntro />
        <Link to={{
          pathname: '/addroot/'
        }} >
          <button>Add</button>
        </Link>
		    <p></p>
		    <CheckboxRoot />
        {dataOrError}
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

export default withRouter(RootDictionary);
