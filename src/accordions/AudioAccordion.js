import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';

class AudioAccordion extends Component {

  render() {
	const audioIntro = 
	    <Accordion>
	        <AccordionItem>
	            <AccordionItemTitle>
	                <p className="u-position-relative">
	                Introduction
	                <div className="accordion__arrow" role="presentation" />
	            	</p>
	            </AccordionItemTitle>
	            <AccordionItemBody>
			        <p>Below are several audio recordings of Coeur d'Alene.  For those for which we have corresponding field notes, we have linked to these resources (which are also available in the <Link to="/texts">texts</Link> area of this site).</p>
				</AccordionItemBody>
			</AccordionItem>
	    </Accordion>
  	;
	  return (
        <div className='ui content'>
		{audioIntro}
	   </div>
      );
    }
}

export default AudioAccordion;
