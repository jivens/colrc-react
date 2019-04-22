import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import queryString from 'query-string';
import "react-image-gallery/styles/css/image-gallery.css";

class ImageViewer extends Component {
	constructor(props) {
    	super(props);
		this.state = {
			key: 0,
			images: [],
		};
  }

	componentDidMount() {
	  const values = queryString.parse(this.props.location.search);
	  console.log(values.key);
	  console.log(values.images);
	  	let i=0;
	  	let imagehash=[];
	  	if (Array.isArray(values.images)) {
		  	while (i < values.images.length){
				imagehash.push({original: values.images[i], thumbnail: values.images[i]});
	  			i++;
	  		}
	  	} else {
	  		imagehash.push({original: values.images, thumbnail: values.images});
	  	}
		this.setState({
			key: values.key,
			images: imagehash
		}); 
	}
 
  render() {

    return (
      <ImageGallery key={this.state.key} items={this.state.images} />
    );
  }
 
}
 
export default ImageViewer;
