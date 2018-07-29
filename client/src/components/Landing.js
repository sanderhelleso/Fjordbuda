import React, { Component } from 'react';
import { Mask, View } from 'mdbreact';
import { Slider, Slide } from 'react-materialize';
import Hero from './Hero';

export default class Landing extends Component {

    componentDidMount() {
        const sliderImgs = document.querySelector(".slider").querySelectorAll("img");
        sliderImgs.forEach(img => {
            console.log(img.style.backgroundImage);
        });

        setTimeout(() => {
            sliderProgress();
        }, 500);
    }

    render() {
        return (
            <div>
                <Hero />
                <div className="overlay">
                    <Slider fullscreen indicators={false}>
                        <Slide
                            src="/img/landing/landing.jpg" >
                        </Slide>
                        <Slide
                            src="/img/landing/landing2.jpg" >
                        </Slide>
                        <Slide
                            src="/img/landing/landing3.jpg" >
                        </Slide>
                    </Slider>
                </div>

                <div id="landingProgress" />
            </div>
        )
    }
}

function sliderProgress() {
    const sliderBar = document.querySelector("#landingProgress");
    let percentage = 0;
    let activeSlider = document.querySelector(".active");
    setInterval(() => {
        console.log(activeSlider);
        let newActive = document.querySelector(".active");
        sliderBar.style.width = `${percentage}%`;

        if (percentage != 100) {
            percentage = percentage + 0.25;
        }

        if (newActive != activeSlider) {
            sliderBar.className = 'animated fadeOutRight';
            activeSlider = newActive;
            setTimeout(() => {
                sliderBar.className = 'animated fadeInLeft';
                percentage = 0;
            }, 500);
        }
    }, 15);
}
