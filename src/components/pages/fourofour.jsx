import React, { Component } from "react";

class FourOfour extends Component {
	render() {
		return (
			<div className="error d-flex flex-column justify-content-center align-items-center">
                <i className="fas fa-exclamation-triangle error-icon p-5"></i>
                <h1>Error 404</h1>
				<h3>Oops! this page does not exist</h3>
			</div>
		);
	}
}

export default FourOfour;
