import React from 'react';

import {Grid } from '@material-ui/core';

 import VideoItem from './VideoItem';


 const VideoList = ({videos, onSelectVideo}) => {
     const listofVideos = (videos.map((video) => 
      <VideoItem onSelectVideo={onSelectVideo} key={video.id.videoId} video={video} />));
    
    
    
    
    
    return( 
        
        
         <Grid container spacing={10}>
        
        {listofVideos}
        
        
     </Grid>
       
        
        
        )

}

export default VideoList;




