import React, { Component } from 'react';

import TextBanner from '../../modules/text-banner';
import TextCard from '../../modules/text-card';
import banner_image from '../../assets/images/Group_Shot.png';
import branding_thumb from '../../assets/images/Branding_Thumbnail.png';
import photography_thumb from '../../assets/images/Photography_Thumbnail.png';
import print_thumb from '../../assets/images/Printdesign_Thumbnail.png';
import poster_thumb from '../../assets/images/Fanart_Thumbnail.png';

import styles from './Contact.scss';


export default class Contact extends Component {

	render() {
		const text_banner_props = {
			background: 'green',
			title: 'Let\'s Work Together',
			text: 'We would love to hear from you and to learn more about your project. Please fill out the form and we will get back to you as quickly as possible.',
			small_text: true,
		}

		return(
			<div className={styles('container')}>
				<TextBanner {...text_banner_props} />
				
				<div className={styles('form-container')}>
					<form action='mailto:theartichokedesigns@gmail.com?subject=Inquiry from the Artichoke Designs Website' method='post' enctype='text/plain'>
						<div className={styles('info')}>
							<div className={styles('row')}>
								<h3 className={styles('title')}>Name</h3>
								<input type='text' name='name' placeholder='Jan Michael Vincent' />
							</div>
							<div className={styles('row')}>
								<h3 className={styles('title')}>Email Address</h3>
								<input type='text' name='mail' placeholder='michael_down@vincent.com' />
							</div>
							<div className={styles('row')}>
								<h3 className={styles('title')}>How did you hear about us?</h3>
								<input type='text' name='mail' placeholder='Google, Facebook, Instagram, etc.' />
							</div>

						</div>
						<div className={styles('body')}>
							<h3 className={styles('title')}>How can we help you?</h3>
							<textarea />
							<input className={styles('button')} type="submit" value="Submit" />
						</div>
						
					</form>
				</div>
			</div>
		)
	}
}