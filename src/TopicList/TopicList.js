import React from 'react';

import Topic from "./Topic"

class TopicList extends React.Component{
	state = {
		topics: [{
			text: "국가행사",
			link: 1
		},{
			text: "정부정책",
			link: 1
		},{
			text: "사회/IT과학",
			link: 1
		},{
			text: "IT과학 분야 정치인 발언",
			link: 1
		},{
			text: "국제/환경",
			link: 1
		},{
			text: "사회/경제",
			link: 1
		}]
	}

	render() {
		const topics = this.state.topics.map((item) => {
            return (
                <Topic link={item.link} text={item.text}/>
            );
        });

		return(<div>
			{topics}
		</div>)
	}

}

export default TopicList;