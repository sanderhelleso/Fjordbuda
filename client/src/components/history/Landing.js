import React, { Component } from 'react';
import { ArrowDown } from 'react-feather';
import { Parallax } from 'react-materialize';
import $ from 'jquery';
import { scrollSpy } from '../../globals/scrollSpy';

import Story from './Story';

export default class Landing extends Component {
	componentDidMount() {
		// set white logo
		setTimeout(() => {
			document.querySelector('#navLogo').src = 'img/logo/Vinje1_white.png';
		}, 1000);

		window.addEventListener('scroll', scrollSpy);
		animateArrow();
	}

	render() {
		return (
			<div>
				<div id="progressBar" className="z-depth-1" />
				<header id="historyHeader" className="z-depth-2">
					<div id="historyIntro" className="container">
						<h1>En historie uten like</h1>
						<p>Stiftet i den idylliske landsbyen Geiranger, Vinjenaustet er ikke som alle andre naust</p>
					</div>
					<span id="readMoreBtn">
						<img src="img/history/scroll.png" />
					</span>
				</header>
				<Story />
			</div>
		);
	}
}

function animateArrow() {
	const arrow = document.querySelector('#readMoreBtn');
	arrow.addEventListener('click', scrollToHistory);
}

// scroll to history start
function scrollToHistory() {
	$('html,body').animate(
		{
			scrollTop: $('#quote').offset().top - 75
		},
		'slow'
	);
}
