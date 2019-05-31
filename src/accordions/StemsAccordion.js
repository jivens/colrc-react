import React, { Component } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';

class StemsAccordion extends Component {

    render() {
	  	const stemsIntro = 
		    <Accordion>
		        <AccordionItem>
		            <AccordionItemTitle>
		                <div className="u-position-relative">
		                Developer Note (temporary)
		                <div className="accordion__arrow" role="presentation" />
		            	</div>
		            </AccordionItemTitle>
		            <AccordionItemBody>
					<p> Developer note:  I choose to mock up the annotated stem list because it's the most complex of the lists we have on the production site.  I've added notes on font/display issues, all are signed --avf.  These shouldn't go into the db
					</p>
					</AccordionItemBody>
				</AccordionItem>
				<AccordionItem>
		            <AccordionItemTitle>
		            	<div className="u-position-relative">
				    	Introduction
		                <div className="accordion__arrow" role="presentation" />
		                </div>
				    </AccordionItemTitle>
				    <AccordionItemBody>
				        <p> This version of the stem list contains notes and comments based on the analysis of Ivy Doak. To access the list in a dictionary form, use the 'browse' or 'search' features above. Each entry begins with the stem identified by Reichard. The root identified by Doak is then presented, followed by a transliteration of the stem into the Salish and Nicodemus spelling systems. Notes are in the rightmost column. The stems are presented in several groups - first the 'verbs', then 'adverbs, interjections, and conjunctions', and finally the 'nouns'. Note that this list is currently under construction. Where we are missing information about a particular transcriptions of the Coeur d'Alene stem, you will find " -- "; forms for which we have no English translation are noted.
		        		</p>
		        		<p> You can also view <a href="r_stemlist.pdf" target="_blank">Reichard 1939</a> in its        original form (as a pdf), or as a <a href="original_stem_list.html" target="_blank">set of images</a> that you can view in your browser.
				       </p>
		            </AccordionItemBody>
		        </AccordionItem>
		    </Accordion>
	  	;
    return (
        <div className='ui content'>
        	{stemsIntro}
      	</div>
      );
    }
}
  


export default StemsAccordion;
