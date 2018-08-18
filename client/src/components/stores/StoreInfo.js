import React, { Component } from 'react';
import { Phone, Map, Mail } from 'react-feather';

export default class StoreInfo extends Component {
    render() {
        return (
            <div id='storeInfo'>
                <div className='container'>
                    <div className='row'>
                        <div className='col s4'>
                            <h2>ADRESSE</h2>
                            <ul>
                                <li>Rasmus Rønnebergs gate 4<br />6002 Ålesund</li>
                                <li><Map size={20} className='mr-3'/><a href='' > Veibeskrivelse</a></li>
                                <li><Phone size={20} className='mr-3'/> <a href='tel:+4770117300'> +47 70 11 73 00</a></li>
                                <li><Mail size={20} className='mr-3'/><a href='mailto:'>  test@hotmail.com</a></li>
                            </ul>
                        </div>
                        <div className='col s4'>
                            <h2>ÅPNINGSTIDER</h2>
                        </div>
                        <div className='col s4'>
                            <h2>MERKEVARER</h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
