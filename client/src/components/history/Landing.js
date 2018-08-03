import React, { Component } from 'react';
import { ArrowDown } from 'react-feather';
import { Parallax } from 'react-materialize';
import $ from 'jquery'; 
import { scrollSpy } from '../../globals/scrollSpy';

import Story from './Story';

export default class Landing extends Component {
    componentDidMount() {
        // set white logo
        setTimeout(() => {
            document.querySelector('#navLogo').src = 'img/logo/Vinje1_white.png';
        }, 1000);

        window.addEventListener('scroll', scrollSpy);
        animateArrow();
    }

    render() {
        return (
            <div>
                <div id='progressBar' />
                <header id='historyHeader'>
                    <div id='historyIntro'>
                        <h1>En historie uten like</h1>
                        <p>Stiftet i den idylliske landsbyen Geiranger, Vinjenaustet er ikke som alle andre naust</p>
                    </div>
                    <span id='readMoreBtn'><ArrowDown size={40} color='#ffffff' /></span>
                    <svg id='headerSvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <polygon className="svg--sm" fill="white" points="0,0 30,100 65,21 90,100 100,75 100,100 0,100"/>
                        <polygon className="svg--lg" fill="white" points="0,0 15,100 33,21 45,100 50,75 55,100 72,20 85,100 95,50 100,80 100,100 0,100" />
                    </svg>
                </header>
                <Story />
            </div>
        )
    }
}

function animateArrow() {
    const arrow = document.querySelector("#readMoreBtn");
    arrow.addEventListener('click', scrollToHistory);
    setInterval(() => {
        arrow.className = 'animated fadeIn';
        setTimeout(() => {
            arrow.className = '';
        }, 1500);
    }, 4000);
}

// scroll to history start
function scrollToHistory() {
    $('html,body').animate({
        scrollTop: $("#historyHeading").offset().top - 25
    },'slow');
}
