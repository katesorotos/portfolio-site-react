import React, { Component } from 'react'  
import Carousel from 'react-bootstrap/Carousel'  
import classes from './Carousel.css';

import "bootstrap/dist/css/bootstrap.css";

import RockPaperScissors from '../../images/rock_paper_scissors.jpg';


export class RockPaperScissorsCarousel extends Component {  
        render() {  
                return (  
                  
                         <div className='container-fluid' >  

                         <Carousel interval={600} keyboard={false} pauseOnHover={true}>  
                         <Carousel.Item className={classes.carouselInner} style={{'height':"300px"}}  >  
                         <img style={{'height':"300px"}}  
                         className="d-block w-100"  
                            src={RockPaperScissors}
                            className={classes.carousel}  />  
                                </Carousel.Item  >  

                                        </Carousel>  
                                </div>   
                )  
        }  
}  


export default RockPaperScissorsCarousel;