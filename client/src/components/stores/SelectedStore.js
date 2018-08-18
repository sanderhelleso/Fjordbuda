import React, { Component } from 'react';
import StoreMap from './StoreMap';
import StoreInfo from './StoreInfo';
import { renderStoreTitle } from '../../globals/renderTitle';

export default class SelectedStore extends Component {

    componentDidMount() {
        document.querySelector('footer').style.marginTop = '70vh';
    }

    render() {
        return (
            <section>
                <header id='selectedStoreHeader' className='z-depth-3'>
                    <div id='hero' className='container'>
                        <h1>{renderStoreTitle()}</h1>
                        <h5></h5>
                    </div>
                </header>
                <StoreInfo />
                <StoreMap />
            </section>
        )
    }
}
