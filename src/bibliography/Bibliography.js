import React, { Component } from 'react';
import { Grid, Button, Icon, Checkbox } from 'semantic-ui-react';
import ReactTable from "react-table";
import matchSorter from 'match-sorter';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';
import { Link } from "react-router-dom";
import axios from 'axios';


class Bibliography extends Component {
  constructor() {
    super();
    this.onDelete = this.onDelete.bind(this);
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

  async onDelete(id) {
    console.log("In deletion");
    try {
      const body = {
        id: id
      };
      const path = 'http://localhost:4000/bibliography/' + id;
      const headers = {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*"
      };
      const response = await axios.delete(path, body, {headers});
      console.log(response);
      //this.props.history.push(`/rootdictionary`);
      this.loadBibData();
    } catch (err) {
      console.log(err);
      this.loadBibData();
    }
  };

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


const columns = [{
  Header: 'Author',
  accessor: 'author',
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
        pathname: '/editbib/',
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
      <div>
        <div className="text-right">
          <Link to={{
            pathname: '/addbib/'
          }} >
            <Button icon labelPosition='left' size='small'>
              <Icon name='plus' />
              Add an entry
            </Button>
          </Link>
        </div>
        <div>{dataOrError}</div>
      </div>

    );



    }
  }


export default Bibliography;
