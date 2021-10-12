import React from 'react';
import './Header.css';


const Header = () => {
    return (
        <section class="about about-header">
            <div class="container flex items-center">
                <div class="flex-1">
                    <h4>Hi,<span></span> I am Mohammad Sohan</h4>
                    <h1 class="white-text">A freelance <span>Web</span> Developer</h1>
                    <p class="about-intro">I am a freelance website designer and developer from Khulna,
                        Bangladesh. I create professional websites. I love art and always
                        try to show unique views to the audience through my design.I also love to create things that can be usefull to others.
                    </p>
                    <p class="about-intro">
                        Coding is also an art for me. I love it and now I have the opportunity to design along with the coding. I find it really interesting and I enjoyed the process a lot.
                    </p>
                    <button className="btn btn-secondary">Download CV</button>
                </div>
                <div class="flex-1">
                    <div class="a-left">
                        <div class="a-card">
                            <img class="a-img about-img" src="./images/sohan.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;