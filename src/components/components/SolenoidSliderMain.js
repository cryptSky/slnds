import Reveal from 'react-awesome-reveal';
import { keyframes } from "@emotion/react";
import {submit} from '../menu/header';

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

    <div className="row" style={{justifyContent: "flex-start"}}>
          <div className="col-md-12">
              <div className="spacer-single"></div>

              


              <h6> <span className="text-uppercase color"></span></h6>
              <Reveal className='onStep' keyframes={fadeInUp} delay={300} duration={900} triggerOnce>
                  <div className="text-center">
                    <img src="/img/logo.png" className="img-fluid" />
                  </div>
              </Reveal>
              <div className="spacer-double"></div>
              <Reveal className='onStep' keyframes={fadeInUp} delay={600} duration={900} triggerOnce>
              <div className="text-center col-gray">
              <p className="slider-text">
              A collection of 3,333 unique characters who distribute energy on the Solana blockchain. </p>
              <p className="slider-text">Each Solenoid will mint for 1 SOL. 
              </p>
              </div>
              </Reveal>
              <div className="spacer-double"></div>
              <div className="d-flex justify-content-center">
                <Reveal className='onStep' keyframes={inline} delay={800} duration={900} triggerOnce>
                <div className="text-center column">
                  <div onClick={submit} className="btn-main text-center">MINT</div>
                  <div className="mb-sm-30"></div>
                </div>
                </Reveal>
              </div>

          </div>
          <div className="col-lg-12 mt-10">
            
          <Reveal className='onStep' keyframes={inline} delay={300} duration={1200} triggerOnce>
          <div className='jumbo-bottom'>
            <div className="imgContainer solenoid1">
              <img src="/img/solenoids/jumbotron/1.png" className="img-fluid" />
            </div>
            <div className="imgContainer solenoid1m">
              <img src="/img/solenoids/jumbotron/1m.png" className="img-fluid" />
            </div>
            <div className="imgContainer solenoid2">
              <img src="/img/solenoids/jumbotron/2.png" className="img-fluid" />
            </div>
            <div className="imgContainer solenoid2m">
              <img src="/img/solenoids/jumbotron/2m.png" className="img-fluid" />
            </div>
            <div className="imgContainer solenoid3">
              <img src="/img/solenoids/jumbotron/3.png" className="img-fluid" />
            </div>
            <div className="imgContainer solenoid3m">
              <img src="/img/solenoids/jumbotron/3m.png" className="img-fluid" />
            </div>
            <div className="imgContainer solenoid4">
              <img src="/img/solenoids/jumbotron/6.png" className="img-fluid" />
            </div>
            <div className="imgContainer solenoid5">
              <img src="/img/solenoids/jumbotron/5.png" className="img-fluid md-hide" />
            </div>
            <div className="imgContainer solenoid6">
              <img src="/img/solenoids/jumbotron/4.png" className="img-fluid" />
            </div>
            </div>
          </Reveal>
          </div>
      </div>

);
export default slidermainparticle;