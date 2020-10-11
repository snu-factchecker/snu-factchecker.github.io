import React from 'react';

class Clue extends React.Component{
	saveClue = () => {}

	render(){
		return(<div className="clue" id={this.props.clueId} onClick={this.saveClue}>
			{this.props.innerText}
		</div>)
	}
}

export default Clue