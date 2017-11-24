import React, { Component } from 'react';

import TextBanner from '../../modules/text-banner';
import TextCard from '../../modules/text-card';
import banner_image from '../../assets/images/Group_Shot.png';
import branding_thumb from '../../assets/images/Branding_Thumbnail.png';
import photography_thumb from '../../assets/images/Photography_Thumbnail.png';
import print_thumb from '../../assets/images/Printdesign_Thumbnail.png';
import poster_thumb from '../../assets/images/Fanart_Thumbnail.png';

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
			title: 'Branding',
			text: '"Your brand is what other people say about you when you\'re not in the room." - Jeff Bezos, Founder and CEO of Amazon. \nYour brand is your business, and a bad brand makes for bad business. We will show our audience that you make for good business, and that they deserve you.',
			thumb: branding_thumb,
		}

		const card_two_props = {
			title: 'Photography',
			text: 'A picture is worth a thousand words. In this day and age, image is everything. We will capture your good side and let your audience know how good you look...before they even meet you.',
			thumb: photography_thumb,
		}

		const card_three_props = {
			title: 'Print Design',
			text: 'Make your next flyer be fridge-worthy. Have your business card be a conversation starter. Let your invitation be the talk of the party. We will make sure you always look good on paper.',
			thumb: print_thumb,
		}

		const card_four_props = {
			title: 'Alternative Print Design',
			text: 'We never lose sight of our roots. Poster design is where we got our start, and we do NOT like bare walls. We can work with you on your original idea and make sure your walls are always dressed with some fine designs.',
			thumb: poster_thumb,
			button: {
				path: 'https://www.etsy.com/shop/TheArtichokeDesigns?ref=hdr_shop_menu',
				text: 'SHOP'
			}
		}


		return(
			<div className={styles('container')}>
				<TextBanner {...text_banner_props} />
				<div className={styles('cards-container')}>
					<div className={styles('card')}><TextCard {...card_one_props} /></div>
					<div className={styles('card')}><TextCard {...card_two_props} /></div>
					<div className={styles('card')}><TextCard {...card_three_props} /></div>
					<div className={styles('card')}><TextCard {...card_four_props} /></div>
				</div>
			</div>
		)
	}
}