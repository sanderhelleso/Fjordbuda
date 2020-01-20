import React, { Component } from 'react';
import { scrollSpy } from '../globals/scrollSpy';

export default class Hero extends Component {
    render() {
        return (
            <div id="hero">
                <div className="container animated fadeInUp noSelect">
                    <img src='../img/logo/FjordB_2.png' />
                    <p id="heroText">Stiftet i den vesle, idylliske bygda Geiranger. Fjordbuda begynte som souvenirbutikk i et ombygd naust i 1994 og har siden vokst til å bli en av de største aktørene innen salg av turistgaver og suvenirartikler på vestlandet</p>
                    <button id='explore' className='btn z-depth-5' onClick={initExplore}>Utforsk selskapet</button>
                </div>
            </div>
        )
    }
}

function initExplore() {
    document.body.id = '';
    document.querySelector('#landingSection').className = 'animated fadeOut';
    document.querySelector('#mainSection').style.display = 'block';
    setTimeout(() => {
        document.querySelector('#mainHero').style.display = 'block';
        setTimeout(() => {
            document.querySelector('#mainSectionIntro').style.display = 'block';
            document.querySelector('#sections').style.display = 'block';
            window.addEventListener('scroll', scrollSpy);
        }, 500);
    }, 500);
}