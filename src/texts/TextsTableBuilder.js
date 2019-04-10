import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';

class TextsTableBuilder extends Component {
	render () {

		return (  
			<div className="Grid">
				  <Grid>
				    <Grid.Row columns={7}>
				      <Grid.Column width={4}>
				      	{this.props.msType}, {this.props.fileType}
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