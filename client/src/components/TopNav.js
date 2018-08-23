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

let prevStateLogo;
let prevStateNav;
function toggleMenu(bool) {

    setTimeout(() => {
        const nav = document.querySelector("#topNav");
        const logo = document.querySelector("#navLogo");
        const menu = document.querySelector(".menuOverlay");
        const toggler =  document.querySelector('#menuToggler');

        // remove mouse interaction for duration of animation
        toggler.style.pointerEvents = 'none';
        setTimeout(() => {
            toggler.style.pointerEvents = 'auto';

            // set old state to be reversed
            prevStateLogo = logo.src;
            prevStateNav = window.getComputedStyle(nav.querySelector('svg')).getPropertyValue('stroke');
            console.log(prevStateNav);
        }, 750);

        // hide scrollbar
        document.body.style.overflowY = 'hidden';
        if (bool) {

            toggler.querySelector('svg').style.stroke = '#ffffff';
            logo.src = '../img/logo/Vinje1_white.png';
            
            menu.className = 'menuOverlay animated fadeIn';
            nav.className = 'navbar navbar-dark transparent'
            menu.style.display = 'block';
        }
    
        else {
            console.log(prevStateLogo, prevStateNav);
            if (prevStateLogo != undefined) {
                logo.src = prevStateLogo;
            }

            if (prevStateNav != undefined) {
                nav.querySelector('svg').style.stroke = prevStateNav;
            }

            document.body.style.overflowY = 'auto';
            menu.className = 'menuOverlay animated fadeOut';
            window.scrollBy(0,1);
            setTimeout(() => {
                menu.style.display = 'none';
            }, 750);
        } 
    }, 100);

    return bool ? <X size={35} /> : <Menu size={35} />
}

