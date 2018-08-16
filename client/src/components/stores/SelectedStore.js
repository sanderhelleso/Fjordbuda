import React, { Component } from 'react'

export default class SelectedStore extends Component {

    renderStoreTitle() {
        console.log(window.location.href.split('/')[4].split('-').join(' '))
        return window.location.href.split('/')[4].split('-').join(' ');
    }

    render() {
        return (
            <section>
                <header id='selectedStoreHeader' className='z-depth-3'>
                    <div id='hero' className='container'>
                        <h1>{this.renderStoreTitle()}</h1>
                    </div>
                </header>
            </section>
        )
    }
}
