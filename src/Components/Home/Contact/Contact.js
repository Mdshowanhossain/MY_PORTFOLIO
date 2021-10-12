import React from 'react';
import './contact.css';
const Contact = () => {
    return (
        <section class="contact">



            <section class="reviews">
                <div class="container">
                    <h1 class="section-heading"><span>Contact </span>Now</h1>
                    <p>If You Have Any Project In Your Mind.</p>
                </div>
            </section>




            <div class="all-container">
                <div class="card-wrapper ">
                    <div class="card">
                        <i class="fas fa-mobile-alt"></i>
                        <h1>Call</h1>
                        <h6>01998110072</h6>
                    </div>
                    <div class="card">
                        <i class="far fa-envelope"></i>
                        <h1>Email</h1>
                        <h6>mohammadsohan.me@gmail.com</h6>
                    </div>
                    <div class="card">
                        <i class="fas fa-street-view"></i>
                        <h1>Location</h1>
                        <h6>Dawlotpur,Khulna</h6>
                    </div>

                </div>


                <form action="">
                    <div class="input-wrap">
                        <input type="text" placeholder="Your Name *" />
                        <input type="text" placeholder="Your Email*" />
                    </div>
                    <div class="input-wrap-2">
                        <input type="text" placeholder="Your Subject..." />
                        <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                    </div>
                    <div class="btn-wraper">
                        <button class="btn btn-secondary">Send Message</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;