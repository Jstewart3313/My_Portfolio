import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops'
import "./Contact.scss"
import LinkedIn from "./linkedIn.png"
import Instagram from "./Instagram.png"
import Gh from "./GH.png"

export default function Contact() {
  return (
    <Spring
      from={{ opacity: 0, paddingLeft: "10%", paddingRight: "10%" }}
      to={{ opacity: 1, paddingLeft: "10%", paddingRight: "10%" }}
      config={{ delay: 1500, duration: 2500 }}
    >
      {
        props => (
          <div style={props}>
            <div className="contact-main">
              <div className='linked-in-ctn'>
                <a className="linked-in" href="https://www.linkedin.com/in/justinstewart3313/"> 
                <img src={LinkedIn} height="30" width="30" alt="Logo for Social Media" className='LI-logo'/> 
                </a>
              </div>
              <div className='insta-ctn'>
                <a className="insta" href="https://www.instagram.com/devflo_/"> 
                <img src={Instagram} height="30" width="30" alt="Logo for Social Media" className='LI-logo'/> 
                </a>
              </div>
              <div className='insta-ctn'>
                <a className="insta" href="https://github.com/Jstewart3313"> 
                <img src={Gh} height="30" width="30" alt="Logo for Social Media" className='LI-logo'/> 
                </a>
              </div>
            </div>
          </div>
        )
      }
    </Spring>
  );
}