import React from 'react';

import "./Intro.scss"

import note from "./notepaper.png";
import texture from "./corkboard.jpg"

import logo from "../Logo.png"

class Intro extends React.Component{
	PlayTutorial = () =>{
		this.props.history.push("/tutorial")
	}

	PlayGame = () =>{
		this.props.history.push("/topics")
	}

	gameGuide = () =>{
		this.props.history.push("/help")
	}

	render() {
		return(<div id="intro" >
			<div id="title">
				<img src={logo}/>
			</div>
			<div id="introtext">202x년 10월... 여러분은 가짜뉴스가 창궐한 시대에 살고 있습니다.<br/>
			국가의 모든 부분이 마비되고 왜곡되어 오직 시민탐정만이 이 상황을 해결할 수 있습니다.<br/> 
			이에 당신에게 팩트체커로서의 활동을 명합니다.</div>

			<div id="board" style={{backgroundImage: `url(${texture})`, backgroundSize: "cover", backgroundColor:"rgba(0,0,0,0.7)", backgroundBlendMode:"multiply"}}>
				<img id="intro-image" alt="팩트체크의 기본 원리: 1. 정보를 있는 그대로 받아들이지 않는다. 2. 정보 표면을 둘러싼 내용들을 의심해본다.
						1) 정보의 출처를 확인한다.
						2) 저자를 확인해본다.
						3) 언제, 어디서 만들어진 것인지 알아본다.
						4) 다른 정보를 추가적으로 찾아본다." src={note}></img>

				<div id="buttons">
					<button onClick={() => this.PlayGame()}>게임 시작하기</button>
					{/* <button onClick={() => this.PlayTutorial()}>튜토리얼 진행하기</button> */}
					<button onClick={() => this.gameGuide()}>도움말</button>
				</div>
			</div>
			{/* <footer>© SNU 팩트체크센터</footer> */}
		</div>)
	}
}

export default Intro;