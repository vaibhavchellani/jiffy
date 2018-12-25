import React, { Component } from "react";

class MediumCard extends Component {
	state = {};
	render() {
		return (
			<div className="med-card col-3 p-0 mr-2 d-flex flex-column">
				<div className="main flex-grow-1 p-3 m-0 d-flex flex-column justify-content-center align-items-center">
					<div
						className="med-card-image"
						style={{ backgroundImage: `url(${this.props.image})` }}
					/>
					<div className="name pt-3">{this.props.name}</div>
				</div>
				<div className="meta p-0 m-0">
					<div className="p-2 d-flex justify-content-between">
						<div>
							<i className="fab fa-ethereum pr-2" />
							{this.props.network}
						</div>
						<div>
							<i className="far fa-clock pr-2" />
							{this.props.time}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default MediumCard;
