import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';


const Nav = () => {
    return (

        <div className="container">
            <nav class="flex items-center justify-between">
                <div class="left_side flex items-center">
                    <div class="logo">
                        <h2>SOHAN</h2>
                    </div>
                    <div>
                        <Link to="/">Home</Link>
                        <Link to="about">About</Link>
                        <Link to="/projects">projects</Link>
                        <Link to="/contact">contact</Link>
                    </div>
                </div>
                <div class="right_side">

                    <Link to="/contact">
                        <button class="btn btn-primary">Contact</button>
                    </Link>
                </div>
            </nav>
        </div>

    );
};

export default Nav;