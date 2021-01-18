import React, {useState} from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Help from "./Components/Help";
import {getImageOrVedio} from "./helper";

const App = () => {
	const [input, setInput] = useState("");
	const [show, setShow] = useState(false);
	const [output, setOutput] = useState("");
	const [error, setError] = useState("");
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
			<Header />
			<div className='App__content'>
				<div className='App__content__inputField'>
					<input
						type='text'
						placeholder='Paste the link'
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>
					<button
						onClick={() => {
							if (input.length <= 15) {
								setError("Paste the proper Link");
								return;
							}
							setShow(false);
							setLoading(true);
							getImageOrVedio({link: input})
								.then((result) => {
									if (!result) {
										setLoading(false);
										setError("Paste the proper Link");
										console.log("Wrong Link Pasted");
										return;
									}
									if (result.error) {
										setLoading(false);
										setError(result.error);
										console.error("Line 21 : ", result.error);
										return;
									}

									setOutput(result);
									setLoading(false);
									setError("");
									setShow(true);
								})
								.catch((error) => console.error(error));
						}}
					>
						CHECK URL
					</button>
				</div>
				<div className='loading'>
					{loading ? "Loading..." : error ? error : ""}
				</div>

				{show ? (
					<div className='App__content__imageVedio'>
						{output.isImage ? (
							<>
								<img
									alt='Paste a Proper link'
									style={{
										maxWidth: "105%",
										boxShadow: "rgba(0, 0, 0, 0.1) 0px 5px 20px",
										borderRadius: "5px",
									}}
									src={output.url}
								/>
								<button style={{margin: "20px"}} onClick={downloadImage}>
									Download Image
								</button>
							</>
						) : (
							<>
								<video
									controls
									src={output.url}
									type='video/mp4'
									className='videoBox'
								></video>
								<div className='videoText'>
									Click on the three dots - click download to Download the vedio
								</div>
							</>
						)}
					</div>
				) : (
					""
				)}
				<Help />
				<div className='bottom'></div>
			</div>

			<Footer />
		</div>
	);
};

export default App;
