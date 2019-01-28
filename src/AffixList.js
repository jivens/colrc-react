import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

class AffixListIntro extends Component {
  render() {
    return (
      <div className='ui content'>
      <p>
        The the nearly 200 affixes included here come
        from <a href="http://www.archive.org/stream/rosettaproject_tqw_morsyn-2#page/n529/mode/2up" target="_blank" rel="noopener noreferrer">Reichard's 1938 grammar</a> (
        listed as 'Reichard 1938' on the left menu). Nearly all affixes are taken from Reichard 1938,
        these include a link to the relevant page of the original publication.  The sub-section which
        the affix appears is given in parentheses "( )". A very small number of entries come from
        Doak 1997, which is not accessible online. Affixes that Reichard identified as variants of
        other forms are indicated as such, with links to the main entry given by Reichard.
      </p>
      <p></p>
      </div>
    );
  }
}

class AffixList extends Component {
  render() {
    return (
      <div className='ui content'>
        <AffixListIntro />
        <Grid celled='internally' padded='horizontally' verticalAlign='top' textAlign='center'>
          <AffixListElement
            color='blue'
            salish='Salish'
            nicodemus='Nicodemus'
            english='English'
            link=''
            page='Link'
          />
        </Grid>
        <h4>Directional Prefixes</h4>
        <Grid celled='internally' padded='horizontally' verticalAlign='top' textAlign='center'>
          <AffixListElement
            salish="ci-"
            nicodemus="tsi-"
            english="first, before"
            link="http://www.archive.org/stream/rosettaproject_tqw_morsyn-2#page/n612/mode/2up"
            page="page 599 (420)"
          />
          <AffixListElement
            salish="čic-"
            nicodemus="chits-"
            english="hither (toward speaker)"
            link="http://www.archive.org/stream/rosettaproject_tqw_morsyn-2#page/n611/mode/2up"
            page="page 598 (412)"
          />
        </Grid>
      </div>
    );
  }
}

class AffixListElement extends Component {
  render() {
    const color = this.props.color ? this.props.color : 'white';
    const weblink = this.props.link === '' ? this.props.page : <a href={this.props.link} target="_blank" rel="noopener noreferrer">{this.props.page}</a>;
    return (
      <Grid.Row color={color}>
        <Grid.Column width={4}>{this.props.salish}</Grid.Column>
        <Grid.Column width={4}>{this.props.nicodemus}</Grid.Column>
        <Grid.Column width={5}>{this.props.english}</Grid.Column>
        <Grid.Column width={3}>{weblink}</Grid.Column>
      </Grid.Row>
    );
  }
}

export default AffixList;
