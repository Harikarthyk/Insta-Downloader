import React, {useState} from "react";
import "./App.css";
import {getImageOrVedio} from "./helper";


const App = () => {
	const [input, setInput] = useState("");
	const [show, setShow] = useState(false);
	const [output, setOutput] = useState("");
	const [loading, setLoading] = useState(false);
	function downloadImage() {
		let src = output.url;
		if (!output && !output.url && !output.isImage) {
			return;
		}
		const img = new Image();
		img.crossOrigin = "anonymous"; // This tells the browser to request cross-origin access when trying to download the image data.
		// ref: https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image#Implementing_the_save_feature
		img.src = src;
		img.onload = () => {
			// create Canvas
			const canvas = document.createElement("canvas");
			const ctx = canvas.getContext("2d");
			canvas.width = img.width;
			canvas.height = img.height;
			ctx.drawImage(img, 0, 0);
			// create a tag
			const a = document.createElement("a");
			a.download = "download.png";
			a.href = canvas.toDataURL("image/png");
			a.click();
		};
	}
	return (
		<div className='App'>
			<h1>Insta Downloader Application </h1>
			<input
				type='text'
				placeholder='Paste the link'
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			<button
				onClick={() => {
					setShow(false);
					setLoading(true);
					getImageOrVedio({link: input})
						.then((result) => {
							if (result.error) {
								setLoading(false);
								console.error("Line 21 : ", result.error);
								return;
							}

							setOutput(result);
							setLoading(false);
							setShow(true);
						})
						.catch((error) => console.error(error));
				}}
			>
				CHECK URL
			</button>
			<div>{loading ? "Loading" : ""}</div>
			{show ? (
				<>
					{output.isImage ? (
						<>
							<img alt='Paste a Proper link' src={output.url} />
							<button onClick={downloadImage}>Download Image</button>
						</>
					) : (
						<>
							<video
								controls
								src={output.url}
								type='video/mp4'
								className='videoBox'
							></video>
							<div>Click on the three dots - download the video </div>
						</>
					)}
				</>
			) : (
				""
			)}
		</div>
	);
};

export default App;
