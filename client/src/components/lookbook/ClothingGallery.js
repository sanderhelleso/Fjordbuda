import Gallery from 'react-photo-gallery';
 
export default class ClothingGallery extends React.Component {
    render() {
        return (
            <Gallery photos={PHOTO_SET} />
        );
    }
}

const PHOTO_SET = [
    {
        src: '../img/menu/menubg0.jpg',
        width: 4,
        height: 3
    },
    {
        src: '../img/menu/menubg0.jpg',
        width: 1,
        height: 1
    }
];