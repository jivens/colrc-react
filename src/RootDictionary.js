import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

class RootDictionaryIntro extends Component {
  render() {
    return (
      <div className='ui content'>
        <p></p>
        The root dictionary presented here was compiled by John Lyon and
        Rebecca Greene-Wood and contains nearly 1,400 roots and about
        7690 "word" forms. The data come from Lawrence Nicodemus's
        Coeur d'Alene dictionary. The original work was published by UMOPL
        and can be found at <a href="http://meltr.org/Publications/" target="_blank" rel="noopener noreferrer">Lyon and Greene-Wood 2007</a>. All material is
        copyrighted by the Coeur d'Alene Tribe and may not be copied in
        any format without written permission from the Coeur d'Alene Tribe.
        <p></p>
        <p></p>
        For reasons of searchability and clarity of presentation, the
        organization of the dictionary has been altered from its original form.
        Within a root header, the entries are organized beginning with the
        least complex and move towards more complex forms. Each entry is
        separated by a new line and numbered. The entries first appear in the
        Salishan orthography, then the Nicodemus, and finally an English
        translation. Nicodemus sometimes identifies the simplest forms as
        (stem), but not in all cases. Intransitive and simple nominalized
        forms directly follow, then reduplicated forms, complex forms (those
        with lexical suffixes), and finally transitive forms and compounds.
        The following symbols are used to separate the different types of
        entries: intransitive (†), transitive (‡), complex (//), and
        compound (§) entries. Entries begin with a root skeleton followed
        by the transliterated Coeur d'Alene, followed by Nicodemus's English
        translation, grammatical notations, and additional information.
        <p></p>
        <p></p>
        <p style={{ height: 10, color: 'blue' }}>Lyon and Green-Wood's Root Dictionary</p>
        <p></p>
      </div>
    );
  }
}

class RootDictionary extends Component {
  render() {
    return (
      <div className='ui content'>
        <RootDictionaryIntro />
        <Grid celled='internally' padded='horizontally' verticalAlign='top'>
          <RootElement
            color='blue'
            root='Root'
            occurrence='#'
            salish='Salish'
            nicodemus='Nicodemus'
            english='English'
          />
          <RootElement
            root="√k'ʷl'1"
            occurrence="1"
            salish="k'ʷul'"
            nicodemus="k'u'l"
            english="† do, fix, make, to produce. ((stem), vt.)"
          />
          <RootElement
            root="√k'ʷl'1"
            occurrence="2"
            salish="k'ʷul'+l'"
            nicodemus="k'u'lu'l"
            english="born, made (to be...). ((lit. H/s was born), vi.)"
          />
        </Grid>
      </div>
    );
  }
}

class RootElement extends Component {
  render() {
    const color = this.props.color ? this.props.color : 'white';
    return (
      <Grid.Row color={color}>
        <Grid.Column width={2}>{this.props.root}</Grid.Column>
        <Grid.Column width={1}>{this.props.occurrence}</Grid.Column>
        <Grid.Column width={2}>{this.props.salish}</Grid.Column>
        <Grid.Column width={2}>{this.props.nicodemus}</Grid.Column>
        <Grid.Column width={6}>{this.props.english}</Grid.Column>
      </Grid.Row>
    );
  }
}

export default RootDictionary;
