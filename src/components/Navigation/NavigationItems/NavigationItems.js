import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import { Container } from 'react-grid-system';

const navigationItems = (props) => (
    <Container>
    <ul className={classes.NavigationItems}>
        <NavigationItem link='#' active><strong>Kate Sorotos </strong></NavigationItem>
        <NavigationItem link='#about'>About</NavigationItem>
        <NavigationItem link='#portfolio'>Portfolio</NavigationItem>
        <NavigationItem link='#posts'>Blog</NavigationItem>
        <NavigationItem link='#contact'>Contact</NavigationItem>
    </ul>
       </Container>

);

export default navigationItems;