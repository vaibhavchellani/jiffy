import React, { Component } from "react";

class Avatar extends Component {
	state = {
		name: "Kautuk Kundan"
	};

	render() {
		return (
			<div className="p-3 row avatar">
				<div className="d-flex">
					<div className="p-1 avatar-img align-self-center" />
					<div className="p-2 avatar-name">
						<div className="title">JIFFY<i className="fab fa-bitcoin pl-1"></i></div>
						<div className="user">{this.state.name}</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Avatar;
