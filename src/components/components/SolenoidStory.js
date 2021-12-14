import React from 'react';
import Reveal from 'react-awesome-reveal';
import { keyframes } from "@emotion/react";

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateY(40px);
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
`;
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const SolenoidStory= () => (
 <div className="container">
    <div className="row align-items-center">
          <div className="col-md-6">
              <div className="spacer-double"></div>

              <div className="spacer-10"></div>
              <Reveal className='onStep' keyframes={fadeInUp} delay={300} duration={600} triggerOnce>
              <h1 className="solenoid-title">The Solenoid Story</h1>
              </Reveal>
              <Reveal className='onStep' keyframes={fadeInUp} delay={600} duration={600} triggerOnce>
              <div className="spacer-double"></div>
              <div className="col-gray">

              Solenoids pride themselves on their ability to take electrical motion 
               and convert
              it into force—allowing each Solenoid to represent a unique magnetic field within the Metaverse,
              but they are not alone....
              </div>
              </Reveal>
              <div className="spacer-double"></div>
          </div>
          <div className="col-md-6">
            <Reveal className='onStep' keyframes={fadeIn} delay={900} duration={1500} triggerOnce>
              <img src="./img/Solenoid.png" className="lazy img-fluid" alt="" style={{display: "block", margin: "auto"}}/>
            </Reveal>
          </div>
      </div>
    </div>
);
export default SolenoidStory;