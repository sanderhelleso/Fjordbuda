import React, { Component } from 'react';
import { ArrowDown } from 'react-feather';

export default class Landing extends Component {
    componentDidMount() {
        window.addEventListener('scroll', scrollSpy);
        animateArrow();
    }

    render() {
        return (
            <div>
                <header id='historyHeader'>
                    <h1>En historie uten like</h1>
                    <p>Stiftet i den idylliske landsbyen Geiranger, Vinjenaustet er ikke som alle andre naust</p>
                    <span id='readMoreBtn'><ArrowDown size={40} color='#ffffff' /></span>
                    <svg id='headerSvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <polygon className="svg--sm" fill="white" points="0,0 30,100 65,21 90,100 100,75 100,100 0,100"/>
                        <polygon className="svg--lg" fill="white" points="0,0 15,100 33,21 45,100 50,75 55,100 72,20 85,100 95,50 100,80 100,100 0,100" />
                    </svg>
                </header>

                <section id ='historySection'>
                    <h2>Section Content</h2>
                </section>
            </div>
        )
    }
}

function scrollSpy() {
    const header = document.querySelector("#historyHeader");
    const navbar = document.querySelector("#topNav");
    if ((window.scrollY + 75) > (header.offsetTop + header.offsetHeight)) {
        navbar.classList.remove("topNavOnBg");
        navbar.classList.add("topNavOffBg");
    }

    else {
        navbar.classList.remove("topNavOffBg");
        navbar.classList.add("topNavOnBg");
    }
}

function animateArrow() {
    const arrow = document.querySelector("#readMoreBtn");
    setInterval(() => {
        arrow.className = 'animated fadeInDown';
        setTimeout(() => {
            arrow.className = '';
        }, 1500);
    }, 4000);
}
