import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';

class TextsTableBuilder extends Component {
	render () {

		return (  
			<div className="Grid">
				  <Grid>
				  	<Grid.Row columns={4}>
				  		<Grid.Column width={1}>
				  		</Grid.Column>
				  		<Grid.Column width={6}>
				  		<strong>Field Notes</strong>
				  		</Grid.Column>
				  		<Grid.Column width={2}>
				  		<strong>Translation</strong>
				  		</Grid.Column>
				  		<Grid.Column width={3}>
				  		<strong>Audio</strong>
				  		</Grid.Column>
				  	</Grid.Row>
				    <Grid.Row columns={7}>
				      <Grid.Column width={1}>
				      	{this.props.reichardNumber}, ({this.props.fieldNotesNumber})
				      </Grid.Column>
				      <Grid.Column width={2}>
				        Typed: {this.props.typedImage}, {this.props.typedPdf}, {this.props.metaDataTyped} 
				      </Grid.Column>
				      <Grid.Column width={2}>
				        Handwritten: {this.props.handImage}, {this.props.handPDF}, {this.props.metaDataHand}
				      </Grid.Column>
				      <Grid.Column width={2}>
				        Combined view
				      </Grid.Column>
				      <Grid.Column width={2}>
				        {this.props.pubEnglImage}, {this.props.pubEnglPDF}
				      </Grid.Column>
				      <Grid.Column width={3}>
				        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
				      </Grid.Column>
				    </Grid.Row>
				  </Grid>
				</div>
			)
	}
}

export default TextsTableBuilder;