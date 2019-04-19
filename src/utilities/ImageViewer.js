import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

class ImageViewer extends Component {
 
  render() {
 
    const images = [
      {
        original: 'http://localhost:3500/texts/CricketRidesCoyote/CricketRidesCoyote_Hand1.png',
        thumbnail: 'http://localhost:3500/texts/CricketRidesCoyote/CricketRidesCoyote_Hand1.png',
      },
      {
        original: 'http://localhost:3500/texts/CricketRidesCoyote/CricketRidesCoyote_Hand2.png',
        thumbnail: 'http://localhost:3500/texts/CricketRidesCoyote/CricketRidesCoyote_Hand2.png'
      },
      {
        original: 'http://localhost:3500/texts/CricketRidesCoyote/CricketRidesCoyote_Hand3.png',
        thumbnail: 'http://localhost:3500/texts/CricketRidesCoyote/CricketRidesCoyote_Hand3.png'
      }
    ]
 
    return (
      <ImageGallery items={this.props.images} />
    );
  }
 
}
 
export default ImageViewer;
