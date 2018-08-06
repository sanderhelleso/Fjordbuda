import React, { Component } from 'react';
import { Row } from 'react-materialize';
import { Minus, ArrowDown } from 'react-feather';

export default class Lookbook extends Component {

    componentDidMount() {
        document.title = `🔥 Lookbook ${new Date().getFullYear()} | Fjordbuda`;
    }

    render() {
        return (
            <div id='lookBook'>
                <Row>
                    <div id='lookBookCont' className='col col-sm-8 col-md-6 col-lg-7'>
                        <div id='lookBookMenu' className='container'>
                            <h5>Velg ditt merke</h5>
                            <Minus color='#363F54' />
                            <div id='lookBookCategories'>
                                <h2><span>01.</span>Klesmerke<span className='categorySpan animated fadeInRight'><span className='hiddenSpan'>.</span></span></h2>
                                <h2><span>02.</span>Klesmerke<span className='categorySpan animated fadeInRight'><span className='hiddenSpan'>.</span></span></h2>
                                <h2><span>03.</span>Klesmerke<span className='categorySpan animated fadeInRight'><span className='hiddenSpan'>.</span></span></h2>
                                <h2><span>04.</span>Klesmerke<span className='categorySpan animated fadeInRight'><span className='hiddenSpan'>.</span></span></h2>
                                <h2><span>05.</span>Klesmerke<span className='categorySpan animated fadeInRight'><span className='hiddenSpan'>.</span></span></h2>
                            </div>
                            <h5>Eller se alle</h5>
                            <Minus color='#363F54' />
                            <br />
                            <ArrowDown id='arrowDown' color='#363F54' />
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
