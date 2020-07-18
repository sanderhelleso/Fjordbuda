import { Helmet } from 'react-helmet';
import React, { Component } from 'react';
import { Slider, Slide } from 'react-materialize';
import Hero from './Hero';
import MainSection from './MainSection';

export default class Landing extends Component {
    componentWillMount() {
        document.body.id = 'mainBody';
    }

    componentDidMount() {
        setTimeout(() => {
            // document.querySelector('#topNav').querySelector('svg').style.stroke = '#ffffff';
            sliderProgress();
        }, 500);
    }

    render() {
        return (
            <section>
                <Helmet>
                    <title>Fjordbuda - Norsk tradisjon og kultur</title>
                    <meta
                        name='description'
                        content='Fjordbuda er en av de største leverandørene innen norske klær og suvenirer. Finn ditt Norge hos oss.'
                    />
                </Helmet>
                <div id='landingSection'>
                    <Hero />
                    <div className='overlay noSelect'>
                        <Slider fullscreen indicators={false}>
                            <Slide src='/img/landing/landing.jpg'></Slide>
                            <Slide src='/img/landing/landing2.jpg'></Slide>
                            <Slide src='/img/landing/landing3.jpg'></Slide>
                        </Slider>
                    </div>
                    <div id='landingProgress' />
                </div>
                <MainSection />
            </section>
        );
    }
}

function sliderProgress() {
    const sliderBar = document.querySelector('#landingProgress');
    let percentage = 0;
    let activeSlider = document.querySelector('.active');
    setInterval(() => {
        let newActive = document.querySelector('.active');
        sliderBar.style.width = `${percentage}%`;

        if (percentage != 100) {
            percentage = percentage + 0.25;
            sliderBar.style.backgroundColor = '#ffffff';
        }

        if (newActive != activeSlider) {
            sliderBar.className = 'animated fadeOutRight';
            activeSlider = newActive;
            setTimeout(() => {
                sliderBar.className = 'animated fadeInLeft';
                percentage = 5;
            }, 500);
        }
    }, 15);
}
