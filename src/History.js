import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { 
	Accordion, 
	Icon,
} from 'semantic-ui-react'
import PropTypes from "prop-types";

class History extends Component {
 	state = { activeIndex: 0 }

	  handleClick = (e, titleProps) => {
	    const { index } = titleProps
	    const { activeIndex } = this.state
	    const newIndex = activeIndex === index ? -1 : index

	    this.setState({ activeIndex: newIndex })
	  }

    render() {
    const { activeIndex } = this.state

	const History = () => (

    <Accordion fluid styled>
		<Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
			<Icon name='dropdown' />
			About the Reichard, Nicodemus, Miyal materials:  Texts, Grammar, Stem List, Affix List
		</Accordion.Title>
		<Accordion.Content active={activeIndex === 0}>    
		    <p>The unpublished field notes and typed manuscripts of Coeur d'Alene myths and tales presented in this archive were recorded in 1927 and 1929 by Gladys Reichard. The COLRC contains a biographical sketch of Reichard by Julia S. Falk, used by permission, that you can access here ---**Link**----[link to Falk]. The texts, or narratives, cover what Reichard classified into "myths and tales" and "tales with historical elements". The "myths and tales" are further divided into "Coyote cycle" and "myths not in Coyote cycle." She notes in her English translation (Reichard 1947:5-6) in the collection there are... the following regarding the narratives:
			    </p>
			    <p className="indentQuote">"In this collection there are thirty-eight myths, that is, accounts of things as they happened before the world was as it is now; two tales or accounts of happenings in the historical period; and ten narratives of actual historical encounters which were remembered by living people or which happened not less than a hundred years ago."
			    </p>
		</Accordion.Content>
	</Accordion>

	);
	
      return (     
	  	<div className='ui content'>
			<History />
		</div>
	);
  }
}


export default History;
