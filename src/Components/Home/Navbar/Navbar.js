import React from 'react';
import './navbar.css'


const Navbar = () => {
    return (
        // <!-- HERO & NAV SECTION -->
        <header>
            <div class="container">
                <nav class="flex items-center justify-between">
                    <div class="left_side flex items-center">
                        <div class="logo">
                            <img src="./images/logo.svg" alt="" />
                        </div>
                        <div>
                            <a href="#">Home</a>
                            <a href="#">About</a>
                            <a href="#">services</a>
                            <a href="#">Pages</a>
                            <a href="#">Blogs</a>
                        </div>
                    </div>
                    <div class="right_side">
                        <button class="btn btn-primary">Contact</button>
                    </div>
                </nav>

                <div class="hero flex items-center justify-between">
                    <div class="left_side flex-1 flex justify-center">
                        <img src="./images/man.png" alt="" />
                    </div>
                    <div class="right_side flex-1">
                        <h1>
                            MOHAMMAD SOHAN
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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore suscipit quidem nemo, beatae
                            ratione possimus voluptatem harum eius sequi voluptas alias ipsam quis inventore qui, in,
                            voluptate magni. Quas, voluptas!</p>
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