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
const inline = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
  .d-inline{
    display: inline-block;
   }
`;

const slidermainparticle= () => (
 <div className="container ">
    <div className="row align-items-center">
          <div className="col-md-6">
              <div className="spacer-single"></div>
              <h6> <span className="text-uppercase color"></span></h6>
              <Reveal className='onStep' keyframes={fadeInUp} delay={300} duration={900} triggerOnce>
              <h1 className="solenoid-title">SOLENOIDS</h1>
              <h1 className="solenoid-title">HAVE ARRIVED</h1>
              </Reveal>
              <Reveal className='onStep' keyframes={fadeInUp} delay={600} duration={900} triggerOnce>
              <p className="col-gray">
              A collection of 3,333 unique characters who distribute energy on the Solana blockchain. </p>
              <p className="col-gray">Each Solenoid will mint for 1 SOL. 
              </p>
              </Reveal>
              <div className="spacer-10"></div>
              <Reveal className='onStep d-inline' keyframes={inline} delay={800} duration={900} triggerOnce>
              <span onClick={()=> window.open("#", "_self")} className="btn-main inline lead">MINT </span>
              <div className="mb-sm-30"></div>
              </Reveal>

          </div>
          <div className="col-md-6 xs-hide mt-10">
          <Reveal className='onStep d-inline' keyframes={inline} delay={300} duration={1200} triggerOnce>
                <iframe src="https://giphy.com/embed/J39lmbcVo74gC6SDCe" width="360" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
          </Reveal>
          </div>
      </div>
    </div>
);
export default slidermainparticle;