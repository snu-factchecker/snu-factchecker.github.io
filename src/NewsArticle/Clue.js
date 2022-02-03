import React from "react";

import "./Clue.scss";

class Clue extends React.Component {
	state = { x: 0, y: 0 };

	_onMouseMove(e) {
		this.setState({ x: e.screenX, y: e.screenY });
	}

	render() {
		return (
			<span
				className={`clue ${this.props.className}`}
				id={this.props.id}
				onClick={this.props.onClick}
				onMouseMove={this._onMouseMove.bind(this)}
			>
				<span className="clue-text">
					{this.props.innerText} {this.props.children}
				</span>
				<div
					className="clue-tooltip"
					style={{ top: this.state.y - 60, left: this.state.x - 40 }}
				>
					{this.props.tooltip}
				</div>
			</span>
		);
	}
}

export default Clue;
