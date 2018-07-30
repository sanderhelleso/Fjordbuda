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

function changeMenuBg() {
    const linksArr = Array.from(document.querySelector('.menuOverlay-content').querySelectorAll('a'));
    const index = linksArr.indexOf(this);

    // set bg related to selected link
    document.querySelector('.menuOverlay').style.background = `linear-gradient(rgba(20, 20, 20, 0.6), rgba(20, 20, 20, 0.6)),url(../img/menu/menubg${index}.jpg) no-repeat fixed`;
    document.querySelector('.menuOverlay').style.backgroundSize = 'cover';
}
