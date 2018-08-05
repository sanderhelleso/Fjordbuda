import React, { Component } from 'react';
import { Row, Parallax } from 'react-materialize';

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
            <Row>
                <div id='contactImg' className='col col-sm-12 col-md-7 col-lg-7 z-depth-5'>
                </div>
                <div className='col col-sm-12 col-md-5 col-lg-5'>
                    <div id='contactCont'>
                        <h1>Kontakt</h1>
                    </div>
                </div>
            </Row>
        </div>
        )
    }
}
