import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

export default class MainSection extends Component {
    render() {
        return (
            <section id='mainSection' className='animated fadeIn'>
                <header id='mainHero' className='animated fadeIn z-depth-2'>
                    <h5>Fjodbuda 2006</h5>
                </header>
                <div id='mainSectionIntro' className='animated fadeIn'>
                    <h5>Velkommen til</h5>
                    <h2>Fjordbuda</h2>
                    <div className='introLine animated slideInUp' />
                </div>
                <div id='sections' className='container animated fadeIn'>
                    <div id='section1'>
                        <Fade>
                            <div className='para1' />
                        </Fade>
                        <Fade>
                            <div className='intro1 intro z-depth-3'>
                                <Fade>
                                    <h5>sjarmerende og unike</h5>
                                    <h3>Butikker</h3>
                                </Fade>
                                <a href='/butikker'>
                                    <button className='btn'>Se butikker</button>
                                </a>
                            </div>
                        </Fade>
                    </div>
                    <div className='introLine animated slideInUp' />
                </div>
            </section>
        );
    }
}
