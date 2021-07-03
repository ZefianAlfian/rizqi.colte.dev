import React from "react";
import Navbar from "../components/updtNavbar.jsx";
import fetch from "node-fetch";

const generateQRCode = () => {
	fetch("https://rizqi-server.glitch.me/createqr")
		.then((res) => res.json())
		.then(
			({ data }) => (document.querySelector("#img").innerHTML = `<img src="${data.qrcodeURL}">`)
		);
};
class App extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<section id="main" className="mt-8">
					<div className="container-lg-4">
						<h1>Hello World</h1>
						<div id="img"></div>
						<button
							className="bg-green-500 block text-white border-black rounded-md transition-colors duration-500"
							onClick={() => generateQRCode()}
						>
							generateQRCode
						</button>
					</div>
				</section>
			</React.Fragment>
		);
	}
}

export default App;
