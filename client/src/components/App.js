import 'animate.css';

import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Loading from './Loading';
import TopNav from './TopNav';
import Landing from './Landing';
import MainFooter from './MainFooter';

import Contact from './contact/Contact';
import Stores from './stores/Stores';
import SelectedStore from './stores/SelectedStore';

const App = () => {
    return (
        <div id='main'>
            <BrowserRouter>
                <div>
                    <Route path='/' component={TopNav} />
                    <Route exact path='/' component={Landing} />
                    <Route exact path='/*' component={Loading} />

                    <Route exact path='/butikker' component={Stores} />
                    <Route exact path='/butikker/*' component={SelectedStore} />
                    <Route exact path='/kontakt' component={Contact} />

                    <Route path='/' component={MainFooter} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
