import React, { Component } from 'react';
import { Grid, Menu } from 'semantic-ui-react';
import DecoratedTextSpan from './DecoratedTextSpan';
import ReactTable from "react-table";
import "react-table/react-table.css";
import matchSorter from 'match-sorter';
import { Link } from 'react-router-dom'
import consonant_inventory from './images/consonant_inventory.jpg';
import vowel_inventory from './images/vowel_inventory.jpg';


class SpellingPronunciationCharts extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	data: [],
    	loading: false,
    };
  }

  render() {

	const columns=
  [
    {
      Header: 'Id',
      accessor: 'id',
      show: false,
      headerClassName: "wordwrap"
    },
    {
      Header: 'Category',
      accessor: 'category',
      style:{ 'white-space': 'unset'}
    },
    {
      Header: () => <div>lab-<br/>ial</div>,
      accessor: 'labial'
    },
    {
      Header: () => <div>alveo-<br/>lar</div>,
      accessor: 'alveolar'
    },
    {
      Header: () => <div>alveo-<br/>palatal</div>,
      accessor: 'alveopalatal'
    },
    {
      Header: () => <div>lat-<br/>eral</div>,
      accessor: 'lateral'
		},
    {
      Header: () => <div>pal-<br/>atal</div>,
      accessor: 'palatal'
    },
    {
      Header: () => <div>labio-<br/>velar</div>,
      accessor: 'labiovelar'
    },
    {
      Header: 'uvular',
      accessor: 'uvular'
    },
    {
      Header: () => <div>labio-<br/>uvular</div>,
      accessor: 'labiouvular',
    },
    {
      Header: () => <div>pharyn-<br/>geal</div>,
      accessor: 'pharyngeal',
    },
    {
      Header: () => <div>labio-<br/>pharyn-<br/>geal</div>,
      accessor: 'labiopharyngeal',
    },
    {
      Header: 'glottal',
      accessor: 'glottal',
    }
  ];

  const data = [
    {
      "id": 1,
      "category": "voiceless stops and affricates",
      "labial": "p",
      "alveolar": "t",
      "alveopalatal": "c",
      "lateral": "",
      "palatal": "č",
      "labiovelar": "kʷ",
      "uvular": "q",
      "labiouvular": "qʷ",
      "pharyngeal": "",
      "labiopharyngeal": "",
      "glottal": "ʔ"
    },
  ];

    const PhonemeCharts = () => (
		<div>
			<h3>Phoneme Charts</h3>

			<p>In the consonant chart, sounds are organized based on the location in the mouth where the tongue tip, blade, body or root come into closest contact with the relevant anatomical structure, with those structures listed from the front of the vocal tract (the lips) to the back (the glottis).  Readers may find various interactive IPA charts to be useful aids in understanding the charts presented here.</p>
			<h4>Consonants of Coeur d'Alene</h4>
			<img className="consonant_inventory" src={consonant_inventory} alt="consonant inventory"/>

			<p>In the vowel chart, sounds are organized based on the location in the mouth where apex of the tongue is located during pronunciation of the vowel, with the highest most front vowel (written 'i' in Salish orthography, and pronounced as in the English word 'bead') pronounced with the tongue in approximately the same position as it is for the resonant 'y'.  Back vowels such as 'u' are pronounced with rounded lips.</p>
			<h4>Vowels of Coeur d'Alene</h4>
			<img className="vowel_inventory" src={vowel_inventory} alt="vowel inventory"/>
		</div>
		);

  return (
	  	<div className='ui content'>
			<h3>Phoneme Charts</h3>
      <ReactTable
        data={data}
        loading={this.state.loading}
        columns={columns}
        defaultPageSize={6}
        className="-striped -highlight"
      />
			<p></p>
			<PhonemeCharts />
		</div>
	);
  }
}


export default SpellingPronunciationCharts;
