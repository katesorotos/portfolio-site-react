import React from 'react';

import classes from './Portfolio.css';
import { Row, Col, Container } from 'react-grid-system';

import WomenInTechCarousel from '../../BootstrapCarousel/WomenInTechCarousel';
import DataPlanCarousel from '../../BootstrapCarousel/DataPlanCarousel';
import RockPaperScissorsCarousel from '../../BootstrapCarousel/RockPaperScissorsCarousel';



const Portfolio = (props) => (
<Container id ="portfolio" className={classes.Portfolio}>
				<Row>
                    <Col sm={9}>

                    </Col>
					<Col sm={3}>
						<h2>BT FurtHER Projects</h2>
                    </Col>
				</Row>


<div  class="row d-flex justify-content-start">
	<div class="col-md-6">
		<div class="container" className={classes.web}>
<h3>Web Development</h3>
</div>
</div>
</div>


			<Row className={classes.width} > 

				<Col className={classes.web_dev} lg={4}>

						<a href="https://katesorotos.github.io/biography-pages_bootstrap/index.html"><h4>Women in Tech - Biography pages</h4></a>
						<h5><span>Technologies used:</span> HTML, CSS, Bootstrap, jQuery</h5> 

                        <WomenInTechCarousel/>
                        <br/>
                        </Col>

                        <Col className={classes.web_dev} lg={4}>
									<a href="https://katesorotos.github.io/data-plan-website/"><h4>Data Plan Project</h4></a>
									<h5><span>Technologies used:</span> HTML, CSS, Bootstrap, jQuery, JavaScript</h5>

                                        <DataPlanCarousel />
                                        <br/>
                                        </Col>
                                        
                        <Col className={classes.web_dev} lg={4}>
                        <a href="https://katesorotos.github.io/rock-paper-scissors/"><h4>Rock, Paper, Scissors</h4></a>
							<h5><span>Technologies used:</span> HTML, CSS, Bootstrap, jQuery, JavaScript</h5>
                            <RockPaperScissorsCarousel/>
                            <br/>
                        </Col>
                        </Row>

<Row>
<Col sm={7}>

		<div className={classes.python} >
            <h3>Python</h3>
                <h4>Links to my work using Python can be found on my <span><a href="https://github.com/katesorotos?tab=repositories">GitHub.</a></span></h4>
                    <h5><span><a href="https://github.com/katesorotos/module2">Module 2</a></span> - Python Fundamentals</h5>
                    <h5><span><a href="https://github.com/katesorotos/module3">Module 3</a></span> - Python Business Module</h5>
        </div>

    </Col>

                    </Row>




							



</Container>
);

export default Portfolio;