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
                <div id='sections' className='container'>
                    <div id='section1'>
                        <div className='para1' />
                        <div className='intro1 z-depth-3'>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
