import React, { Component } from 'react';
import { Row } from 'react-materialize';

export default class Lookbook extends Component {

    componentDidMount() {
        //document.querySelector('#topNav').style.position = 'absolute';
    }

    render() {
        return (
            <div id='lookBook'>
                <Row>
                    <div id='lookBookCont' className='col col-sm-8 col-md-6 col-lg-7'>
                        <div className='container'>
                        </div>
                    </div>
                    <div id='lookBookImg' className='col col-sm-4 col-md-6 col-lg-5 z-depth-5'>
                        <div id='lookBookHeader'>
                            <h1>Lookbook</h1>
                        </div>
                    </div>
                </Row>
            </div>
        )
    }
}
