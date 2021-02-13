import React from 'react';

import "./Intro.scss"

import img1 from "./ref1.png";
import img2 from "./ref2.png";
import img3 from "./ref3.png";
class Help extends React.Component{
	PlayGame = () =>{
		this.props.history.push("/topics")
	}

	playTutorial = () =>{
		this.props.history.push("/tutorial")
	}


	render() {
		return(<div id="help">
			<div>팩트체커가 되어 여러 기사와 인터넷 게시글의 팩트 여부를 검증해 봅시다!</div>
			<strong>1. 데이터 관찰 단계</strong>
			<br/>
			<img src={img1}/>
			<div>주어진 자료에서 힌트 및 키워드를 찾습니다.</div>
			<div>분석에 유의미한 자료들에 마우스를 올리면 자료에 대한 분석이 나타나고, 이를 클릭하면 힌트 혹은 키워드를 얻을 수 있습니다.</div>
			<div>최대한 많은 키워드를 발견해 보세요!</div>
			<br/><br/>
			<strong>2. 데이터 검증 단계</strong>
			<br/>
			<img src={img2}/>
			<div>1단계에서 찾은 키워드를 클릭하여 검색해 봅니다.</div>
			<div>검색 결과로 나타난 자료들을 추가적으로 분석하여 힌트를 더 얻고, 정보의 정확성을 판단합니다.</div>
			<br/><br/>
			<strong>팩트체크 팁!</strong>
			<br/>
			<img src={img3}/>
			<div>페이지 상단에 있는 팁을 유심히 읽어 보세요.</div>

			<button onClick={() => this.playTutorial()}>튜토리얼 진행하기</button>
			<button onClick={() => this.PlayGame()}>게임 시작하기</button>

		</div>)
	}
}

export default Help;