import React, { Component } from 'react'  
import Carousel from 'react-bootstrap/Carousel'  
import classes from './Carousel.css';

import "bootstrap/dist/css/bootstrap.css";

import DataPlan from '../../images/data_plan_website.jpg';
import DataPlan1 from '../../images/data_plan_website_1.jpg';
import DataPlan2 from '../../images/data_plan_website_2.jpg';


export class DataPlanCarousel extends Component {  
        render() {  
                return (  
                  
                         <div className={classes.width} class='container-fluid' >  

                         <Carousel interval={600} keyboard={false} pauseOnHover={true}>  
                         <Carousel.Item className={classes.carouselInner} style={{'height':"300px"}}  >  
                         <img style={{'height':"300px"}}  
                         className="d-block w-100"  
                            src={DataPlan} 
                            className={classes.carousel} />  
                                </Carousel.Item  >  

                                 <Carousel.Item className={classes.carouselInner} style={{'height':"300px"}}>  
                                 <img style={{'height':"300px"}}  
                                   className="d-block w-100"  
                                    src={DataPlan1}  
                                    className={classes.carousel}  />  
                                         </Carousel.Item>  
                                       <Carousel.Item className={classes.carouselInner} style={{'height':"300px"}}>  
                                       <img style={{'height':"300px"}}  
                                        className="d-block w-100"  
                                         src={DataPlan2}  
                                         className={classes.carousel} />  
                                         </Carousel.Item>  
                                        </Carousel>  
                                </div>   
                )  
        }  
}  


export default DataPlanCarousel;