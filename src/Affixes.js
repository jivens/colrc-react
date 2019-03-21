import React, { Component } from 'react';
import { Grid, Checkbox, Menu } from 'semantic-ui-react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import matchSorter from 'match-sorter';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';
import "./AccordionTables.css";
import AffixList from "./AffixList";
import AffixMetadata from "./AffixMetadata";
import KeyPicker from "./KeyPicker";

class Affixes extends Component {
	constructor(props) {
	    super(props);
	    this.state = { 
	    	activeItem: 'list', 
	    };
	    this.handleItemClick = this.handleItemClick.bind(this);
	  };

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
		const { activeItem } = this.state;	
	  	const AffixListIntro = () => (
		    <Accordion>
		        <AccordionItem>
		            <AccordionItemTitle>
		                <p className="u-position-relative">
		                Introduction
		                <div className="accordion__arrow" role="presentation" />
		            	</p>
		            </AccordionItemTitle>
		            <AccordionItemBody>
				      <p>
				        The the nearly 200 affixes included here come from <a href="http://www.archive.org/stream/rosettaproject_tqw_morsyn-2#page/n529/mode/2up" target="_blank" rel="noopener noreferrer">Reichard's 1938 grammar</a> (listed as 'Reichard 1938' on the left menu). Nearly all affixes are taken from Reichard 1938, these include a link to the relevant page of the original publication.  The sub-section in which the affix appears is given in parentheses "( )". A very small number of entries come from Doak 1997, which is not accessible online. Affixes that Reichard identified as variants of other forms are indicated as such, with links to the main entry given by Reichard.
				      </p>
					</AccordionItemBody>
				</AccordionItem>
		    </Accordion>
	  );

let currentItem; 
    if (this.state.activeItem === "list") {
      	currentItem = <AffixList />;
    }
	else {
		currentItem = <AffixMetadata />;
	};
    return (
        <div className='ui content'>

	      	<Menu size='mini'>
		        <Menu.Item 
					name='list'
					active={activeItem === 'list'}
					onClick={this.handleItemClick}>
					Affix List
		        </Menu.Item>
		        <Menu.Item 
					name='metadata'
					active={activeItem === 'metadata'}
					onClick={this.handleItemClick}>
					Metadata
		        </Menu.Item>
	      	</Menu>
	      	<p></p>
	      	<AffixListIntro />
	      	<KeyPicker />
	      	<p></p>
        	{currentItem}
      	</div>
      );
    }
}

export default Affixes;
