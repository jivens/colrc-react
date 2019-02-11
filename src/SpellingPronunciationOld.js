import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import DecoratedTextSpan from './DecoratedTextSpan';

class SpellingPronunciationIntro extends Component {
  render() {
    return (
      <div className='ui content'>
        <p>
          Coeur d'Alene has been spelled using at least three different
          systems - the "Reichard Orthography" (see Reichard 1938),
          the "Nicodemus Orthography" (see Nicodemus 1975a,b)
          and the "Salishan Orthography". What we refer to as the
          Reichard Orthography is a variation of the transcription system
          used by many linguists and anthropologists trained by Franz Boas at
          Columbia University in the first half of the 20th century. The
          Nicodemus Orthography was developed for use by the Coeur d'Alene
          community. The Salishan Orthography is used by many linguists and
          anthropologists today to transcribe Coeur d'Alene. You will find it
          used in contemporary scholarly work about the language. This site
          is intended to support users who want to use any of these systems.
        </p>
        <p></p>
        <p>
          The list below shows how the symbols used in each of these three
          systems correspond to each other. Not all of the sounds used in
          the Coeur d'Alene language are familiar to English speakers, but
          many of them are. Sounds in Coeur d'Alene that are also found in
          English words are listed with examples from English so that
          learners can familiarize themselves with those sounds.
        </p>
        <p></p>
        <p style={{ height: 10, color: 'blue' }}>Spelling and Pronouncing Coeur d'Alene</p>
        <p></p>
      </div>
    );
  }
}

class SpellingPronunciation extends Component {
  render() {
    return (
      <div className='ui content'>
        <SpellingPronunciationIntro />
        <Grid celled='internally' padded='horizontally' verticalAlign='top'>
          <SpellElement
            color='blue'
            spanStyle='normal'
            nicodemus='Nicodemus'
            reichard='Reichard'
            salish='Salish'
            english='English'
            note='Note'
          />
          <SpellElement
            nicodemus="a"
            reichard="a"
            salish="a"
            english="f<bold>a</bold>ther"
            note="&nbsp;"
          />
          <SpellElement
            nicodemus="<underline>a</underline>"
            reichard="á"
            salish="á"
            english="no example"
            note="1"
          />
          <SpellElement
            nicodemus="b"
            reichard="b"
            salish="b"
            english="<bold>b</bold>at"
            note="&nbsp;"
          />
          <SpellElement
            nicodemus="ch"
            reichard="tc"
            salish="č"
            english="<bold>ch</bold>ur<bold>ch</bold>"
            note="&nbsp;"
          />
        </Grid>
        <SpellFootnote />
      </div>
    );
  }
}

class SpellElement extends Component {
  render() {
    const color = this.props.color ? this.props.color : 'white';
    const spanStyle = this.props.spanStyle ? this.props.spanStyle : 'superscript';
    return (
      <Grid.Row color={color}>
        <Grid.Column width={2}>
          <DecoratedTextSpan
            str={this.props.nicodemus}
          />
        </Grid.Column>
        <Grid.Column width={2}>{this.props.reichard}</Grid.Column>
        <Grid.Column width={2}>{this.props.salish}</Grid.Column>
        <Grid.Column width={6}>
          <DecoratedTextSpan
            str={this.props.english}
          />
        </Grid.Column>
        <Grid.Column width={2}><span className={spanStyle}>{this.props.note}</span></Grid.Column>
      </Grid.Row>
    );
  }
}

class SpellFootnote extends Component {
  render() {
    return (
      <div className='ui content'>
        <p></p>
        <strong>Notes</strong>
		    <p></p>
		    <p><sup>1</sup>  An acute accent is used in the Reichard and Salishan systems to indicate that the vowel is stressed. Underlining is used for this purpose in the Nicodemus system.</p>
		    <p><sup>2</sup>  The symbol 'x' may be used in the Reichard and Salishan systems to write the sound /xʷ/ when it occurs before /u/.</p>
		    <p><sup>3</sup>  Nicodemus 1975a,b uses both '(' and ')' occasionally to write the pharyngeals.</p>
      </div>
    );
  }
}

export default SpellingPronunciation;
