import React, { Component } from 'react';

import styles from './TextCard.scss';

export default class TextCard extends Component {


	render() {
		const { thumb, title, text, centered, button } = this.props;

		return(
			<div className={styles('container')}>
				<div className={styles('inner')}>
					{ thumb && 
						<div className={styles('thumb')}>
							<img src={thumb} />
						</div>
					}
					<div className={styles('info')}>
						<h3 className={styles('title')}>{title}</h3>
						<p className={styles('text')}>{text}</p>
						{ button && <span className={styles('button')}>{button.text}</span> }
					</div>
				</div>
			</div>
		)
	}
}