import React from 'react';
import { withRouter } from 'react-router-dom';

class Topic extends React.Component{
	moveToTopic = (link) =>{
		this.props.history.push("/topic/"+link);
	}

	render(){
		return(
			<div className="topic-preview" onClick={()=>this.moveToTopic(this.props.link)} style={{backgroundImage: `url(${this.props.image})`, backgroundSize:"cover"}}>
				<div className="topic-overlay">
					<div className="topic-text">{this.props.text}</div>
				</div>
			</div>
		)
	}
}

export default withRouter(Topic)