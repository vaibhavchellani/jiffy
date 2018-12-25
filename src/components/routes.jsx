import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/home";
import Popular from "./pages/popular";
import FourOfour from "./pages/fourofour";
import Settings from "./pages/settings";
import Changelog from "./pages/changelog";

class Routes extends Component {
	render() {
		return (
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/popular" component={Popular} exact />
				<Route path="/settings" component={Settings} exact />
				<Route path="/changelog" component={Changelog} exact />
				<Route component={FourOfour} exact />
			</Switch>
		);
	}
}

export default Routes;
