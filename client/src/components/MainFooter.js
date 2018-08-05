import React, { Component } from 'react';
import { Row } from 'react-materialize';
import { Navigation, MessageCircle } from 'react-feather';

export default class MainFooter extends Component {
    render() {
        return (
            <footer>
                <div className='container'>
                    <Row id='footerRow'>
                        <div id='languages' className='col-sm-6 col-md-12 col-lg-3'>
                            <ul>
                                <li><a><Navigation size={14} className='mr-2'/> Norway</a></li>
                                <li><a><MessageCircle size={14}className='mr-2'/> English</a></li>
                                <li className='space'></li>
                                <li className='copyright'>© Vinjenaustet</li>
                            </ul>
                        </div>
                        <div className='col-sm-6 col-md-6 col-lg-3'>
                            <h5>Butikker</h5>
                            <ul>
                                <li><a>qweqeq</a></li>
                                <li><a>qweqeq</a></li>
                                <li><a>qweqeq</a></li>
                                <li><a>qweqeq</a></li>
                                <li><a>qweqeq</a></li>
                                <li><a>qweqeq</a></li>
                            </ul>
                        </div>
                        <div className='col-sm-6 col-md-6 col-lg-3'>
                            <h5>Selskapet</h5>
                            <ul>
                                <li><a>qweqeq</a></li>
                                <li><a>qweqeq</a></li>
                                <li><a>qweqeq</a></li>
                                <li><a>qweqeq</a></li>
                                <li><a>qweqeq</a></li>
                                <li><a>qweqeq</a></li>
                            </ul>
                        </div>
                        <div className='col-sm-6 col-md-6 col-lg-3'>
                            <h5>Kontakt</h5>
                            <ul>
                                <li><a>qweqeq</a></li>
                                <li><a>qweqeq</a></li>
                                <li><a>qweqeq</a></li>
                                <li><a>qweqeq</a></li>
                                <li><a>qweqeq</a></li>
                                <li><a>qweqeq</a></li>
                            </ul>
                        </div>
                    </Row>
                </div>
            </footer>
        )
    }
}
