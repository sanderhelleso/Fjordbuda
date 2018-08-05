import React, { Component } from 'react';

import Landing from './Landing';

export default class History extends Component {

    componentWillMount() {
        document.title = '📖 Historie | Fjordbuda';
    }

    componentDidMount() {
        const nav = document.querySelector("#topNav");
        nav.classList.add("topNavOnBg");
        nav.style.position = 'fixed';
    }

    render() {
        return (
        <div>
            <Landing />
        </div>
        )
    }
}
