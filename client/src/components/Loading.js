import React, { Component } from 'react';

export default class Loading extends Component {
    render() {
        return (
            <div id='loadingScreen'>
                <div id='loadingHero'>
                    <h1 data-hover="Vinjenaustet">Vinjenaustet</h1>
                </div>
                <div class="lds-ripple"><div></div><div></div></div>
            </div>
        )
    }
}
