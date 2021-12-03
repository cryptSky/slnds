import { useState } from "react";
import Breakpoint, { BreakpointProvider, setDefaultBreakpoints } from "react-socks";
import {Link} from 'react-scroll';



setDefaultBreakpoints([
  { xs: 0 },
  { l: 1199 },
  { xl: 1200 }
]);

const Header = function() {

  const [showmenu, btn_icon] = useState(false);

    return (
    <header id="myHeader" className='navbar white'>
     <div className='container'>
       <div className='row w-100-nav'>
          <div className='logo px-0'>
              <div className='navbar-title navbar-item'>
                  <Link to="/">
                  <img
                    src="./img/solenoids_logo.png"
                    className="img-fluid d-none"
                    alt="#"
                  />
                </Link>
              </div>
          </div>
                             
              <BreakpointProvider>
                <Breakpoint l down>
                {showmenu &&
                  <div className='menu'>
                    <div className='navbar-item'>
                        <div >
                          <div className="dropdown-custom dropdown-toggle btn" >
                          <Link  to="story" spy={true} smooth={true}>Story</Link>
                            
                            <span className='lines'></span>                         
                          </div>
                          
                        </div>
                    </div>
                    <div className='navbar-item'>
                      <div>
                          <div className="dropdown-custom dropdown-toggle btn" >
                          <Link to="roadmap" spy={true} smooth={true}>Roadmap</Link>                           
                            <span className='lines'></span>
                            
                          </div>
                          
                        </div>
                    </div>
                    <div className='navbar-item'>
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
                    <div className='navbar-item'>
                        <div >
                          <div className="dropdown-custom dropdown-toggle btn">
                          <Link  to="story" spy={true} smooth={true}>Story</Link> 
                            
                            <span className='lines'></span>                         
                          </div>
                          
                        </div>
                    </div>
                    <div className='navbar-item'>
                      <div>
                          <div className="dropdown-custom dropdown-toggle btn" >
                          <Link  to="roadmap" spy={true} smooth={true}>Roadmap</Link> 
                          
                            <span className='lines'></span>
                            
                          </div>
                          
                        </div>
                    </div>
                    <div className='navbar-item'>
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

              <div className='mainside'>
                <Link to="/wallet" className="btn-main">Connect Wallet</Link>
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