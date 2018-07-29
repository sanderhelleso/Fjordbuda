import React, { Component } from 'react'
import { Navbar, NavbarBrand, NavItem, Fa } from 'mdbreact';

export default class TopNav extends Component {
    render() {
        return (
            <Navbar id='topNav' color="transparent" dark>
                <NavbarBrand href="/">
                    Vinjenaustet
                </NavbarBrand>
                <NavItem id='menuToggler'>
                    <Fa icon="navicon"/>
                </NavItem>
            </Navbar>
        )
    }
}
