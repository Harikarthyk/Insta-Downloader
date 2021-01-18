import React from "react";

function Help() {
	return (
		<div className='Help'>
			<div className='Help__title'>How to use Insta Downloader Application</div>
			<div className='Help__content'>
				<div className='Help__content__note'>
					<b>Note:</b> The video or photo which you will download must be from a
					public Instagram account.
				</div>
				<div className='Help__steps'>
					<div className='Help__steps__step'>
						<div className='Help__steps__step__title'>
							<b>Step 1 : </b>Copy the video or photo’s URL from your browser or
							Instagram app.
						</div>
						<div className='Help__steps__step__image'>
							<li>Open Instagram</li>
							<li>
								Tap on the 3 dots above the post and then tap Copy Share URL.
								The link will be saved to your clipboard.
							</li>
						</div>
						<img
							className='Help_image'
							src='https://user-images.githubusercontent.com/54505967/104904449-2c258900-59a7-11eb-9864-8d2852120fa0.png'
							alt='image_2'
						/>
						<div className='br'></div>
						<img
							className='Help_image'
							src='https://user-images.githubusercontent.com/54505967/104904431-28920200-59a7-11eb-94f3-701aab4c8226.jpeg'
							alt='image_1'
						/>
					</div>
					<div className='Help__steps__step'>
						<div className='Help__steps__step__title'>
							<b>Step 2 : </b>Paste URL in the above text box area.
						</div>
					</div>
					<div className='Help__steps__step'>
						<div className='Help__steps__step__title'>
							<b>Step 3 : </b> Hit the "Check URL"button.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Help;
