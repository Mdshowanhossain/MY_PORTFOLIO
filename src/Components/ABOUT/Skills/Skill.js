import React from 'react';
import './Skill.css';



const Skill = () => {
    return (
        <div className="">
            <div className="skill_section ">
                <div className="content">
                    <div className="column col_left">
                        <h2 className="content-title">My Skills And Experience</h2>
                        <p>Learning new things is one of the skill developing hobbies and I always enjoy learning new things. For this reason I have been learning web design and development for a long time and I have built 10+ projects.To build projects I have to know a lot of new things and I am developing my skill continuously</p>
                    </div>
                    <div className="col_right">
                        <div className="bar">
                            <div className="info">
                                <span>HTML</span>
                                <span>95%</span>
                            </div>
                            <div className="line html"></div>
                        </div>
                        <div className="bar">
                            <div className="info">
                                <span>CSS</span>
                                <span>80%</span>
                            </div>
                            <div className="line css"></div>
                        </div>
                        <div className="bar">
                            <div className="info">
                                <span>JAVASCRIPT</span>
                                <span>70%</span>
                            </div>
                            <div className="line javascript"></div>
                        </div>
                        <div className="bar">
                            <div className="info">
                                <span>TYPESCRIPT</span>
                                <span>60%</span>
                            </div>
                            <div className="line typescript"></div>
                        </div>
                        <div className="bar">
                            <div className="info">
                                <span>NODE JS</span>
                                <span>75%</span>
                            </div>
                            <div className="line node"></div>
                        </div>
                        <div className="bar">
                            <div className="info">
                                <span>REACT</span>
                                <span>80%</span>
                            </div>
                            <div className="line react"></div>
                        </div>
                        <div className="bar">
                            <div className="info">
                                <span>MONGODB</span>
                                <span>90%</span>
                            </div>
                            <div className="line mongodb"></div>
                        </div>
                        <div className="bar">
                            <div className="info">
                                <span>MySQL</span>
                                <span>60%</span>
                            </div>
                            <div className="line mysql"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;