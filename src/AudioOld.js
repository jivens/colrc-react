import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import {Link} from "react-router-dom";

class AudioIntro extends Component {
  render() {
    return (
      <div className='ui content'>

		<h3>Audio Files</h3>

		<p>
			Below are several audio recordings of Coeur d'Alene.  For those for which we have corresponding field notes, 
			we have linked to these resources (which are also available in the <Link to="/texts">texts</Link> area of this site).
		</p>
		
		<p>		
		</p>
		
      </div>
    );
  }
}

class Audio extends Component {
  render() {
    return (
      <div className='ui content'>
        <AudioIntro />
        <Grid celled='internally' padded='horizontally' verticalAlign='top'>
          <AudioElement
            color='blue'
            salish='Salish'
            nicodemus='Nicodemus'
            english='English'
            link=''
            page='Link'
          />
        </Grid>
        <h4>Directional Prefixes</h4>
        <Grid celled='internally' padded='horizontally' verticalAlign='top'>
          <AudioElement
            salish="ci-"
            nicodemus="tsi-"
            english="first, before"
            link="http://www.archive.org/stream/rosettaproject_tqw_morsyn-2#page/n612/mode/2up"
            page="page 599 (420)"
          />
          <AudioElement
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

class AudioElement extends Component {
  render() {
    const color = this.props.color ? this.props.color : 'white';
    const weblink = this.props.link === '' ? this.props.page : <a href={this.props.link} target="_blank" rel="noopener noreferrer">{this.props.page}</a>;
    return (
      <Grid.Row color={color}>
        <Grid.Column width={3}>{this.props.salish}</Grid.Column>
        <Grid.Column width={3}>{this.props.nicodemus}</Grid.Column>
        <Grid.Column width={4}>{this.props.english}</Grid.Column>
        <Grid.Column width={3}>{weblink}</Grid.Column>
      </Grid.Row>
    );
  }
}

export default Audio;
