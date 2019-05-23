import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import ReactTable from "react-table";
import matchSorter from 'match-sorter';
import { Link } from "react-router-dom";
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { graphql, compose } from 'react-apollo';
import { getRootsQuery, deleteRootMutation } from '../queries/queries';
import SimpleKeyboard from "../utilities/SimpleKeyboard";

class RootsDictionary extends Component {
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
    //this.loadRootData();
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
      this.props.deleteRootMutation({
        variables: {
          id: id
        }
      });
      this.props.history.push('/roots');
    } catch (err) {
      console.log(err);
    }
  };

  render() {

  	const { salishSelected, nicodemusSelected, englishSelected, numberSelected } = this.state;

  	const getColumnWidth = (rows, accessor, headerText) => {
  	  const maxWidth = 600
  	  const magicSpacing = 18
  	  const cellLength = Math.max(
  	    ...rows.map(row => (`${row[accessor]}` || '').length),
  	    headerText.length,
  	  )
  	  return Math.min(maxWidth, cellLength * magicSpacing)
  	};

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
	    width: getColumnWidth(this.state.data, 'root', 'Root'),
	    //Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
	  	},
	  {
	    Header: '#',
	    accessor: 'number',
	    filterMethod: (filter, rows) =>
        	matchSorter(rows, filter.value, { keys: ["#"], threshold: matchSorter.rankings.CONTAINS }),
            filterAll: true,
	    width: getColumnWidth(this.state.data, 'number', '#'),
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
              '&root=' + original.root +
              '&number=' + original.number +
              '&salish=' + original.salish +
              '&nicodemus=' + original.nicodemus +
              '&english=' + original.english
            }} >
            <Button icon floated='right'>
            	<Icon name='edit' />
            </Button>
            </Link>

          </div>
        )
      }
    ];

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
        data={this.props.getRootsQuery.roots}
        loading={this.props.getRootsQuery.loading}
        columns={columns}
        filterable
        defaultPageSize={5}
        className="-striped -highlight"
      />;

    return (
      <div className='ui content'>
        <h3>Lyon and Green-Wood's Root Dictionary</h3>
        <p></p>
        <div className="text-right">
	        <Link to={{
	          pathname: '/addroot/'
	        }} >
	          <Button icon labelPosition='left' size='small'>
	          	<Icon name='plus' />
	          	Add a root
	          </Button>
	        </Link>
        </div>
		<p></p>
		<SimpleKeyboard / >
		<p></p>
		<CheckboxRoot />
        {dataOrError}
      </div>
    );
  }
}

export default compose(
	graphql(getRootsQuery, { name: 'getRootsQuery' }),
  graphql(deleteRootMutation, { name: 'deleteRootMutation' })
)(withRouter(RootsDictionary));
