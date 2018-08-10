import React, { Component } from 'react';
import { getUrl } from '../globals/getUrl';

export default class Loading extends Component {

    componentDidMount() {
        fadeOutLoadingScreen();
    }

    render() {
        return (
            <div id='loadingScreen'>
                <div id='loadingHero'>
                    <img id='loadingLogo' src="../img/logo/Vinje1_white.png" height="90"/>
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
        console.log(getUrl()[0]);
        switch (getUrl()[0]) {
            case 'historie':
                document.querySelector('#historyIntro').className = 'animated fadeIn';
            break;

            case 'lookbook':
                if (getUrl()[1] === undefined) {
                    document.querySelector('#lookBookImg').className = 'col col-sm-12 col-md-5 col-lg-5 z-depth-5 animated fadeInRight';

                    const options = document.querySelectorAll('.lookBookMenuOption');
                    options[0].className = 'lookBookMenuOption animated fadeInDown';
                    options[1].className = 'lookBookMenuOption animated fadeInUp';

                    const categories = Array.from(document.querySelector('#lookBookMenu').querySelectorAll('h2'));
                    categories.forEach(category => {
                        if (categories.indexOf(category) % 2 === 0 ) {
                            category.className = 'animated fadeInLeft';
                        }

                        else {
                            category.className = 'animated fadeInRight';
                        }
                    });
                }

                else {
                    document.querySelector('#showcaseHero').className = 'animated fadeIn';
                    
                }
            break;

            case 'kontakt':
                document.querySelector('#square').className = 'animated zoomIn';
                document.querySelector('#contact > h1').className = 'animated fadeIn';
                document.querySelector('#contactImg').className = 'col col-sm-4 col-md-6 col-lg-6 z-depth-5 animated fadeInLeft';
            break;
        }


        setTimeout(() => {
            loadingScreen.remove();
        }, 1000);
    }, 2000);
}
