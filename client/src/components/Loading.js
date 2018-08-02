import React, { Component } from 'react';

export default class Loading extends Component {

    componentDidMount() {
        fadeOutLoadingScreen();
    }

    render() {
        return (
            <div id='loadingScreen'>
                <div id='loadingHero'>
                    <img id='loadingLogo' src="img/logo/Vinje1_white.png" height="90"/>
                </div>
                <div className="lds-ripple"><div></div><div></div></div>
            </div>
        )
    }
}

// fade out loadingscreen when content is loaded
function fadeOutLoadingScreen() {
    const loadingScreen = document.querySelector('#loadingScreen');
    setTimeout(() => {
        loadingScreen.className = 'animated fadeOut';
        setTimeout(() => {
            loadingScreen.remove();
        }, 1000);
    }, 2000);
}
