import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';
const Banner = () => {
    return (

        <div className="all-container">
            <div class="contact-me bg-black">
                <p>If You Have Any Project In Your Mind ?</p>

                <Link to='/contact'>
                    <button class="btn btn-primary">Contact me</button>
                </Link>
            </div>
        </div>
    );
};

export default Banner;