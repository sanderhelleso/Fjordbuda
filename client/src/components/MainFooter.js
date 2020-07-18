import React, { Component } from 'react';
import { Row } from 'react-materialize';
import { Navigation, MessageCircle } from 'react-feather';
import { getStores } from '../globals/stores';

export default class MainFooter extends Component {
    render() {
        return (
            <footer>
                <div className='container'>
                    <Row id='footerRow'>
                        <div className='col-sm-12 col-md-6 col-lg-4'>
                            <h5>Gå Til</h5>
                            <ul>
                                <li>
                                    <a href='/'>Fremsiden</a>
                                </li>
                                <li>
                                    <a href='/butikker'>Butikker</a>
                                </li>
                            </ul>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-4'>
                            <h5>Kontakt</h5>
                            <ul>
                                <li>PB 256 Sentrum</li>
                                <li>6001, Ålesund</li>
                                <li>
                                    <a href='tel:+4793094582'>+47 930 94 582</a>
                                </li>
                                <li>
                                    <a href='mailto:anne@aleregn.no'>
                                        anne@aleregn.no
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-4'>
                            <ul>
                                <li className='copyright'>© fjordbuda</li>
                            </ul>
                            <a
                                id='semanta'
                                href='http://semanta.no'
                                target='_blank'
                            >
                                Utviklet av Semanta
                            </a>
                        </div>
                    </Row>
                    <div className='d-flex flex-row justify-content-between'>
                        <p>Fjordbuda Nordvest AS Org.nr: 821 58 4302</p>
                        <p>Fjordbuda Stavanger AS Org.nr: 921 58 4334</p>
                        <p>Fjordbuda Trondheim AS Org.nr: 921 58 4342</p>
                    </div>
                </div>
            </footer>
        );
    }
}

// render footer stores
function renderStores(col) {
    return getStores()
        .sort()
        .map((store) => {
            const li = (
                <li key={store.name}>
                    <a
                        href={`/butikker/${store.name
                            .toLowerCase()
                            .split(' ')
                            .join('-')}`}
                    >
                        {store.name}
                    </a>
                </li>
            );
            if (col === 1) {
                while (getStores().indexOf(store) < getStores().length / 2) {
                    return li;
                }
            } else {
                while (getStores().indexOf(store) >= getStores().length / 2) {
                    return li;
                }
            }
        });
}
