import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import { Navigation, MessageCircle } from 'react-feather';

export default class MainFooter extends Component {
    render() {
        return (
            <footer>
                <div className='container'>
                    <Row id='footerRow'>
                        <Col id='languages' l={3} m={6} s={12}>
                            <ul>
                                <li><a><Navigation size={14} className='mr-2'/> Norway</a></li>
                                <li><a><MessageCircle size={14}className='mr-2'/> English</a></li>
                                <li className='space'></li>
                                <li className='copyright'>© Vinjenaustet</li>
                            </ul>
                        </Col>
                        <Col l={3} m={6} s={12}>
                            <h5>Butikker</h5>
                            <ul>
                                <li><a>qweqeq</a></li>
                                <li><a>qweqeq</a></li>
                                <li><a>qweqeq</a></li>
                                <li><a>qweqeq</a></li>
                                <li><a>qweqeq</a></li>
                                <li><a>qweqeq</a></li>
                            </ul>
                        </Col>
                        <Col l={3} m={6} s={12}>
                            <h5>Selskapet</h5>
                            <ul>
                                <li><a>qweqeq</a></li>
                                <li><a>qweqeq</a></li>
                                <li><a>qweqeq</a></li>
                                <li><a>qweqeq</a></li>
                                <li><a>qweqeq</a></li>
                                <li><a>qweqeq</a></li>
                            </ul>
                        </Col>
                        <Col l={3} m={6} s={12}>
                            <h5>Kontakt</h5>
                            <ul>
                                <li><a>qweqeq</a></li>
                                <li><a>qweqeq</a></li>
                                <li><a>qweqeq</a></li>
                                <li><a>qweqeq</a></li>
                                <li><a>qweqeq</a></li>
                                <li><a>qweqeq</a></li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </footer>
        )
    }
}
