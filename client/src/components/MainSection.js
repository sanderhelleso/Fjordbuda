import React, { Component } from 'react';
import { Parallax } from 'react-materialize';

export default class MainSection extends Component {
    render() {
        return (
            <section id='mainSection' className='animated fadeIn'>
                <div id='mainHero' className='animated fadeIn z-depth-2'>
                    <h5>Fjodbuda 2006</h5>
                </div>
                <div id='mainSectionIntro' className='animated fadeInUp'>
                    <h5>Velkommen til</h5>
                    <h2>Fjordbuda</h2>
                </div>
                <div id='sections'>
                    <div id='section1'>
                    </div>
                </div>
            </section>
        )
    }
}
