import React, { Component } from "react";

class Changelog extends Component {
	state = {
		changes: [
			{ time: "Sat Dec 15 21:37:41 2018 +0530", change: "Project Started" },
			{ time: "Sun Dec 16 21:39:01 2018 +0530", change: "Added Sidebar" },
			{ time: "Sun Dec 16 21:59:55 2018 +0530", change: "Added Timestamping" },
			{ time: "Sun Dec 16 23:27:23 2018 +0530", change: "Menu icons Changed" },
			{ time: "Mon Dec 17 20:46:47 2018 +0530", change: "Added Page Routing" },
			{ time: "Mon Dec 17 22:35:35 2018 +0530", change: "Button Animations and Effects" },
			{ time: "Mon Dec 17 22:40:18 2018 +0530", change: "Button Design Changes" },
			{ time: "Tue Dec 18 00:43:20 2018 +0530", change: "Added toast Notifications" },
			{ time: "12/19/2018, 11:57:16 PM", change: "Added Changelogs and Changed timing format" },
			{ time: "12/20/2018, 1:59:30 AM", change: "Animation and Design changes in changelogs" },
			{ time: "12/20/2018, 2:08:38 AM", change: "Removed desription showing in timestamp" },
			{ time: "12/20/2018, 2:17:09 AM", change: "Changed progress bar color" },
			{ time: "12/22/2018, 9:36:41 PM", change: "Added Status Bar at Bottom" },
			{ time: "12/23/2018, 2:59:01 PM", change: "Updated Home page" },
			{ time: "12/23/2018, 3:16:10 PM", change: "Added title divider" },
			{ time: "12/23/2018, 5:44:42 PM", change: "Status Bar Modifications" },
			{ time: "12/23/2018, 9:06:25 PM", change: "Home page complete" },
			{ time: "12/25/2018, 2:43:45 PM", change: "Proper Functioning of tabs on menu" },
			{ time: "12/25/2018, 4:54:53 PM", change: "Sign-in Modal damn!" },
			{ time: "12/25/2018, 5:43:37 PM", change: "Completed popular apps" },
		]
	};

	currentState = this.state.changes.reverse();

	render() {
		return (
			<div className="page">
				<div className="col-md-6 pb-5 mb-5">
					<h3 className="pt-3 mb-5 pl-2">Changelogs</h3>
					{this.currentState.map((item,index) => (
						<div className={`m-2 d-flex ${index===0 ? 'latest-change' : ' p-3 changelog-card'}`}>
							<div className="flex-grow-1">
								<div className="time muted"><strong>{item.time} {index===0 ? '• LATEST' : null}</strong></div>
								<div className="change">{item.change}</div>
							</div>
							<div className="align-items-stretch align-self-center muted">
								<i className="far fa-clock change p-2"></i>
								{index!==0 ? this.state.changes.length - index : null}
							</div>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default Changelog;
