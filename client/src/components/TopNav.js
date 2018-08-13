import React, { Component } from 'react'
import { Navbar, NavbarBrand, NavItem, Fa } from 'mdbreact';
import { Menu, X } from 'react-feather';
import MainMenu from './MainMenu';
import { scrollSpy } from '../globals/scrollSpy';
import { getUrl } from '../globals/getUrl';

export default class TopNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showMenu: false,
        };
        this._onButtonClick = this._onButtonClick.bind(this);
    }

    _onButtonClick() {
        // change icon and render menu
        const toggler = document.querySelector("#menuToggler");
        toggler.className = 'animated fadeIn'
        switch(this.state.showMenu) {
            case false:
                this.setState({
                    showMenu: true
                });
            break;

            case true:
                this.setState({
                    showMenu: false
                });
            break;
        }

        setTimeout(() => {
            toggler.className = '';
        }, 500);
    }

    render() {
        return (
            <div id='navMenu'>
                <Navbar id='topNav' color="transparent" dark>
                    <NavbarBrand href="/" className='noSelect' >
                        <img id='navLogo' src="../img/logo/Vinje1_white.png" height="30"/>
                    </NavbarBrand>
                    <NavItem id='menuToggler' onClick={this._onButtonClick} >
                        {toggleMenu(this.state.showMenu)}
                    </NavItem>
                </Navbar>
                <MainMenu />
            </div>
        )
    }
}

function toggleMenu(bool) {

    setTimeout(() => {
        // remove mouse interaction for duration of animation
        const toggler =  document.querySelector('#menuToggler');
        toggler.style.pointerEvents = 'none';
        toggler.querySelector('svg').style.stroke = '#ffffff !important';
        setTimeout(() => {
           toggler.style.pointerEvents = 'auto';
        }, 750);

        const nav = document.querySelector("#topNav");
        const logo = document.querySelector("#navLogo");
        const menu = document.querySelector(".menuOverlay");

        // hide scrollbar
        document.body.style.overflowY = 'hidden';
        if (bool) {
            setTimeout(() => {
                logo.src = '../img/logo/Vinje1_white.png';
            }, 150);
            menu.className = 'menuOverlay animated fadeIn';
            nav.className = 'navbar navbar-dark transparent'
            nav.querySelector('svg').style.stroke = '#ffffff';
            menu.style.display = 'block';
        }
    
        else {
            logo.src = '../img/logo/Vinje1_white.png';
            nav.className = 'navbar navbar-dark transparent topNavOffBg';
            nav.querySelector('svg').style.stroke = '#ffffff';

            document.body.style.overflowY = 'auto';

            // this code decides flow of navigation style depending on page
            if (getUrl()[0] === 'historie') {
                scrollSpy();
            }
            menu.className = 'menuOverlay animated fadeOut';
            setTimeout(() => {
                menu.style.display = 'none';
            }, 750);
        } 
    }, 100);

    return bool ? <X size={35} color='#ffffff' /> : <Menu size={35} color='#212121' />
}

