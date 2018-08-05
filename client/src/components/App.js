import 'animate.css';

import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Loading from './Loading';
import TopNav from './TopNav';
import Landing from './Landing';
import MainFooter from './MainFooter';

import History from './history/History';
import Contact from './contact/Contact';

export default class App extends Component {
    render() {
        return (
            <div id='main'>
                <BrowserRouter>
                    <div>
                        <Route path ='/' component={TopNav} />
                        <Route exact path='/' component={Landing} />
                        <Route exact path='/*' component={Loading} />

                        
                        <Route exact path='/historie' component={History} />
                        <Route exact path='/kontakt' component={Contact} />


                        <Route path ='/' component={MainFooter} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}
