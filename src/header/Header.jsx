import React, { Component } from 'react';

import styles from './Header.scss';


export default class Header extends Component {
	constructor(props) {
		super(props);
		console.log('HERE', this.props.children)
	}

	renderNav() {
		console.log('RENDER TIME')
		this.props.children.forEach(child => {
			console.log('CHILD',child)

			return child;
		});
	}

	render() {
		return(
			<div className={styles('container')}>
				<div className={styles('inner')}>
					{ this.props.children }
				</div>
			</div>
		)
	}
}