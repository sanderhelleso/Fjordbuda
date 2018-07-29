import React, { Component } from 'react'
import { Navbar, NavbarBrand, NavItem, Fa } from 'mdbreact';
import { Menu } from 'react-feather';

export default class TopNav extends Component {

    openMenu() {
        console.log(123);
    }

    render() {
        return (
            <Navbar id='topNav' color="transparent" dark>
                <NavbarBrand href="/" className='noSelect' >
                    Vinjenaustet
                </NavbarBrand>
                <NavItem id='menuToggler' onClick={this.openMenu} >
                    <Menu size={35} />
                </NavItem>
            </Navbar>
        )
    }
}
