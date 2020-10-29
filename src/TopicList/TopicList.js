import React from 'react';

import Topic from "./Topic"
import "./Topic.scss"

class TopicList extends React.Component{
	state = {
		topics: [{
			text: "국가행사",
			link: 1,
		},{
			text: "사회/IT과학",
			link: 3
		},{
			text: "IT과학 분야 정치인 발언",
			link: 4
		},{
			text: "국제/환경",
			link: 5
		},{
			text: "사회/경제",
			link: 6
		}]
	}

	render() {
		const topics = this.state.topics.map((item) => {
            return (
				<Topic link={item.link} text={item.text} key={item.link}/>
            );
        });

		return(<div id="topic">
			<div>팩트체크를 진행할 주제를 골라 주세요.</div>
			<div id="topic-list">
				{topics}
			</div>
		</div>)
	}

}

export default TopicList;