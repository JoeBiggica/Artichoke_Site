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

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const self = this;
		const mail_link_base = this.refs['mail-link'].href;

		this.refs['contact-body'].addEventListener('keyup', function() {
			let mail_from = '%0AFrom,%0A' + self.refs['name'].value;
			let body_value = encodeURIComponent(this.value);
			const mail_link = document.getElementById('mail-link');
			mail_link.href = mail_link_base + '&body=' + body_value + mail_from;	
		})
	}


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
					<div className={styles('form')}>
						<div className={styles('info')}>
							<div className={styles('row')}>
								<h3 className={styles('title')}>Name</h3>
								<input type='text' placeholder='John Smith' ref='name' />
							</div>
							<div className={styles('row')}>
								<h3 className={styles('title')}>Email Address</h3>
								<input type='text' placeholder='john.smith@gmail.com' />
							</div>
							<div className={styles('row')}>
								<h3 className={styles('title')}>How did you hear about us?</h3>
								<input type='text' placeholder='Google, Facebook, Instagram, etc.' />
							</div>

						</div>
						<div className={styles('body')}>
							<h3 className={styles('title')}>How can we help you?</h3>
							<textarea ref='contact-body' name='message'/>
							<a id='mail-link' ref='mail-link' className={styles('button')} href="mailto:theartichokedesigns@gmail.com?subject=Inquiry from the Artichoke Designs Site">
								Submit
							</a>
						</div>
					</div>
				</div>
			</div>
		)
	}
}