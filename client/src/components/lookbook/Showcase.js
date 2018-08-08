import React, { Component } from 'react';

import Gallery from './ClothingGallery';

export default class Showcase extends Component {

    getBrand() {
        return window.location.href.split('/')[4].split('-').join(' ');
    }

    render() {
        return (
            <div id='showcase' className='container'>
                <div id='showcaseHero'>
                    <h1>{this.getBrand()}</h1>
                </div>
                <Gallery />
            </div>
        )
    }
}
