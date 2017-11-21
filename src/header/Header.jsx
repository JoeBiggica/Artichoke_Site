import React, { Component } from 'react';
import { find } from 'lodash';
import { CSSTransitionGroup } from 'react-transition-group';

import styles from './Header.scss';

export default class Header extends Component {

	state = {
		nav_open: false
	}

	constructor(props) {
		super(props);

		this.toggleNav = this.toggleNav.bind(this);
		this.renderMiniNavItem = this.renderMiniNavItem.bind(this);
	}

	toggleNav() {
		this.setState({
			nav_open: !this.state.nav_open
		})
	}

	renderMiniNavItem(item) {
		return (
			<div onClick={this.toggleNav}>{item}</div>
		)
	}

	render() {
		const logo = find(this.props.children.props.children, child => { return child.key == 'logo'; });
		const nav = find(this.props.children.props.children, child => { return child.key == 'nav'; });
		console.log(nav.props.children)
		const button_classname = styles('nav-button', {
			'active': this.state.nav_open
		})

		return(
			<div className={styles('container')}>
				<div className={styles('inner')}>
					<div className={styles('main')}>
						{ this.props.children }
					</div>
					<div className={styles('mini')}>
						{ logo }
						<div className={button_classname} onClick={this.toggleNav}>
							<span className={styles('button-bar')}></span>
							<span className={styles('button-bar')}></span>
						</div>
						{ this.state.nav_open && 
							<div className={styles('nav-container')}>
								{ nav.props.children.map(this.renderMiniNavItem) }
							</div>
						}
						
					</div>
				</div>
			</div>
		)
	}
}