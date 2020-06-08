import React, { Component } from 'react'  
import Carousel from 'react-bootstrap/Carousel'  
import classes from './Carousel.css';

import "bootstrap/dist/css/bootstrap.css";

import womenInTech from '../../images/women_in_tech_1.jpg'
import womenInTech1 from '../../images/women_in_tech_2.jpg'
import womenInTech2 from '../../images/women_in_tech_3.jpg'

export class WomenInTechCarousel extends Component {  
        render() {  
                return (  
                  
                         <div className='container-fluid' >  

                         <Carousel interval={600} keyboard={false} pauseOnHover={true}>  
                         <Carousel.Item className={classes.carouselInner} style={{'height':"300px"}}  >  
                         <img style={{'height':"300px"}}  
                         className="d-block w-100"  
                            src={womenInTech} 
                            className={classes.carousel} />  
                                </Carousel.Item  >  

                                 <Carousel.Item className={classes.carouselInner} style={{'height':"300px"}}>  
                                 <img style={{'height':"300px"}}  
                                   className="d-block w-100"  
                                    src={womenInTech1}  
                                    className={classes.carousel}  />  
                                         </Carousel.Item>  
                                       <Carousel.Item className={classes.carouselInner} style={{'height':"300px"}}>  
                                       <img style={{'height':"300px"}}  
                                        className="d-block w-100"  
                                         src={womenInTech2} 
                                         className={classes.carousel}  />  
                                         </Carousel.Item>  
                                        </Carousel>  
                                </div>   
                )  
        }  
}  


export default WomenInTechCarousel;