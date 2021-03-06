import React from 'react';
import { getStores } from '../../globals/stores';
import Row from 'react-materialize/lib/Row';
import { MapPin, Phone, Mail, Facebook, Instagram } from 'react-feather';

export const Store = () => {
    const renderStores = () => {
        return getStores().map((store, k) => {
            return (
                <div key={k} className='col-sm-12 col-md-6 col-lg-4 store'>
                    <h5>{store.name}</h5>
                    <ul>
                        <li style={{ paddingTop: '0.5rem' }}>
                            <MapPin />{' '}
                            {store.adress === '' ? '-' : store.adress},
                            {store.zip === '' ? null : ` ${store.zip}`}
                        </li>
                        {}
                        <li style={{ paddingTop: '0.5rem' }}>
                            <Phone />{' '}
                            {store.tlf === '' ? (
                                '-'
                            ) : (
                                <a href={`tel:${store.tlf}`}>{store.tlf}</a>
                            )}
                        </li>
                        <li style={{ paddingTop: '0.5rem' }}>
                            <Mail />{' '}
                            {store.mail === '' ? (
                                '-'
                            ) : (
                                <a href={`mailto:${store.mail}`}>
                                    {store.mail}
                                </a>
                            )}
                        </li>
                        {/* <li>
                            <a href={store.facebook}>
                                <Facebook />
                            </a>
                            <a href={store.instagram}>
                                <Instagram />
                            </a>
                        </li> */}
                    </ul>
                </div>
            );
        });
    };
    return <Row id='storesRow'>{renderStores()}</Row>;
};
