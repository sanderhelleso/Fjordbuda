import React, { Component } from 'react';
import StoreMap from './StoreMap';
import StoreInfo from './StoreInfo';
import { toTitleCase } from '../../globals/toTitleCase';

export default class SelectedStore extends Component {

    renderStoreTitle() {
        // get selected store from url
        const store = toTitleCase(window.location.href.split('/')[4].split('-').join(' '));
        
        // if store contains %C3%A5 (å), replace with correct store name
        const splittedStore = store.split(' ')[1].split('')[0];
        if (splittedStore === '%') {
            return `${store.split(' ')[0]} Ålesund`;
        }

        return store;
    }

    componentDidMount() {
        document.querySelector('footer').style.marginTop = '110vh';
    }

    render() {
        return (
            <section>
                <header id='selectedStoreHeader' className='z-depth-3'>
                    <div id='hero' className='container'>
                        <h1>{this.renderStoreTitle()}</h1>
                        <h5>Rasmus Rønnebergs gate 4 <br />6020 Ålesund</h5>
                    </div>
                </header>
                <StoreInfo />
                <StoreMap />
            </section>
        )
    }
}
