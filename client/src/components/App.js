import 'animate.css';

import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Loading from './Loading';
import TopNav from './TopNav';
import Landing from './Landing';

export default class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Route path ='/' component={TopNav} />
                        <Route exact path='/' component={Landing} />
                        <Route exact path='/*' component={Loading} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}
