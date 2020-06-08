import React from 'react';
import Logo from '../../images/favicon.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo}  style={{height: props.height}}>
        <img src={Logo} href="#intro" alt="Portfolio Home"/>
    </div>
);

export default logo; 