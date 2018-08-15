import React, { Component } from 'react';
import { MapPin, ChevronDown } from 'react-feather';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';

export default class Stores extends Component {
    render() {
        return (
            <div>
                <header id='storesHeader'>
                    <div id='selectStore' className='container'>
                        <div id='selectStoreRow' className='row z-depth-5'>
                            <div className='col s6 findStore'>
                                <h5>Finn din <span>Fjordbuda</span></h5>
                            </div>
                            <div className='col s6 selectStoreOption'>
                                <h5><MapPin size={22} color={'#10ddc2'} /> Velg sted</h5>
                                <span>
                                    <ChevronDown size={22} color={'#9e9e9e'} />
                                </span>
                                <Dropdown dropup>
                                    <DropdownToggle />
                                    <DropdownMenu>
                                        <DropdownItem>Action</DropdownItem>
                                        <DropdownItem>Another Action</DropdownItem>
                                        <DropdownItem >Something else here</DropdownItem>
                                        <DropdownItem divider/>
                                        <DropdownItem>Separated link</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </header>
                <section>
                </section>
            </div>
        )
    }
}
