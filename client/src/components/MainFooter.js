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
                                {renderStores(1)}
                            </ul>
                        </div>
                        <div className='col-sm-6 col-md-6 col-lg-3'>
                            <h5 className='noSelect hidden'>hidden</h5>
                            <ul>
                                {renderStores(2)}
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
                        <a id='semanta' href='http://semanta.no' target='_blank'>Utviklet av Semanta</a>
                    </Row>
                </div>
            </footer>
        )
    }
}

// render footer stores
function renderStores(col) {
    return getStores().sort().map(store => {
        const li = <li key={store}><a href={`${window.location.href}/${store.toLowerCase().split(' ').join('-')}`}>{store}</a></li>;
        if (col === 1) {
            while (getStores().indexOf(store) < getStores().length / 2) {
                return li;
            }
        }

        else {
            while (getStores().indexOf(store) >= getStores().length / 2) {
                return li;
            }
        }
    });
}
