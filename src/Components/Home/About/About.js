import React from 'react';
import './about.css';



const About = () => {
    return (

        <>
            <section class="about">
                <div class="container flex items-center">
                    <div class="flex-1">
                        <div class="a-left">
                            <div class="a-card bg">
                            </div>
                            <div class="a-card">
                                <img class="a-img" src="./images/sohan.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="flex-1">
                        <h1 class="white-text">About <span>Me</span></h1>
                        <h3>Hello, I'm Mohammad Sohan</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque obcaecati asperiores provident unde
                            rem quas repellendus quam dolor cumque repellat. Fugit eius perferendis quam est ducimus ipsum hic
                            iusto recusandae provident, fuga dicta nisi cumque atque modi voluptatem officia repellendus vel,
                            rerum in, culpa incidunt unde voluptas. Quia nam ipsam quod mollitia velit error alias possimus,
                            fugit maxime nostrum accusantium nisi. Laboriosam quam laborum minima vel non? Voluptas, distinctio
                            sed possimus exercitationem quibusdam adipisci saepe molestiae error, veniam aspernatur libero
                            dolorum veritatis assumenda eaque quae dolores fugiat consectetur, nostrum eos magni cupiditate?
                            Modi aut dolor blanditiis totam perspiciatis. Similique voluptatem dolorum illum atque quo incidunt
                            optio, eligendi ipsum, vero velit cumque</p>
                        <div class="social">
                            <a href="#"><i class="fab fa-github"></i></a>
                            <a href="#"><i class="fab fa-linkedin-in"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="far fa-envelope"></i></a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;