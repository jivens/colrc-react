import React, { Component } from 'react';
import axios from 'axios';
import { Form,  Button, Icon } from 'semantic-ui-react';
import SimpleKeyboard from "../utilities/SimpleKeyboard";
import { withRouter } from 'react-router-dom';

class AddStem extends Component {

	constructor(props) {
    super(props);
		this.onSubmit = this.onFormSubmit.bind(this);
		this.onInputChange = this.onInputChange.bind(this);
    // create a ref to store the textInput DOM element
		this.state = {
			fields: {
	      category: "",
	      reichard: "",
	      doak: "",
	      salish: "",
	      nicodemus: "",
	      english: "",
	      note: ""
			},
			fieldErrors: {}
		};
  }

	onFormSubmit = async (evt) => {
		evt.preventDefault();
		console.log("In add form submission");
		try {
			const { category, reichard, doak, salish, nicodemus, english, note } = this.state.fields;
			const body = {
				category: category,
	      reichard: reichard,
	      doak: doak,
	      salish: salish,
	      nicodemus: nicodemus,
	      english: english,
	      note: note
			};
			const path = 'http://localhost:4000/stems';
			const headers = {
				'Content-Type': 'application/json;charset=UTF-8',
	      "Access-Control-Allow-Origin": "*"
			};
			const response = await axios.post(path, body, {headers});
			console.log(response);
			this.props.history.push('/stem');
			//history.push('/rootdictionary');
		} catch (err) {
			console.log(err);
			this.props.history.push('/stem');
		}
	};

	onInputChange = (evt) => {
		console.log("Change event called on " + evt.target.value);
		const fields = Object.assign({}, this.state.fields);
		fields[evt.target.name] = evt.target.value;
		this.setState({ fields });
	};

	render() {
		return (
			<div>
				<h3>Add a Stem</h3>
				<p>
					Fill in the fields below to add a new stem to the dictionary.
				</p>

				<div>
					<Form onSubmit={this.onFormSubmit}>
						<Form.Group widths='equal'>
							<Form.Input fluid label="Category"
							placeholder='Category'
							name='category'
							value={this.state.fields.category}
							onChange={this.onInputChange}
						/>
						<span style={{ color: 'red' }}>{this.state.fieldErrors.category}</span>
							<Form.Input fluid label="Reichard"
							placeholder='Reichard'
							name='reichard'
							value={this.state.fields.reichard}
							onChange={this.onInputChange}
						/>
						<span style={{ color: 'red' }}>{this.state.fieldErrors.reichard}</span>
						<Form.Input fluid label="Doak"
							placeholder='Doak'
							name='doak'
							value={this.state.fields.doak}
							onChange={this.onInputChange}
						/>
						<span style={{ color: 'red' }}>{this.state.fieldErrors.doak}</span>
						<Form.Input fluid label="Salish"
							placeholder='Salish'
							name='salish'
							value={this.state.fields.salish}
							onChange={this.onInputChange}
						/>
						<span style={{ color: 'red' }}>{this.state.fieldErrors.salish}</span>
						<Form.Input fluid label="Nicodemus"
							placeholder='Nicodemus'
							name='nicodemus'
							value={this.state.fields.nicodemus}
							onChange={this.onInputChange}
						/>
						<span style={{ color: 'red' }}>{this.state.fieldErrors.nicodemus}</span>
						<Form.Input fluid label="English"
							placeholder='English'
							name='english'
							value={this.state.fields.english}
							onChange={this.onInputChange}
						/>
						<span style={{ color: 'red' }}>{this.state.fieldErrors.english}</span>
						<Form.Input fluid label="Note"
							placeholder='Note'
							name='note'
							value={this.state.fields.note}
							onChange={this.onInputChange}
						/>
						<span style={{ color: 'red' }}>{this.state.fieldErrors.note}</span>
						</Form.Group>
			         	<Button basic color="blue" type='submit' icon size="mini" labelPosition="right">
			            	<Icon name='save' />
			            	Save Changes
			          	</Button>
					</Form>
				</div>
				<h3>Virtual Keyboard</h3>
				<SimpleKeyboard / >
			</div>
		);
	}
};

export default withRouter(AddStem);
