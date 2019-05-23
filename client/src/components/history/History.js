import { Helmet } from 'react-helmet'
import React, { Component } from 'react';

import Landing from './Landing';

export default class History extends Component {

    componentWillMount() {
        document.title = 'Historie | Fjordbuda';
    }

    componentDidMount() {
        const nav = document.querySelector("#topNav");
        nav.classList.add("topNavOnBg");
        nav.style.position = 'fixed';
    }

    render() {
        return (
        <div>
            <Helmet>
                <title>Fjordbuda - Vår historie</title>
                <meta name="description" content="Vår historie er ikke som alle andre. Les hvordan det hele startet og vår magiske vei til hvor vi er idag." />
            </Helmet>
            <Landing />
        </div>
        )
    }
}
