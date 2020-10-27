import React from 'react';

import "./Clue.scss"

class Clue extends React.Component{
	saveClue = () => {}

	render(){
		return(<div className="clue" id={this.props.id} onClick={this.props.onClick}>
			<div className="clue-text">{this.props.innerText}</div>
			<div className="clue-tooltip">{this.props.tooltip}</div>
		</div>)
	}
}

export default Clue