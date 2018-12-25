import React, { Component } from "react";

class Timestamp extends Component {
	state = {
		push: true,
		time: ""
	};

	componentDidMount() {
		this.setState({ time: new Date().toLocaleString() });
		if (this.state.push) {
			this.interval = setInterval(
				() => this.setState({ time: new Date().toLocaleString() }),
				10000
			);
		} else this.setState({ time: "12/20/2018, 2:17:09 AM" });
	}

	render() {
		return (
			<div className="timestamp text-center">
				LAST UPDATED :{" "}
				<p>
					<strong>{this.state.time}</strong>
				</p>
			</div>
		);
	}
}

export default Timestamp;
