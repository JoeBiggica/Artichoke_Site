import React, { Component } from 'react';
import styles from './Homepage.scss';

export default class Homepage extends Component {
	render() {
		return (
			<div className={styles('container', 'row')}>
				ABOUT
			</div>
		);
	}
}