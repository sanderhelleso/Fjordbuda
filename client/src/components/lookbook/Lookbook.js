import React, { Component } from 'react';
import { Row } from 'react-materialize';

export default class Lookbook extends Component {

    componentDidMount() {
        //document.querySelector('#topNav').style.position = 'absolute';
        document.title = `🔥 Lookbook ${new Date().getFullYear()} | Fjordbuda`;
    }

    render() {
        return (
            <div id='lookBook'>
                <Row>
                    <div id='lookBookCont' className='col col-sm-8 col-md-6 col-lg-7'>
                        <div id='lookBookMenu' className='container'>
                            <h5>Velg ditt merke:</h5>
                        </div>
                    </div>
                    <div id='lookBookImg' className='col col-sm-4 col-md-6 col-lg-5 z-depth-5'>
                        <div id='lookBookHeader'>
                            <h1>Lookbook</h1>
                            <h3>Høst / Vinter</h3>
                            <h2 id='lookBookYear'>{new Date().getFullYear()}</h2>
                        </div>
                    </div>
                </Row>
            </div>
        )
    }
}
