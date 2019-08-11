import React, { Component } from 'react';
import { Row } from 'react-materialize';
import { Navigation, MessageCircle } from 'react-feather';
import { getStores } from '../globals/stores';

export default class MainFooter extends Component {
	render() {
		return (
			<footer>
				<div className="container">
					<Row id="footerRow">
						<div className="col-sm-12 col-md-6 col-lg-4">
							<h5>Butikker</h5>
							<ul>{renderStores(1)}</ul>
						</div>
						<div className="col-sm-12 col-md-6 col-lg-4">
							<h5>Kontakt</h5>
							<ul>
								<li>6216 Geiranger</li>
								<li>
									<a href="tel:+4770263012">+47 70 26 30 12</a>
								</li>
								<li>
									<a href="mailto:jan-ivar@fiskebat.no">jan-ivar@fiskebat.no</a>
								</li>
								<li>Org nr: 967 273 414</li>
							</ul>
						</div>
						<div className="col-sm-12 col-md-6 col-lg-4">
							<ul>
								<li className="copyright">© Vinjenaustet</li>
							</ul>
							<a id="semanta" href="http://semanta.no" target="_blank">
								Utviklet av Semanta
							</a>
						</div>
					</Row>
				</div>
			</footer>
		);
	}
}

// render footer stores
function renderStores(col) {
	return getStores().sort().map((store) => {
		const li = (
			<li key={store.name}>
				<a href={`/butikker/${store.name.toLowerCase().split(' ').join('-')}`}>{store.name}</a>
			</li>
		);
		if (col === 1) {
			while (getStores().indexOf(store) < getStores().length / 2) {
				return li;
			}
		} else {
			while (getStores().indexOf(store) >= getStores().length / 2) {
				return li;
			}
		}
	});
}
