import React from 'react';
import Banner from '../../Home/Banner/Banner';
import Footer from '../../Home/Footer/Footer';
import Nav from '../../Home/Nav/Nav';
import Header from '../Header/Header';
import Skill from '../Skills/Skill';

const About = () => {
    return (
        <div>
            <Nav />
            <Header />
            <Skill />
            <Banner />
            <Footer />
        </div>
    );
};

export default About;