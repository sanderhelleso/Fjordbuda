import React, { Component } from 'react';
import { Row, Parallax } from 'react-materialize';

export default class Contact extends Component {
    componentWillMount() {
        document.title = '✉️ Kontakt | Fjordbuda';
    }

    render() {
        return (
        <div id='contact'>
            <Row>
                <div className='col col-sm-12 col-md-6 col-lg-6'>
                    <Parallax imageSrc="http://materializecss.com/images/parallax1.jpg"/>
                </div>
                <div className='col col-sm-12 col-md-6 col-lg-6'>
                    qweqwe
                </div>
            </Row>
        </div>
        )
    }
}
