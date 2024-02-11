import React from 'react';
import soccerVideo from '/public/Soccer.mp4';

const Video = () => {
  return (
    <div className='w-full relative'>
<img 
  className='absolute top-60 z-10 w-screen max-w-[300px] left-0 right-0 m-auto'
  src="/logo-home.webp" alt="Futuras Estrellas" />


      <video 
      className='w-full h-screen object-cover object-top' 
      autoPlay loop muted
      src={soccerVideo} type='video/webm'
      style={{clipPath: 'polygon(0 0, 100% 0, 100% 85%, 50% 100%,50% 100%,0 85%)'}}
      ></video>
      <video 
      className='absolute -bottom-48 blur-3xl -z-40' autoPlay loop muted      
      src={soccerVideo} type='video/webm'      
      ></video>


    </div>    
  );
};

export default Video;