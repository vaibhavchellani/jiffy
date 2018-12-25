import React, { Component } from "react";

class BigCard extends Component {
	state = {};
	render() {
		return (
			<div className="big-card col-5 p-3 mr-2">
				<div className="col main-title pt-2">{this.props.title}</div>
				<div className="d-flex">
					<div className="desc col pt-3">{this.props.description}</div>
					<div
						className="big-card-image"
						style={{ backgroundImage: `url(${this.props.image})` }}
					/>
				</div>
			</div>
		);
	}
}

export default BigCard;
