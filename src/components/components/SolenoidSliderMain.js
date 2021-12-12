import Reveal from 'react-awesome-reveal';
import { keyframes } from "@emotion/react";
import { confirmAlert } from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css';

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


const submit = () => {
  confirmAlert({
    customUI: ({ onClose }) => {
      return (
        <div className='custom-ui align-content-center'>
          <h1>Hey!</h1>
          <p>The Solenoid Mint begins on December 22nd at 5 PM UCT.</p> 
          <p><span>Join our </span><span className="link-primary" onClick={()=> window.open("https://discord.gg/UYxrby2ZmF", "_target")}>Discord</span><span> and follow us on </span><span className="link-primary" onClick={()=> window.open("https://twitter.com/SolenoidsNFT", "_target")}>Twitter</span><span> for updates.</span></p>
          <div className="btn-ok"  onClick={onClose}>Ok</div>

        </div>
      );
    }
  });
};

const slidermainparticle= () => (

    <div className="row">
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
              <p className="">
              A collection of 3,333 unique characters who distribute energy on the Solana blockchain. </p>
              <p className="">Each Solenoid will mint for 1 SOL. 
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
          <div className="col-lg-12 xs-hide mt-10 jumbo-bottom">
          <Reveal className='onStep' keyframes={inline} delay={300} duration={1200} triggerOnce>
            <div className="imgContainer">
              <img src="/img/solenoids/jumbotron/1.png" className="img-fluid" />
            </div>
            <div className="imgContainer">
              <img src="/img/solenoids/jumbotron/2.png" className="img-fluid" />
            </div>
            <div className="imgContainer">
              <img src="/img/solenoids/jumbotron/3.png" className="img-fluid" />
            </div>
            <div className="imgContainer">
              <img src="/img/solenoids/jumbotron/6.png" className="img-fluid" />
            </div>
            <div className="imgContainer">
              <img src="/img/solenoids/jumbotron/5.png" className="img-fluid" />
            </div>
            <div className="imgContainer">
              <img src="/img/solenoids/jumbotron/4.png" className="img-fluid" />
            </div>
          </Reveal>
          </div>
      </div>

);
export default slidermainparticle;