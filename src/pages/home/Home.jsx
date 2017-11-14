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
				<div className={styles('cards-container')}>
					<div className={styles('card')}>
						<div className={styles('inner')}>
							<div className={styles('thumb','expertise')} />
							<div className={styles('info')}>
								<h3 className={styles('title')}>Areas of Expertise</h3>
								<p className={styles('description')}>We love working with our clients to help them create an engaging and memorable experience through design. We specialize in branding, print design, advertising and photography. Most importantly, we strive to provide unparalleled customer service and transparency.</p>
								<span className={styles('button')}>Learn More</span>
							</div>
						</div>
					</div>
					<div className={styles('card')}>
						<div className={styles('inner')}>
							<div className={styles('thumb','blog-post')} />
							<div className={styles('info')}>
								<h3 className={styles('title')}>Blog Spot</h3>
								<p className={styles('description')}>Blog coming soon!</p>
							</div>
						</div>
					</div>
				</div>
				<div className={styles('your-story')}>
					<div className={styles('inner')}>
						<div className={styles('thumb')} />
						<div className={styles('info')}>
							<h3 className={styles('title')}>Areas of Expertise</h3>
							<p>The Heart of Design - Literal or metaphorical, it\'s our responsibility at Artichoke Designs to handle the layers. We are committed to making the experience for our clients as simple as possible, while providing excellent communication and updates throughout the process. Our experience and dedication to our work allows us to treat any project, no matter how big or small, with the utmost care that our customers demand and deserve.</p>
							<p>Design is more than a job for us; it's a passion. We see the world through the prism of graphic design, constantly searching for ways to improve ourselves and our work. By committing to this philosophy, we treat all projects as an experience. From an entire re-branding of a small business to a simple avatar for a personal blog, our mentality remains the same. Artichoke Designs exists to peel away your problems until you're left with a completely satisfying solution.</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}