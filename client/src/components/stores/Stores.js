import React, { Component } from 'react';
import { MapPin, ChevronDown } from 'react-feather';
import StoreMap from './StoreMap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { getStores } from '../../globals/stores';

export default class Stores extends Component {

    componentDidMount() {
        document.querySelector('footer').style.marginTop = '70vh';
    }

    dropUp() {
        // check if menu is active
        if (!document.querySelector('.dropdown').classList.contains('show')) {
            document.querySelector('.dropdown > button').click();
            setTimeout(() => {

                // set width of menu
                const menu = document.querySelector('.dropdown-menu');
                menu.style.width = document.querySelector('.selectStoreOption').getBoundingClientRect().width + 'px';

                // set event to naviate to selected store
                document.querySelector('.dropdown-menu').querySelectorAll('button').forEach(button => {
                    button.addEventListener('click', selectStore);
                });
            }, 100);
        }
    }

    renderStores() {
        return getStores().sort().map(store => {
            return <a key={store.name} href={`${window.location.href}/${store.name.toLowerCase().split(' ').join('-')}`}><DropdownItem key={store.name}>{store.name}</DropdownItem></a>
        });
    }

    render() {
        return (
            <div>
                <header id='storesHeader' className='z-depth-3'>
                    <div id='selectStore' className='container'>
                        <div id='selectStoreRow' className='row z-depth-5'>
                            <div className='col s6 findStore'>
                                <h5 className='noSelect'>Finn din <span>Fjordbuda</span></h5>
                            </div>
                            <div className='col s6 selectStoreOption' onClick={this.dropUp} >
                                <h5 className='noSelect'><MapPin size={22} color={'#10ddc2'} /> <span id='setStore'>Velg sted</span></h5>
                                <span>
                                    <ChevronDown size={22} color={'#9e9e9e'} />
                                </span>
                                <Dropdown dropup>
                                    <DropdownToggle />
                                    <DropdownMenu className='z-depth-3 animated fadeIn'>
                                        {this.renderStores()}
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </header>
                <StoreMap all={true} />
            </div>
        )
    }
}

function selectStore() {
    document.querySelector('#setStore').innerHTML = this.innerHTML;
}