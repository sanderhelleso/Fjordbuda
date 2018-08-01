import React, { Component } from 'react'

import Landing from './Landing';

export default class History extends Component {

    componentDidMount() {
        document.querySelector("#topNav").classList.add("topNavOnBg");
    }

    render() {
        return (
        <div>
            <Landing />
        </div>
        )
    }
}
