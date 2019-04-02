import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';
import StemList from "./StemList";
import StemsMetadata from "./StemsMetadata";

class Stems extends Component {
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
	  	const StemListIntro = () => (
		    <Accordion>
		        <AccordionItem>
		            <AccordionItemTitle>
		                <p className="u-position-relative">
		                Developer Note (temporary)
		                <div className="accordion__arrow" role="presentation" />
		            	</p>
		            </AccordionItemTitle>
		            <AccordionItemBody>
					<p> Developer note:  I choose to mock up the annotated stem list because it's the most complex of the lists we have on the production site.  I've added notes on font/display issues, all are signed --avf.  These shouldn't go into the db
					</p>
					</AccordionItemBody>
				</AccordionItem>
				<AccordionItem>
		            <AccordionItemTitle>
		            	<p className="u-position-relative">
				    	Introduction
		                <div className="accordion__arrow" role="presentation" />
		                </p>
				    </AccordionItemTitle>
				    <AccordionItemBody>
				        <p> This version of the stem list contains notes and comments based on the analysis of Ivy Doak. To access the list in a dictionary form, use the 'browse' or 'search' features above. Each entry begins with the stem identified by Reichard. The root identified by Doak is then presented, followed by a transliteration of the stem into the Salish and Nicodemus spelling systems. Notes are in the rightmost column. The stems are presented in several groups - first the 'verbs', then 'adverbs, interjections, and conjunctions', and finally the 'nouns'. Note that this list is currently under construction. Where we are missing information about a particular transcriptions of the Coeur d'Alene stem, you will find " -- "; forms for which we have no English translation are noted.
		        		</p>
		        		<p> You can also view <a href="r_stemlist.pdf" target="_blank">Reichard 1939</a> in its        original form (as a pdf), or as a <a href="original_stem_list.html" target="_blank">set of images</a> that you can view in your browser.
				       </p>
		            </AccordionItemBody>
		        </AccordionItem>
		    </Accordion>
	  	);
let currentItem; 
    if (this.state.activeItem === "list") {
      	currentItem = <StemList />;
    }
	else {
		currentItem = <StemsMetadata />;
	};
    return (
        <div className='ui content'>
	      	<Menu size='mini'>
		        <Menu.Item 
					name='list'
					active={activeItem === 'list'}
					onClick={this.handleItemClick}>
					Stem Lists
		        </Menu.Item>
		        <Menu.Item 
					name='metadata'
					active={activeItem === 'metadata'}
					onClick={this.handleItemClick}>
					Metadata
		        </Menu.Item>
	      	</Menu>
	      	<p></p>
	      	<StemListIntro />
	      	<p></p>
        	{currentItem}
      	</div>
      );
    }
}
  


export default Stems;
