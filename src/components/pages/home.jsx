import React, { Component } from "react";

import HugeCard from "../hugeCard";
import BigCard from "../bigCard";
import EmphasizedList from "../EmphasizedList";
import TitleDivider from "../titleDivider";

import Ethereum from "../../assets/ethereum.png";
import Deploy from "../../assets/deploy.png";
import List from "../../assets/list.svg";
import Use from "../../assets/tag.png";

class Home extends Component {
	render() {
		return (
			<div className="my-auto page pl-3 pr-3">
				<div className="home-header pb-5">
					<HugeCard
						image={Ethereum}
						title={"JIFFY"}
						subtitle={"Prototype And Review Smart Contracts"}
						description={
							"Fastest way to create, deploy and manage dApps on the web"
						}
					/>
				</div>
				<div className="home-actions pb-5">
					<TitleDivider title={"Jump Right In"} />
					<div className="row m-0 p-0 flex-nowrap">
						<BigCard
							image={Deploy}
							title={"DEPLOY"}
							description={
								"Deploy Your Contract to any network using Remix, Truffle or Clevis"
							}
						/>
						<BigCard
							image={List}
							title={"CUSTOMIZE"}
							description={
								"Enter Your ABI, network and select your customizations"
							}
						/>
						<BigCard
							image={Use}
							title={"USE LABELS"}
							description={
								"Use and share your dApps/Labels at a Custom URL"
							}
						/>
					</div>
				</div>
				<div className="home-popular">
					<TitleDivider
						title={"Most Popular dApps On The Planet!"}
						more={"SEE ALL"}
					/>
					<EmphasizedList n={9} />
				</div>
			</div>
		);
	}
}

export default Home;
