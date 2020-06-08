import React from 'react';

import ProfileImage from '../../images/kate.png';
import classes from './Jumbotron.css';
import { Row, Col, Container } from 'react-grid-system';

import Socials from '../Socials/Socials';


const Jumbotron = ( props ) => (


<Container>
        <Row id="row" className={classes.Jumbotron}>
            <Col className={classes.left} id="intro">
                <Row>
                    <Col sm={12}>
                <h1>Hi!</h1>
                </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                    <h2>I'm Kate,</h2>
                        <h2>a London based &nbsp;
                    <div className={classes.word}>
                        <span style={{fontSize: "22px", marginTop: "52px"}}> front end developer.</span>
                        <span style={{fontSize: "22px", marginTop: "52px"}}> sequin enthusiast.</span>
                        <span style={{fontSize: "22px", marginTop: "52px"}}> fan of tech  &amp; techno.</span>
                        <span style={{fontSize: "22px", marginTop: "52px"}}> marmite lover.</span>
                        <span style={{fontSize: "22px", marginTop: "52px"}}> girl coder.</span> 
                        </div>
                        </h2>
                        </Col>
                        </Row>


                    <h3 style={{marginBottom: "30px"}}>Before starting my career in Tech, I studied Psychology at the University of Manchester. Two years on, I became part of BT FurtHER, a full-time coding bootcamp with Code First: Girls.
                    Today, I'm a Front-End Developer obsessed with satisfying UI's. I like to combine my passion for design and love for coding in my projects.</h3>
                    
                    <Socials />


            </Col>
            
            <div class="break"></div>
     
            <Col class="column">
                <img className={classes.right} src={ProfileImage} alt='Kate Sorotos' />
                {/* style={{float: 'left', padding: '20px'}} */}
            </Col>
            </Row>
    
         </Container>





);

export default Jumbotron;