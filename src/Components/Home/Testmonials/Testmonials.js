import React, { useState } from 'react';
import './Testmonials.css';
import testimonials from './TestimonialsData';
import { CSSTransition, SwitchTransition } from 'react-transition-group';


const Testmonials = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const activeSlide = testimonials[activeIndex]
    console.log(activeSlide);



    function handleNext() {
        if (activeIndex >= testimonials.length - 1) {
            setActiveIndex(0);
        } else {
            setActiveIndex((oldIndex) => oldIndex + 1);
        }

    }


    function handlePrev() {

        if (activeIndex <= 0) {
            setActiveIndex(testimonials.length - 1);
        } else {
            setActiveIndex((oldIndex) => oldIndex - 1);
        }


    }






    return (
        <>
            <div class="main_test_container all-container">

                <section class="reviews">
                    <div class="container">
                        <h1 class="section-heading"><span>Testimonials </span></h1>
                        <p>see what our clients say about us</p>
                    </div>
                </section>

                <div className="wrapper_test">
                    <SwitchTransition>
                        <CSSTransition
                            key={activeSlide.id}
                            timeout={300}
                            classNames="fade"
                        >
                            <div className="testmonials_wrapper">
                                <div className="para_text">
                                    <p>{activeSlide.desc}</p>
                                    <br />
                                    <h4>{activeSlide.name}</h4>
                                    <h6>{activeSlide.title}</h6>
                                    <p>{activeSlide.org}</p>
                                </div>
                            </div>
                        </CSSTransition>
                    </SwitchTransition>



                    <div className="slider-bar">
                        <i onClick={handlePrev} role="button" tabIndex={0} onKeyDown={handlePrev} class="fas fa-arrow-left"></i>
                        <i onClick={handleNext} role="button" tabIndex={0} onKeyDown={handleNext} class="fas fa-arrow-right"></i>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Testmonials;