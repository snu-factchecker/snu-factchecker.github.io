import React from 'react';

import Topic from "./Topic"
import "./Topic.scss"

import img1 from "../QuizPage/quiz1_img.png";
import img2 from "../QuizPage/quiz2_img.png";
import img3 from "../QuizPage/quiz3_img.png";
import img4 from "../QuizPage/quiz4_img.png";
import img5 from "../QuizPage/quiz5_img.png";
import img6 from "../QuizPage/quiz6_img.png";


class TopicList extends React.Component{
	state = {
		topics: [{
			text: "1. 국가행사",
			link: 1,
			image: img1,
		},
		{
			text: "2. 국가정책",
			link: 2,
			image: img2,
		},
		{
			text: "3. 사회/IT과학",
			link: 3,
			image: img3,
		},{
			text: "4. IT과학 분야 정치인 발언",
			link: 4,
			image: img4,
		},{
			text: "5. 사회/경제",
			link: 5,
			image: img5,
		},{
			text: "6. 국제/환경",
			link: 6,
			image: img6,
		}]
	}

	render() {
		const topics = this.state.topics.map((item) => {
            return (
				<Topic link={item.link} text={item.text} key={item.link} image={item.image}/>
            );
        });

		return(<div id="topic">
			<div>총 여섯 개 주제에 대한 팩트체크 게임을 시작합니다. <br/>
			1부터 6까지 순서대로 클릭해 플레이하세요. 모두 완료 후 설문에 응해주시면 게임 플레이가 완료됩니다.</div>
			<div id="topic-list">
				{topics}
			</div>
		</div>)
	}

}

export default TopicList;