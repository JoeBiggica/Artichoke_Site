import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Link, Switch } from 'react-router-dom';

import Header from './header';
import Footer from './footer';
import Home from './pages/home';
import About from './pages/about';
import header_styles from './header/Header.scss'

import './scss/global.scss';

export default class App extends Component {
	renderHeader() {
		return (
			<div>
				<div className={header_styles('logo-container')}>
					<Link to='/'>
						<div className={header_styles('logo')} />
					</Link>
				</div>
				<div className={header_styles('nav-container')}>

					<div className={header_styles('nav-item')}><Link to='/about'>About</Link></div>
					<div className={header_styles('nav-item')}>Expertise</div>
					<div className={header_styles('nav-item')}>Contact Us</div>
				</div>
			</div>
		);
	}

	render() {
		return (
			<BrowserRouter>
				<div>
					<Header>
						{ this.renderHeader() }
					</Header>
					<Switch>
						<Route path='/' exact component={Home} />
						<Route path='/about' exact component={About} />
					</Switch>
					<Footer />
				</div>
			</BrowserRouter>
		)
	}
}

ReactDOM.render(
	<App />, document.getElementById('app-container')
);