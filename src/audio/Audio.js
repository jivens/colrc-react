import React, { Component } from 'react';
import {Link} from "react-router-dom";
import AudioPlayer from "./AudioPlayer";

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
        <AudioElement />

      </div>
    );
  }
}


      //const media=[
      //  {collective_title:"Chief Child of the Root", collection:chief_child_of_the_root_collection},
      //  {collective_title:"Coyote Cycle", collection:coyote_cycle_collection}
      //];
      //const chief_child_of_the_root_collection = [
      //  {reichard_1947_number:"1", title:"Chief Child of the Root (Transformer)",
      //    manuscripts:chief_child_of_the_root_manuscripts}
      //];
      //const chief_child_of_the_root_manuscripts = [
      //  {style:"typed", pdf:"", image:"", metadata:chief_child_of_the_root_typed_metadata}
      //];
      
class AudioElement extends Component {
  render() {
      const sources=[
        {src:'http://lasrv01.ipfw.edu/COLRC/audio/01_Track_1Crd_Little_Mosquito1.wav', type:'audio/wav', direct:false},
        {src:'http://lasrv01.ipfw.edu/COLRC/audio//01_Track_1Crd_LittleMosq1.mp3', type:'audio/mpeg', direct:true}
      ];
      const sources2=[
        {src:'http://lasrv01.ipfw.edu/COLRC/audio/02_Track2Crd_Little_Mosquito2.wav', type:'audio/wav', direct:false},
        {src:'http://lasrv01.ipfw.edu/COLRC/audio//02_Track2Crd_LittleMosq2.mp3', type:'audio/mpeg', direct:true}
      ];
      const audiolist=[
        {title:"Part 1 - in Couer d'Alene", sources:sources},
        {title:"Part 2 - in Couer d'Alene", sources:sources2}
      ]; 
    
    return (
      <div className='ui content'>
	  	<AudioPlayer sources={audiolist[0].sources} title={audiolist[0].title} />
	    <AudioPlayer sources={audiolist[1].sources} title={audiolist[1].title} /> 
        
      </div>
    );
  }
}

export default Audio;
