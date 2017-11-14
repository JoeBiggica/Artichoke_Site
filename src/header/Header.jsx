import React, { Component } from 'react';

import styles from './Header.scss';

export default class Header extends Component {

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