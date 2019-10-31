import React from 'react';

import './App.css';
import Logo from './components/Logo';

import {Grid} from '@material-ui/core';

import {SearchBar, VideoDetail, VideoList } from './components';

import youtube from './api/youtube';









 class App extends React.Component {
state = {
  videos: [] ,
  selectedVideo: null,
  

}

componentDidMount(){
this.handelSubmit('Youtube rewind')

}

onSelectVideo =(video) =>{

this.setState({selectedVideo: video});

}


     handelSubmit = async(searchTerm) =>{
      const response = await youtube.get('search', {
        params: {
        part: 'snippet',
        maxResults:5,
        key: 'AIzaSyA-ryQsEalZ6-J0uMKiFugIzbvu58wY9n4',
        q: searchTerm,
      }
        });
        
      this.setState({videos: response.data.items, selectedVideo:response.data.items[0] });

     }
 render (){
   const {selectedVideo, videos} =this.state;
 return (
  
  <div className="backcolor">
    <div><Logo /></div>
    <Grid style={{justify:"center"}}   container spacing={10}>
    
        <Grid item xs={11}>
           <Grid container spacing={10}>
             <Grid item xs={12}>
                 <SearchBar  onFormSubmit={this.handelSubmit} />
                 </Grid>
               <Grid  item xs={8}>
                  <VideoDetail  video={selectedVideo} />
                  </Grid>
                   <Grid item xs={4}>
               <VideoList  videos={videos} onSelectVideo={this.setSelectedVideo} />
                   </Grid>
               </Grid>


               </Grid>


           </Grid>
           </div>
)

 }
}

export default App;




