import React from "react";
import { Songs } from "./songs";
import { Player } from "./player";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			songs: [],
			current: null
		};
	}

	componentDidMount() {
		// this.pauseBtn.style.display = "none";
		fetch("https://assets.breatheco.de/apis/sound/songs")
			.then(resp => resp.json())
			.then(songs => this.setState({ songs }));
	}
	songPlay = url => {
		// console.log("url", url);
		this.setState({
			current: "https://assets.breatheco.de/apis/sound/" + url
		});
	};
	// pipo() {
	// 	let i = 0;
	// 	let arr = [];
	// 	while (i < this.state.songs.length) {
	// 		arr.push(
	// 			<Songs
	// 				name={this.state.songs[i].name}
	// 				id={this.state.songs[i].id}
	// 				cat={this.state.songs[i].cat}
	// 			/>
	// 		);
	// 		i++;
	// 	}
	// 	return arr;
	// }

	render() {
		return (
			<div className="text-center mt-5">
				{this.state.songs.map((e, i) => {
					return (
						<Songs
							key={i}
							name={this.state.songs[i].name}
							id={this.state.songs[i].id}
							cat={this.state.songs[i].category}
							url={this.state.songs[i].url}
							songPlay={() =>
								this.songPlay(this.state.songs[i].url)
							}
						/>
					);
				})}

				<div className="fixed-bottom bg-secondary">
					<Player currentUrl={this.state.current} />
				</div>
			</div>
		);
	}
}
