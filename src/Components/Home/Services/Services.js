import React from 'react';
import './Services.css';


const Services = () => {
    return (
        <div class="services">
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
                <div class="box-3 bg-black">
                    <span><i class="fab fa-figma"></i></span>
                    <p class="heading">Figma</p>
                    <p class="details">I do ui/ux design for the website, using Figma that helps website to get a unique look.</p>
                    <button>Read More</button>
                </div>
                <div class="box-2 bg-black">
                    <span><i class="fas fa-mobile-alt"></i></span>
                    <p class="heading">App Devoloment</p>
                    <p class="details">I develop mobile application. I create mobile app with eye catching ui.</p>
                    <button>Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Services;