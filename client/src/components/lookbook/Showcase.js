import React, { Component } from 'react';

import Gallery from './ClothingGallery';

export default class Showcase extends Component {
    render() {
        return (
            <div>
                <h1>Showcase</h1>
                <Gallery />
            </div>
        )
    }
}
