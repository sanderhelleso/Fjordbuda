import React, { Component } from 'react';
import { Row, Parallax } from 'react-materialize';
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
    }

    render() {
        return (
        <div id='contact'>
            <div id='square' />
            <h1>Kontakt</h1>
            <Row>
                <div id='contactImg' className='col col-sm-12 col-md-6 col-lg-6 z-depth-5'>
                </div>
                <div className='col col-sm-12 col-md-6 col-lg-6'>
                    <div id='contactCont'>
                        <p>Lurer du på noe eller har spørsmål angående produkter? Send oss gjerne en melding.</p>
                    </div>
                </div>
            </Row>
        </div>
        )
    }
}
