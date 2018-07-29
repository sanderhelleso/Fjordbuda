import React, { Component } from 'react'
import { Navbar, NavbarBrand } from 'mdbreact';

export default class TopNav extends Component {
    render() {
        return (
            <Navbar id='topNav' color="transparent" dark>
                <NavbarBrand href="/">
                    Vinjenaustet
                </NavbarBrand>
            </Navbar>
        )
    }
}
