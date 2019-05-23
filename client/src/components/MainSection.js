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
                                <a href='/butikker'><button className='btn'>Se butikker</button></a>
                            </div>
                        </Fade>
                    </div>
                    <div className='introLine animated slideInUp' />
                    <div id='section2'>
                        <Fade>
                            <div className='para2' />
                        </Fade>
                        <Fade>
                            <div className='intro2 intro z-depth-3'>
                            <Fade>
                                    <h5>en fantastisk historie</h5>
                                    <h3>Historie</h3>
                                </Fade>
                                <a href='/historie'><button className='btn'>Les historien</button></a>
                            </div>
                        </Fade>
                    </div>
                    <div className='introLine animated slideInUp' />
                    <div id='section3'>
                        <Fade>
                            <div className='para3' />
                        </Fade>
                        <Fade>
                            <div className='intro3 intro z-depth-3'>
                                <Fade>
                                    <h5>er det noe du lurer på?</h5>
                                    <h3>Kontakt</h3>
                                </Fade>
                                <a href='/kontakt'><button className='btn'>Kontakt oss</button></a>
                            </div>
                        </Fade>
                    </div>
                    <div className='introLine animated slideInUp' />
                </div>
            </section>
        )
    }
}
