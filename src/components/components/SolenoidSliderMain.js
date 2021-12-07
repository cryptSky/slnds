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
 <div className="container">
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
              <div onClick={submit} className="btn-main">MINT</div>
              <div className="mb-sm-30"></div>
              </Reveal>

          </div>
          <div className="col-md-6 xs-hide mt-10">
          <Reveal className='onStep d-inline' keyframes={inline} delay={300} duration={1200} triggerOnce>
            <div className="slider-image"><iframe src="https://giphy.com/embed/J39lmbcVo74gC6SDCe" width="100%" height="100%" frameBorder="0" className="giphy-embed position-absolute" allowFullScreen></iframe></div>
          </Reveal>
          </div>
      </div>
    </div>
);
export default slidermainparticle;