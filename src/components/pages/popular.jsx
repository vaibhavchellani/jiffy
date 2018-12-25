import React, { Component } from "react";

import EmphasizedList from "../EmphasizedList";
import TitleDivider from "../titleDivider";
import MediumCard from "../mediumCard";

import Kitty from "../../assets/cryptokitties.png";

class Forms extends Component {
	render() {
		return (
			<div className="my-auto page pl-3 pr-3">
				<div className="home-popular">
					<div className="popular-highlights pb-5">
						<TitleDivider title={"Highlights"} />
						<div className="row m-0 p-0 flex-nowrap">
							{[...Array(10)].map((item, index) => {
								return (
									<MediumCard
										key={index}
										image={Kitty}
										name={"Crypto Kitties"}
										network={"ROPSTEN"}
										time={"2 days"}
									/>
								);
							})}
						</div>
					</div>
					<TitleDivider title={"Most Popular dApps On The Planet!"}/>
					<EmphasizedList n={25} />
				</div>
			</div>
		);
	}
}

export default Forms;
