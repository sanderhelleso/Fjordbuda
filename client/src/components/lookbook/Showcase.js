import React, { Component } from 'react';
import Gallery from './ClothingGallery';

export default class Showcase extends Component {

    componentWillMount() {
        document.title = `🔥 ${toTitleCase(url())} | Lookbook | Fjordbuda`;
    }

    componentDidMount() {
        document.querySelector('#brandDescription').innerHTML = setDescription();
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

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

function brandDescriptions() {
    return [
        {   brand: 'dale of norway',
            description: 'Dale of Norway har med sin unike kompetanse og erfaring vært ledende innen utvikling av nye ullkvaliteter. I utgangspunktet er ull et overlegent materiale, som isolerer, puster, transporterer fuktighet fra kroppen og hindrer svettelukt. Med Weatherproof og Knitshell har Dale of Norway lansert innovative ytterplagg av vannavstøtende ullgarn, foret med en vindtett kvalitetsmembran som puster. Dette gir perfekt beskyttelse mot både kulde, vind, regn og snø. Da garnet også avstøter smuss, holdes lyse farger pene og rene. Plaggene kan anvendes i tøffe værforhold, er ideelle i skibakken, men er også flotte til daglig bruk.'
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