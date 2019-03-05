import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
    Accordion,
	Icon,
} from 'semantic-ui-react';
import "./AccordionTables.css";

class AffixMetadata extends Component {
	state = { activeIndex: 0 }

	  handleClick = (e, titleProps) => {
	    const { index } = titleProps
	    const { activeIndex } = this.state
	    const newIndex = activeIndex === index ? -1 : index

	    this.setState({ activeIndex: newIndex })
	  }

    render() {
       const { activeIndex } = this.state

		const MetadataAffixesSubmenu = () => (
		    <Accordion fluid styled>
				<Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
					<Icon name='dropdown' />
					Affix List (unfinished)
				</Accordion.Title>
				<Accordion.Content active={activeIndex === 0}>
				<p>Metadata for Affix List goes here.</p>  
				</Accordion.Content>  
			</Accordion>
	);
	
      return (     
	  	<div className='ui content'>
			<MetadataAffixesSubmenu />
		</div>
	);
  }
}


export default AffixMetadata;