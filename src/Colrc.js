import React, { Component } from 'react';
import { Container, Divider, Grid, Header, Image, List } from 'semantic-ui-react';
import { getIndicesOf, findDecorations } from './Helpers';

class Colrc extends React.Component {
  render() {
    return (
      <Grid container verticalAlign='top'>
        <Grid.Row>
          <Grid.Column color='blue'>
            <MainMenu />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={3}>
            <Nav />
          </Grid.Column>
          <Grid.Column width={13}>
            <SpellingPronunciation />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Footer />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

class DecoratedTextSpan extends React.Component {

  createSpans = (str) => {
     const decorations = findDecorations(str);

     let children = []
     //Inner loop to create children
     for (let i = 0; i < decorations.length; i++)
     {
       let ss = str.substring(decorations[i].start, decorations[i].end);
       if (decorations[i].type == "bold") {
         children.push(<span style={{ fontWeight: 'bold' }}>{ss}</span>);
       }
       else if (decorations[i].type == "underline") {
         children.push(<span style={{ textDecoration: 'underline' }}>{ss}</span>);
       }
       else {
         children.push(<span>{ss}</span>);
       }
     }

     return children;
   }

  render() {
    return (
      <span>
        {this.createSpans(this.props.str)}
      </span>
    )
  }
}

class MainMenu extends React.Component {
  render() {
    return (
      <Grid container verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column color='blue' width={13}>
            <Masthead />
          </Grid.Column>
          <Grid.Column color='blue' width={3}>
            <OptionsList />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

class Masthead extends React.Component {
  render() {
    return (
      <Grid container verticalAlign='middle'>
        <Grid.Row color='blue'>
          <Grid.Column textAlign='center'>
            Coeur d'Alene Online Language Resource Center
          </Grid.Column>
        </Grid.Row>
        <Grid.Row color='blue'>
          <Titlebar
            title="Spelling and Pronunciation"
          />
        </Grid.Row>
      </Grid>
    );
  }
}

class Titlebar extends React.Component {
  render() {
    return (
        <Grid.Column textAlign='center'><h2>{this.props.title}</h2></Grid.Column>
    );
  }
}

class OptionsList extends React.Component {
  render() {
    return (
      <ul className='float right'>
        <List.Item>dictionary</List.Item>
        <List.Item>history</List.Item>
        <List.Item>metadata</List.Item>
      </ul>
    );
  }
}

class Nav extends React.Component {
  render() {
    return (
      <div className='ui left content card'>
        <List padded='horizontally'>
          <List.Item>in the archive</List.Item>
          <Divider />
      	  <List.Item>about</List.Item>
          <List.Item>spelling and punctuation guide</List.Item>
          <List.Item>root dictionary</List.Item>
          <List.Item>stem lists</List.Item>
          <List.Item>affix lists</List.Item>
          <List.Item>texts</List.Item>
          <List.Item>audio files</List.Item>
          <List.Item>methodological sources</List.Item>
          <List.Item>bibliography</List.Item>
          <List.Item>advanced search</List.Item>
          <List.Item>source files</List.Item>
          <List.Item>contact us</List.Item>
          <Divider />
          <List.Item>on the web</List.Item>
          <Divider />
          <List.Item>Coeur d'Alene homepage</List.Item>
          <List.Item>ivy doak's grammatical sketch</List.Item>
          <List.Item>boas and teit 1930</List.Item>
          <List.Item>lyon 2010</List.Item>
          <List.Item>reichard 1938</List.Item>
          <List.Item>reichard 1947</List.Item>
          <List.Item>teit 1917</List.Item>
        </List>
      </div>
    );
  }
}

class RootDictionaryIntro extends React.Component {
  render() {
    return (
      <div className='ui content'>
        <p></p>
        The root dictionary presented here was compiled by John Lyon and
        Rebecca Greene-Wood and contains nearly 1,400 roots and about
        7690 "word" forms. The data come from Lawrence Nicodemus's
        Coeur d'Alene dictionary. The original work was published by UMOPL
        and can be found at Lyon and Greene-Wood 2007. All material is
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

class RootDictionary extends React.Component {
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

class RootElement extends React.Component {
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

class Footer extends React.Component {
  render() {
    return (
      <div className='ui bottom centered'>
        <p></p>
        <p>coeur d'alene online language resource center copyright 2009</p>
        project supported by the national science foundation awards BCS-1160627 and BCS-1160394
      </div>
    );
  }
}

class SpellingPronunciationIntro extends React.Component {
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

class SpellingPronunciation extends React.Component {
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
            note=""
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
            note=""
          />
          <SpellElement
            nicodemus="ch"
            reichard="tc"
            salish="č"
            english="<bold>ch</bold>ur<bold>ch</bold>"
            note=""
          />
        </Grid>
        <SpellFootnote />
      </div>
    );
  }
}

class SpellElement extends React.Component {
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

class SpellFootnote extends React.Component {
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

export default Colrc;
