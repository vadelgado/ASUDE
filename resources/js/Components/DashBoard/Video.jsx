import React from 'react';
import soccerVideo from '/public/Soccer.mp4';

const Video = () => {
  return (
    <div className='w-full relative'>



      <video 
      className='w-full h-screen object-cover object-top' 
      autoPlay loop muted
      src={soccerVideo} type='video/webm'
      style={{clipPath: 'polygon(0 0, 99% 0, 99% 85%, 50% 99%,50% 99%,0 85%)'}}
      ></video>
      <video 
      className='absolute -bottom-48 blur-3xl -z-40' autoPlay loop muted      
      src={soccerVideo} type='video/webm'      
      ></video>


    </div>    
  );
};

export default Video;