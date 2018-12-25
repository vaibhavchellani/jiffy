import React, { Component } from "react";

class HugeCard extends Component {
	state = {};
	render() {
		return (
			<div className="huge-card p-4">
				<div
					className="huge-card-image"
					style={{ backgroundImage: `url(${this.props.image})` }}
				/>
				<div className="col main-title pt-2">{this.props.title}</div>
				<div className="col sub-title pt-2">{this.props.subtitle}</div>
				<div className="col-4 desc pt-2">{this.props.description}</div>
			</div>
		);
	}
}

export default HugeCard;
