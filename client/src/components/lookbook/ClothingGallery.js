import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import axios from 'axios';
 
export default class ClothingGallery extends React.Component {

    componentWillMount() {
        // send brand to server
        axios({
            method: 'post',
            url: '/api/gallery',
            data: {
                brand: window.location.href.split('/')[4]
            }
        })
        .then(res => {
            res.data.galleryImgs.forEach(img => {
                photo_set.push({
                    src: `../img/lookbook/${window.location.href.split('/')[4]}/gallery/${img}`,
                    width: 1,
                    height: 1
                });
            });
        });
    }

    componentDidMount() {
        const container = document.querySelector('.react-photo-gallery--gallery');
        const firstItem = container.querySelectorAll('img')[0];
        const lastItem = container.querySelectorAll('img');
        console.log(firstItem, lastItem);
        //container.insertBefore(lastItem, firstItem);

        this.forceUpdate();
        console.log(photo_set);
    }

    render() {
        return (
            <Gallery photos={photo_set} margin={5} />
        );
    }
}

let photo_set = [
];