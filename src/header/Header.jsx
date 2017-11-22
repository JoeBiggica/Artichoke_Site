import React, { Component } from 'react';
import { find } from 'lodash';
import { CSSTransitionGroup } from 'react-transition-group';

import styles from './Header.scss';

export default class Header extends Component {

	state = {
		nav_open: false,
		current_page: null
	}

	constructor(props) {
		super(props);

		this.toggleNav = this.toggleNav.bind(this);
		this.renderNavItem = this.renderNavItem.bind(this);
		this.renderMiniNavItem = this.renderMiniNavItem.bind(this);
	}

	toggleNav() {
		this.setState({
			nav_open: !this.state.nav_open
		})
	}

	renderNavItem(item) {
		return (
			<div className={styles('nav-item')} key={`nav-${item.name}`}>
				<a href={item.path}>{item.name}</a>
			</div>
		);
	}

	renderMiniNavItem(item) {
		return (
			<div className={styles('nav-item')} key={`nav-${item.name}`} onClick={this.toggleNav}>
				<a href={item.path}>{item.name}</a>
			</div>
		);
	}

	render() {
		const logo = this.props.logo;
		const nav_items = this.props.nav_items;

		const button_classname = styles('nav-button', {
			'active': this.state.nav_open
		})

		return(
			<div className={styles('container')}>
				<div className={styles('inner')}>
					<div className={styles('main')}>
						<div className={styles('logo-container')}>
							<a href='/'><div className={styles('logo')} /></a>
						</div>
						<div className={styles('nav-container')}>
							{ nav_items.map(this.renderNavItem) }
						</div>
					</div>
					<div className={styles('mini')}>
						<div className={styles('logo-container')}>
							<a href='/'><div className={styles('logo')} /></a>
						</div>
						<div className={button_classname} onClick={this.toggleNav}>
							<span className={styles('button-bar')}></span>
							<span className={styles('button-bar')}></span>
						</div>
						{ this.state.nav_open && 
							<div className={styles('nav-container')}>
								{ nav_items.map(this.renderMiniNavItem) }
							</div>
						}
						
					</div>
				</div>
			</div>
		)
	}
}