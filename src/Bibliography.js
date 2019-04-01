import React, { Component } from 'react';
import { Grid, Button, Icon, Checkbox } from 'semantic-ui-react';
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
import { Link } from "react-router-dom";


class Bibliography extends Component {
  constructor() {
    super();
    // this.onDelete = this.onDelete.bind(this);
    this.loadBibData = this.loadBibData.bind(this);
    this.state = {
      data: [],
      loading: true,
     };
  }

  weblink(link, page) {
    return (
      link === '' ? page : <a href={link} target="_blank" rel="noopener noreferrer">{page}</a>
    );
  }

  async componentDidMount() {
    this.loadBibData();
  }

  async loadBibData() {
    try {
      const response = await fetch(`http://localhost:4000/bibliography`);
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

  const Checkbox = props => (
  		<input type="checkbox" {...props} />
		)

 	const getColumnWidth = (rows, accessor, headerText) => {
	  const maxWidth = 600
	  const magicSpacing = 15
	  const cellLength = Math.max(
	    ...rows.map(row => (`${row[accessor]}` || '').length),
	    headerText.length,
	  )
	  return Math.min(maxWidth, cellLength * magicSpacing)
	};

const BibIntro = () => (
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
          write intro here?
        </p>
    </AccordionItemBody>
  </AccordionItem>
  </Accordion>
);

const bibData = [
  {
    "id": 1,
    "author": "Barthmaier, Paul T.",
    "year": "1996",
    "title": "A Dictionary of Coeur d'Alene Salish from Gladys Reichard's file slips",
    "reference": "University of Montana M.A. Thesis",
    "link":  "http://scholarworks.umt.edu/cgi/viewcontent.cgi?article=9309&context=etd",
    "linktext": "here"
  },
  {
    "id": 2,
    "author": "Bischoff, Shannon T.",
    "year": "2011",
    "title": "Lexical affixes, incorporation, and conflation: The case of Coeur d'Alene",
    "reference": "Studia Linguistica 65.1:1-32",
    "link": "",
    "linktext": ""
  },
  {
    "id": 3,
    "author": "Bischoff, Shannon T.",
    "year": "2011",
    "title": "Formal notes on Coeur d'Alene clause structure",
    "reference": "Newcastle: Cambridge Scholars Press",
    "link": "",
    "linktext": ""
  },
  {
    "id": 4,
    "author": "Bischoff, Shannon T.",
    "year": "2007",
    "title": "Functional Forms-Formal Functions: An account of Coeur d'Alene clause structure",
    "reference": "PhD dissertation University of Arizona",
    "link": "",
    "linktext": ""
  },
  {
    "id": 5,
    "author": "Bischoff, Shannon T.",
    "year": "2006",
    "title": "Basic clause structure in Coeur d'Alene A preliminary working paper",
    "reference": "In MIT Working Papers on Endangered and Less Familiar Languages Volume on Salish, (eds) Shannon T. Bischoff, Lynnika Buttler, Peter Norquist, and Daniel Siddiqi. Cambridge MIT Press.",
    "link": "",
    "linktext": ""
  },
  {
    "id": 6,
    "author": "Bischoff, Shannon T.",
    "year": "2006",
    "title": "The left periphery in Coeur d'Alene Evidence from the Reichard Manuscripts",
    "reference": "In Proceedings of WSCLA 10 UBCWPL 17, (eds) Solveiga Armoskaite and James J. Thompson. 43-55.",
    "link": "",
    "linktext": ""
  },
  {
    "id": 7,
    "author": "Bischoff, Shannon T.",
    "year": "2001",
    "title": "Lynx : a morphological analysis and translation of Dorothy Nicodemus' Coeur d'Alene narrative",
    "reference": "University of Montana M.A. thesis.",
    "link": "http://scholarworks.umt.edu/cgi/viewcontent.cgi?article=9310&context=etd",
    "linktext": "here"
  }


];

const columns = [{
  Header: 'Author',
  accessor: 'author',
  width: getColumnWidth(bibData, 'author', 'Author'),
filterMethod: (filter, rows) =>
    matchSorter(rows, filter.value, { keys: ["author"], threshold: matchSorter.rankings.CONTAINS }),
      filterAll: true,
  //Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
  },
{
  Header: 'Year',
  accessor: 'year',
  filterMethod: (filter, rows) =>
      matchSorter(rows, filter.value, { keys: ["year"], threshold: matchSorter.rankings.CONTAINS }),
        filterAll: true,
  },
{
  Header: 'Title',
  accessor: 'title',
  filterMethod: (filter, rows) =>
      matchSorter(rows, filter.value, { keys: ["title"], threshold: matchSorter.rankings.CONTAINS }),
        filterAll: true,
  //Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
  },
{
  Header: 'Reference',
  accessor: 'reference',
  style: { 'white-space': 'unset' }, //??
  filterMethod: (filter, rows) =>
      matchSorter(rows, filter.value, { keys: ["reference"], threshold: matchSorter.rankings.CONTAINS }),
        filterAll: true,
  //Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
  },
{
  Header: 'Link',
  accessor: 'link',
  Cell: ({row, original}) => ( this.weblink(original.link, original.linktext) ),
  //Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
},
{
  Header: 'Edit/Delete',
  filterable: false,
  sortable: false,
  width: 100,
  Cell: ({row, original}) => (
    <div>
      <Button icon floated='right' onClick={() => this.onDelete(original.id)}>
          <Icon name='trash' />
      </Button>
      <Link to={{
        pathname: '/editroot/',
        search: '?id=' + original.id +
        '&author=' + original.author +
        '&year=' + original.year +
        '&title=' + original.title +
        '&reference=' + original.reference +
        '&link=' + original.link +
        '&linktext=' + original.linktext
      }} >
      <Button icon floated='right'>
        <Icon name='edit' />
      </Button>
      </Link>

    </div>
  )
}
];

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
      <div>{dataOrError}</div>
    );



    }
  }


export default Bibliography;
