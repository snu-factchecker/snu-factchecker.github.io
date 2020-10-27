import React from 'react';

import Clue from "./../Clue";

class Quiz1 extends React.Component{
	render(){
		return(<div className="quizItem">
			<div id="quizitem-title">[일반] 문재인 등 8.15 행사에서 노마스크</div>
			<div id="quizitem-author">101세형 (181.70)</div>
			<Clue id="source" tooltip="신뢰하기 쉽지 않은 커뮤니티 게시글이네?" innerText="DC인사이드 우한 마이너 갤러리" />
		</div>)
	}
}

export default Quiz1;