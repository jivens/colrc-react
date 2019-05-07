import React, { Component } from 'react';
import { Form, Input, Button, Icon } from 'semantic-ui-react';
import SimpleKeyboard from "../utilities/SimpleKeyboard";
import DecoratedTextSpan from '../utilities/DecoratedTextSpan';
import ReactTable from "react-table";
import matchSorter from 'match-sorter';

class Search extends Component {

	constructor(props) {
    	super(props);
		this.onSubmit = this.onFormSubmit.bind(this);
		this.onInputChange = this.onInputChange.bind(this);
		this.loadSearchInfo = this.loadSearchInfo.bind(this);
		this.state = {
			fields: {
				searchtext: ""
			},
			fieldErrors: {},
			roots: {
				address: 'http://localhost:4000/roots',
				fields: ['nicodemus', 'salish', 'english'],
				data: [],
    			loading: false
    		},
			stems: {
				address: 'http://localhost:4000/stems',
				fields: ['reichard', 'nicodemus', 'salish', 'doak', 'english'],
				data: [],
    			loading: false
    		}
		};
	}

	loadSearchInfo = async (searchArea) => {
		try {
			const {address, fields} = this.state[`${searchArea}`];
			const searchField = fields[0];
			const fetchAddress = `${address}?${searchField}_like=${this.state.fields.searchtext}`;
			console.log(address);
			console.log(searchField);
			console.log(fetchAddress);
	    	const response = await fetch(fetchAddress);
	      	if (!response.ok) {
	        	throw Error(response.statusText);
	    	}
	      	const json = await response.json();
	      	const loadingKey = `${searchArea}.loading`;
	      	const dataKey = `${searchArea}.data`;
			const searchState = Object.assign({}, this.state);
			searchState[`${searchArea}`]['loading'] = false;
			searchState[`${searchArea}`]['data'] = json;
			console.log(searchState);
			this.setState({ searchState });
	    } catch (error) {
	    	console.log("This is my Error: " + error);
	    	const errorKey = `${searchArea}.error`;
	      	this.setState({ [`${searchArea}.error`]: error });
	    }
	};

	onFormSubmit = async (evt) => {
		evt.preventDefault();
		console.log("In search form submission");
		this.loadSearchInfo('roots');
		this.loadSearchInfo('stems');
	};


	onInputChange = (evt) => {
		console.log("Change event called on " + evt.target.value);
		const fields = Object.assign({}, this.state.fields);
		console.log(evt.target.name);
		fields[evt.target.name] = evt.target.value;
		this.setState({ fields });
	};

