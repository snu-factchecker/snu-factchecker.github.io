import React from 'react';
import { withRouter } from 'react-router-dom';

class Topic extends React.Component{
	moveToTopic = (link) =>{
		this.props.history.push("/"+link);
	}

	render(){
		return(
			<div className="topic-preview" onClick={()=>this.moveToTopic(this.props.link)}>
				<div className="topic-text">{this.props.text}</div>
			</div>
		)
	}
}

export default withRouter(Topic)