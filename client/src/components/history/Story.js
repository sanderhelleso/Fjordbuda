import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { Minus, ChevronUp } from 'react-feather';
import $ from 'jquery';

export default class Story extends Component {
	componentDidMount() {
		document.querySelector('#backToTop').addEventListener('click', backToTop);
	}

	render() {
		return (
			<section id="historySection">
				<div className="container storyContainer">
					<Row>
						<Col s={12}>
							<Fade>
								<div id="quote">
									<h4>"The earth has music for those who listen."</h4>
									<h5>-William Shakespeare</h5>
								</div>
								<Fade up>
									<h2 id="historyHeading">Det var engang...</h2>
								</Fade>
								<div className="part">
									<div className="partId">
										<h3>
											<Minus /> 01
										</h3>
									</div>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis ex
										placerat lacus porta, eget lacinia urna venenatis. Fusce convallis leo vel ipsum
										laoreet, eget gravida neque pulvinar. Vestibulum dictum a purus quis malesuada.
										Etiam eu lacus id nibh eleifend congue. Phasellus interdum accumsan dictum.
										Mauris quis congue lorem, nec semper dui. Praesent ipsum augue, finibus sed
										ornare eget, pretium ut mauris. Phasellus consequat nibh vitae leo porttitor,
										eget efficitur nibh varius. Fusce enim neque, pulvinar eu odio quis, porta
										auctor sapien. Integer condimentum dolor et ipsum vulputate, non suscipit lacus
										maximus. Quisque volutpat placerat ante, ut tempor nisl rhoncus id. Maecenas
										enim erat, mattis a pulvinar in, volutpat eget turpis. Duis vel lacus efficitur
										velit ultricies cursus in vitae arcu. Curabitur turpis lacus, dapibus in
										facilisis a, dapibus quis felis. Ut euismod ligula sed dolor consectetur
										lacinia. Proin malesuada lacus lectus, sit amet elementum est auctor non.
										Phasellus pharetra orci nunc, quis euismod diam rutrum eu. Proin id urna eu dui
										tincidunt mattis vitae id felis. Nulla tempor tortor ac nisi laoreet varius.
										Morbi turpis nulla, aliquam sed lorem eu, bibendum consectetur ante. Duis
										scelerisque nulla eu mi dignissim malesuada. Vestibulum tellus turpis,
										ullamcorper eu faucibus in, aliquet tempus nulla. Curabitur fermentum gravida
										rutrum.
									</p>
									<img className="responsive-img z-depth-1" src="img/menu/menubg1.jpg" />
									<h5>Alt text</h5>
								</div>
							</Fade>
						</Col>
					</Row>
				</div>
				<Fade up>
					<div id="backToTop" className="noSelect">
						<ChevronUp size={50} color="#10ddc2" />
						<h5>Tilbake til toppen</h5>
					</div>
				</Fade>
			</section>
		);
	}
}

function backToTop() {
	$('html,body').animate(
		{
			scrollTop: $('#historyHeader').offset().top
		},
		'slow'
	);
}
