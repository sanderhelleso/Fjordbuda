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

let lastLink;
let rgbas = ['rgba(76, 175, 80, 0.7)', 'rgba(63, 81, 181, 0.7)', 'rgba(121, 85, 72, 0.7)', 'rgba(76, 175, 80, 0.7)', 'rgba(255, 152, 0, 0.7)'];
function changeMenuBg() {
    const linksArr = Array.from(document.querySelector('.menuOverlay-content').querySelectorAll('a'));
    const index = linksArr.indexOf(this);

    if (lastLink != this) {
        // set bg related to selected link
        document.querySelector('#menuBg').className = 'animated fadeOut';
        setTimeout(() => {
            document.querySelector('#menuBg').className = 'animated fadeIn';
            document.querySelector('#menuBg').style.background = `linear-gradient(rgba(121, 85, 72, 0.7), rgba(20, 20, 20, 0.7)),url(../img/menu/menubg${index}.jpg) no-repeat fixed`;
            document.querySelector('#menuBg').style.backgroundSize = 'cover';
            lastLink = this;
        }, 400);
    }
}
