import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Link, Switch } from 'react-router-dom';

import Homepage from './components/Homepage';
import Subpage from './components/Subpage';
import Header from './header'

export default class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<div>
						<Link to='/'>Homepage</Link>
						<Link to='/about'>About</Link>
					</div>
					<Switch>
						<Route path='/' exact component={Homepage} />
						<Route path='/about' exact component={Subpage} />
					</Switch>
				</div>
			</BrowserRouter>
		)
	}
}

ReactDOM.render(
	<App />, document.getElementById('app-container')
);