import React, { Component } from 'react';
import queryString from 'query-string';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class AddRoot extends Component {

	constructor(props) {
    super(props);
		this.onSubmit = this.onFormSubmit.bind(this);
		this.onInputChange = this.onInputChange.bind(this);
    // create a ref to store the textInput DOM element
		this.state = {
			fields: {
				root: "",
				number: "",
				salish: "",
				nicodemus: "",
				english: "",
			},
			fieldErrors: {}
		};
  }

	onFormSubmit = async (evt) => {
		evt.preventDefault();
		console.log("In add form submission");
		try {
			const { root, number, salish, nicodemus, english } = this.state.fields;
			const body = {
				root: root,
				number: number,
				salish: salish,
				nicodemus: nicodemus,
				english: english
			};
			const path = 'http://localhost:4000/roots';
			const headers = {
				'Content-Type': 'application/json;charset=UTF-8',
	      "Access-Control-Allow-Origin": "*"
			};
			const response = await axios.post(path, body, {headers});
			console.log(response);
			this.props.history.push('/rootdictionary');
			//history.push('/rootdictionary');
		} catch (err) {
			console.log(err);
			this.props.history.push('/rootdictionary');
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
				<h3>Add a Root</h3>
				<p>
					Make a new and beautiful root.
				</p>

				<div>
					<form onSubmit={this.onFormSubmit}>

						<h5>Root:</h5>
						<input
							placeholder='Root'
							name='root'
							value={this.state.fields.root}
							onChange={this.onInputChange}
						/>
						<span style={{ color: 'red' }}>{this.state.fieldErrors.root}</span>
						<br />

						<h5>Number:</h5>
						<input
							placeholder='Number'
							name='number'
							value={this.state.fields.number}
							onChange={this.onInputChange}
						/>
						<span style={{ color: 'red' }}>{this.state.fieldErrors.number}</span>
						<br />

						<h5>Salish:</h5>
						<input
							placeholder='Salish'
							name='salish'
							value={this.state.fields.salish}
							onChange={this.onInputChange}
						/>
						<span style={{ color: 'red' }}>{this.state.fieldErrors.salish}</span>
						<br />

						<h5>Nicodemus:</h5>
						<input
							placeholder='Nicodemus'
							name='nicodemus'
							value={this.state.fields.nicodemus}
							onChange={this.onInputChange}
						/>
						<span style={{ color: 'red' }}>{this.state.fieldErrors.nicodemus}</span>
						<br />

						<h5>English:</h5>
						<input
							placeholder='English'
							name='english'
							value={this.state.fields.english}
							onChange={this.onInputChange}
						/>
						<span style={{ color: 'red' }}>{this.state.fieldErrors.english}</span>
						<br />

						<input type='submit' />
					</form>


				</div>
			</div>
		);
	}
};

export default withRouter(AddRoot);
