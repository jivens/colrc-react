import React, { Component } from 'react';
import SplitPane from "react-split-pane";
import styled from "styled-components";
import Table from "./Table";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const Wrapper = styled.div`
  height: 100vh;

  .Resizer {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background: #000;
    opacity: 0.2;
    z-index: 1;
    -moz-background-clip: padding;
    -webkit-background-clip: padding;
    background-clip: padding-box;
  }

  .Resizer:hover {
    -webkit-transition: all 2s ease;
    transition: all 2s ease;
  }

  .Resizer.horizontal {
    height: 11px;
    margin: -5px 0;
    border-top: 5px solid rgba(255, 255, 255, 0);
    border-bottom: 5px solid rgba(255, 255, 255, 0);
    cursor: row-resize;
    width: 100%;
  }

  .Resizer.horizontal:hover {
    border-top: 5px solid rgba(0, 0, 0, 0.5);
    border-bottom: 5px solid rgba(0, 0, 0, 0.5);
  }

  .Resizer.vertical {
    width: 11px;
    margin: 0 -5px;
    border-left: 5px solid rgba(255, 255, 255, 0);
    border-right: 5px solid rgba(255, 255, 255, 0);
    cursor: col-resize;
  }

  .Resizer.vertical:hover {
    border-left: 5px solid rgba(0, 0, 0, 0.5);
    border-right: 5px solid rgba(0, 0, 0, 0.5);
  }
  /*.Pane1 {
    background-color: blue;
  }
  .Pane2 {
    background-color: red;
  }*/
`;

class SplitView extends Component {
  constructor() {
    super();
    this.toggleBtmHeight = this.toggleBtmHeight.bind(this);
  }
  componentWillMount() {
    this.setState({
      btmHeight: ""
    });
  }
  toggleBtmHeight(topPaneHeight) {
    const maxHeight = 1000;
    const padding = 225;
    const btmPaneHeight = maxHeight - topPaneHeight - padding;
    this.setState({ btmHeight: btmPaneHeight + "px" });
  }
  render() {
    return (
    	<div className='ui content' height="1000px">
	      	<Wrapper>
		        <SplitPane
		          split="horizontal"
		          defaultSize="50%"
		          onChange={size => this.toggleBtmHeight(size)}
		        >
		          <ImageGallery key={1} items={[
		          	{original: 'http://localhost:3500/texts/CallingOnesKind/CallingOnesKind__Dorthy_Typed_Images/CallingOnesKind__Dorthy_Typed1.png', thumbnail: 'http://localhost:3500/texts/CallingOnesKind/CallingOnesKind__Dorthy_Typed_Images/CallingOnesKind__Dorthy_Typed1.png'},
		          	{original: 'http://localhost:3500/texts/CallingOnesKind/CallingOnesKind__Dorthy_Typed_Images/CallingOnesKind__Dorthy_Typed2.png', thumbnail: 'http://localhost:3500/texts/CallingOnesKind/CallingOnesKind__Dorthy_Typed_Images/CallingOnesKind__Dorthy_Typed2.png'}
		          ]} 
      			/>
		          <ImageGallery key={2} items={[
		          	{original: 'http://localhost:3500/texts/CallingOnesKind/CallingOnesKind__Dorthy_Typed_Images/CallingOnesKind__Dorthy_Typed3.png', thumbnail: 'http://localhost:3500/texts/CallingOnesKind/CallingOnesKind__Dorthy_Typed_Images/CallingOnesKind__Dorthy_Typed3.png'},
		          	{original: 'http://localhost:3500/texts/CallingOnesKind/CallingOnesKind__Dorthy_Typed_Images/CallingOnesKind__Dorthy_Typed4.png', thumbnail: 'http://localhost:3500/texts/CallingOnesKind/CallingOnesKind__Dorthy_Typed_Images/CallingOnesKind__Dorthy_Typed4.png'}
		          ]} 
		            btmHorizontal
		            bottomHeight={this.state.btmHeight}
		          />
	        </SplitPane>
	      </Wrapper>
	      </div>
    );
  }
}
export default SplitView;
