import React, { Component } from 'react';
import headshot from './headshotB&W.png'
import './Photo.scss';
import { Spring, animated } from 'react-spring/renderprops';

export default function Photo() {
    return  (
      <Spring
        from={{ opacity: 0}}
        to={{ opacity: 1}} 
        config={{ delay: 500, duration: 2500}} 
      >
        {
          props => (
            <div style={props}>
              <div className="photo-main">
                <img src={headshot} alt="black and white of me" className='mugshot'/> 
              </div>
            </div>
          )
        }
     
     

      </Spring>
    );

}