import React, { Component } from 'react'

export default class MainMenu extends Component {
    render() {
        return (
            <div className='menuOverlay'>
                <div className="menuOverlay-content animated fadeInLeft">
                    <a href="#">Butikker</a>
                    <a href="#">Nærmest Meg</a>
                    <a href="#">Varer & Leverandører</a>
                    <a href="#">Vår Historie</a>
                    <a href="#">Kontakt Oss</a>
                </div>
            </div>
        )
    }
}
