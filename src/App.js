import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import SearchBar from "./components/search";
import Avatar from "./components/avatar";
import Timestamp from "./components/timestamp";
import Menu from "./components/menu";
import Routes from "./components/routes";
// import Toast from "./components/toast";
import StatusBar from "./components/status";
import LoginModal from "./components/loginModal";

class Test extends Component {
	state = {
		modalVisible: false
	};

	toggleModal = () => {
		this.setState({
			modalVisible: !this.state.modalVisible
		});
	};

	render() {
		return (
			<BrowserRouter>
				<div className="app-page row m-0">
					<div className="left-menu col-2">
						<div className="items d-flex flex-column items">
							<SearchBar />
							<Menu />
							{/* <Toast /> */}
							<div
								className="btn btn-sm btn-warning"
								onClick={this.toggleModal}
							>
								<i className="fas fa-sign-in-alt pr-2" />
								LOGIN
							</div>
							<Avatar />
							<Timestamp />
						</div>
					</div>
					<div className="right-main col-10">
						<Routes />
						<StatusBar />
					</div>
					<LoginModal
						show={this.state.modalVisible}
						onClose={this.toggleModal}
					/>
				</div>
			</BrowserRouter>
		);
	}
}

export default Test;
