import React, { Component } from 'react';
import { Row } from 'react-materialize';
import { Minus, ArrowDown } from 'react-feather';

export default class Lookbook extends Component {

    componentDidMount() {
        document.title = `🔥 Lookbook ${new Date().getFullYear()} | Fjordbuda`;
        console.log(document.querySelector('#menuToggler > svg'));
        setTimeout(() => {
            document.querySelector('#menuToggler > svg').style.stroke = 'white';
        }, 500);
        window.addEventListener('scroll', animateLookBook);

        getScreenSize();
        window.addEventListener('resize', getScreenSize);
    }

    render() {
        return (
            <div id='lookBook'>
                <Row className='flex-s'>
                    <div id='lookBookCont' className='col col-sm-12 col-md-7 col-lg-7'>
                        <div id='lookBookMenu' className='container'>
                            <div className='lookBookMenuOption'>
                                <h5>Velg ditt merke</h5>
                                <Minus color='#363F54' />
                            </div>
                            <div id='lookBookCategories'>
                                <h2><span>01.</span>Klesmerke<span className='categorySpan animated fadeIn'><span className='hiddenSpan'>.</span></span></h2>
                                <h2><span>02.</span>Klesmerke<span className='categorySpan animated fadeIn'><span className='hiddenSpan'>.</span></span></h2>
                                <h2><span>03.</span>Klesmerke<span className='categorySpan animated fadeIn'><span className='hiddenSpan'>.</span></span></h2>
                                <h2><span>04.</span>Klesmerke<span className='categorySpan animated fadeIn'><span className='hiddenSpan'>.</span></span></h2>
                                <h2><span>05.</span>Klesmerke<span className='categorySpan animated fadeIn'><span className='hiddenSpan'>.</span></span></h2>
                            </div>
                            <div id='seeAllCategories' className='lookBookMenuOption'>
                                <h5>Eller se alle</h5>
                                <Minus color='#363F54' />
                                <br />
                                <ArrowDown id='arrowDown' color='#363F54' />
                            </div>
                        </div>
                    </div>
                    <div id='lookBookImg' className='col col-sm-12 col-md-5 col-lg-5 z-depth-5'>
                        <div id='lookBookHeader'>
                            <h1>Lookbook</h1>
                            <h3>Høst / Vinter</h3>
                            <h2 id='lookBookYear'>{new Date().getFullYear()}</h2>
                        </div>
                    </div>
                </Row>
            </div>
        )
    }
}

function animateLookBook() {
    const heading = document.querySelector('#lookBookHeader');
    heading.style.bottom = (45 + (window.scrollY / 20)) + '%';
}


function getScreenSize() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const logo = document.querySelector('#navLogo');
    window.addEventListener('scroll', scrollSpyLookBook);

    if (width <= 768) {
        console.log(123);
        setTimeout(() => {
            logo.src = 'img/logo/Vinje1_white.png';
        }, 200);
    }

    else {
        logo.src = 'img/logo/Vinje1_black.png';
    }
    console.log(width);
}

function scrollSpyLookBook(width) {
    if (width <= 768) {
        console.log(123);
        setTimeout(() => {
            logo.src = 'img/logo/Vinje1_white.png';
        }, 200);
    }
}