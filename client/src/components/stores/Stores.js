import { Helmet } from 'react-helmet';
import React, { Component } from 'react';
import { MapPin, ChevronDown } from 'react-feather';
import StoreMap from './StoreMap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { getStores } from '../../globals/stores';
import { getBrands } from '../../globals/getBrands';
import { scrollSpy } from '../../globals/scrollSpy';
import CountUp from 'react-countup';
import Fade from 'react-reveal/Fade';

export default class Stores extends Component {
	componentDidMount() {
		document.querySelector('footer').style.marginTop = '70vh';
		window.addEventListener('scroll', countUp);
	}

	dropUp() {
		// check if menu is active
		if (!document.querySelector('.dropdown').classList.contains('show')) {
			document.querySelector('.dropdown > button').click();
			setTimeout(() => {
				// set width of menu
				const menu = document.querySelector('.dropdown-menu');
				menu.style.width = document.querySelector('.selectStoreOption').getBoundingClientRect().width + 'px';

				// set event to naviate to selected store
				document.querySelector('.dropdown-menu').querySelectorAll('button').forEach((button) => {
					button.addEventListener('click', selectStore);
				});
			}, 100);
		}
	}

	renderStores() {
		return getStores().sort().map((store) => {
			return (
				<a key={store.name} href={`${window.location.href}/${store.name.toLowerCase().split(' ').join('-')}`}>
					<DropdownItem key={store.name}>{store.name}</DropdownItem>
				</a>
			);
		});
	}

	render() {
		return (
			<div>
				<Helmet>
					<title>Fjordbuda - Våre butikker</title>
					<meta
						name="description"
						content="Over 22 butikker spredt ut over Norge. Finn din fjordbud for norske klær og suvenirer."
					/>
				</Helmet>
				<header id="storesHeader" className="z-depth-3">
					<div id="selectStore" className="container">
						<div id="selectStoreRow" className="row z-depth-5">
							<div className="col s6 findStore">
								<h5 className="noSelect">
									Finn din <span>Fjordbud</span>
								</h5>
							</div>
							<div className="col s6 selectStoreOption" onClick={this.dropUp}>
								<h5 id="selectStoreHeading" className="noSelect">
									<MapPin size={22} color={'#10ddc2'} /> <span id="setStore">Velg sted</span>
								</h5>
								<span>
									<ChevronDown size={22} color={'#9e9e9e'} />
								</span>
								<Dropdown>
									<DropdownToggle />
									<DropdownMenu className="z-depth-3 animated fadeIn">
										{this.renderStores()}
									</DropdownMenu>
								</Dropdown>
							</div>
						</div>
					</div>
				</header>
				<section id="storeSection" className="container">
					<Fade>
						<h5>Fjordbuda av Norge</h5>
						<h2>Norsk Stolthet</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin maximus enim,
							a placerat elit congue a. Integer sed sollicitudin enim, egestas tristique ex. Nullam ante
							sem, consequat id malesuada vulputate, lacinia sed augue. Suspendisse eget dapibus velit, id
							posuere mauris. Suspendisse potenti.
						</p>
						<div className="row">
							<div className="col col-s4">
								<h5>Butikker</h5>
								<CountUp start={0} end={getStores().length}>
									{({ countUpRef, start }) => (
										<div>
											<h3 ref={countUpRef} />
											<button onClick={start}>Start</button>
										</div>
									)}
								</CountUp>
							</div>
							<div className="col col-s4">
								<h5>Norkse Merkevarer</h5>
								<CountUp start={0} end={getBrands().length}>
									{({ countUpRef, start }) => (
										<div>
											<h3 ref={countUpRef} />
											<button onClick={start}>Start</button>
										</div>
									)}
								</CountUp>
							</div>
							<div className="col col-s4">
								<h5>Kunder i Året</h5>
								<CountUp start={0} end={500000}>
									{({ countUpRef, start }) => (
										<div>
											<h3 ref={countUpRef} />
											<button onClick={start}>Start</button>
										</div>
									)}
								</CountUp>
							</div>
						</div>
					</Fade>
				</section>
				<StoreMap all={true} />
			</div>
		);
	}
}

let isClicked = false;
function countUp() {
	scrollSpy();
	const header = document.querySelector('#storesHeader');
	if (window.scrollY > (header.offsetTop + header.offsetHeight) / 2 && !isClicked) {
		const buttons = Array.from(document.querySelector('#storeSection').querySelectorAll('button'));
		buttons.forEach((button) => {
			button.click();
		});

		isClicked = true;
	}
}

function selectStore() {
	document.querySelector('#setStore').innerHTML = this.innerHTML;
}
