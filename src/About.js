import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'
import PropTypes from "prop-types";
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';
import "./AccordionTables.css";

class About extends Component {
    render() {

	  const AffixListIntro = () => (
	    <Accordion>
			<AccordionItem>
				<AccordionItemTitle>
	                <p className="u-position-relative">
	                Other online resources
	                <div className="accordion__arrow" role="presentation" />
	            	</p>
				</AccordionItemTitle>
				<AccordionItemBody>
				 	<p> 
				 	The COLRC also links to <a href="http://ivydoak.com/Coeurd'Alene/grammar/crgrammar.htm">Ivy Doak's grammatical sketch</a> of Coeur d'Alene.  Other websites with Coeur d'Alene material include the following:  The official Coeur d'Alene <a href="http://www.cdatribe-nsn.gov/" target="_blank" rel="noopener noreferrer">website</a>; the 1917 publication of Teit's <a href="http://www.archive.org/stream/folktalesofsalis00boas#page/119/mode/1up" target="_blank" rel="noopener noreferrer">Coeur d'Alene "tales"</a> which include different versions of a small number of the Coeur d'Alene texts in the archive; Reichard's 1938 grammar published in <a href="http://www.archive.org/stream/rosettaproject_tqw_morsyn-2#page/n529/mode/2up" target="_blank" rel="noopener noreferrer">The Handbook of American Indian Languages v.3</a>; Reichard's 1947 <a href="http://archive.org/stream/analysisofcoeurd41reic#page/n5/mode/2up" target="_blank" rel="noopener noreferrer">An Analysis of Coeur d'Alene Indian Myths</a>, which is available at the University of Michigan Digital Library General Collection; and Lyon's 2010 <a href="http://www.sfu.ca/nwjl/Articles/V004_N02/LyonNicodemusCards.html" target="_blank" rel="noopener noreferrer">Lawrence Nicodemus's Snchitsu'umshtsn File Card Collection in Dictionary Format</a>.
          			</p>
				</AccordionItemBody>
			</AccordionItem>
			<AccordionItem>
				<AccordionItemTitle>
	                <p className="u-position-relative">
	                Previous versions of this site
	                <div className="accordion__arrow" role="presentation" />
	            	</p>
				</AccordionItemTitle>
				<AccordionItemBody>
				 	<p> 
			            The original Coeur d'Alene archive was created by Shannon Bischoff and Musa Yassin Fort in the summer of 2009. The original website was created without any prior web design/building        knowledge using <a href="http://www.w3schools.com/" target="_blank" rel="noopener noreferrer">w3schools.com</a> free tutorials over a period of six weeks.  The site was constructed using simple html, javascript, and css code, all designed based on lessons at the site. The search mechanisms were a bit more complicated and required php, which can also be learned at the w3 schools website.
			       </p>
		          <p>
		            	A second version of the website is was developed in 2013 with the support of the National Science Foundation (award numbers BCS-1160394 and BCS-1160627), using these freely available, open-source, and easily learnable tools - expanded to include xml and ajax. You can find free tutorials for all of these tools at <a href="http://www.w3schools.com" target="blank" rel="noopener noreferrer">w3schools.com</a>.          			
		          </p>
		          <p>
		          		The current version of the site has been redeveloped beginning in 2019 with the support of the National Endowment for the Humanities award number PD-261031-18, using more specialized open-source tools that allow increased functionality and responsive design.  The site is developed and maintained using React and mySQL.  You can find free tutorials for these tools in a number of venues, including YouTube.
		          		</p>
				</AccordionItemBody>
			</AccordionItem>
				<AccordionItem>
				<AccordionItemTitle>
	                <p className="u-position-relative">
	                More information
	                <div className="accordion__arrow" role="presentation" />
	            	</p>
				</AccordionItemTitle>
				<AccordionItemBody>
		 		  <p>
		            Additional resources will be included, as well as further documentation about the methods
		            used by Reichard and Nicodemus to collect many of these resources. We also will be posting
		            our source files (for all material other than the language resources themselves) to the
		            site, so that anyone who'd like to make use of our code to develop their own websites
		            may do so. If you would like to help or have questions, comments or suggestions,
		            contact us using the "Contact Us" link on the left menu, or by emailing us directly
		            at: <b>crd [dot] archive [at] gmail [dot] com</b>.
		          </p>
				</AccordionItemBody>
			</AccordionItem>
	    </Accordion>
  	);

      return (
        <div>
          <h3>About this site</h3>
        	<p>
		     This resource contains the <Link to="/rootdictionary">Couer d'Alene Root Dictionary</Link> (<a href="http://meltr.org/Publications/" target="_blank" rel="noopener noreferrer">Lyon and Greene-Wood 2007</a>) with nearly 1,400 roots and about 7690 "word" forms,	Reichard's 1939 <a href="./stem_list">Stem List</a> with some 1,300 stems, a list of roughly <a href="./affix_list">200 affixes</a>, and over 1,200 pages of Coeur d'Alene <a href="./texts">texts</a> (copies of <a href="http://anthropology.usf.edu/women/reichard/reichard.html" target="_blank" rel="noopener noreferrer">Gladys Reichard's</a> 1927-1929 field notes and typed manuscripts) and English translations from <a href="http://archive.org/stream/analysisofcoeurd41reic#page/n5/mode/2up" target="_blank" rel="noopener noreferrer">Reichard 1947</a>. Resources to help with <Link to="/spelling">spelling and pronunciation</Link> of Coeur d'Alene include lists of the consonant and vowel phonemes of Coeur d'Alene, a comparison of the three different orthographies most commonly used to write Coeur d'Alene (Nicodemus, Reichard, and Salishan), and a guide to pronunciation.    A <a  href="./bibliography">working bibliography</a> is also included.  This bibliography continues to be updated as we identify additional resources.
      		</p>
          <AffixListIntro />
        </div>
      );
    }
}

export default About;
