import React, { Component } from 'react';
import { Minus, Facebook, Instagram } from 'react-feather';

export default class MainMenu extends Component {

    componentDidMount() {
        const menuLinks = document.querySelector('.menuOverlay-content').querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('mouseover', changeMenuBg);
        });
    }


    render() {
        return (
            <div className='menuOverlay'>
                <div id='menuBg' />
                <div className="menuOverlay-content animated fadeIn">
                    <a href="/butikker"><span className='animated fadeInLeft leftSpan'><Minus /></span> Butikker <span className='animated fadeInRigh rightSpan'><Minus /></span></a>
                    <a href="/historie"><span className='animated fadeInLeft leftSpan'><Minus /></span> Vår Historie <span className='animated fadeInRight rightSpan'><Minus /></span></a>
                    <a href="/kontakt"><span className='animated fadeInLeft leftSpan'><Minus /></span> Kontakt Oss <span className='animated fadeInRight rightSpan'><Minus /></span></a>
                </div>
                <div id='socialMedia'>
                    {/* <a href='' target='_blank'><Facebook size={35} color='#ffffff' /></a> */}
                    <a href='https://www.instagram.com/fjordbuda/' target='_blank'><Instagram size={35} color='#ffffff' /></a>
                </div>
                <div id='hashtag'>
                    <h5>#fjordfeeling</h5>
                </div>
            </div>
        )
    }
}

// change bg on hover
let lastLink;
function changeMenuBg() {
    this.addEventListener('click', goToPage);
    const linksArr = Array.from(document.querySelector('.menuOverlay-content').querySelectorAll('a'));
    const index = linksArr.indexOf(this);
    const bg = document.querySelector('#menuBg');

    // hide all spans by default
    const spans = document.querySelector('.menuOverlay-content').querySelectorAll('span');
    spans.forEach(span => {
        span.style.display = 'none';
    });

    // show current spans
    const currentSpans = this.querySelectorAll('span');
    currentSpans.forEach(span => {
        if (span.classList.contains('rightSpan')) {
            span.className = 'animated fadeInRight rightSpan';
        }

        else {
            span.className = 'animated fadeInLeft leftSpan';
        }

        span.style.display = 'inline-block';
    });

    if (lastLink != this) {
        // set bg related to selected link
        bg.className = 'animated fadeOut';
        setTimeout(() => {
            bg.className = 'animated fadeIn';
            bg.style.background = `linear-gradient(rgba(121, 85, 72, 0.7), rgba(20, 20, 20, 0.7)),url(../img/menu/menubg${index}.jpg) no-repeat center`;
            bg.style.backgroundSize = 'cover';
            lastLink = this;

            animateBg(bg);
        }, 400);
    }
}

// slowly animate bg
let initValue = '1.2';
let startZoom = true;
function animateBg(element) {
    setInterval(() => {
        if (initValue <= '1') {
            element.style.transition = 'ease-in 12s';
            initValue = '1.2';
            startZoom = false;
            setTimeout(() => {
                element.style.transition = 'none';
                startZoom = true;
            }, 14000);
        }

        else if (startZoom) {
            initValue = initValue - 0.00005;
        }

        element.style.transform = `scale(${initValue})`
    }, 50);
}

// page animation and redirect
function goToPage() {
    const spans = this.querySelectorAll('span');
    spans[0].className = 'animated fadeOutLeft leftSpan';
    spans[1].className = 'animated fadeOutRight rightSpan';
    this.className = 'animated fadeOut';
}
