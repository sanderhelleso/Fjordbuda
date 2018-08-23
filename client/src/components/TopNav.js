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

    componentDidMount() {
        const logo = document.querySelector("#navLogo");
        const toggler = document.querySelector("#topNav").querySelector('svg')
        setTimeout(() => {
            modifyNav(logo, toggler);
        }, 2000);
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

// set original state to be reversed
function modifyNav(logo, toggler) {
    prevStateLogo = logo.src;
    prevStateNav = window.getComputedStyle(toggler).getPropertyValue('stroke');
}

let prevStateLogo;
let prevStateNav;
function toggleMenu(bool) {

    setTimeout(() => {
        // remove mouse interaction for duration of animation
        const toggler =  document.querySelector('#menuToggler');
        toggler.style.pointerEvents = 'none';
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
                toggler.querySelector('svg').style.stroke = '#ffffff !important';
                logo.src = '../img/logo/Vinje1_white.png';
            }, 150);
            menu.className = 'menuOverlay animated fadeIn';
            nav.className = 'navbar navbar-dark transparent'
            menu.style.display = 'block';
        }
    
        else {
            console.log(prevStateLogo);
            if (prevStateLogo != undefined) {
                logo.src = prevStateLogo;
            }
            nav.querySelector('svg').style.stroke = prevStateNav;
            nav.className = 'navbar navbar-dark transparent';

            document.body.style.overflowY = 'auto';
            menu.className = 'menuOverlay animated fadeOut';
            setTimeout(() => {
                menu.style.display = 'none';
            }, 750);
        } 
    }, 100);

    return bool ? <X size={35} color='#ffffff' /> : <Menu size={35} color={prevStateNav} />
}

