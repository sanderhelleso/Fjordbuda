import React, { Component } from 'react';
import StoreInfo from './StoreInfo';
import { renderStoreTitle } from '../../globals/renderTitle';
import { getUrl } from '../../globals/getUrl'; 

export default class SelectedStore extends Component {

    componentDidMount() {
        console.log(getUrl());
        document.querySelector('footer').style.marginTop = '70vh';

        const headerBg = document.querySelector('#selectedStoreHeader');
        headerBg.style.background = `linear-gradient(rgba(121, 85, 72, 0.9), rgba(0, 0, 0, 0.7)),url("../img/stores/${getUrl()[1]}.jpg") no-repeat center`;
        headerBg.style.backgroundSize = 'cover'
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
            </section>
        )
    }
}
