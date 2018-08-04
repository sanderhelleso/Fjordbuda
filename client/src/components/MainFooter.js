import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';

export default class MainFooter extends Component {
    render() {
        return (
            <footer>
                <div className='container'>
                    <Row id='footerRow'>
                        <Col l={3} m={6} s={12}>
                            <h5>Språk</h5>
                        </Col>
                        <Col l={3} m={6} s={12}>
                            <h5>Butikker</h5>
                        </Col>
                        <Col l={3} m={6} s={12}>
                            <h5>Selskapet</h5>
                        </Col>
                        <Col l={3} m={6} s={12}>
                            <h5>Kontakt</h5>
                        </Col>
                    </Row>
                </div>
            </footer>
        )
    }
}
