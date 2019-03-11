import React, { Component } from 'react';
import { Grid, Checkbox } from 'semantic-ui-react';
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


class Bibliography extends Component {

render() {

  const Checkbox = props => (
  		<input type="checkbox" {...props} />
		)

 	const getColumnWidth = (rows, accessor, headerText) => {
	  const maxWidth = 600
	  const magicSpacing = 15
	  const cellLength = Math.max(
	    ...rows.map(row => (`${row[accessor]}` || '').length),
	    headerText.length,
	  )
	  return Math.min(maxWidth, cellLength * magicSpacing)
	};

const BibIntro = () => (
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
          write intro here?
        </p>
    </AccordionItemBody>
  </AccordionItem>
  </Accordion>
);

const bibData = [
  {
    author: 'Barthmaier, Paul T.',
    year: '1996',
    title: "A Dictionary of Coeur d'Alene Salish from Gladys Reichard's file slips",
    reference: 'University of Montana M.A. Thesis',
    link: <a href="http://scholarworks.umt.edu/cgi/viewcontent.cgi?article=9309&context=etd" target="_blank" rel="noopener noreferrer">here</a>
  },
  {
    author: 'Bischoff, Shannon T.',
    year: '2011',
    title: "Lexical affixes, incorporation, and conflation: The case of Coeur d'Alene",
    reference: 'Studia Linguistica 65.1:1-32',
    link: ''
  },
  {
    author: 'Bischoff, Shannon T.',
    year: '2011',
    title: "Formal notes on Coeur d'Alene clause structure",
    reference: "Newcastle: Cambridge Scholars Press",
    link: ""
  },
  {
    author: "Bischoff, Shannon T.",
    year: "2007",
    title: "Functional Forms-Formal Functions: An account of Coeur d'Alene clause structure",
    reference: "PhD dissertation University of Arizona",
    link: ""
  },
  {
    author: "Bischoff, Shannon T.",
    year: "2006",
    title: "Basic clause structure in Coeur d'Alene A preliminary working paper",
    reference: "In MIT Working Papers on Endangered and Less Familiar Languages Volume on Salish, (eds) Shannon T. Bischoff, Lynnika Buttler, Peter Norquist, and Daniel Siddiqi. Cambridge MIT Press.",
    link: ""
  },
  {
    author: "Bischoff, Shannon T.",
    year: "2006",
    title: "The left periphery in Coeur d'Alene Evidence from the Reichard Manuscripts",
    reference: "In Proceedings of WSCLA 10 UBCWPL 17, (eds) Solveiga Armoskaite and James J. Thompson. 43-55.",
    link: ""
  },
  {
    author: "Bischoff, Shannon T.",
    year: "2001",
    title: "Lynx : a morphological analysis and translation of Dorothy Nicodemus' Coeur d'Alene narrative",
    reference: "University of Montana M.A. thesis.",
    link: <a href="http://scholarworks.umt.edu/cgi/viewcontent.cgi?article=9310&context=etd" target="_blank" rel="noopener noreferrer">here</a>
  }


];

const columns = [{
  Header: 'Author',
  accessor: 'author',
  width: getColumnWidth(bibData, 'author', 'Author'),
filterMethod: (filter, row) => {
                if (filter.value === "all") {
                  return true;
                }
                return row[filter.id] === filter.value;
            },
  Filter: ({ filter, onChange }) =>
          <select
            onChange={event => onChange(event.target.value)}
            style={{ width: "100%" }}
            value={filter ? filter.value : "all"}
          >
            <option value="all">Show All</option>
          </select>,
  //Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
  },
{
  Header: 'Year',
  accessor: 'year',
  filterMethod: (filter, rows) =>
      matchSorter(rows, filter.value, { keys: ["year"], threshold: matchSorter.rankings.CONTAINS }),
        filterAll: true,
  },
{
  Header: 'Title',
  accessor: 'title',
  filterMethod: (filter, rows) =>
      matchSorter(rows, filter.value, { keys: ["title"], threshold: matchSorter.rankings.CONTAINS }),
        filterAll: true,
  //Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
  },
{
  Header: 'Reference',
  accessor: 'reference',
  style: { 'white-space': 'unset' }, //??
  filterMethod: (filter, rows) =>
      matchSorter(rows, filter.value, { keys: ["reference"], threshold: matchSorter.rankings.CONTAINS }),
        filterAll: true,
  //Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
  },
{
  Header: 'Link',
  accessor: 'link',
  //Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
}
];
    return (

      <ReactTable
		    data={bibData}
		    columns={columns}
	   		defaultPageSize={5}
	   		className="-striped -highlight"
	   		className="left"
	   		filterable="true"
	   		filterAll="true"
		  />


      //leaving this here in case we need it, for now
      // <h3>Coeur d'Alene Bibliography</h3>
      // <p>Barthmaier, Paul T.  1996.
      //   A Dictionary of Coeur d'Alene Salish from Gladys Reichard's file slips.
      //   University of Montana M.A. Thesis.
      //   Available online <a href="http://scholarworks.umt.edu/cgi/viewcontent.cgi?article=9309&context=etd" target="_blank" rel="noopener noreferrer">here</a></p>
      // <p>Bischoff, Shannon T. 2011.
      //   Lexical affixes, incorporation, and conflation: The case of Coeur d'Alene.
      //   Studia Linguistica 65.1:1-32.  </p>
      // <p>Bischoff, Shannon T. 2011.
      //   Formal notes on Coeur d'Alene clause structure.
      //   Newcastle: Cambridge Scholars Press.</p>
      // <p>Bischoff, Shannon T. 2007.
      //   Functional Forms-Formal Functions: An account of Coeur d'Alene clause structure.
      //   PhD dissertation University of Arizona.
      //   Available online: <a href="http://arizona.openrepository.com/arizona/bitstream/10150/194692/1/azu_etd_2004_sip1_m.pdf" target="_blank" rel="noopener noreferrer">here</a></p>
      // <p>Bischoff, Shannon T. 2006.
      //   Basic clause structure in Coeur d'Alene A preliminary working paper.
      //   In MIT Working Papers on Endangered and Less Familiar Languages Volume on Salish, (eds) Shannon T. Bischoff, Lynnika Buttler, Peter Norquist, and Daniel Siddiqi.
      //   Cambridge MIT Press.</p>
      // <p>Bischoff, Shannon T.  2005.
      //   The left periphery in Coeur d'Alene Evidence from the Reichard Manuscripts.
      //   In Proceedings of WSCLA 10 UBCWPL 17, (eds) Solveiga Armoskaite and James J. Thompson. 43-55.</p>
      // <p>Bischoff, Shannon T.  2001.
      //   Lynx : a morphological analysis and translation of Dorothy Nicodemus' Coeur d'Alene narrative.
      //   University of Montana M.A. thesis.
      //   Available online: <a href="http://scholarworks.umt.edu/cgi/viewcontent.cgi?article=9310&context=etd" target="_blank" rel="noopener noreferrer">here</a> </p>
      // <p>Bischoff, Shannon T., Ivy Doak, Amy V. Fountain and John Ivens. 2013.
      //   Creating grass roots digital Coeur d'Alene resources:  the COLRC.
      //   Northwest Journal of Linguistics. 7. 1-23.
      //   Available online: <a href="http://www.sfu.ca/nwjl/Articles/V007_N04/BischoffEtAlGrassrootsResources.pdf" target="_blank" rel="noopener noreferrer">here</a></p>
      // <p>Bischoff, Shannon T. and Amy V. Fountain 2013.
      //   `Grass-roots development of web-based language archives: the Coeur d'Alene Archive.
      //   In Shannon Bischoff, Debbie Cole, Amy Fountain, and Mizuki Miyashita (eds) The Persistence of Language:
      //   Constructing and Confronting the Past and Present in the Voices of Jane H. Hill. 175-202. Cambridge: John Benjamins.</p>
      // <p>Boas, Franz, and Teit, James. 1985.
      //   Coeur d'Alene, Flathead and Okanogan Indians.
      //   Ye Galleon Press: Fairfield, Washington. Reprint of the Annual report of the Bureau of American Ethnology to the Secretary of the Smithsonian Institution volume 45 (1927-28) pages 23-396.
      //   Available online: <a href="http://archive.org/stream/annualreportofbu45smit#page/36/mode/2up" target="_blank" rel="noopener noreferrer">here</a></p>
      // <p>Brinkman, Raymond.  2003.
      //   Etsmeystkhw khwe snwiyepmshtsn 'you know how to talk like a whiteman'.
      //   Ph.D. Dissertaion. University of Chicago.</p>
      // <p>Czaykowska-Higgins, Ewa.  1993.
      //   Cyclicity and stress in Moses Columbia Salish.
      //    Natural Language and Linguistic Theory 11. 197-278.</p>
      // <p>Diomedi, Alexander S. J.  1894.
      //   Sketches of Modern Indian Life.
      //   Available online: <a href="https://archive.org/details/cihm_14111" target="_blank" rel="noopener noreferrer">here</a></p>
      // <p>Doak, Ivy G.  2004.
      //   Notes on Reduplication in Coeur d'Alene.
      //   In Studies in Salish Linguistics in Honor of M. Dale Kinkade, eds.  D. Gerdts and L. Matthewson. 118-131.
      //   Missoula, Montana: University of Montana Press.</p>
      // <p>Doak, Ivy G.  1998.
      //   Doing fieldwork with endangered languages: The case of Coeur d'Alene.
      //   Paper presented at the University of North Texas Linguistic Colloquium. Denton,TX.</p>
      // <p>Doak, Ivy G.  1997.
      //   Coeur d'Alene grammatical relations.  Ph.D. Dissertation.
      //   University of Texas at Austin.</p>
      // <p>Doak, Ivy G.  1996.
      //   Coeur d'Alene imperative constructions.
      //   Papers for the 31st ICSNL.  Vancouver.
      //   Available online: <a href="http://lingserver.arts.ubc.ca/linguistics/sites/default/files/1996_Doak.pdf" target="_blank" rel="noopener noreferrer">here</a></p>
      // <p>Doak, Ivy G.  1993.
      //   Discourse use of the Coeur d'Alene -st(u)- transitivizer.
      //   American Indian linguistics and ethnography in honor of Laurence C. Thompson, A. Mattina and T. Montler, eds.  UMOPL 10.  Missoula.</p>
      // <p>Doak, Ivy G.  1992.
      //   Another look at Coeur d'Alene Harmony.
      //   International Journal of American Linguistics 58.1:1-35.</p>
      // <p>Doak, Ivy G. 1991.
      //   Coeur d'Alene rhetorical structure.
      //   In Texas Linguistic Forum: Discourse 33. 43-70.</p>
      // <p>Doak, Ivy G.  1990.
      //   Truncation, -&#237; suffixation, and extended vowel length in Coeur d'Alene.
      //   Papers for the 25th International Conference on Salish and Neighbouring Languages.
      //   University of British Columbia, Vancouver.  Available online:
      //   <a href="http://lingserver.arts.ubc.ca/linguistics/sites/default/files/1990_Doak.pdf"  target="_blank" rel="noopener noreferrer">here</a></p>
      // <p>Doak, Ivy G.  1987.
      //   Coeur d'Alene vowel harmony.
      //   Papers from the 22nd International Conference on Salish and Neighboring Languages.
      //   University of Victoria.  Victoria, BC.</p>
      // <p>Doak, Ivy G.  1986.
      //   Coeur d'Alene schwa.
      //   Papers presented at LASSO, Scottsdale, AZ.</p>
      // <p>Doak, Ivy and Anthony Mattina. 1997.
      //   Okanagan -lx, Coeur d'Alene -ils, and Cognate Forms.
      //   International Journal of American Linguistics. 63.3:334.</p>
      // <p>Doak, Ivy and Timothy Montler. 2000.
      //   Orthography, lexicography and language change.
      //   In Proceedings of the fourth FEL Conference, Nicholas Ostler and Blair Rudes, eds.
      //   Charlotte, NC: Foundation for Endangered Languages. Available online:
      //   <a href="http://montler.net/papers/OrthographyFEL22000.pdf" target="_blank" rel="noopener noreferrer">here</a></p>
      // <p>Doak, Ivy and Margaret Stensgar.  2008.
      //   Coyote and the birds:  A traditional Coeur d'Alene story.
      //   In One people's stories: A collection of Salishan myths and legends, eds. M. T. Thompson and S. M. Egesdal.
      //   210-213. The Smithsonian Series of Studies in Native American Literatures.
      //   Lincoln, NE: University of Nebraska Press.</p>
      // <p>Ewing, Shirley, Bonnie Grossen, Leo Little Thunder, Gladys Amanda Reichard.  1978.
      //   Skitswish tales of the ancient Coeur d'Alene Indians: a supplemental reading program for teaching decoding.
      //   Desmet, Idaho : Coeur D'Alene Indian Tribal School.</p>
      // <p>Falk, Julia S. 1999.
      //   Women, Language, and Linguistics: Three American Stories from the First Half of the Twentieth Century.
      //   Routledge: London.</p>
      // <p>Falk, Julia S. 1997.
      //   Territoriality, relationships, and reputation: The case of Gladys A. Reichard.
      //   Southwest Journal of Linguistics 16.1/2.</p>
      // <p>Fitzgerald, Susan. 1997.
      //   Historical aspects of Coeur d'Alene harmony.
      //   International Journal of American Linguistics. 63.3.362-384.</p>
      // <p>Frey, Rodney. 2001.
      //   Landscape Traveled by Coyote and Crane: The World of the Schits'umsh.
      //   Seattle: University of Washington Press.</p>
      // <p>Gazzoli, Father G.,  S. J.  1876.
      //   Prayers and hymns translated into the Skitswich language by Father G. Gazzoli, S.J., of the Coeur D'alene Mission, Idaho.
      //   Hubert Howe Bancroft Collection.</p>
      // <p>Gibbons, Carolyn Fox.  1999.
      //   An edition of Coyote steals son's wife; Gladys Amanda Reichard.
      //   University of Montana M.A. thesis.</p>
      // <p>Greene, Rebecca J.  2004.
      //   Edition of Snchitsu'umshtsn:  volume I: a root dictionary.
      //   University of Montana M.A. thesis.
      //   Available online: <a href="http://scholarworks.umt.edu/cgi/viewcontent.cgi?article=9132&context=etd" target="_blank" rel="noopener noreferrer">here</a></p>
      // <p>Harris, Barbara P. 1974.
      //   Aspect and the pronominal system of Coeur d'Alene:
      //   A re-analysis of Reichard's material.
      //   International Conference on Salish and Neighbouring Languages 9. 60-80.
      //   Available online:  <a href="http://lingserver.arts.ubc.ca/linguistics/sites/default/files/1974_Harris.pdf" target="_blank" rel="noopener noreferrer">here</a></p>
      // <p>Hayter, Amy L. 1997.
      //   An Edition of Dorothy Nicodemus's Coyote Cuts Sun's Heart.
      //   The University of Montana M.A. thesis.
      //   Available online: <a href="http://scholarworks.umt.edu/cgi/viewcontent.cgi?article=9133&context=etd" target="_blank" rel="noopener noreferrer">here</a></p>
      // <p>Hayes, Matthew S.  1999.
      //   An edition of three Coeur d'Alene texts:  Calling one's kind, Hunting one's kind, and Boy takes food.
      //   University of Montana M.A. thesis.
      //   Available online: <a href="http://scholarworks.umt.edu/cgi/viewcontent.cgi?article=9137&context=etd" target="_blank" rel="noopener noreferrer">here</a></p>
      // <p>Hoard, James. E.  1978.
      //   Syllabication in northwest Indian languages.
      //   Syllables and segments, A. Bell and J.B. Hooper, eds.
      //   North-Holland Publishing Co.</p>
      // <p>Hulden, Mans and Shannon T. Bischoff.  2009.
      //   A simple formalism for capturing reduplication in finite-state morphology.
      //   Frontiers in Artificial Intelligence and Applications 191:207-215.</p>
      // <p>Hulden, Mans and Shannon T. Bischoff . 2008.
      //   Annotating reduplication infinite-state morphology.
      //   Finite-State Methods and Natural Language Processing 2008 proceedings.
      //   EU Joint Research Commission Ispara Italy.
      //   Available online: <a href="http://dingo.sbs.arizona.edu/~mhulden/hulden_reduplication_2008.pdf" target="_blank" rel="noopener noreferrer">here</a></p>
      // <p>Johnson, Robert E.  1975.
      //   The role of phonetic detail in Coeur d'Alene phonology.
      //   Washington State University doctoral dissertation.</p>
      // <p>Kinkade, M. Dale.  1990.
      //   Prehistory of Salishan languages.
      //   Papers for the 25th ICSNL.  Vancouver.</p>
      // <p>Kinkade, M. Dale.  1967.
      //   Uvular pharyngeal resonants in Interior Salish.
      //   International Journal of American Linguistics 33:228-234.</p>
      // <p>Kinkade, M. Dale and Clarence Sloat.  1972.
      //   Proto-Eastern Interior Salish vowels.
      //   International Journal of American Linguistics 38:26-48</p>
      // <p>Kroeber, Paul D. 1999.
      //   The Salish Language Family: Reconstructing Syntax.
      //   U of Nebraska Press.</p>
      // <p>Kuipers, Aert.  2003.
      //   Salish Etymologycal Dictionary.
      //   University of Montana Occasional Papers in Linguistics No. 16.  Missoula: UM Linguistics Laboratory.</p>
      // <p>Kuipers, Aert.  1981.
      //   On reconstructing the Proto-Salish sound system.
      //   International Journal of American Linguistics 47:323-35</p>
      // <p>Louie, M. A.  1996.
      //   Visionary leadership from a Native American perspective:
      //   a leadership profile of the Coeur d'Alene Indian Tribe.
      //   Spokane: Gonzaga University dissertation.</p>
      // <p>Lyon, John M.  2010.
      //   Lawrence Nicodemus's Snchitsu'umshtsn File Card Collection in Dictionary Format.
      //   Northwest Journal of Linguistics. 4. 1-110.</p>
      // <p>Lyon, John M.  2005.
      //   An edition of Snchitsu'umshtsn:  volume II: a root dictionary.
      //   University of Montana M.A. Thesis.</p>
      // <p>Lyon, John and Rebecca Greene-Wood, eds. 2007.
      //   Lawrence Nicodemus's Coeur d'Alene dictionary in root format. UMOPL </p>
      // <p>Mattina, Anthony. 1979.
      //   Pharyngeal movement in Colville and related phenomena in the Interior Salishan languages.
      //   International Journal of American Linguistics 45:1.</p>
      // <p>Nelson, Jon.  1999.
      //   Coeur d'Alene oral narrative:
      //   Editions of Coyote imitates Magpie, Man caught in fire corral and War between Blackfoot and Coeur d'Alene.
      //   University of Montana M.A. thesis.
      //   Available online: <a href="http://scholarworks.umt.edu/cgi/viewcontent.cgi?article=9311&context=etd" target="_blank" rel="noopener noreferrer">here</a></p>
      // <p>New, A. J.  2013.
      //   Cooperation in the Wilds of the Idaho Territory:
      //   Interaction Between the Jesuits and Coeur D'Alene Indians at the Cataldo Mission, 1848-1878.
      //   Lewiston: University of Idaho master's thesis</p>
      // <p>Nicodemus, Lawrence.  1975.
      //   Snchitsu'umshtsn: The Coeur d'Alene language.
      //   Spokane: University Press.  In two volumes: I The grammar and Coeur d'Alene-English dictionary;
      //   II English- Coeur d'Alene dictionary.</p>
      // <p>Nicodemus, Lawrence.  1975.
      //   Snchitsu'umshtsn: The Coeur d'Alene language.  A modern course.
      //   Coeur d'Alene Tribe.</p>
      // <p>Nicodemus, Lawrence.  1973.
      //   The Couer d'Alene language project.
      //   ICSL 8. Eugene, Oregon.</p>
      // <p>Nicodemus, Lawrence (Performer).  1935.
      //   Audio recording of select Coeur d'Alene myths: Collection Title: 85-550-F.
      //   Idaho, Coeur d'Alene.  Gladys Reichard.
      //   Indiana University Bloomington Archive of Traditional Music.</p>
      // <p>Nicodemus, Lawrence, Wanda Matt, Reva Hess, Gary Sobbing,
      //   Jill Maria Wagner, and Dianne Allen. 2000.
      //   Snchitsu'umshtsn: Coeur d'Alene reference book Volume 1.
      //   Coeur d'Alene Tribe.</p>
      // <p>Nicodemus, Lawrence, Wanda Matt, Reva Hess,
      //   Gary Sobbing, Jill Maria Wagner, and Dianne Allen. 2000.
      //   Snchitsu'umshtsn: Coeur d'Alene reference book Volume 2.
      //   Coeur d'Alene Tribe.</p>
      // <p>Nicodemus, Lawrence, Wanda Matt, Reva Hess, Gary Sobbing,
      //   Jill Maria Wagner, and Dianne Allen. 2000.
      //   Snchitsu'umshtsn: Coeur d'Alene workbook I. 3rd edition.
      //   Coeur d'Alene Tribe.</p>
      // <p>Nicodemus, Lawrence, Wanda Matt, Reva Hess,
      //   Gary Sobbing, Jill Maria Wagner, and Dianne Allen. 2000.
      //   Snchitsu'umshtsn: Coeur d'Alene workbook II. 3rd edition.
      //   Coeur d'Alene Tribe.</p>
      // <p>Occhi, Debra J., Gary B. Palmer, and Roy H. Ogawa.  1993.
      //   Like hair, or trees: Semantic analysis of the Coeur d'Alene prefix ne' 'amisdt'.
      //   Revision of paper presented to the  SSILA Summer Meeting, Columbus, OH.
      //   Available online: <a href="http://escholarship.org/uc/item/28x669mq" target="_blank" rel="noopener noreferrer">here</a></p>
      // <p>Ogawa, Roy H and Gary Palmer. 1998.
      //   Language semantics of three Coeur d'Alene prefixes as 'on'.
      //   In Issues in Cognitive Linguistics:
      //   1993 Proceedings of the International Cognitive Linguistics Conference Volume 12.
      //   L. De Stadler and C. Eyrich, eds. 165-224. Walter de Gruyter.</p>
      // <p>Palmer, Gary B.  2001.
      //   Indian Pioneers: The settlement of Ni'lukhwalqw (Upper Hangman Creek,
      //   Idaho) by the Snchitsu'umsh (Coeur d'Alene Indians).
      //   Oregon Historical Quarterly 102.1.22-47</p>
      // <p>Palmer, Gary B.  1998.
      //   Coeur d'Alene. In Handbook of North American Indians, Volume 12, Plateau.
      //   Deward E. Walker, Jr. ed. 312-326.
      //   Washington DC: Smithsonian Institution.</p>
      // <p>Palmer, Gary B.  1990.
      //   'Where are the muskrats?' The semantic structure of Couer d'Alene place names.
      //   AL 32:263-294</p>
      // <p>Palmer, Gary B.  1989.
      //   The gobbler. The World and I 4.3. 652-659.</p>
      // <p>Palmer, Gary B.  1988.
      //   The language and culture approach in the Coeur d'Alene Language Preservation Project.
      //   Human Organization 47.4. 307-317.</p>
      // <p>Palmer, Gary B.  1981.
      //   Indian Pioneers: Coeur d'Alene mission farming from 1842 to 1876.
      //   In Papers in Anthropology, Special Issue on Comparative Frontiers. Stephen I. Thompson, ed. 65-87.</p>
      // <p>Palmer, Gary B.  1981.
      //   Light shining on the mountain. A thumbnail biography of Louis Victor.
      //   Idaho Humanities Forum. Spring. 2,12.</p>
      // <p>Palmer, Gary B, Lavinia Felsman, Lawrence Nicodemus.  1985.
      //   Workbooks in the Coeur d'Alene Indian language.
      //   Las Vegas: University of Nevada; Plummer, ID: CDA Tribal Headquarters.</p>
      // <p>Palmer, Gary B., Dale M. Kinkade and Nancy Turner.  2003.
      //   The Grammar of Snchitsu'umshtsn (Coeur d'Alene) Plant Names.
      //   Journal of Ethnobiology 23.1. 65-100.</p>
      // <p>Palmer, Gary B. and Lawrence Nicodemus. 1987.
      //   Khwi' Khwe Hntmikhw'lumukhw: This is My Land.
      //   Department of Education, Coeur d'Alene Tribe of Idaho, DeSmet.</p>
      // <p>Palmer, Gary B. and Lawrence Nicodemus.  1982.
      //   Marking surfaces in Coeur d'Alene and universals in anatomical nomenclature.
      //   Working papers for the 17th ICSNL, 295-330.  Portland.
      //   Available online: <a href="http://lingserver.arts.ubc.ca/linguistics/sites/default/files/1982_Palmer_Nicodemus.pdf" target="_blank" rel="noopener noreferrer">here</a></p>
      // <p>Palmer, Gary B. and Lawrence Nicodemus.  1985.
      //   Coeur d'Alene exceptions to proposed universals of anatomical nomenclature.
      //   American Ethnologist.</p>
      // <p>Palmer, Gary B., Lawrence Nicodemus and Thomas E. Connolly. 1987.
      //   Khwi' Khwe GuL Schitsu'umsh: These Are the Coeur d'Alene People.
      //   Department of Education, Coeur d'Alene Tribe of Idaho, DeSmet.
      //   with Lawrence Nicodemus and Tom Connolly, S. J. [personal names].</p>
      // <p>Palmer, Gary B. and Thomas E. Connolly.  1983.
      //   Coeur d'Alene Indian land-use values.
      //   Wealth and Trust: A Lesson from the American West. Special Issue.  Sun Valley.</p>
      // <p>Palmer, Gary B., Thomas E. Connolly, Armando M DaSilva.  1987.
      //   Khwi' khwe gul schitsu'umsh = These are the Coeur d'Alene people:
      //   a book of Coeur d'Alene personal names.
      //   Plummer, ID: Coeur d'Alene Tribal Headquarters;
      //   Las Vegas, Nev.: Dept. of Anthropology, University of Nevada.</p>
      // <p>Pilling. James C. 1893.
      //   Bibliography of the Salishan Languages. (Smithsonian Institute)
      //   Washington: Government Printing office.
      //   Available online: <a href="https://archive.org/details/cihm_15902" target="_blank" rel="noopener noreferrer">here</a></p>
      // <p>Point, Nicolas and Joseph P. Donnelly (tr.).  1967.
      //   Wilderness kingdom, Indian life in the Rocky Mountains: 1840-1847;
      //   the journals & paintings of Nicolas Point.
      //   New York:  Holt, Rinehart and Winston.</p>
      // <p>Reichard, Gladys A.  1958-1961.
      //   A comparison of five Salish languages.
      //   International Journal of American Linguistics 24, 25, 26.</p>
      // <p>Reichard, Gladys A.  1940.
      //   Composition and symbolism of Coeur d'Alene verb-stems.
      //   International Journal of American Linguistics 11:47-63.</p>
      // <p>Reichard, Gladys A.  1939.
      //   Stem-list of the Coeur d'Alene language.
      //   International Journal of American Linguistics 10:92-108.</p>
      // <p>Reichard, Gladys A.  1938.
      //   Coeur d'Alene.  Franz Boas, ed., Handbook of American Indian languages.
      //   New York:  J. J. Augustin, Inc.  Part 3:515-707.
      //   Available online: <a href="http://archive.org/stream/rosettaproject_tqw_morsyn-2#page/n529/mode/2up" target="_blank" rel="noopener noreferrer">here</a></p>
      // <p>Reichard, Gladys Amanda with Adele Froelich.  1947.
      //   An analysis of Coeur d'Alene Indian myths.
      //   Philadelphia:  Memoirs of the American Folk-lore Society, v. 41.
      //   Available online: <a href="http://archive.org/stream/analysisofcoeurd41reic#page/n5/mode/2up" target="_blank" rel="noopener noreferrer">here</a></p>
      // <p>Seltice, J. 1990.
      //   Saga of the Coeur D'Alene Indians:
      //   An Account of Chief Joseph Seltice (Vol. 990).
      //   Ye Galleon Press.</p>
      // <p>Sloat, Clarence. 1980.
      //   Vowel alternations in Coeur d'Alene.
      //   International Journal of American Linguistics 46:1.</p>
      // <p>Sloat, Clarence.  1972.
      //   Vowel harmony in Coeur d'Alene.
      //   International Journal of American Linguistics 38:234-39</p>
      // <p>Sloat, Clarence.  1971.
      //   Some phonological processes of Coeur d'Alene.
      //   International Conference on Salish and Neighbouring Languages. 6.</p>
      // <p>Sloat, Clarence.  1971.
      //   The phonetics and phonology of Coeur d'Alene /r/.
      //   Sacramento Anthropological Society Paper II.
      //   Studies in Northwest Indian languages, ed. by James E. Hoard and Thomas M. Hess,
      //   pp 123-137.  Sacramento.</p>
      // <p>Sloat, Clarence.  1970.
      //   Some phonological similarity of /r/ and /R/ in Coeur d'Alene.
      //   International Conference on Salish and Neighbouring Languages. 5.
      //   Available online: <a href="http://lingserver.arts.ubc.ca/linguistics/sites/default/files/1970_SloatC.pdf" target="_blank" rel="noopener noreferrer">here</a></p>
      // <p>Sloat, Clarence.  1968.
      //   A skeleton key to Reichard's Coeur d'Alene transcriptions.
      //   Anthropological Linguistics 10:5.</p>
      // <p>Sloat, Clarence.  1967.
      //   A plea for conformity and some amendments to Reichard.
      //   International Conference on Salish and Neighbouring Languages. 2.
      //   Available online: <a href="http://lingserver.arts.ubc.ca/linguistics/sites/default/files/1967_Sloat.pdf" target="_blank" rel="noopener noreferrer">here</a></p>
      // <p>Sloat, Clarence.  1966.
      //   Phonological redundancy rules in Coeur d'Alene.
      //   University of Washington PhD dissertation.</p>
      // <p>Sobbing, Gary and Audra Vincent. 2000.
      //   Technology, Literacy and Orality: the Case of the Coeur d'Alene Language.
      //   Proceedings of the Foundation for Endangered Languages Conference 29.
      //   Charlotte, North Carolina, 21-24 September. </p>
      // <p>Teit, J. 1917.
      //   Couer d'Alene Tales.
      //   In F. Boas, ed. Folk-Tales of Salishan and Sahaptin Tribes 119-128.
      //   New York: American Folk-Lore Society.
      //   Available online: <a href="http://archive.org/stream/folktalesofsalis00boas#page/119/mode/1up" target="_blank" rel="noopener noreferrer">here</a></p>
      // <p>Thompson, Laurence C.  1985.
      //   Control in Salish grammar, in Relational Typology, edited by Frans Plank.
      //   Trends in Linguistics.  Studies and monographs 28.391-428.  Mouton.</p>
      // <p>Thompson, Laurence C.  1979.
      //   Salishan and the northwest.
      //   In The Languages of Native America, ed. Campbell and Mithun.
      //   Austin: University of Texas Press.</p>
      // <p>Thompson, Laurence C. 1976.
      //   The Northwest.
      //   Native Languages of the Americas Vol. I, ed. Thomas A. Sebeok.
      //   New York: Plenum Press.</p>
      // <p>Van Eijk, Jan P. 2008.
      //   A bibliography of Salish linguistics.
      //   Northwest Journal of Linguistics 2.3. 1-128.
      //   Available online: <a href="http://www.sfu.ca/nwjl/Articles/V002_N03/VanEijkSalishBiblio.pdf" target="_blank" rel="noopener noreferrer">here</a></p>
      // <p>Vincent, Audra.  2014.
      //   Coeur d'Alene Aspect.
      //   MA Thesis. University of British Columbia.</p>
      // <p>Vincent, Audra.  2009.
      //   What are Native tribes in the Northwest doing to revive their languages?
      //   McNair Scholars Journal 8. 347-373.  University of Washington.</p>
      // <p>Wagner, Jill Maria.  1997.
      //   Language, Power, and Ethnicity on the Coeur d'Alene Reservation.
      //   Ph.D. Dissertation. Washington State University.</p>
      // <p>Woodworth-Ney, L. E.  1996.
      //   Tribal sovereignty betrayed: the conquest of the Coeur d'Alene Indian reservation, 1840-1905.
      //   Pullum: Washington State University dissertation.</p>

      );
    }
  }


export default Bibliography;
