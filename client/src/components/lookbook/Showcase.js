import React, { Component } from 'react';
import { ChevronRight } from 'react-feather';
import Gallery from './ClothingGallery';
import { toTitleCase } from '../../globals/toTitleCase';

export default class Showcase extends Component {
    componentDidMount() {
        document.querySelector('#brandDescription').innerHTML = setDescription();

        // remove brand logo if all brands are present
        if (url() === 'alle merker') {
            document.querySelector('#brandLogo').remove();
        }

        setTimeout(() => {
            const navbar = document.querySelector("#topNav");
            const logo = document.querySelector('#navLogo');

            logo.src = '../img/logo/Vinje1_black.png';
            navbar.querySelector('svg').style.stroke = '#212121';
        }, 1000);
    }

    render() {
        return (
            <div id='showcase' className='container'>
                <div id='showcaseHero'>
                    <img id='brandLogo' src={`../img/lookbook/${window.location.href.split('/')[4]}/logo.png`} alt={`${url()} logo`} />
                    <h1>{url()}</h1>
                    <p id='brandDescription'></p>
                    <div id='showcaseBorder' />
                </div>
                <div id='galleryCont'>
                    <Gallery />
                </div>
                <div id='breadcrumb'>
                    <a href='/lookbook'>lookbook </a> <ChevronRight size={20} color={'#10ddc2'} /> <a href={window.location.href}>{url()} </a>
                </div>
            </div>
        )
    }
}

function url() {
    const brand = window.location.href.split('/')[4];
    if (brand === 'norrona') {
        return 'norrøna';
    }

    else {
        return brand.split('-').join(' ');
    }
}

function brandDescriptions() {
    return [
        {   brand: 'dale of norway',
            description: 'Dale of Norway har med sin unike kompetanse og erfaring vært ledende innen utvikling av nye ullkvaliteter. I utgangspunktet er ull et overlegent materiale, som isolerer, puster, transporterer fuktighet fra kroppen og hindrer svettelukt. Med Weatherproof og Knitshell har Dale of Norway lansert innovative ytterplagg av vannavstøtende ullgarn, foret med en vindtett kvalitetsmembran som puster. Dette gir perfekt beskyttelse mot både kulde, vind, regn og snø. Da garnet også avstøter smuss, holdes lyse farger pene og rene. Plaggene kan anvendes i tøffe værforhold, er ideelle i skibakken, men er også flotte til daglig bruk.'
        },
        {
            brand: 'alle merker',
            description: 'test'
        }
    ]
}

function setDescription() {
    let description;
    brandDescriptions().forEach(brand => {
        if (brand.brand === url()) {
            description = brand.description;
        }
    });

    return description;
}