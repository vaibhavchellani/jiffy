import React, { Component } from "react";

class SearchBar extends Component {
	render() {
		return (
			<div className="search pt-3 pb-3">
				<input type="text" placeholder="Search..." />
				<i className="fas fa-search" />
			</div>
		);
	}
}

export default SearchBar;
