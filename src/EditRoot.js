import React, { Component } from 'react';
import queryString from 'query-string';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class EditRoot extends Component {

	constructor(props) {
    super(props);
		this.onSubmit = this.onFormSubmit.bind(this);
		this.onInputChange = this.onInputChange.bind(this);
    // create a ref to store the textInput DOM element
    this.idInput = React.createRef();
		this.state = {
			fields: {
				id: "",
				root: "",
				number: "",
				salish: "",
				nicodemus: "",
				english: "",
			},
			fieldErrors: {}
		};
  }

	componentDidMount() {
	  const values = queryString.parse(this.props.location.search);
		this.setState({
			fields: {
				id: values.id,
				root: values.root,
				number: values.number,
				salish: values.salish,
				nicodemus: values.nicodemus,
				english: values.english
			}
		}, () => {
			//this.idInput.current.value = values.id;
			console.log("The current Id: " + values.id);
			//this.forceUpdate();
		});
	}

	onFormSubmit = async (evt) => {
		evt.preventDefault();
		console.log("In form submission");
		try {
			const { id, root, number, salish, nicodemus, english } = this.state.fields;
			const body = {
				id: id,
				root: root,
				number: number,
				salish: salish,
				nicodemus: nicodemus,
				english: english
			};
			const path = 'http://localhost:4000/roots/' + id;
			const headers = {
				'Content-Type': 'application/json;charset=UTF-8',
	      "Access-Control-Allow-Origin": "*"
			};
			const response = await axios.put(path, body, {headers});
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
				<h3>Edit a Root</h3>
				<p>
					Change your root in wonderful ways.
				</p>

				<div>
					<form onSubmit={this.onFormSubmit}>
						<h5>Id: </h5>
						<input
							placeholder='Id'
							name='id'
							value={this.state.fields.id}
							onChange={this.onInputChange}
							ref={this.idInput}
						/>
						<span style={{ color: 'red' }}>{this.state.fieldErrors.id}</span>
						<br />

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

export default withRouter(EditRoot);
