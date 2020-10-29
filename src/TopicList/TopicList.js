import React from 'react';

import Topic from "./Topic"
import "./Topic.scss"

class TopicList extends React.Component{
	state = {
		topics: [{
			text: "1. 국가행사",
			link: 1,
		},{
			text: "2. 사회/IT과학",
			link: 3
		},{
			text: "3. IT과학 분야 정치인 발언",
			link: 4
		},{
			text: "4. 국제/환경",
			link: 5
		},{
			text: "5. 사회/경제",
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
			<div>총 다섯개 주제에 대한 팩트체크 게임을 시작합니다. <br/>
			1부터 5까지 순서대로 클릭해 플레이하세요. 모두 완료 후 설문에 응해주시면 게임 플레이가 완료됩니다.</div>
			<div id="topic-list">
				{topics}
			</div>
		</div>)
	}

}

export default TopicList;