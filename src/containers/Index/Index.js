import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Jumbotron from "../../components/Jumbotron/Jumbotron"
import About from '../../components/About/About';
import Portfolio from '../../components/About/Portfolio/Portfolio';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecentPosts from '../../components/RecentPosts/RecentPosts';
import Footer from '../../components/Footer/Footer';
import Head from '../../components/Head/Head';


class Index extends Component {

    render () {

        return (
            <Aux>
                <Head title="Portfolio"/>
                <Jumbotron/>
                <About/>
                <Portfolio/>
                <RecentPosts/>
                <Footer/>
               
            </Aux>
        );
    }
}

export default Index;