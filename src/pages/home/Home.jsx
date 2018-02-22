import React, { Component } from 'react';

import TextCard from '../../modules/text-card';
import TextBanner from '../../modules/text-banner';
import expertise_thumb from '../../assets/images/Expertise_Checkmark.png';
import blog_thumb from '../../assets/images/Blog_Thumb.png'

import styles from './Home.scss';


export default class Home extends Component {

	render() {
		const text_banner_props = {
			background: 'green',
			text: 'Come see what we have to offer and let us reveal the heart of your business.',
			centered: true,
			button: {
				path: '/#/contact',
				text: 'Let\'s work together'
			}
		}

		const card_one_props = {
			title: 'Areas of Expertise',
			text: 'We love working with our clients to help them create an engaging and memorable experience through design. We specialize in branding, print design, advertising and photography. Most importantly, we strive to provide unparalleled customer service and transparency.',
			thumb: expertise_thumb,
			button: {
				path: '/#/expertise',
				text: 'Learn more'
			}
		}

		const card_two_props = {
			title: 'Blog Spot',
			text: 'Blog coming soon!',
			thumb: blog_thumb,
		}

		return(
			<div className={styles('container')}>
				<div className={styles('banner-container')}>
					<div className={styles('banner')}>
						<div className={styles('inner')}>
							<span className={styles('banner-text')}>We Handle the Layers,</span>
							<span className={styles('banner-text')}>You Enjoy the Heart</span>
						</div>
					</div>
				</div>
				<div className={styles('cards-container')}>
					<div className={styles('card')}><TextCard {...card_one_props} /></div>
					<div className={styles('card')}><TextCard {...card_two_props} /></div>
				</div>
				<div className={styles('your-story')}>
					<div className={styles('inner')}>
						<div className={styles('thumb')} />
						<div className={styles('info')}>
							<h3 className={styles('title')}>The Heart of Design</h3>
							<p>Literal or metaphorical, it's our responsibility at Artichoke Designs to handle the layers. We are committed to making the experience for our clients as simple as possible, while providing excellent communication and updates throughout the process. Our experience and dedication to our work allows us to treat any project, no matter how big or small, with the utmost care that our customers demand and deserve.</p>
							<p>Design is more than a job for us; it's a passion. We see the world through the prism of graphic design, constantly searching for ways to improve ourselves and our work. By committing to this philosophy, we treat all projects as an experience. From an entire re-branding of a small business to a simple avatar for a personal blog, our mentality remains the same. Artichoke Designs exists to peel away your problems until you're left with a completely satisfying solution.</p>
						</div>
					</div>
				</div>
				<TextBanner {...text_banner_props} />
			</div>
		)
	}
}