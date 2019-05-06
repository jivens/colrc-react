import React, { Component } from 'react';
import { Form, Input, Button, Icon } from 'semantic-ui-react';
import SimpleKeyboard from "../utilities/SimpleKeyboard";

class Search extends Component {

	constructor(props) {
    	super(props);
		this.onSubmit = this.onFormSubmit.bind(this);
		this.onInputChange = this.onInputChange.bind(this);
		this.state = {
			fields: {
				searchtext: ""
			},
			fieldErrors: {},
			data: [],
    		loading: true,
		};
	}

	onFormSubmit = async (evt) => {
		evt.preventDefault();
		console.log("In search form submission");
		try {
	    	const response = await fetch(`http://localhost:4000/roots?nicodemus_like=${this.state.fields.searchtext}`);
	      	if (!response.ok) {
	        	throw Error(response.statusText);
	    	}
	      	const json = await response.json();
	      	this.setState({ loading: false, data: json });
	      	console.log(this.state.data);
	    } catch (error) {
	    	console.log("This is my Error: " + error);
	      	this.setState({ error: error });
	    }
	};


	onInputChange = (evt) => {
		console.log("Change event called on " + evt.target.value);
		const fields = Object.assign({}, this.state.fields);
		console.log(evt.target.name);
		fields[evt.target.name] = evt.target.value;
		this.setState({ fields });
	};

	render() {
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
		</div>
		) 
	};
}
export default Search;