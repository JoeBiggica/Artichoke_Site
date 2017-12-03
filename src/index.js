import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter, Link, Switch } from 'react-router-dom';

import Header from './header';
import Footer from './footer';
import Home from './pages/home';
import About from './pages/about';
import Expertise from './pages/expertise';
import Contact from './pages/contact';

import './scss/global.scss';

export default class App extends Component {
	
	render() {
		const header_props = {
			logo: {
				path: '/'
			},
			nav_items: [
				{
					name: 'About',
					path: '/#/about',
				},
				{
					name: 'Expertise',
					path: '/#/expertise',
				},
				{
					name: 'Contact Us',
					path: '/#/contact',
				}		
			],
			current_page: '/'+window.location.hash
		}

		return (
			<HashRouter>
				<div>
					<Header {...header_props} />
					<Switch>
						<Route path='/' exact component={Home} />
						<Route path='/about' exact component={About} />
						<Route path='/expertise' exact component={Expertise} />
						<Route path='/contact' exact component={Contact} />
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