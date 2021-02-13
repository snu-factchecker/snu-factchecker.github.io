import React from 'react';

import GaugeChart from 'react-gauge-chart'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch
} from "@fortawesome/free-solid-svg-icons";


import quiz1 from "./quiz1_img.png"

import "./QuizPage.scss"

import Clue from "../NewsArticle/Clue";

class QuizPage2 extends React.Component{
	state = {
		currentStep : 0,
		cluesCollected: [],
		keywordsCollected:[],
		factScore: 0,
		factScoreChanged:false,
		tipList: [],

		searchTerm: "찾은 키워드를 클릭하여 검색해보기",
		searchResult: [],

		visibility: [false, false, false],
	}

	proceedStep = () =>{
		this.setState({currentStep : this.state.currentStep+1});
	}

	revertStep = () =>{
		this.setState({currentStep : this.state.currentStep-1});
	}

	returnToTopics = ()=>{
		this.props.history.push("/topics")
	}


	formatGaugeValue = (value) => {
		if (!this.state.factScoreChanged){
			return "단서를 찾아 보세요."
		}
		if (value > 75){
			return "사실"
		} else if (value > 50){
			return "대체로 사실"
		} else if (value > 25){
			return "대체로 사실 아님"
		} else{
			return "전혀 사실 아님"
		}
	}

	onClickClue = (clueText)=>{
		let temp = this.state.cluesCollected;

		for (let i = 0; i<temp.length; i++){
			if (temp[i] === clueText){
				return;
			}
		}
		temp.push(clueText)
		this.setState({cluesCollected: temp});
	}

	// onClickClue = (offset)=>{

		
	// 	this.setState({factScore: this.state.factScore+offset})
	// }


	onClickKeyword = (keywordText) =>{
		let temp = this.state.keywordsCollected;

		for (let i = 0; i<temp.length; i++){
			if (temp[i] === keywordText){
				return;
			}
		}
		temp.push(keywordText)
		this.setState({keywordsCollected: temp});
	}

	searchKeyword = (keywordText) =>{
		if (this.state.currentStep === 1){
			this.setState({searchTerm: keywordText});
			this.setState({displayResult: true});
		}
	}

	displayResult = (index) =>{
		let vis = this.state.visibility;
		vis[index] = !vis[index];

		this.setState({visibility: vis});
	}

	clamp = (val, min, max) => {
		return val > max ? max : val < min ? min : val;
	}

	setFactScore = (offset) =>{
		let value = this.clamp(this.state.factScore+offset, -50, 50);

		this.setState({factScore: value, factScoreChanged:true})
	}

