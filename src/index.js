import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter, Link, Switch } from 'react-router-dom';

import Header from './header';
import Footer from './footer';
import Home from './pages/home';
import About from './pages/about';
import Expertise from './pages/expertise';
import header_styles from './header/Header.scss'

import './scss/global.scss';

export default class App extends Component {
	state = {
		current_page: 'home'
	}

	navClick() {

	}
	renderHeader() {
		return (
			<div>
				<div className={header_styles('logo-container')} key='logo'>
					<Link to='/'>
						<div className={header_styles('logo')} />
					</Link>
				</div>
				<div className={header_styles('nav-container')} key='nav'>
					<div className={header_styles('nav-item')}>
						<Link to='/about'>About</Link>
					</div>
					<div className={header_styles('nav-item')}>
						<Link to='/expertise'>Expertise</Link>
					</div>
					<div className={header_styles('nav-item')}>
						<Link to='/expertise'>Contact Us</Link>
					</div>
				</div>
			</div>
		);
	}

	render() {
		const header_props = {
			logo: {
				path: '/'
			},
			nav_items: [
				{
					about: {
						name: 'About',
						path: '/about',
					}
				},
				{
					expertise: {
						name: 'Expertise',
						path: '/expertise',
					}
				},
				{
					contact: {
						name: 'Contact Us',
						path: '/contact-us'
					}
				}		
			]
		}

		return (
			<HashRouter>
				<div>
					<Header>
						{ this.renderHeader() }
					</Header>
					<Switch>
						<Route path='/' exact component={Home} />
						<Route path='/about' exact component={About} />
						<Route path='/expertise' exact component={Expertise} />
					</Switch>
					<Footer />
				</div>
			</HashRouter>
		)
	}
}

ReactDOM.render(
	<App />, document.getElementById('app-container')
);