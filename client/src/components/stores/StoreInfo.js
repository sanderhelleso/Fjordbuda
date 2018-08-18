import React, { Component } from 'react';
import { Phone, Map, Mail, CheckCircle } from 'react-feather';
import { getBrands } from '../../globals/getBrands';
import { getStores } from '../../globals/stores';
import { renderStoreTitle } from '../../globals/renderTitle';

export default class StoreInfo extends Component {

    renderOpeningHours() {
        return getStores().sort().map(store => {
            if (renderStoreTitle() === store.name) {
                return Object.keys(store.openingHours).map(key => 
                    <li key={key}>{key.toUpperCase()} <span>{`${store.openingHours[key]}`}</span></li>
                )
            }
        });
    }

    renderGotBrands() {
        return getBrands().map(brand => {
            return <li key={brand}><CheckCircle size={22} className='mr-3' /> <span>{brand}</span></li>
        });
    }

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
                            <ul id='openingHours'>
                                {this.renderOpeningHours()}
                            </ul>
                        </div>
                        <div className='col s4'>
                            <h2>MERKEVARER</h2>
                            <ul id='gotBrands'>
                                {this.renderGotBrands()}
                                <li>... og mer</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
