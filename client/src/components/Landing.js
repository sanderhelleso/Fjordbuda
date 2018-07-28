import React, { Component } from 'react'
import { Parallax } from 'react-materialize';
import Hero from './Hero';

export default class Landing extends Component {
    render() {
        return (
            <div>
                <div className="overlay">
                    <Parallax imageSrc="http://materializecss.com/images/parallax1.jpg"/>
                </div>
                <Hero />
            </div>
        )
    }
}
