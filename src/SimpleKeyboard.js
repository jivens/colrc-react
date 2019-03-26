import React, {Component} from 'react';
import Keyboard from 'react-simple-keyboard';
import { Form, Input } from 'semantic-ui-react';
import 'react-simple-keyboard/build/css/index.css';

class SimpleKeyboard extends Component {
	keyboardRef: Keyboard;
	state = {
	    layoutName: "default",
	    input: ""
	  };

	onChange = input => {
	    this.setState({
	      input: input
	    });
	    console.log("Input changed", input);
	};

	onKeyPress = button => {
	    console.log("Button pressed", button);
	    /**
	     * If you want to handle the shift and caps lock buttons
	     */
	    if (button === "{shift}" || button === "{lock}") this.handleShift();
	};

  handleShift = () => {
    let layoutName = this.state.layoutName;

    this.setState({
      layoutName: layoutName === "default" ? "shift" : "default"
    });
  };

  onChangeInput = event => {
    let input = event.target.value;
    this.setState(
      {
        input: input
      },
      () => {
        this.keyboardRef.keyboard.setInput(input);
      }
    );
  };


  render(){
  const salish = {
  'default' : [
    "á ä ä́ é ɛ ɛ́ í ι ó ú ə ɔ ụ ʷ",
    "ɫ ∤ č ǰ š x̣ ʔ ʕ ‿ · † ‡ §",
    "1 2 3 4 5 6 7 8 9 0 - = {bksp}",
    "q w e r t y u i o p [ ] \\",
    "{lock} a s d f g h j k l ; '",
    "{shift} z x c v b n m , . / {shift}",
    "{space}"
  ],
  'shift' : [
    "á ä ä́ é ɛ ɛ́ í ι ó ú ə ɔ ụ ʷ",
    "ɫ ∤ č ǰ š x̣ ʔ ʕ ‿ · † ‡ §",
    "! @ # $ % ^ & * ( ) _ + {bksp}",
    "Q W E R T Y U I O P { } |",
    "{lock} A S D F G H J K L : \"",
    "{shift} Z X C V B N M < > ? {shift}",
    "{space}"
  ]
};

    return (
      <Form>
        <input
          autoFocus
          key="keyInput"
          value={this.state.input}
          placeholder={"Tap on the virtual keyboard to start"}
          onChange={e => this.onChangeInput(e)}
        />
      <Keyboard
        ref={r => (this.keyboardRef = r)}
        key="keyboard"
        layout={salish}
        layoutName={this.state.layoutName}
		preventMouseDownDefault={true}
        onChange={input =>
          this.onChange(input)}
        onKeyPress={button =>
          this.onKeyPress(button)}
      />
      </Form>
    );
  }
}

export default SimpleKeyboard;