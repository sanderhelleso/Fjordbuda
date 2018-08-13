import React, { Component } from 'react';
import { scrollSpy } from '../globals/scrollSpy';

export default class Hero extends Component {
    render() {
        return (
            <div id="hero">
                <div className="container animated fadeInUp noSelect">
                    <img src='../img/logo/FjordB_2.png' />
                    <p id="heroText">stiftet i den lille, idylliske landsbyen Geiranger. Vinjenaustet startet som et lite naust i 1993 og har siden voskt til å bli en av de største leverandørene innen norske klær og suvenirer</p>
                    <button id='explore' className='btn z-depth-5' onClick={initExplore}>Utforsk buda</button>
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