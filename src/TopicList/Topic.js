import React from 'react';

class Topic extends React.Component{
	moveToTopic = (link) =>{
		this.props.history.push("/"+link);
	}

	render(){
		return(
			<div className="topicPreview" onClick={this.moveToTopic(this.props.link)}>
				<div className="topic-text">{this.props.text}</div>
			</div>
		)
	}
}

export default Topic