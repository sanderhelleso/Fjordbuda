import React, { Component } from 'react';
import { Row, Input, Button } from 'react-materialize';
import { Minus } from 'react-feather';

export default class Contact extends Component {
    componentWillMount() {
        document.title = '✉️ Kontakt | Fjordbuda';
    }

    componentDidMount() {
        console.log(document.querySelector('#navLogo'));
        setTimeout(() => {
            document.querySelector('#navLogo').src = 'img/logo/Vinje1_white.png';
        }, 100);

        // run animation for contacts
        window.addEventListener('scroll', animateContact);
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
                        <form>
                            <Row>
                                <Input label="Navn" s={6}/>
                                <Input type="email" label="Email" s={6} />
                            </Row>
                                <Input type='textarea' label="Melding" />
                                <Button id='sendMessage' waves='light'>Send</Button>
                            <Row>
                            </Row>
                        </form>
                    </div>
                </div>
            </Row>
        </div>
        )
    }
}

function animateContact() {
    const headerImg = document.querySelector('#contactImg');
    const logo = document.querySelector('#navLogo');
    const heading = document.querySelector('h1');
    const square = document.querySelector('#square');

    // animate on scroll
    heading.style.marginLeft = (window.scrollY / 10) + 'px';
    square.style.marginLeft = (window.scrollY / 5) + 'px';
    square.style.marginTop = (window.scrollY / 10) + 'px';
    square.style.transform = 'rotate('+  (35 + (window.scrollY / 15)) + 'deg)';

    const halfWidth = (headerImg.offsetTop + headerImg.offsetHeight) / 2;
    if ((window.scrollY + halfWidth) > (halfWidth * 2)) {
        if (logo.src != 'img/logo/Vinje1_white.png') {
            logo.src = 'img/logo/Vinje1_black.png';
        }
    }

    else {
        if (logo.src != 'img/logo/Vinje1_black.png') {
            logo.src = 'img/logo/Vinje1_white.png';
        }
    }
}
