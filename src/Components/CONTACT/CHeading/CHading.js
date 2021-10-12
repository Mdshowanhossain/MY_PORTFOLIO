import React from 'react';
import './CHading.css';
const CHading = () => {
    return (
        <>
            <section class="contact">
                <div class="max-width">
                    <h3>get in touch</h3>
                    <h2 class="title">Contact</h2>
                    <div class="contact-content">
                        <div class="column left">
                            <div class="icons">
                                <div class="row">
                                    <i class="fas fa-user"></i>
                                    <div class="info">
                                        <div class="head">Name</div>
                                        <div class="sub-title">Mohammad Sohan Hossain</div>
                                    </div>
                                </div>
                                <div class="row">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <div class="info">
                                        <div class="head">Address</div>
                                        <div class="sub-title">Senhaty, Digholia, Khulna</div>
                                    </div>
                                </div>
                                <div class="row">
                                    <i class="fas fa-envelope"></i>
                                    <div class="info">
                                        <div class="head">Email</div>
                                        <div class="sub-title">mohammadsohan.me@gmail.com</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="column right">
                            <form action="#">
                                <div class="fields">
                                    <div class="field name">
                                        <input type="text" placeholder="Name" required />
                                    </div>
                                    <div class="field email">
                                        <input type="email" placeholder="Email" required />
                                    </div>
                                </div>
                                <div class="field">
                                    <input type="text" placeholder="Subject" required />
                                </div>
                                <div class="field textarea">
                                    <textarea cols="30" rows="10" placeholder="Message.." required></textarea>
                                </div>
                                <div class="button-area">
                                    <button type="submit">Send message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <div className="map-location">
                <div className="add">
                    <div className="card">
                        <h1>Here is me</h1>
                        <h3>Digholia, Khulna, Bangladesh</h3>
                        <div className="map-link">
                            <a href="https://www.google.com/maps/place/%E0%A6%B8%E0%A7%87%E0%A6%A8%E0%A6%B9%E0%A6%BE%E0%A6%9F%E0%A6%BF+%E0%A6%87%E0%A6%89%E0%A6%A8%E0%A6%BF%E0%A7%9F%E0%A6%A8+%E0%A6%AA%E0%A6%B0%E0%A6%BF%E0%A6%B7%E0%A6%A6/@22.8692447,89.5521358,18.75z/data=!4m8!1m2!2m1!1sDigholia+Star+jute+mills+2+no+get,khulna!3m4!1s0x39ff9b9c881b5efb:0xbfdeabb191f6505e!8m2!3d22.8694072!4d89.5516693" target="_blank">
                                Open in google map
                            </a>
                        </div>
                    </div>
                </div>
                <img src="./images/map.png" alt="" />

            </div>


        </>
    );
};

export default CHading;