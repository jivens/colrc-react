import React, { Component } from 'react';
import { Input, Button, Icon, Form, Grid } from 'semantic-ui-react';

class KeyPicker extends Component {

constructor(props) {
    super(props);
    this.state = {currentChar:"", currentText:""};
	this.handleItemClick = this.handleItemClick.bind(this);
	this.handleChange = this.handleChange.bind(this);
	this.typeLetter = this.typeLetter.bind(this);
	};

handleItemClick = (e, { name }) => this.setState({ activeItem: name });

handleChange = (e) => { 
	console.log("e.target.value=" + e.target.value);
	this.setState({currentText: e.target.value});
	e.target.focus();
};

typeLetter = (e) => {
	/*box.value = box.value + char;*/
	e.preventDefault();
	console.log("current char=" + e.target.name);
	const text = this.state.currentText + e.target.name;
	this.setState({currentText:text});
};

render() {
	function validateForm(form){
		var txtbox = form.tosearch;
		var radios = form.type;
		var result1 = validateTextBox(txtbox);
		return result1;
	}
	function validateTextBox(txtbox){
		if(txtbox.value.match(/^(\s)*$/)){
			alert("Enter text in the textbox");
			return false;
		}
		return true;
	}

	const CharInput = () => (
		/*<form action="../scripts/search_all.php"  name="search_dict" id="search_dict" method="POST">*/
		<Form key="searchInput">
			<Input placeholder="Search..." onChange={this.handleChange} value={this.state.currentText} label="search" size="mini" name="tosearch_affix" id = "tosearch_affix" key="tosearch_affix" />;
				Special Characters:
				<a onClick={this.typeLetter} name="&#660;" className="letter" key="&#660;">&#660;</a>
				<a onClick={this.typeLetter} name="ʕ" className="letter" key="ʕ">ʕ</a>
				<a onClick={this.typeLetter} name="&#269;" className="letter" key="&#269;">&#269;</a>
				<a onClick={this.typeLetter} name="ǰ" className="letter" key="ǰ">ǰ</a>
				<a onClick={this.typeLetter} name="&scaron;" className="letter" key="&scaron;">&scaron;</a>
				{/*<a onClick={typeLetter(box, "x&#803;")} className="letter">x&#803;</a>
				<a onClick={typeLetter(box, "ɫ")} className="letter">ɫ</a>
				<a onClick={typeLetter(box, "&#695;")} className="letter">&#695;</a>
				<a onClick={typeLetter(box, "‿")} className="letter">‿</a>
				<a onClick={typeLetter(box, "ɛ")} className="letter">ɛ</a>
				<a onClick={typeLetter(box, "ə")} className="letter">ə</a>
				<a onClick={typeLetter(box, "ɔ")} className="letter">ɔ</a>
				<a onClick={typeLetter(box, "&middot;")} className="letter">&middot;</a>
				<a onClick={typeLetter(box, "á")} className="letter">á</a>
				<a onClick={typeLetter(box, "é")} className="letter">é</a>
				<a onClick={typeLetter(box, "í")} className="letter">í</a>
				<a onClick={typeLetter(box, "ó")} className="letter">ó</a>
				<a onClick={typeLetter(box, "ú")} className="letter">ú</a>
				<a onClick={typeLetter(box, "ɛ́")} className="letter">ɛ́</a>
				<a onClick={typeLetter(box, "&#8224;")} className="letter">&#8224;</a>
				<a onClick={typeLetter(box, "&#8225;")} className="letter">&#8225;</a>
				<a onClick={typeLetter(box, "&#167;")} className="letter">&#167;</a>*/}
		</Form>
		);

	 return (     
	  	<div className='ui content'>
			<CharInput />
		</div>
		);
	}
}
export default KeyPicker;


