import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const Msg = ({ icon, heading, body }) => {
	return (
		<div className="d-flex pl-2 pr-2 pt-2">
			<div>
				<i className={`fas fa-${icon} pr-2`} />
			</div>
			<div>
				<p className="p-0 m-0">
					<strong>{heading}</strong>
				</p>
				<p>{body}</p>
			</div>
		</div>
	);
};

class Toast extends Component {
	state = {
		icon: "bell",
		heading: "This is a test notification.",
		body: "Notifications look awesome on this page."
	};

	notify = () => {
		toast(
			<Msg
				heading={this.state.heading}
				body={this.state.body}
				icon={this.state.icon}
			/>,
			{
				position: toast.POSITION.BOTTOM_RIGHT,
				className: "toast",
				autoClose: 15000,
                progressClassName: "progress",
                pauseOnHover: true
			}
		);
	};

	render() {
		return (
			<React.Fragment>
				<button className="btn btn-sm btn-warning" onClick={this.notify}>
					<i className="fas fa-bell pr-2" />
					NOTIFY
				</button>
				<ToastContainer />
			</React.Fragment>
		);
	}
}

export default Toast;