	render() {

	  	const getColumnWidth = (rows, accessor, headerText) => {
	  	  	const maxWidth = 600;
	  	  	const magicSpacing = 18;
	  	  	const cellLength = Math.max(
	  	    	...rows.map(row => (`${row[accessor]}` || '').length),
	  	    	headerText.length,
	  	  	);
	  	  	return Math.min(maxWidth, cellLength * magicSpacing);
  		};

		//set up the columns for the search results from roots
		const rootColumns = [{
			    accessor: 'id',
		        show: false
		  	},
	    	{
			    Header: 'Root',
			    accessor: 'root',
			    filterMethod: (filter, rows) =>
		        	matchSorter(rows, filter.value, { keys: ["root"], threshold: matchSorter.rankings.CONTAINS }),
		            filterAll: true,
			    width: getColumnWidth(this.state.roots.data, 'root', 'Root'),
		  	},
		  	{
			    Header: '#',
			    accessor: 'number',
			    filterMethod: (filter, rows) =>
		        	matchSorter(rows, filter.value, { keys: ["#"], threshold: matchSorter.rankings.CONTAINS }),
		            filterAll: true,
			    width: getColumnWidth(this.state.roots.data, 'number', '#'),
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
		    Cell: row => ( <DecoratedTextSpan str={row.value} />),
		  	},
		  	{
			    Header: 'English',
			    accessor: 'english',
			    filterMethod: (filter, rows) =>
		        	matchSorter(rows, filter.value, { keys: ["english"], threshold: matchSorter.rankings.CONTAINS }),
		        filterAll: true,
			    style: { 'white-space': 'unset' },
		  	}
	    ];

		//set up columns for stems results
		const stemsColumns = [{
				Header: 'Type',
				accessor: 'category',
				width: getColumnWidth(this.state.stems.data, 'category', 'Type'),
				filterMethod: (filter, row) => {
					if (filter.value === "all") {
						return true;
					}
					return row[filter.id] === filter.value;
				},
				Filter: ({filter, onChange}) =>
					<select onChange = { event => onChange(event.target.value)}
						style = {{ width: "100%"}}
						value = {filter ? filter.value : "all"} >
					<option value = "all" > Show All < /option> 
					<option value = "verb" > Verbs < /option> 
					<option value = "noun" > Nouns < /option> 
					<option value = "other" > Other < /option> 
					</select>,
			}, 
			{
				Header: 'Reichard',
				accessor: 'reichard',
				filterMethod: (filter, rows) =>
					matchSorter(rows, filter.value, {
						keys: ["reichard"],
						threshold: matchSorter.rankings.CONTAINS
					}),
				filterAll: true,
			}, 
			{
				Header: 'Doak',
				accessor: 'doak',
				filterMethod: (filter, rows) =>
					matchSorter(rows, filter.value, {
						keys: ["doak"],
						threshold: matchSorter.rankings.CONTAINS
					}),
				filterAll: true,
			}, 
			{
				Header: 'Salish',
				accessor: 'salish',
				filterMethod: (filter, rows) =>
					matchSorter(rows, filter.value, {
						keys: ["salish"],
						threshold: matchSorter.rankings.CONTAINS
					}),
				filterAll: true,
			}, 
			{
				Header: 'Nicodemus',
				accessor: 'nicodemus',
				filterMethod: (filter, rows) =>
					matchSorter(rows, filter.value, {
						keys: ["nicodemus"],
						threshold: matchSorter.rankings.CONTAINS
					}),
		   		Cell: row => ( <DecoratedTextSpan str={row.value} />),
				filterAll: true,
			}, 
			{
				Header: 'English',
				accessor: 'english',
				style: {'white-space': 'unset'},
				filterMethod: (filter, rows) =>
					matchSorter(rows, filter.value, {
						keys: ["english"],
						threshold: matchSorter.rankings.CONTAINS
					}),
				filterAll: true,
			}, 
			{
				Header: 'Note',
				accessor: 'note',
				style: {'white-space': 'unset'},
				filterMethod: (filter, rows) =>
					matchSorter(rows, filter.value, {
						keys: ["note"],
						threshold: matchSorter.rankings.CONTAINS
					}),
				filterAll: true,
			}];

		//build the roots results table
	     const rootsDataOrError = this.state.roots.error ?
	      	<div style={{ color: 'red' }}>Oops! Something went wrong!</div> :
	      	<ReactTable
	        	data={this.state.roots.data}
	        	loading={this.state.roots.loading}
	        	columns={rootColumns}
	        	filterable
				pageSize = {this.state.roots.data.length > 5 ? 5 : this.state.roots.data.length}
	        	className="-striped -highlight"
	      	/>;

		//build the stems results table
		const stemsDataOrError = this.state.stems.error ?
			<div style = {{	color: 'red' }}> Oops!Something went wrong!</div> : 
			<ReactTable
				data = {this.state.stems.data}
				loading = {this.state.stems.loading}
				columns = {stemsColumns}
				pageSize = {this.state.stems.data.length > 5 ? 5 : this.state.stems.data.length}
				className = "-striped -highlight left"
				filterable
				/>;

	return(
		<div classname="ui content">
			<Form onSubmit={this.onFormSubmit} width={14}>				
				<Form.Input 
					action={{ color: 'blue', labelPosition: 'left', icon: 'search', content: 'Submit' }} 
					placeholder='Type your search terms here...'
				    actionPosition='left'
				    name='searchtext'
					value={this.state.fields.searchtext}
				    onChange={this.onInputChange}
				    >
  				</Form.Input>
			</Form>
			<p></p>
			<SimpleKeyboard />
			<p></p>
			<p>Results from Root Dictionary</p>
			{rootsDataOrError}
			<p></p>
			<p>Results from Stem Lists</p>
			{stemsDataOrError}
		</div>
		) 
	};
}
export default Search;