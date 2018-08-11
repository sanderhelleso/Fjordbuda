import React, { Component } from 'react';
import { Parallax } from 'react-materialize';

export default class MainSection extends Component {
    render() {
        return (
            <section id='mainSection' className='animated fadeIn'>
                <div id='mainHero'>
                    <Parallax imageSrc="http://materializecss.com/images/parallax1.jpg" className='animated fadeIn z-depth-2'/>
                    <h5>Fjodbuda 2006</h5>
                </div>
            </section>
        )
    }
}
