import React, { Component } from 'react';
import { Row, Input, Button } from 'react-materialize';
import { Minus } from 'react-feather';

export default class Contact extends Component {
    componentWillMount() {
        document.title = '✉️ Kontakt | Fjordbuda';
    }

    componentDidMount() {
        // run animation for contacts
        window.addEventListener('scroll', animateContact);
        document.querySelector('#menuToggler > svg').style.stroke = '#212121';
    }

    render() {
        return (
        <div id='contact'>
            <div id='square' />
            <h1>Kontakt</h1>
            <Row>
                <div id='contactImg' className='col col-sm-4 col-md-6 col-lg-6 z-depth-5'>
                </div>
                <div className='col col-sm-8 col-md-6 col-lg-6'>
                    <div id='contactCont'>
                        <p>Lurer du på noe eller har spørsmål angående produkter? Send oss gjerne en melding.</p>
                        
                    </div>
                </div>
            </Row>
        </div>
        )
    }
}

function animateContact() {
    const headerImg = document.querySelector('#contactImg');
    const heading = document.querySelector('h1');
    const square = document.querySelector('#square');
    const paragrapgh = document.querySelector('#contactCont > p');

    // animate on scroll
    heading.style.marginLeft = (window.scrollY / 11) + 'px';
    square.style.marginLeft = (window.scrollY / 11) + 'px';
    square.style.marginTop = (window.scrollY / 11) + 'px';
    square.style.transform = 'rotate('+  (35 + (window.scrollY / 15)) + 'deg)';
    paragrapgh.style.marginRight = (window.scrollY / 11) + 'px';

    const halfWidth = (headerImg.offsetTop + headerImg.offsetHeight) / 2;
}
