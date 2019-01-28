import React, { Component } from 'react';

class ContactUs extends Component {

	state = {
		fields: {
			name: '',
			email: '',
			message: ''
		},
		people: [],
	};

	onInputChange = (evt) => {
		const fields = this.state.fields;
		fields[evt.target.name] = evt.target.value;
		this.setState({ fields });
	};

	onFormSubmit = (evt) => {
		const people = [ ...this.state.people, this.state.fields ];
		this.setState({ people, fields:  {
			name: '',
			email: '',
			message: ''
		}
		});
		evt.preventDefault();
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
		  <input
			placeholder='Name'
			name='name'
			value={this.state.fields.name}
			onChange={this.onInputChange}
		  />
		  <input
			placeholder='Email'
			name='email'
			value={this.state.fields.email}
			onChange={this.onInputChange}
		  />
		  <input
			placeholder='Message'
			name='message'
			size='38'
			value={this.state.fields.message}
			onChange={this.onInputChange}
		  />
			<input type='submit' />
		  </form>

		  <div>
		  <h3>People</h3>
		  <ul>
		  { this.state.people.map(({ name, email }, i) =>
			<li key={i}>{name} ({ email })</li>
			) }
			</ul>

		  </div>

		  </div>

        </div>
      );
    }
}

export default ContactUs;
