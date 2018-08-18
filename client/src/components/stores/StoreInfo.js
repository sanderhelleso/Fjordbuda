import React, { Component } from 'react';
import { Phone } from 'react-feather';

export default class StoreInfo extends Component {
    render() {
        return (
            <div id='storeInfo'>
                <div className='container'>
                    <div className='row'>
                        <div className='col s4'>
                            <h2>ADRESSE</h2>
                            <ul>
                                <li>Rasmus Rønnebergs gate 4 6002 Ålesund</li>
                                <li> Veibeskrivelse</li>
                                <li><Phone  size={18}/> +47 70 11 73 00</li>
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
