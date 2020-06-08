import React from 'react';
import  classes from './About.css';
import { Row, Col, Container } from 'react-grid-system';


const About = ( props ) => (

    <Container id="about" className={classes.About}>
        <Row>
            <Col sm={8}>
                <h2>Experience</h2>
                <h3>Software Engineer at BT <span style={{fontSize: "12px"}}> (March 2019 - March 2020) - </span></h3>
                    <h4>working as part of a Java Linux based team - building applications in Java that sit within a PHP framework. </h4>
                    <br/>
                <h3>BT FurtHER <span style={{fontSize: "12px"}}> (Nov 2018 - March 2019) - </span></h3>
                    <h4>focused on full stack development including web front-end (CSS, HTML, JavaScript, UX, UI), Programming in Python, Databases, Test driven development, Agile and the basics of Cybersecurity. As well as involving several projects with BT technology teams grounded in real world business challenges. </h4>
                
                
            </Col>
        </Row>
    </Container>


);

export default About;