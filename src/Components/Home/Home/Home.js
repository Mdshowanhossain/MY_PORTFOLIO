import React from 'react';
import navbar from '../Navbar/navbar.css';
import About from '../About/About';
import Navbar from '../Navbar/Navbar';
import Services from '../Services/Services';
import RecentProjects from '../RecentProjects/RecentProjects';
import Contact from '../Contact/Contact';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Testmonials from '../Testmonials/Testmonials';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Services />
            <About />
            <RecentProjects />
            <Contact />
            <Testmonials />
            <Banner />
            <Footer />

        </div>
    );
};

export default Home;