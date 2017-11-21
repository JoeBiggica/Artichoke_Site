import React, { Component } from 'react';

import TextBanner from '../../modules/text-banner';
import TextCard from '../../modules/text-card';
import banner_image from '../../assets/images/Group_Shot.png';
import benci_thumb from '../../assets/images/Benci_Headshot.png';
import dyer_thumb from '../../assets/images/Dyer_Headshot.png';

import styles from './Expertise.scss';


export default class Expertise extends Component {

	render() {
		const text_banner_props = {
			background: 'green',
			title: 'Area of Expertise',
			text: 'We love working with our clients to help them create an engaging and memorable experience through design. We specialize in branding, print design, advertising and photography. Most importantly, we strive to provide unparalleled customer service and transparency.',
			small_text: true,
		}

		const card_one_props = {
			title: 'Brand Promise',
			text: 'At Artichoke Designs our mission is to deliver great designs at an affordable price, with extraordinary customer service and collaboration. We value each and every one of our clients and pride ourselves on being able to provide dedicated and committed service. Artichoke Designs offers a wide variety of products and services; whether it’s as detailed as building a marketing campaign from the ground up, or a simple but special invitation for a graduation party.',
		}

		const card_two_props = {
			title: 'Our Location',
			text: 'Based out of Central New Jersey. We can facilitate working with all clients across the country though excellent communication and customer service.',
		}


		return(
			<div className={styles('container')}>
				<TextBanner {...text_banner_props} />
				<div className={styles('cards-container')}>
					<div className={styles('about-card-one')}><TextCard {...card_one_props} /></div>
					<div className={styles('about-card-two')}><TextCard {...card_two_props} /></div>
				</div>
			</div>
		)
	}
}