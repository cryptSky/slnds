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
              <p>
              A Solenoid exists with a sole purpose – to power the metaverse. Without the Solenoids, nothing can survive. </p>
              <p>
              Millions of years ago, the Solenoids went to the darkest and deepest part of the metaverse, The Flux, to protect what keeps the metaverse alive. 
              They knew the responsibility they had and the protection their power required so they decided to go into hiding.  </p>
              <p>
              As the majority of the Solenoids rested, Six Slinks were chosen to stand guard against the powers that be. 
              These six Solenoids have defeated every challenger that dared to enter The Flux, but something feels different about the latest threat that appeared on their radars. </p>
              <p>
              As they feared the worst, they decided to awaken the rest of the Solenoids…. </p>
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