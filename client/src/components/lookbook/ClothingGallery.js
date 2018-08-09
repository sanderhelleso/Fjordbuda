import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
 
export default class ClothingGallery extends React.Component {
    render() {
        return (
            <Gallery photos={PHOTO_SET} margin={5} />
        );
    }
}

const PHOTO_SET = [
    {
        src: '../img/menu/menubg0.jpg',
        width: 1,
        height: 1
    },
    {
        src: '../img/menu/menubg1.jpg',
        width: 1,
        height: 1
    },
    {
        src: '../img/menu/menubg2.jpg',
        width: 1,
        height: 1
    },
    {
        src: '../img/menu/menubg3.jpg',
        width: 1,
        height: 1
    },
    {
        src: '../img/menu/menubg4.jpg',
        width: 1,
        height: 1
    },
    {
        src: '../img/menu/mainmenu.jpg',
        width: 1,
        height: 1
    }
];