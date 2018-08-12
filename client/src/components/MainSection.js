import React, { Component } from 'react';

export default class MainSection extends Component {
    render() {
        return (
            <section id='mainSection' className='animated fadeIn'>
                <div id='mainHero' className='animated fadeIn z-depth-2'>
                    <h5>Fjodbuda 2006</h5>
                </div>
                <div id='mainSectionIntro' className='animated fadeIn'>
                    <h5>Velkommen til</h5>
                    <h2>Fjordbuda</h2>
                    <div className='introLine animated slideInUp' />
                </div>
                <div id='sections' className='container animated fadeIn'>
                    <div id='section1'>
                        <div className='para1' />
                        <div className='intro1 intro z-depth-3'>
                            <h5>sjarmerende og unike</h5>
                            <h3>Butikker</h3>
                            <a href='/butikker'><button className='btn'>Se butikker</button></a>
                        </div>
                    </div>
                    <div className='introLine animated slideInUp' />
                    <div id='section2'>
                        <div className='para2' />
                        <div className='intro2 intro z-depth-3'>
                            <h5>det beste fra Norge</h5>
                            <h3>Lookbook</h3>
                            <a href='/lookbook'><button className='btn'>Se merker og varer</button></a>
                        </div>
                    </div>
                    <div className='introLine animated slideInUp' />
                    <div id='section3'>
                        <div className='para3' />
                        <div className='intro3 intro z-depth-3'>
                            <h5>en fantastisk historie</h5>
                            <h3>Historie</h3>
                            <a href='/historie'><button className='btn'>Les historien</button></a>
                        </div>
                    </div>
                    <div className='introLine animated slideInUp' />
                    <div id='section4'>
                        <div className='para4' />
                        <div className='intro4 intro z-depth-3'>
                            <h5>er det noe du lurer på?</h5>
                            <h3>Kontakt</h3>
                            <a href='/kontakt'><button className='btn'>Kontakt oss</button></a>
                        </div>
                    </div>
                    <div className='introLine animated slideInUp' />
                </div>
            </section>
        )
    }
}
