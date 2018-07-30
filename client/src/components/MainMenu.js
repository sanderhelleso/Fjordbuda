import React, { Component } from 'react'

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
                <div className="menuOverlay-content animated fadeInLeft">
                    <a href="#">Butikker</a>
                    <a href="#">Nærmest Meg</a>
                    <a href="#">Varer & Leverandører</a>
                    <a href="#">Vår Historie</a>
                    <a href="#">Kontakt Oss</a>
                </div>
            </div>
        )
    }
}

// change bg on hover
let lastLink;
function changeMenuBg() {
    const linksArr = Array.from(document.querySelector('.menuOverlay-content').querySelectorAll('a'));
    const index = linksArr.indexOf(this);
    const bg = document.querySelector('#menuBg');

    if (lastLink != this) {
        // set bg related to selected link
        bg.className = 'animated fadeOut';
        setTimeout(() => {
            bg.className = 'animated fadeIn';
            bg.style.background = `linear-gradient(rgba(121, 85, 72, 0.7), rgba(20, 20, 20, 0.7)),url(../img/menu/menubg${index}.jpg) no-repeat fixed`;
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