	render(){
		const keywords= this.state.keywordsCollected.map((item)=>{
			return <div key={item} onClick={()=> this.searchKeyword(item)} className="keyword">{item}</div>
		})

		const clues = this.state.cluesCollected.map((item)=>{
			return <div key={item}>{item}</div>
		})


		const results = (<div id="searchresults">
			<strong>카페 검색 결과</strong>

			<div className="search-result noimage">
				<div>
					<div className="item-title">일본은 마스크 무료로 40매준다는데</div>
					<div className="item-preview">일본 정부가 광역자치단체 중 우한 코로나(코로나19) 감염자 수가 가장 많은 훗카이도 주민… 이에 따라 대상 지역 내 주민들은 가구당 약 40매의 마스크를 무료로 공급받을 예정이다.</div>
					<div className="sourceBox">
						<Clue innerText="♬~광교맘 모여라 |" tooltip="카페 글에서는 기정사실처럼 이야기하고 있어" className="item-source" onClick={()=>{
							this.onClickClue("신뢰할 수 없는 출처의 동의 의견");
						}}></Clue>
						<div className="item-date">2020.03.08</div>
					</div>
				</div>
			</div>

			<div className="search-result noimage">
				<div>
					<div className="item-title">속보) 정부가 가구당 마스크40매 지원!!</div>
					<div className="item-preview">은 일본 이야기야ㅋㅋㅋㅋㅋ 전라도 대통령이 한국 국민에게 그럴리 없자너ㅋㅋ. 아ㅋㅋㅋㅋ</div>
					<div className="sourceBox">
						<Clue innerText="던파카페 -던전앤파이터 커뮤니티 |" tooltip="카페 글에서는 기정사실처럼 이야기하고 있어" className="item-source" onClick={()=>{
							this.onClickClue("신뢰할 수 없는 출처의 동의 의견");
						}}></Clue>
						<div className="item-date">2020.03.08</div>
					</div>
				</div>
			</div>

			<div className="search-result noimage">
				<div>
					<div className="item-title">한국은 ‘마스크 대란’인데… 日, 가구당 ＇마스크 40매＇ 무료 지급...</div>
					<div className="item-preview">한국은 ‘마스크 대란’인데… 日, 가구당 ＇마스크 40매＇ 무료 지급 http://me2.do/GFfkG6eT 참 국격이 다르니 이렇게도 비교 되네요.</div>
					<div className="sourceBox">
						<Clue innerText="부동산 스터디 |" tooltip="카페 글에서는 기정사실처럼 이야기하고 있어" className="item-source" onClick={()=>{
							this.onClickClue("신뢰할 수 없는 출처의 동의 의견");
						}}></Clue>
						<div className="item-date">2020.03.07</div>
					</div>
				</div>
			</div>

			<strong>뉴스 검색 결과</strong>

			<div className="search-result noimage">
				<div>
					<div className="item-title" onClick={()=>{
						this.displayResult(0)
						}}><Clue innerText="[팩트체크] " tooltip="팩트체크하는 기사가 먼저 뜬다면, 뭔가 잘못된 내용이 있다는 거네."  onClick={()=>{
						this.onClickClue("팩트체크 기사 존재")
						this.setFactScore(-20);
						}}></Clue>일본은 40장씩 마스크 무료 배포? 직접 확인해보니</div>
					<div className="item-preview">제목을 보시면 한국은 마스크 대란인데, 일본은 가구당 마스크 40매 무료 지급이라는 제목입니다. 기사에는 일본 내 마스크 부족 현상, 이 배경에 대한 설명은 없었고 대신 약국 앞에 줄을 선 우리나라 모습을 사진으로...</div>
					<div className="sourceBox">
						<div className="item-source">JTBC 언론사 선정 |</div>
						<div className="item-date">2020.03.09</div>
						
					</div>
					<div className={`item-content ${this.state.visibility[0]?"":"invisible"}`}>
						<p>결론부터 말씀드리면 사실이 아닙니다.</p><p>일본 후생노동성의 지난 4일 자 발표 자료 원문을 보시겠습니다.</p><p>마스크 무료 배포 대상이 일본 전체가 아닙니다.</p><p><Clue innerText="코로나19 문제가 심각한 홋카이도 지방 그중에서도 감염이 집중된 2개 지역에만 가구당 40장씩 우선 배포하는 이런 계획입니다." tooltip="내용을 읽어보니 특정 지역에 마스크를 공급하는 것인데 제목은 전국민 지급처럼 해놓았구나." onClick={()=>{
						this.onClickClue("오해의 소지가 있는 제목 선정")
						this.setFactScore(-20)}}></Clue></p><p>해당하는 가구 수는 합쳐서 6만 3000여 가구, 인구로는 12만 명이 좀 넘습니다.</p><p>서울로 치면 중구 정도 되는 규모입니다.
						</p><p>지난 5일에 첫 배송이 시작됐는데, 일본 언론 보도에 따르면 그나마도 원래 계획 40장 중에 7장씩만 먼저 지급이 됐습니다.</p><p>
						그러니까 정리하면 일본 전역이 대상이 아니라 지역사회 전파 우려가 큰 두 지역에 한해서 한시적으로 적용되는 내용입니다.
						</p><p>
						굳이 정확한 비교를 하자면 이런 조치는 이미 우리 대구시도 시작을 했고요. 계속 진행 중입니다.
						</p><p>
						대구시는 지난달 26일부터 오늘까지 총 645만 장을 무료 배포한 상태입니다.
						</p><p>
						이건 전국에서 모든 사람이 일상적으로 마스크를 살 수 있도록 한 5부제와는 구분되는 일종의 특별공급조치입니다.
						</p><p>
						일본도 내일쯤 일상적인 구매 방법을 담은 조치를 발표할 예정입니다.</p>
					</div>
				</div>
			</div>
		</div>)

