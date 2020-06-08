import React from 'react';
import  classes from './RecentPosts.css';
import { Row, Col, Container } from 'react-grid-system';


const RecentPosts = ( props ) => (


<Container id="posts" className={classes.posts}>
    <Row>
    <Col sm={8}>
    <h2>Recent posts</h2>
    </Col>
    </Row>

<Row >
<Col sm={10}>
    <h3>As part of the BT FurtHER course, our cohort took part in weekly blog posts about what we learnt on our journey to becoming junior software developers.</h3>
    <ul>
        <li><a href="https://medium.com/@btfurther/welcome-to-the-bt-further-digital-intensive-6485c7175007">Week 1 - The internet, HTML & CSS. <span>16.11.18</span></a></li>
        <li><a href="https://medium.com/@btfurther/week-2-on-the-bt-digital-intensive-bb0f943f941f">Week 2 - Bootstrap, Command Line & Git repositories. <span>23.11.18</span></a></li>
        <li><a href="https://medium.com/@btfurther/week-3-on-the-bt-digital-intensive-6fe920a3adcc">Week 3 - Javascript, jQuery & pair programming. <span>30.11.18</span></a></li>
        <li><a href="https://medium.com/@btfurther/week-4-on-the-bt-digital-intensive-3ca41d510451">Week 4 - Pushing repositories to GitHub, data types in Python & creating our own games. <span>10.12.18</span></a></li>
        <li><a href="https://medium.com/@btfurther/week-5-on-the-bt-further-programme-e62966eec9161">Week 5 - Separating test files and function files & the difference between 'print' and 'return'. <span>14.12.18</span></a></li>
        <li><a href="https://medium.com/@btfurther/week-6-on-the-bt-further-programme-8e5c7b016405">Week 6 - Object Oriented Programming & Lists, Tuples and Dictionaries. <span>21.12.18</span></a></li>
        <li><a href="https://medium.com/@btfurther/week-7-on-the-bt-further-programme-10aa8fd2fe8f">Week 7 - Mutable and immutable compound data types and how to use the lambda function. <span>11.01.19</span></a></li>
        <li><a href="https://medium.com/@btfurther/week-8-on-the-bt-further-programme-754ca99cfe42">Week 8 - Using SQL databases, APIs & implementing Python fundamentals to create a digital phone book. <span>29.01.19</span></a></li>
        <li><a href="https://medium.com/@btfurther/week-9-on-the-bt-digital-intensive-4731fb1e2509">Week 9 - How to deploy projects onto Heroku and how to use the Flask framework. <span>29.01.19</span></a></li>
        <li><a href="https://medium.com/code-first-girls/week-10-on-the-bt-digital-intensive-43ed84e6bd97">Week 10 - How exceptions and validation can help us with debugging our code and return informative and user-friendly error statements. <span>31.01.19</span></a></li>
        <li><a href="https://medium.com/@btfurther/week-10-on-the-bt-digital-intensive-557768afeaad">Week 11 - Importance of Test Driven Development, unit testing & functional testing.
        <span>07.02.19</span></a></li>
        <li><a href="https://medium.com/@btfurther/week-11-on-the-bt-digital-intensive-9f39b0b31909">Week 12 - ERDs, primary and foriegn keys, using SQL with Data Manipulation Language and the basics of cyber security.
        <span>14.02.19</span></a></li>
    </ul>

</Col>
</Row>
</Container>


);

export default RecentPosts;