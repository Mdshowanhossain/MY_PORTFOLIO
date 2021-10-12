import React from 'react';
import './Services.css';


const Services = () => {
    return (
        <div class="services">
            {/* <div class="title">
                <h2 class="section-title">
                    SERVICES
                </h2>
            </div> */}
            <div class="box-container">
                <div class="box-1 bg-black">
                    <span><i class="fas fa-desktop"></i></span>
                    <p class="heading">Web Design</p>
                    <p class="details">I do ui/ux design for the website that helps website to get a unique look.</p>
                    <button>Read More</button>
                </div>
                <div class="box-2 bg-black">
                    <span><i class="fas fa-code"></i></span>
                    <p class="heading">Web Devoloment</p>
                    <p class="details">I also develop the websites. I create high performance website with blazing fast speed.</p>
                    <button>Read More</button>
                </div>
                <div class="box-2 bg-black">
                    <span><i class="fas fa-mobile-alt"></i></span>
                    <p class="heading">App Devoloment</p>
                    <p class="details">I develop mobile application. I create mobile app with eye catching ui.</p>
                    <button>Read More</button>
                </div>
                {/* <div class="box-3 bg-black">
                    <span>3</span>
                    <p class="heading">Security SEO</p>
                    <p class="details">if you want make a software for your bussniess conatact me.I make as soon as
                        possibale.You really like my work, if you don&#8217;t i change this until you like if you want.</p>
                    <button>Read More</button>
                </div> */}
            </div>
        </div>
    );
};

export default Services;