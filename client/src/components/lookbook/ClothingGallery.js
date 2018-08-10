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

        // get all images for folder and push to array
        .then(res => {
            res.data.galleryImgs.forEach(img => {
                photo_set.push({
                    src: `../img/lookbook/${window.location.href.split('/')[4]}/gallery/${img}`,
                    width: 1,
                    height: 1
                });
            });
        })

        // when done, force the component to update
        .then(done => {
            this.forceUpdate();
        })
    }

    render() {
        return (
            <Gallery photos={photo_set} margin={5} />
        );
    }
}

// photo set
let photo_set = [];