import { useState } from "react";
import Breakpoint, { BreakpointProvider, setDefaultBreakpoints } from "react-socks";
import {Link, scroller} from 'react-scroll';
import { confirmAlert } from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css';


setDefaultBreakpoints([
  { xs: 0 },
  { l: 1199 },
  { xl: 1200 }
]);


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

const Header = function() {

  

  const [showmenu, btn_icon] = useState(false);

    return (
    <header id="myHeader" className='navbar white'>
     <div className='container'>
       <div className='row w-100-nav'>
          <div className='logo px-0 navbar-title'>
              <div className='navbar-item'>
              
                  <img
                    src="./img/solenoids_logo.png"
                    className="img-fluid d-none"
                    id="logo-img"
                    alt="#"
                  />

              </div>

              <div className='navbar-item'>
                <div className='header-social'>                                        
                  <span onClick={()=> window.open("https://twitter.com/SolenoidsNFT", "_target")}><i className="fab fa-twitter"></i></span>
                  <span onClick={()=> window.open("https://discord.gg/UYxrby2ZmF", "_target")}><i className="fab fa-discord p-2"></i></span>
                </div>

              </div>

          </div>
                             
              <BreakpointProvider>
                <Breakpoint l down>
                {showmenu &&
                  <div className='menu'>
                    <div className='navbar-item' onClick={() => scroller.scrollTo('story', {
                            smooth: true,
                            offset: -70,
                            duration: 500,
                        })}>
                    
                        <div >
                        <div className="dropdown-custom dropdown-toggle btn" >
                            <Link  to="story" spy={true} smooth={true}>
                             Story
                            </Link>
                            <span className='lines'></span>                         
                          </div>
                          
                        </div>

                    </div>
                    <div className='navbar-item' onClick={() => scroller.scrollTo('roadmap', {
                            smooth: true,
                            offset: -70,
                            duration: 500,
                        })}>
                          <div className="dropdown-custom dropdown-toggle btn" >
                            <Link to="roadmap" spy={true} smooth={true} >
                              Roadmap
                            </Link>                       
                            <span className='lines'></span>
                            
                          </div>

                    </div>
                    <div className='navbar-item'  onClick={() => scroller.scrollTo('faq', {
                            smooth: true,
                            offset: -70,
                            duration: 500,
                        })}>
                      <div>
                          <div className="dropdown-custom dropdown-toggle btn" >
                          <Link  to="faq" spy={true} smooth={true}>FAQ</Link> 
                            <span className='lines'></span>
                            
                          </div>
                        </div>
                    </div>
                    
                  </div>}
                </Breakpoint>


                <Breakpoint xl>
                  <div className='menu'>
                    <div className='navbar-item' onClick={() => scroller.scrollTo('story', {
                            smooth: true,
                            offset: -70,
                            duration: 500,
                        })}>
                      
                          <div className="dropdown-custom dropdown-toggle btn">
                          <Link  to="story" spy={true} smooth={true}>Story</Link> 
                            
                            <span className='lines'></span>                         
                          </div>

                    </div>
                    <div className='navbar-item' onClick={() => scroller.scrollTo('roadmap', {
                            smooth: true,
                            offset: -70,
                            duration: 500,
                        })}>
                      <div>
                          <div className="dropdown-custom dropdown-toggle btn" >
                          <Link  to="roadmap" spy={true} smooth={true}>Roadmap</Link> 
                          
                            <span className='lines'></span>
                            
                          </div>
                          
                        </div>
                    </div>
                    <div className='navbar-item'  onClick={() => scroller.scrollTo('faq', {
                            smooth: true,
                            offset: -70,
                            duration: 500,
                        })}>
                      <div>
                          <div className="dropdown-custom dropdown-toggle btn" >
                          <Link  to="faq" spy={true} smooth={true}>FAQ</Link> 
                            
                            <span className='lines'></span>
                            
                          </div>
                        </div>
                    </div>
                    
                  </div>
                </Breakpoint>
              </BreakpointProvider>

              <div className='mainside mint-button'>
                <div onClick={submit} className="btn-main">MINT</div>
              </div>
                  
      </div>

        <button className="nav-icon" onClick={() => btn_icon(!showmenu)}>
          <div className="menu-line white"></div>
          <div className="menu-line1 white"></div>
          <div className="menu-line2 white"></div>
        </button>

      </div>     
    </header>
    );
}
export default Header;