		return(<div id="quiz">
			{this.state.currentStep === 0?
			(<div id="quiz-header">
				
				<div id="header-title">Step 1: 온라인상의 정보 의심하기</div>
				<div id="tip-box"><div id="tip-title">허위정보 분별하기 팁</div>
				<div id="tip-content">
					첫째, 있는 그대로 받아들이지 않는다.<br/>
					둘째, 의심스러운 부분이 있는지 검토한다.</div>
				</div>
			</div>):(<div id="quiz-header">
				
				<div id="header-title">Step 2: 단서를 기반으로 정보 확인하기</div>
				<div id="tip-box"><div id="tip-title">허위정보 분별하기 팁</div>
				<div id="tip-content">
					첫째, 해당 사진들에 대한 사실여부를 검토해본다.<br/>
					둘째, 간접정보보다는 직접정보를 찾아볼 수 있도록 한다.</div>
				</div>
			</div>)
			}
			{this.state.currentStep === 0?
			(<div className="quizContent">
			<div id="quizitem-title">가구당 '마스크 40매' 무료 지급 ㄷㄷㄷㄷ ㄷㄷㄷ</div>
			<div id="quizitem-author"><Clue innerText="ㅃㅃ (211. 229)" tooltip="누군지 알 수 없는 오픈 커뮤니티 이용자의 글? " onClick={() => this.onClickClue("신뢰할 수 없는 작성자")}/></div>
			<img id="quizitem-image" src="http://image.newdaily.co.kr/site/data/img/2020/03/07/2020030700024_0.jpg"></img>
			<Clue innerText="▲ 6일 오전 인천시 남동구의 한 약국에서 시민들이 2매만 구입 가능한 공적 마스크를 사기위해 줄을 서고 있다. ⓒ뉴시스" tooltip="일본의 상황을 설명하는 기사인데 한국의 모습을 근거자료로 설명?" onClick={() => this.onClickClue("기사의 내용과 일치하지 않는 이미지")}></Clue>
			<div id="quizitem-content">
				<div><Clue innerText="한국은 ‘마스크 대란’인데… 日, 가구당 '마스크 40매' 무료 지급" tooltip="일본의 마스크 수급 정책에 대한 내용이야." onClick={() => this.onClickKeyword("일본 마스크 40매")}/></div>
				<div>일본 정부, 지난해 예비비 252억원 지출해 400만장 확보… 훗카이도 우선 지역에 무료 배포</div>
				<div>박아름 기자  입력 2020-03-07</div>
				<div><Clue innerText={`"3~4시간 줄서 2장 샀다"… 서울시민의 '개탄'`} tooltip="관련자료 없이 한쪽의 입장을 대변하는 자극적인 헤드라인?" onClick={() => this.onClickClue("자극적인 헤드라인")}/></div>				
				<div>출처: DC인사이드 정치, 사회 갤러리</div>
			</div>
		</div>)
			:this.state.currentStep === 1?(<div id="searchpage">
				<div id="searchOverlay">
					<div id="searchpopUp"></div>
				</div>
				<div id="searchbox">
					<div id="input">{this.state.searchTerm}</div>
					<FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
				</div>
				{this.state.displayResult?results:(<div/>)}
			</div>):(null)}
			
			{this.state.currentStep <2 ?(<div className="left">
			<div id="factmeter">
					<div id="labels"><div style={{color: "red"}}>거짓</div><div style={{color: "#009a00"}}>사실</div></div>
					<GaugeChart id="gauge" percent={(this.state.factScore + 50) / 100} hideText={true} nrOfLevels={2} colors={["#FF0000","#009a00"]}/>
					<div>{this.formatGaugeValue(this.state.factScore+50)}</div>
					<div>총 단서 6개 중 {this.state.cluesCollected.length}개를 찾았습니다.</div>
				</div>
				<div id="notebook">
					<div id="title">탐사 노트</div>
					<div id="characteristics" className="values">
						<div id="char-title" className="notebook-title">정보의 특징</div>
						<div>{clues}</div>
					</div>
					<div id="keywords" className="values">
						<div id="keyword-title" className="notebook-title">키워드</div>
						<div>{keywords}</div>
					</div>
				</div>
			</div>):(null)
			}
			
			<div id="buttons">
				{this.state.currentStep > 0?(<button id="prev-button" onClick={()=>this.revertStep()}>이전 단계</button>):(<div/>)}
				{this.state.currentStep === 2?<button id="next-button" disabled={!this.state.factScoreChanged} onClick={()=>this.returnToTopics()}>완료</button>:(<div/>)}
				{this.state.currentStep < 2?<button id="next-button" disabled={!this.state.factScoreChanged && this.state.currentStep===1} onClick={()=>this.proceedStep()}>다음 단계</button>:(<div/>)}
			</div>
			{this.state.currentStep === 2?(<div id="quiz-result">
				<div id="result">
					해당 정보는	
					<ol>
						<li>전국이 아니라 코로나19가 심각한 소규모 지역 2곳에 나눠주는 것이고</li>
						<li>40매는 지급된 양이 아니라 지급할 계획이며, 현재 7매씩만 지급(추후 공급 예측 불가)</li>
						<li>일본 역시 전국적으로 마스크가 부족한 상황</li>
					</ol>
					따라서 <span id="spec">전혀 사실이 아님!</span>
				</div>

				<div id="myresults">
					<div id="resp">
						<div className="notebook-title">나의 결과</div>
						<div id="myresponse">{this.formatGaugeValue(this.state.factScore+50)}</div>
		<div id="resultcheck">{this.formatGaugeValue(this.state.factScore+50)==="전혀 사실 아님"?(<div>정답과 일치합니다. <br/>성공적으로 팩트체크를 진행하셨습니다.</div>):(<div>결과가 일치하지 않습니다.<br/>단서를 더 찾고 싶다면 이전 단계로 돌아가서 찾아보세요.</div>)}</div>
					</div>
					<div>
						<div className="notebook-title">내가 찾은 단서들</div>
						<div className="notebook-content">{clues}</div>
					</div>
				</div>
				<div id="clueCount">총 6개의 단서 중 <span id="spec">{clues.length}</span>개의 단서를 찾았습니다.</div>
				<div>
					본 퀴즈 내용에 대한 상세한 팩트체크 내용은 
					SNU팩트체크센터 홈페이지 다음 링크에 있습니다.<br></br>
					<a href="https://factcheck.snu.ac.kr/v2/facts/2126 
">https://factcheck.snu.ac.kr/v2/facts/2126 </a>
				</div>

			</div>):(<div>

			</div>)}
		</div>)
	}	
}

export default QuizPage2