import React, { Component } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';


class BibliographyAccordion extends Component {

render() {

const bibIntro = 
  <Accordion>
      <AccordionItem>
          <AccordionItemTitle>
              <div className="u-position-relative">
              Bibliography Information
              <div className="accordion__arrow" role="presentation" />
            </div>
          </AccordionItemTitle>
          <AccordionItemBody>
        <p>
          write intro here?
        </p>
    </AccordionItemBody>
  </AccordionItem>
  </Accordion>
;

    return (
        <div className='ui content'>
		{bibIntro}
		</div>
    );
  }
 }


export default BibliographyAccordion;
