import React, { Component } from "react";

class StatusBar extends Component {
	state = {
		statuses: [
			{ icon: "dot-circle", type: "network", val: "main net" },
			{ icon: "network-wired", type: "block", val: "#34424234" },
			{ icon: "clock", type: "last block", val: "12:38:00" },
			{ icon: "stopwatch", type: "avg block time", val: "5 sec" }
		]
	};
	render() {
		return (
			<div className="statusBar">
				<div className="d-flex justify-content-around align-items-center">
					{this.state.statuses.map((item, index) => (
						<div className="d-flex bottom-child pt-2" key={index}>
							<div className="align-self-center">
								<i className={`fas fa-${item.icon} pr-2`} />
							</div>
							<div>
								<div className="">{item.type}</div>
								<div className="">
									<strong>{item.val}</strong>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default StatusBar;
