import React from 'react';
import Nav from '../Nav/Nav';
import './navbar.css'


const Navbar = () => {
    return (
        // <!-- HERO & NAV SECTION -->
        <header>
            <div class="container">
                <Nav />
                <div class="hero flex items-center justify-between">
                    <div class="left_side flex-1 flex justify-center">
                        <img src="./images/profile.png" alt="" />
                    </div>
                    <div class="right_side flex-1">

                        <h1 class="center">Hi</h1>

                        <h1>
                            I'm  Mohammad Sohan
                        </h1>

                        <div className="flex item-center ">
                            <h1>
                                I'm
                            </h1>
                            <div className="i-title">
                                <div className="i-title-wrapper">
                                    <div className="i-title-item">Web Developer</div>
                                    <div className="i-title-item">UI/UX Designer</div>
                                    <div className="i-title-item">Photographer</div>
                                    <div className="i-title-item">Writer</div>
                                </div>
                            </div>
                        </div>
                        <p>Learning new things is one of the skill developing hobbies and I always enjoy learning new things. For this reason I have been learning web design and development for a long time and I have built 10+ projects.To build projects I have to know a lot of new things and I am developing my skill continuously</p>
                        <div>
                            <button class="btn btn-secondary">Download CV</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        //  <!-- HERO & NAV SECTION --> */ 

    );
};

export default Navbar;