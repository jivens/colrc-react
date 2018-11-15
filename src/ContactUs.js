import React, { Component } from 'react';

class ContactUs extends Component {
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
			placveholder='Name'
			name='name'
			value={this.state.fields.name}
			onChange={this.onInputChange}
		  />
		  <input
			placeholder='Email'
			name='email'
			value={this.state.fields.name}
			onChange={this.onInputChange}
		  />
		  <input
			placeholder='Message'
			name='message'
			value={this.state.fields.name}
			onChange={this.onInputChange}
		  />
			<input type='submit' />
		  </form>
		  
		  </div>
			
        </div>
      );
    }
}

export default ContactUs;
