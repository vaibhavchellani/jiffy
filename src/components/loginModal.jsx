import React, { Component } from "react";

import Metamask from "../assets/metamask.png";

class LoginModal extends Component {
	render() {
		if (!this.props.show) {
			return null;
		}

		return (
			<div className="login-modal">
				<div className="login-modal-box d-flex justify-content-end">
					<div
						className="login-modal-image"
						style={{ backgroundImage: `url(${Metamask})` }}
					/>
					<i
						className="fas fa-times-circle close-button"
						onClick={this.props.onClose}
					/>
					<div className="login-modal-text d-flex flex-column justify-content-center align-items-center">
						<div className="text text-center">
							Connect to the
							<p>Metamask Browser Wallet</p>
						</div>
						<div className="button d-flex justify-content-center align-items-center">
							CLICK TO CONNECT
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default LoginModal;
