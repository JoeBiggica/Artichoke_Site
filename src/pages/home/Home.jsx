import React, { Component } from 'react';

import styles from './Home.scss';


export default class Home extends Component {

	render() {
		return(
			<div className={styles('container')}>
				<div className={styles('banner')}>
					<span className={styles('banner-text')}> We Handle the Johns, </span>
					<span className={styles('banner-text')}> You Enjoy the Boyegas, </span>
				</div>
			</div>
		)
	}
}