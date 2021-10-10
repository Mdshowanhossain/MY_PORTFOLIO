import React from 'react';
import './about.css';



const About = () => {
    return (
        <section class="about">
            <div class="container flex items-center">
                <div class="flex-1">
                    <img class="about-img" src="images/man-2.png" alt="" />
                </div>
                <div class="flex-1">
                    <h1>About <span>Me</span></h1>
                    <h3>Hello! I'm Mohammad Sohan</h3>
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
                        <a href="#"><img src="./images/ph-1.png" alt="" /></a>
                        <a href="#"><img src="./images/ph-1.png" alt="" /></a>
                        <a href="#"><img src="./images/ph-1.png" alt="" /></a>
                        <a href="#"><img src="./images/ph-1.png" alt="" /></a>
                        <a href="#"><img src="./images/ph-1.png" alt="" /></a>
                        <a href="#"><img src="./images/ph-1.png" alt="" /></a>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;