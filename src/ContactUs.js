import React, { Component } from 'react';

class ContactUs extends Component {

	state = {
		fields: {
			name: '',
			email: '',
			message: '',
		},
		fieldErrors: {},
		people: [],
	};

	onFormSubmit = (evt) => {
		const people = [ ...this.state.people, this.state.fields ];
		this.setState({
			 people, fields:  {
				name: '',
				email: '',
				message: ''
			}
		});
		evt.preventDefault();
	};

	onInputChange = (evt) => {
		const fields = Object.assign({}, this.state.fields);
		fields[evt.target.name] = evt.target.value;
		this.setState({ fields });
	};



	render() {
		return (
			<div>
				<h3>Contact Us</h3>
				<p>
				If you would like to help or have questions, comments or suggestions,
				contact us using the "Contact Us" link on the left menu, or by emailing us directly
				at: <b>crd [dot] archive [at] gmail [dot] com</b>.
				</p>

				<div>
					<form onSubmit={this.onFormSubmit}>
						<h5>Name: </h5>
						<input
							placeholder='Name'
							name='name'
							value={this.state.fields.name}
							onChange={this.onInputChange}
						/>
						<span style={{ color: 'red' }}>{this.state.fieldErrors.name}</span>
						<br />

						<h5>Email:</h5>
						<input
							placeholder='Email'
							name='email'
							value={this.state.fields.email}
							onChange={this.onInputChange}
						/>
						<span style={{ color: 'red' }}>{this.state.fieldErrors.email}</span>
						<br />
						
						<h5>Message:</h5>
						<input
							placeholder='Message'
							name='message'
							size='38'
							value={this.state.fields.message}
							onChange={this.onInputChange}
						/>
						<span style={{ color: 'red' }}>{this.state.fieldErrors.message}</span>
						<br />

						<input type='submit' />
					</form>

					<div>
						<h5>People</h5>
						<ul>
							{ this.state.people.map(({ name, email, message}, i) => (
								<li key={i}>{name} ({ email }) { message }</li>
							)) }
						</ul>
					</div>
				</div>
			</div>
		);
	}
};

export default ContactUs;
