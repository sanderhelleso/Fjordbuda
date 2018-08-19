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
                <section id='storeSection' className='container'>
                    <h5>Fjordbuda av Norge</h5>
                    <h2>Norsk Stolthet</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin maximus enim, a placerat elit congue a. Integer sed sollicitudin enim, egestas tristique ex. Nullam ante sem, consequat id malesuada vulputate, lacinia sed augue. Suspendisse eget dapibus velit, id posuere mauris. Suspendisse potenti.</p>
                    <div className='row'>
                        <div className='col col-s4'>
                            <h5>Butikker</h5>
                            <h3>17</h3>
                        </div>
                        <div className='col col-s4'>
                            <h5>Norkse Merkevarer</h5>
                            <h3>6</h3>
                        </div>
                        <div className='col col-s4'>
                            <h5>Fornøyde Kunder</h5>
                            <h3>20 000 +</h3>
                        </div>
                    </div>
                </section>
                <StoreMap all={true} />
            </div>
        )
    }
}

function selectStore() {
    document.querySelector('#setStore').innerHTML = this.innerHTML;
}