import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import axios from 'axios';
 
export default class ClothingGallery extends React.Component {

    componentWillMount() {
        const brandPath = window.location.href.split('/')[4];
        if (brandPath === 'alle-merker') {
            axios({
                method: 'post',
                url: '/api/gallery/all',
                data: {
                    brand: brandPath
                }
            })
            .then(res => {
                console.log(res);
            })
        }

        else {
            // send brand to server
            axios({
                method: 'post',
                url: '/api/gallery',
                data: {
                    brand: brandPath
                }
            })

            // get all images for folder and push to array
            .then(res => {
                res.data.galleryImgs.forEach(img => {
                    photo_set.push({
                        src: `../img/lookbook/${brandPath}/gallery/${img}`,
                        width: 1,
                        height: 1
                    });
                });
            })

            // when done, force the component to update
            .then(done => {
                this.forceUpdate();

                // set alt tags
                const imgs = Array.from(document.querySelector('#galleryCont').querySelectorAll('img'));
                imgs.forEach(img => {
                    const file = img.src.split('/');
                    img.alt = `Gallery image ${file[file.length - 1].split('.')[0]}`;
                });
            });
        }
    }

    render() {
        return (
            <Gallery photos={photo_set} margin={5} />
        );
    }
}

// photo set
let photo_set = [];