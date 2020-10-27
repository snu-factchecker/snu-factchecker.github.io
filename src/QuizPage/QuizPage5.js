import React from 'react';

import GaugeChart from 'react-gauge-chart'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch
} from "@fortawesome/free-solid-svg-icons";


import quiz1 from "./quiz1_img.png"

import "./QuizPage.scss"

import Clue from "../NewsArticle/Clue";

class QuizPage5 extends React.Component{
	state = {
		currentStep : 0,
		cluesCollected: [],
		keywordsCollected:[],
		factScore: 0,
		factScoreChanged:false,
		tipList: [],

		searchTerm: "찾은 키워드를 클릭하여 검색해보기",
		searchResult: [],

		currentLink: {},
		searchResultDB: {"무선이어폰 전자파 실험": [{
			previewText: "일본 정부가 광역자치단체 중 우한 코로나(코로나19) 감염자 수가 가장 많은 훗카이도 주민… 이에 따라 대상 지역 내 주민들은 가구당 약 40매의 마스크를 무료로 공급받을 예정이다.",
			title:"일본은 마스크 무료로 40매준다는데 ",
			source: "♬~광교맘 모여라 ",
			uploadDate:"2020.03.08",
			key:1
		},
		{
			previewText: "한국은 ‘마스크 대란’인데… 日, 가구당 ＇마스크 40매＇ 무료 지급 http://me2.do/GFfkG6eT 참 국격이 다르니 이렇게도 비교 되네요.",
			title:"한국은 ‘마스크 대란’인데… 日, 가구당 ＇마스크 40매＇ 무료 지급...",
			source: "부동산 스터디",
			uploadDate:"2020.03.07",
			key:2
		},
		{
			previewText: "은 일본 이야기야ㅋㅋㅋㅋㅋ 전라도 대통령이 한국 국민에게 그럴리 없자너ㅋㅋ. 아ㅋㅋㅋㅋ",
			mainText:"",
			title:"속보) 정부가 가구당 마스크40매 지원!! ",
			source: "던파카페 -던전앤파이터 커뮤니티",
			uploadDate:"2020.03.08",
			key:3
		},
		{
			title:"[팩트체크] 일본은 40장씩 마스크 무료 배포? 직접 확인해보니",
			previewText: "제목을 보시면 한국은 마스크 대란인데, 일본은 가구당 마스크 40매 무료 지급이라는 제목입니다. 기사에는 일본 내 마스크 부족 현상, 이 배경에 대한 설명은 없었고 대신 약국 앞에 줄을 선 우리나라 모습을 사진으로...",
			mainText:"",
			source: "JTBC 언론사 선정",
			uploadDate:"2020.03.09",
			key:4
		},
		{
			title:"[노컷체크]일본은 마스크 40장씩 무료로 나눠준다? ",
			previewText: "코로나19로 '마스크 대란'이 이어지는 가운데 일본은 가구당 마스크 40매를 무료로 지급한다는 소식이 전해졌다. 주말 새 대중의 분노를 자극한 이 기사는 그러나 일부 지역에 한해 7장 배포 사실을 부풀린 '가짜뉴스'로...",
			mainText:"",
			source: "노컷뉴스 언론사 선정",
			uploadDate:"2020.03.10",
			key:5
		},
		{
			title:"'마스크 5부제' 비판에 일본 '가짜' 사례까지 등장",
			previewText: "해당 보도로 지난 주말 사이 온라인 커뮤니티 등지에서는 한국 정부의 마스크 5부제와 일본 정부의 마스크 40매 무료 지급을 비교하며 정부를 비판하는 게시글들이 잇따라 게재됐다. 하지만 해당 보도는 JTBC, 노컷뉴스...",
			mainText:"",
			source: "미디어스",
			uploadDate:"2020.03.12",
			key:6
		}
	]}
	}

	proceedStep = () =>{
		this.setState({currentStep : this.state.currentStep+1});
	}

	revertStep = () =>{
		this.setState({currentStep : this.state.currentStep-1});
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
			this.setState({searchTerm: keywordText, searchResult: this.state.searchResultDB[keywordText]});
		}
	}

	displayResult = () =>{

	}

	render(){
		const keywords= this.state.keywordsCollected.map((item)=>{
			return <div key={item} onClick={()=> this.searchKeyword(item)} className="keyword">{item}</div>
		})

		const clues = this.state.cluesCollected.map((item)=>{
			return <div key={item}>{item}</div>
		})

		const searchresults = this.state.searchResult.map((item)=>{
			return <div key={item.key} className="search-result" onClick={()=>this.displayResult(item.key)}>
				<img className="item-image" src={item.image} alt="search result"></img>
				<div>
					<div  className="item-title">{item.title}</div>
					<div  className="item-preview">{item.previewText}</div>
					<div className="sourceBox">
						<div className="item-source">{item.source} |</div>
						<div className="item-date">{item.uploadDate}</div>
					</div>
				</div>
			</div>
		})

		// console.log(keywords)

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
			(<div className="quizContent" id="quiz1">
				<div id="quizitem-title">(현장취재) 한국당 유튜브 노란딱지 전문가 간담회! / 신의한수 19.10.24</div>
				<div id="quizitem-author">신의한수</div>
				
				<div id="quizitem-content">
					<Clue innerText="나경원 의원 발언" tooltip="나경원이란 사람이 말한 걸 모두 믿을만 할까? 이 사람이 유튜브 전문가인가?"/> 발췌: <Clue innerText={`"구글의 노란딱지가 우파 유튜버를 위축`} tooltip="이 표현은 우파 유튜버의 입장에서 이야기한거네? 이 사람은 우파 유튜버 입장이구나." onClick={() => this.onClickKeyword("유튜버 노란딱지")}/>하게 하는 부분이 있다고 생각한다. <Clue innerText="인위적인 무엇이 개입할 수 있다는 의심을" tooltip="이건 단순한 의심아닌가. 근거가 있는 말이 아닌데?" onClick={() => this.onClickClue("근거 없는 의심에 기반한 발언")}/> 지울 수 없다" <br/>
					‘우파 유튜버들도 <Clue innerText="이미 블랙리스트가 있는 것 아닌가’" tooltip="블랙리스트가 있을 것 같다는건 이 사람 개인의 생각 같은데…" onClick={() => this.onClickClue("근거 없는 의심에 기반한 발언")}/> 하는 생각한다"
			
					<div>출처: 신의한수 유튜브 채널</div>
				</div>
			</div>)
			:(<div id="searchpage">
				<div id="searchbox">
					<div id="input">{this.state.searchTerm}</div>
					<FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
				</div>

				<div id="searchresults">
					{searchresults}
				</div>
			</div>)}
			
			<div className="left">
				<div id="factmeter">
					<GaugeChart id="gauge" percent={this.state.factScore + 50 / 100} hideText={true} nrOfLevels={2} colors={["#FF0000","#00FF00"]}/>
					<div>{this.formatGaugeValue(this.state.factScore+50)}</div>
				</div>
				<div id="notebook">
					<div id="characteristics" className="values">
						<div id="char-title" className="notebook-title">정보의 특징</div>
						<div>{clues}</div>
					</div>
					<div id="keywords" className="values">
						<div id="keyword-title" className="notebook-title">키워드</div>
						<div>{keywords}</div>
					</div>
				</div>
			</div>
			
			<div id="buttons">
			{this.state.currentStep > 0?(<button id="prev-button" onClick={()=>this.revertStep()}>이전 단계</button>):(<div/>)}
			<button id="next-button" onClick={()=>this.proceedStep()}>다음 단계</button>
			</div>
		</div>)
	}	
}

export default QuizPage5