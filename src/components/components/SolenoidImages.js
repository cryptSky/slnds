import { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Outer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  overflow: hidden;
 
`;



class CustomSlide extends Component {
  render() {
    const { index, ...props } = this.props;
    return (
      <div {...props}></div>
    );
  }
}

export default class Responsive extends Component {

  constructor(props) {
      super(props);
      this.state = { deadline: "January, 10, 2022", deadline1: "February, 10, 2022", deadline2: "February, 1, 2022" };
    }

  render() {
    var settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      adaptiveHeight: 300,
      arrows: false,
      className: 'notes-slider',
      autoplay: true,
      autoplaySpeed: 5000,

      responsive: [
        {
          breakpoint: 1900,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            //initialSlide: 2,
            infinite: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
          }
        }
      ]
    };
    return (
        <div className='nft'>
          <Slider {...settings}>
            <CustomSlide className='itm' index={1}>
            <div className="d-item">
              <div className="nft__item">

                  <div className="nft__item_wrap">
                    <Outer>
                      <span>
                          <img src="./img/solenoids/Solenoid2.png" className="lazy nft__item_preview" alt=""/>
                      </span>
                    </Outer>
                  </div>
                  <div className="nft__item_info">
                      {/*<span onClick={()=> window.open("/#", "_self")}>
                          <h4>Pinky Ocean</h4>
                      </span>
                      <div className="nft__item_price">
                          1.5 SOL<span></span>
                      </div>

                      <div className="nft__item_like">
                          <i className="far fa-heart"></i><span>50</span>
                      </div>    */} 
                                        
                  </div>  
              </div>
            </div>
            </CustomSlide>

            <CustomSlide className='itm' index={2}>
              <div className="d-item">
                <div className="nft__item">
                    
                    <div className="nft__item_wrap">
                      <Outer>
                        <span>
                            <img src="./img/solenoids/Solenoid7.png" className="lazy nft__item_preview" alt=""/>
                        </span>
                      </Outer>
                    </div>
                    <div className="nft__item_info">
                        {/*<span onClick={()=> window.open("/#", "_self")}>
                            <h4>Deep Sea Phantasy</h4>
                        </span>
                        <div className="nft__item_price">
                            1.5 SOL
                        </div>

                      <div className="nft__item_like">
                          <i className="far fa-heart"></i><span>50</span>
                      </div>    */}                                  
                    </div> 
                </div>
            </div>
            </CustomSlide>

            <CustomSlide className='itm' index={3}>
              <div className="d-item">
                <div className="nft__item">
                    
                    <div className="nft__item_wrap">
                      <Outer>
                        <span>
                            <img src="./img/solenoids/Solenoid6.png" className="lazy nft__item_preview" alt=""/>
                        </span>
                      </Outer>
                    </div>
                    <div className="nft__item_info">
                        {/*<span onClick={()=> window.open("/#", "_self")}>
                            <h4>Rainbow Style</h4>
                        </span>
                        <div className="nft__item_price">
                            1.5 SOL<span></span>
                        </div>
                        
                      <div className="nft__item_like">
                          <i className="far fa-heart"></i><span>50</span>
                      </div>    */}                                  
                    </div> 
                </div>
            </div>
            </CustomSlide>

            <CustomSlide className='itm' index={4}>
            <div className="d-item">
                <div className="nft__item">
                    
                    <div className="nft__item_wrap">
                      <Outer>
                        <span>
                            <img src="./img/solenoids/Solenoid9.png" className="lazy nft__item_preview" alt=""/>
                        </span>
                      </Outer>
                    </div>
                    <div className="nft__item_info">
                        {/*<span onClick={()=> window.open("/#", "_self")}>
                            <h4>Two Tigers</h4>
                        </span>
                        <div className="nft__item_price">
                            1.5 SOL<span></span>
                        </div>
                      <div className="nft__item_like">
                          <i className="far fa-heart"></i><span>50</span>
                      </div>    */}                               
                    </div> 
                </div>
            </div>
            </CustomSlide>

            <CustomSlide className='itm' index={5}>
            <div className="d-item">
                <div className="nft__item">
                    
                    <div className="nft__item_wrap">
                      <Outer>
                        <span>
                            <img src="./img/solenoids/Solenoid3.png" className="lazy nft__item_preview" alt=""/>
                        </span>
                      </Outer>
                    </div>
                    <div className="nft__item_info">
                        {/*<span onClick={()=> window.open("/#", "_self")}>
                            <h4>The Truth</h4>
                        </span>
                        <div className="nft__item_price">
                            1.5 SOL<span></span>
                        </div>
                        
                      <div className="nft__item_like">
                          <i className="far fa-heart"></i><span>50</span>
                      </div>    */}                             
                    </div>
                </div>
            </div>
            </CustomSlide>

            <CustomSlide className='itm' index={6}>
            <div className="d-item">
                <div className="nft__item">
                    
                    <div className="nft__item_wrap">
                      <Outer>
                        <span>
                            <img src="./img/solenoids/Solenoid4.png" className="lazy nft__item_preview" alt=""/>
                        </span>
                      </Outer>
                    </div>
                    <div className="nft__item_info">
                        {/*<span onClick={()=> window.open("/#", "_self")}>
                            <h4>Running Puppets</h4>
                        </span>
                        <div className="nft__item_price">
                            1.5 SOL<span></span>
                        </div>    
  
                      <div className="nft__item_like">
                          <i className="far fa-heart"></i><span>50</span>
                      </div>    */}                                
                    </div> 
                </div>
            </div>
            </CustomSlide>

            <CustomSlide className='itm' index={6}>
            <div className="d-item">
                <div className="nft__item">
                    
                    <div className="nft__item_wrap">
                      <Outer>
                        <span>
                            <img src="./img/solenoids/Solenoid5.png" className="lazy nft__item_preview" alt=""/>
                        </span>
                      </Outer>
                    </div>
                    <div className="nft__item_info">
                        {/*<span onClick={()=> window.open("/#", "_self")}>
                            <h4>Running Puppets</h4>
                        </span>
                        <div className="nft__item_price">
                            1.5 SOL<span></span>
                        </div>    
  
                      <div className="nft__item_like">
                          <i className="far fa-heart"></i><span>50</span>
                      </div>    */}                                
                    </div> 
                </div>
            </div>
            </CustomSlide>

            <CustomSlide className='itm' index={6}>
            <div className="d-item">
                <div className="nft__item">
                    
                    <div className="nft__item_wrap">
                      <Outer>
                        <span>
                            <img src="./img/solenoids/Solenoid8.png" className="lazy nft__item_preview" alt=""/>
                        </span>
                      </Outer>
                    </div>
                    <div className="nft__item_info">
                        {/*<span onClick={()=> window.open("/#", "_self")}>
                            <h4>Running Puppets</h4>
                        </span>
                        <div className="nft__item_price">
                            1.5 SOL<span></span>
                        </div>    
  
                      <div className="nft__item_like">
                          <i className="far fa-heart"></i><span>50</span>
                      </div>    */}                                
                    </div> 
                </div>
            </div>
            </CustomSlide>
            

          </Slider>
        </div>
    );
  }
}
