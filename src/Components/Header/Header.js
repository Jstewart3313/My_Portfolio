import React, { Component, Fragment } from 'react';
import './Header.scss'
import { Spring, animated } from 'react-spring/renderprops'

export default function Header() {
  return (
    <Spring
      from={{ opacity: 0}}
      to={{ opacity: 1}} 
      config={{ delay: 500, duration: 2500}}
    >
      {
        props => (
          <div style={props}>
            <div>
              <div className="name">
                  Justin Stewart
              </div>
              <div className='sub-header'>
                  Hi. I'm Justin.<br/> I'm an avid seeker of knowledge and dedicated problem solver.
              </div>  
            </div>
          </div>
        )
      }
    </Spring> 
  );
}