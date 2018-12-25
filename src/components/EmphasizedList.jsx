import React, { Component } from "react";

class EmphasizedListItem extends Component {
	state = {};
	render() {
		return (
			<div className="col-sm-4 p-3">
				<div className="d-flex">
					<div className="emph-icon mr-3" />
					<div className="emph-details d-flex flex-column">
						<div className="emph-name">This is a Blockchain dApp</div>
						<div className="emph-network flex-grow-1 muted">Network</div>
						<div className="btn btn-sm btn-light emph-btn m-0 p-0">USE</div>
					</div>
				</div>
			</div>
		);
	}
}

class EmphasizedList extends Component {
	state = {};
	render() {
		return (
			<div className="row m-0 p-0 pb-5 mb-5">
				{[...Array(this.props.n)].map((item, index) => {
					return <EmphasizedListItem key={index} />;
				})}
			</div>
		);
	}
}

export default EmphasizedList;
