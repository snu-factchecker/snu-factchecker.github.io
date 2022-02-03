import React from 'react';
import { withRouter } from 'react-router-dom';

import stamp from "../stamp.png";

class Topic extends React.Component{
	moveToTopic = (link) =>{
		this.props.history.push("/topic/"+link);
	}

	render(){
		return(
			<div className="topic-preview" onClick={()=>this.moveToTopic(this.props.link)} >
				<div className="topic-img" style={{backgroundImage: `url(${this.props.image})`, backgroundSize:"cover"}}>
				</div>
				<div className="topic-text">
					<div>{this.props.text}</div>
					<div className="topic-aux">토픽: {this.props.topic}</div>
				</div>
				{this.props.cleared?
				<img src={stamp} alt="stamp" className="topic-stamp"/>:(null)}
			</div>
		)
	}
}

export default withRouter(Topic)