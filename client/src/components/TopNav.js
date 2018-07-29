import React, { Component } from 'react'
import { Navbar, NavbarBrand, NavItem, Fa } from 'mdbreact';
import { Menu, X } from 'react-feather';

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
    }

    render() {
        return (
            <Navbar id='topNav' color="transparent" dark>
                <NavbarBrand href="/" className='noSelect' >
                    Vinjenaustet
                </NavbarBrand>
                <NavItem id='menuToggler' onClick={this._onButtonClick} >
                    {this.state.showMenu 
                        ?
                        <X size={35} />

                        :
                        <Menu size={35} />
                    }
                </NavItem>
            </Navbar>
        )
    }
}
