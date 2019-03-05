import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
    Accordion,
	Icon,
} from 'semantic-ui-react';
import "./AccordionTables.css";

class StemsMetadata extends Component {
	state = { activeIndex: 0 }

	  handleClick = (e, titleProps) => {
	    const { index } = titleProps
	    const { activeIndex } = this.state
	    const newIndex = activeIndex === index ? -1 : index

	    this.setState({ activeIndex: newIndex })
	  }

    render() {
       const { activeIndex } = this.state

		const MetadataStemsSubmenu = () => (
		    <Accordion fluid styled>
				<Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
					<Icon name='dropdown' />
					Stem List (unfinished)
				</Accordion.Title>
				<Accordion.Content active={activeIndex === 0}>
				<p>Metadata for Stem List goes here.</p>  
				</Accordion.Content>  
			</Accordion>
	);
	
      return (     
	  	<div className='ui content'>
			<MetadataStemsSubmenu />
		</div>
	);
  }
}


export default StemsMetadata;
