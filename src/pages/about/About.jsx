import React, { Component } from 'react';

import TextBanner from '../../modules/text-banner';
import TextCard from '../../modules/text-card';
import banner_image from '../../assets/images/Group_Shot.png';
import benci_thumb from '../../assets/images/Benci_Headshot.png';
import dyer_thumb from '../../assets/images/Dyer_Headshot.png';

import styles from './About.scss';


export default class About extends Component {

	render() {
		const text_banner_props = {
			background: 'green',
			title: 'The Artichoke Story',
			text: 'We are Artichoke Designs, two passionate men who love design and want to share it with the world! After meeting in high school and sharing similar interests, we quickly became close friends. With backgrounds in graphic design, business and media, we decided that in late 2014 we should take our passions and turn it into a service. We started out with designing alternative movie posters for some of our favorite films, and learned that others enjoyed our work as well. Once we established a successful Etsy page, we decided it was time to branch out into the world of graphic design and take on all clients in search of that unique look they hadn\'t quite found yet.',
			small_text: true,
			image: banner_image
		}

		const card_one_props = {
			title: 'Brand Promise',
			text: 'At Artichoke Designs our mission is to deliver great designs at an affordable price, with extraordinary customer service and collaboration. We value each and every one of our clients and pride ourselves on being able to provide dedicated and committed service. Artichoke Designs offers a wide variety of products and services; whether it’s as detailed as building a marketing campaign from the ground up, or a simple but special invitation for a graduation party.',
		}

		const card_two_props = {
			title: 'Our Location',
			text: 'Based out of Central New Jersey. We can facilitate working with all clients across the country though excellent communication and customer service.',
		}

		const profile_one_props = {
			title: 'Steven Benci',
			subtitle: 'Co-Founder',
			text: 'I have always been interested in the endless possibilities of design and the experience of sharing my hard work with the world. I am always looking to expand my knowledge beyond what I have learned in school and make it a point to stay on top of current trends in this ever-changing field. On a personal level I enjoy passing the time with a good video game and spending time with friends and family.' ,
			thumb: benci_thumb,
		}

		const profile_two_props = {
			title: 'Richard Dyer',
			subtitle: 'Co-Founder',
			text: 'Aside from being a lover of film and design, I also went to school for Digital Film. My interest in business came from my experience in customer service and a desire to discover sensible solutions. I like to spend my free time coming up with new ideas, writing and of course watching movies! Some of my favorites include Lord of the Rings, Rocky and the Blues Brothers.' ,
			thumb: dyer_thumb,
		}

		return(
			<div className={styles('container')}>
				<TextBanner {...text_banner_props} />
				<div className={styles('cards-container')}>
					<div className={styles('about-card-one')}><TextCard {...card_one_props} /></div>
					<div className={styles('about-card-two')}><TextCard {...card_two_props} /></div>
				</div>

				<div className={styles('profiles-container')}>
					<div className={styles('profile-card')}><TextCard {...profile_one_props} /></div>
					<div className={styles('profile-card')}><TextCard {...profile_two_props} /></div>
				</div>
			</div>
		)
	}
}