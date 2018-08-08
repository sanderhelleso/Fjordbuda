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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus quis urna in suscipit. Fusce quis molestie nunc, non facilisis dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc convallis ante dolor. Sed quis imperdiet arcu. Quisque pellentesque vel sapien in molestie.</p>
                    <img id='brandLogo' src={`../img/lookbook/${window.location.href.split('/')[4]}/logo.png`} />
                </div>
                <div id='galleryCont'>
                    <Gallery />
                </div>
            </div>
        )
    }
}
