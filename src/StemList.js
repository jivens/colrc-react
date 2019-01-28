import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

class StemListIntro extends Component {
  render() {
    return (
      <div className='ui content'>
        <h3>Reichard's Stem List</h3>
        <p>
          The stem list presented here was built by Gladys Reichard, and first published in 1939.
          The list is available in several forms.  To access the list in a dictionary form, use
          the 'browse' or 'search' features above.  Here you will see each stem as Reichard wrote it, and
          as it would be written using the 'Nicodemus' spelling system.  The stems are presented in
          several groups - first the 'verbs', then 'adverbs, interjections, and conjunctions', and
          finally the 'nouns'.  Within each group, stems are ordered alphabetically.
        </p>
        <p>
          You can also view <a href="r_stemlist.pdf" target="_blank">Reichard 1939</a> in its
          original form (as a pdf), or as
          a <a href="original_stem_list.html" target="_blank">set of images</a> that you can view
          in your browser.
        </p>
        <br />
      </div>
    );
  }
}

class StemList extends Component {
  render() {
    return (
      <div className='ui content'>
        <StemListIntro />
        <Grid celled='internally' padded='horizontally' verticalAlign='top' textAlign='center'>
          <StemListElement
            color='blue'
            salish='Salish'
            nicodemus='Nicodemus'
            english='English'
          />
        </Grid>
        <h4>Verbs</h4>
        -a-
        <Grid celled='internally' padded='horizontally' verticalAlign='top' textAlign='center'>
          <StemListElement
            salish="acqaʔ"
            nicodemus="atsqa'"
            english="go out, singular and plural"
          />
          <StemListElement
            salish="ac'x̣"
            nicodemus="ats'qh"
            english="look at"
          />
        </Grid>
      </div>
    );
  }
}

class StemListElement extends Component {
  render() {
    const color = this.props.color ? this.props.color : 'white';
    return (
      <Grid.Row color={color}>
        <Grid.Column width={5}>{this.props.salish}</Grid.Column>
        <Grid.Column width={4}>{this.props.nicodemus}</Grid.Column>
        <Grid.Column width={7}>{this.props.english}</Grid.Column>
      </Grid.Row>
    );
  }
}

export default StemList;
