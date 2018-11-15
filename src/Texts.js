import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

class TextsIntro extends Component {
  render() {
    return (
      <div className='ui content'>
        <p></p>
        <p>The unpublished field notes and typed manuscripts of Coeur d'Alene myths and tales presented in this archive were recorded in 1927 and 1929 by Gladys Reichard. The texts cover what Reichard classified into "myths and tales" and "tales with historical elements". The "myths and tales" are further divided into "Coyote cycle" and "myths not in Coyote cycle."</p>
		<p>The numbering of each text follows numbering of <a href="http://archive.org/stream/analysisofcoeurd41reic#page/n5/mode/2up" target="_blank" rel="noopener noreferrer">Reichard 1947</a> with the numbering of the typed manuscripts in parentheses "( )" directly preceding the title, the numbers corresponding to the field notes can found in the field note files. In addition, the titles reflect that resource and may differ from titles on field notes and typed manuscripts. Complete English translations of each text can also be found and come from An Analysis of Coeur d'Alene Indian Myths (<a href="http://archive.org/stream/analysisofcoeurd41reic#page/n5/mode/2up" target="_blank" rel="noopener noreferrer">Reichard 1947</a>).</p>

		<p>Analysis of some texts along with other excellent Coeur d'Alene resources can be found at Ivy Doak's <a href="http://ivydoak.com/Coeurd%27Alene/" target="_blank" rel="noopener noreferrer">Coeur d'Alene website</a>. The 1917 publication of Teit's <a href="https://archive.org/stream/folktalesofsalis00boas#page/118/mode/1up" target="_blank" rel="noopener noreferrer">Coeur d'Alene "tales"</a> which include different versions of a small number of the Coeur d'Alene texts in the archive can also be found online.</p>

		<p>The texts provided here were collected from photo-copies of Reichard's original manuscripts and quality varies from text to text. Files are available for download in PDF form or as image (PNG) files within the website (larger files will take longer to open).</p>

		<p>In the listings below, there are several choices you can select from. For those texts for which we have both hand-written and typed versions of the original field notes, click 'both' for images of the hand-written notes in the top half of your screen, and of the typed notes in the lower half. If you want to view the hand-written notes only, or the typed notes only, you can select 'image files' to see those resources right in your browser. You can select 'pdf' to open those files in Adobe .pdf format - and if you do so, your browser's settings for managing pdf files will determine whether the resource will appear in your browser, or whether you must download the resource and view it in a separate window. Note that the image resources (in the 'both' view, or separately) may take a few moments to load.</p>

		<p>Three of the texts listed below are also available in audio format here. These, and additional audio resources, are also available in the audio files section of this site.</p>
        <p></p>
        <p></p>
      </div>
    );
  }
}

class Texts extends Component {
  render() {
    return (
      <div className='ui content'>
         <TextsIntro />
      
	      <Grid celled='internally' padded='horizontally' verticalAlign='top'>   
	          <TextElement
	            color='black'
	            cycle='Chief Child of the Root (Transformer)'
	          />

	      </Grid>

	      <Grid celled='internally' padded='horizontally' verticalAlign='top'>
	     	 <TextElement2
	      		color='blue'
	      		title='Title'
	            versions='Versions'
	            audio='Audio'
	            translation='Translation'
	          />
	          <TextElement2
	            title='(1) Chief Child of the Root (Transformer)'
	            versions='typed manuscript (pdf, image, metadata)'
	            audio=' -- '
	            translation='link'
	          />
	      </Grid>

	      <Grid celled='internally' padded='horizontally' verticalAlign='top'>   
	          <TextElement
	            color='black'
	            cycle='Coyote Cycle (2-21)'
	          />

	      </Grid>

        <Grid celled='internally' padded='horizontally' verticalAlign='top'>
	          <TextElement2
	            color='blue'
	            title='Title'
	            versions='Versions'
	            audio='Audio'
	            translation='Translation'
	          />
	  
        <TextElement2
	    	    title='(2) Origin of Indian tribes (From Parts of Monster)'
	           	versions='typed manuscript (pdf, image, metadata)'
	            audio=' -- '  
	            translation='link'
	           />
       <TextElement2
	    	    title='(3) Coyote overpowers Sun'
	            versions='typed manuscript (pdf, image, metadata), hand-written field notes (pdf, image, metadata), both'
	            audio=' -- ' 
	            translation='link' 
	           />
	    <TextElement2
	    	    title='(4) Coyote steals his daughter in law'
	            versions='typed manuscript (pdf, image, metadata), hand-written field notes (pdf, image, metadata), both'
	            audio=' -- ' 
	            translation='link' 
	           />
        </Grid>
      </div>
    );
  }
}

class TextElement extends Component {
  render() {
    const color = this.props.color ? this.props.color : 'white';
    return (
      <Grid.Row color={color}>
        <Grid.Column width={6}>{this.props.cycle}</Grid.Column>
      </Grid.Row>
    );
  }
}

class TextElement2 extends Component {
  render() {
    const color = this.props.color ? this.props.color : 'white';
    return (
      <Grid.Row color={color}>
        <Grid.Column width={4}>{this.props.title}</Grid.Column>
        <Grid.Column width={8}>{this.props.versions}</Grid.Column>
        <Grid.Column width={2}>{this.props.audio}</Grid.Column>
        <Grid.Column width={1}>{this.props.translation}</Grid.Column>
      </Grid.Row>
    );
  }
}

class AudioPlayer extends Component {
	render() {
		return (
			<audio controls="controls" preload="none">
  				<source src="../audio/07_Track_7Engl_Cricket_Rides_Coyote.wav" type="audio/wav" />
  				<source src="../audio/07_Track_7Engl_CricketRides.mp3" type="audio/mpeg" />
   				Your browser does not support the HTML5 audio element.  
   				<a href="07_Track_7Engl_CricketRides.mp3">Access the file</a> directly.
			</audio> 
		);
	}
}

export default Texts;
