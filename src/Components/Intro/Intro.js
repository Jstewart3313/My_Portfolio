import React from 'react';
import './Intro.scss';
import { Spring } from 'react-spring/renderprops';

export default function Intro() {
  return (
    <Spring
      from={{ opacity: 0, paddingLeft: "10%", paddingRight: "10%" }}
      to={{ opacity: 1, paddingLeft: "10%", paddingRight: "10%" }}
      config={{ delay: 1500, duration: 2500 }}
    >
      {
        props => (
          <div style={props}>
            <div className="intro-main">
              <div className="intro-header">Who am I?</div>
              <div className="intro-p1">
                I'm a curious person by nature, whether that leads me deep into the mountains of the midwest or a rabbit-hole of learning a new technology. I'm a Veteran, a technologist, a self-proclaimed comedian, an artist, a photographer, a leader, a voice. 
              </div>
              <div className='intro-p2'>
                Serving in the United States Army for 5 years brought so much perspective into my life at such a young age. It showed me that hard work and self discpline can open doors that I couldn't even dream of. This has enstilled in me a work ethic that is driven by passion. Understanding your work is only part of success, but LOVING your work will tranform it from good to great.
              </div>
              <div className='intro-p3'>
                Highly self-motivated but infatuated by being inspired by others. I love articulating technical terms and collaborating with others. I'm a fast learner and am able to switch roles and project context with relative ease. I believe in expertise and appreciate honing in on my skills until I become highly proficient.
              </div>
              <div className='intro-p4'>
                At my core I am a empathetic, compassionate human. I find fullfillment in creatively expressing myself with others. Understanding whats drives people and how we can all truly learn something from everyone we encounter is something I will never let go. 
              </div>
            </div>
          </div>
        )
      }
    </Spring>
  );

}