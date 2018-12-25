import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class MenuItem extends Component {
	state = {
		name: this.props.name,
		icon: this.props.icon
	};

	render() {
		return (
			<div
				className={`item pl-2 pt-2 pb-2 ${
					this.props.activity ? `item-active` : null
				}`}
				onClick={() => this.props.toggleActivity(this.props.id)}
			>
				<i className={`fas fa-${this.state.icon} pr-3`} />
				{this.state.name}
			</div>
		);
	}
}

class Menu extends Component {
	constructor() {
		super();
		console.log(window.location.pathname);
	}

	state = {
		
		menus: [
			{
				title: "Home",
				icon: "home",
				route: "",
			},
			{
				title: "Create",
				icon: "plus",
				route: "changelog",
			},
			{
				title: "Popular",
				icon: "fire",
				route: "popular",
			},
			{
				title: "My Labels",
				icon: "tags",
				route: "settings",
			},
			{
				title: "Changelog",
				icon: "history",
				route: "changelog",
			}
		]
	};

	handleToggleActivity = index => {
		const menus = [...this.state.menus];
		menus.forEach(element => {
			if (menus.indexOf(element) === index) {
				element.active = true;
			} else {
				element.active = false;
			}
		});
		this.setState({ menus });
	};

	render() {
		return (
			<div className="flex-grow-1 pt-2">
				{this.state.menus.map((item, index) => (
					<NavLink className="nav" to={item.route} key={index}>
						<MenuItem
							name={item.title}
							icon={item.icon}
							key={index}
							id={index}
							activity={window.location.pathname===`/${item.route}`}
							toggleActivity={this.handleToggleActivity}
						/>
					</NavLink>
				))}
			</div>
		);
	}
}

export default Menu;
