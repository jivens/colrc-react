import React, { Component, lazy, Suspense } from 'react';
import { Grid, Button, Icon, Menu } from 'semantic-ui-react';
import ReactTable from "react-table";
import {createResource} from "simple-cache-provider";
import {cache} from "./cache";
import Api from "./Api";
import ErrorBoundary from "./ErrorBoundary";
import "react-table/react-table.css";
import matchSorter from 'match-sorter';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';
import "./AccordionTables.css";
import "./Colrc.css";
import Dictionary from "./Dictionary";
import RootsHistory from "./RootsHistory";
import RootsMetadata from "./RootsMetadata";

class Roots extends Component {
	constructor(props) {
	    super(props);
	    this.state = { 
	    	activeItem: 'dictionary', 
	    };
	    this.handleItemClick = this.handleItemClick.bind(this);
	  };

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
		const { activeItem } = this.state;
  		const RootsIntro = () => (
		    <Accordion>
		        <AccordionItem>
		            <AccordionItemTitle>
		                <p className="u-position-relative">
		                Introduction
		                <div className="accordion__arrow" role="presentation" />
		            	</p>
		            </AccordionItemTitle>
		            <AccordionItemBody>
			            <p>The root dictionary presented here was compiled by John Lyon and Rebecca Greene-Wood and contains nearly 1,400 roots and about 7690 "word" forms. The data come from Lawrence Nicodemus's Coeur d'Alene dictionary. The original work was published by UMOPL and can be found at <a href="http://meltr.org/Publications/" target="_blank" rel="noopener noreferrer">Lyon and Greene-Wood 2007</a>. All material is copyrighted by the Coeur d'Alene Tribe and may not be copied in any format without written permission from the Coeur d'Alene Tribe.
					    </p>
					</AccordionItemBody>
				</AccordionItem>
				<AccordionItem>
		            <AccordionItemTitle>
		            	<p className="u-position-relative">
				    	Guide to Entries
		                <div className="accordion__arrow" role="presentation" />
		                </p>
				    </AccordionItemTitle>
				    <AccordionItemBody>
					    <p>For reasons of searchability and clarity of presentation, the organization of the dictionary has been altered from its original form. Within a root header, the entries are organized beginning with the least complex and move towards more complex forms. Each entry is separated by a new line and numbered. The entries first appear in the Salishan orthography, then the Nicodemus, and finally an English translation. Nicodemus sometimes identifies the simplest forms as (stem), but not in all cases. Intransitive and simple nominalized forms directly follow, then reduplicated forms, complex forms (those with lexical suffixes), and finally transitive forms and compounds. The following symbols are used to separate the different types of entries: intransitive (†), transitive (‡), complex (//), and compound (§) entries. Entries begin with a root skeleton followed by the transliterated Coeur d'Alene, followed by Nicodemus's English translation, grammatical notations, and additional information.
					    </p>
		            </AccordionItemBody>
		        </AccordionItem>
		    </Accordion>
	);
let currentItem; 
    if (this.state.activeItem === "dictionary") {
      	currentItem = <Dictionary />;
    }
    else if (this.state.activeItem === "history") {
		currentItem = <RootsHistory />;
	}
	else {
		currentItem = <RootsMetadata />;
	};
    return (
        <div className='ui content'>
	      	<Menu size='mini'>
		        <Menu.Item 
					name='dictionary'
					active={activeItem === 'dictionary'}
					onClick={this.handleItemClick}>
					Dictionary
		        </Menu.Item>
		        <Menu.Item 
			        name='history' 
			        active={activeItem === 'history'} 
			        onClick={this.handleItemClick}>
			        History 
		        </Menu.Item>
		        <Menu.Item 
					name='metadata'
					active={activeItem === 'metadata'}
					onClick={this.handleItemClick}>
					Metadata
		        </Menu.Item>
	      	</Menu>
	      	<p></p>
	      	<RootsIntro />
	      	<p></p>
        	{currentItem}
      	</div>
      );
    }
}

export default Roots;
