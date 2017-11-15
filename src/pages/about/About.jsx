import React, { Component } from 'react';

import TextBanner from '../../modules/text-banner';
import image from '../../assets/images/Group_Shot.png'

import styles from './About.scss';


export default class About extends Component {

	render() {
		const text_banner_props = {
			background: 'green',
			title: 'The Artichoke Story',
			text: 'We are Artichoke Designs, two passionate men who love design and want to share it with the world! After meeting in high school and sharing similar interests, we quickly became close friends. With backgrounds in graphic design, business and media, we decided that in late 2014 we should take our passions and turn it into a service. We started out with designing alternative movie posters for some of our favorite films, and learned that others enjoyed our work as well. Once we established a successful Etsy page, we decided it was time to branch out into the world of graphic design and take on all clients in search of that unique look they hadn\'t quite found yet.',
			small_text: true,
			image: image
		}

		return(
			<div className={styles('container')}>
				<TextBanner {...text_banner_props} />
			</div>
		)
	}
}