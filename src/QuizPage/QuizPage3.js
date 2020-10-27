import React from 'react';

import GaugeChart from 'react-gauge-chart'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch
} from "@fortawesome/free-solid-svg-icons";


import quiz1 from "./quiz1_img.png"

import "./QuizPage.scss"

import Clue from "../NewsArticle/Clue";

class QuizPage3 extends React.Component{
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
				<div id="quizitem-title">형님들 무선이어폰 건강에 괜찮나요?</div>
				<div id="quizitem-author">터보알바</div>
				
				<Clue tooltip="일본의 상황을 설명하는 기사인데 한국의 모습을 근거자료로 설명?" onClick={() => this.onClickClue("기사의 내용과 일치하지 않는 이미지")}><img id="quizitem-image" src={quiz1} alt="article supplement"/></Clue>
				<div id="quizitem-content">
				오늘 살려고 햇는데<br/>
 하필 무선이어폰 암유발한다는 기사봐가지고;;;<br/><br/>

 특히 뇌랑 가까이 사용되는거라 뇌에 손상준다는데<br/>
 많으면 8시간가까이 쓸일도 있을거같은데<br/>
 
 살지말지 고민됩니다 형님들
 <br/><br/>

 <div style={{border: "1px solid darkgrey", padding: "20px 30px"}}>전세계 과학자들이 애플 에어팟 등 무선 이어폰이 <Clue innerText="암 발생 위험을 키울 수 있다는" tooltip="암을 발생시킨다고 하는데 건강에 이렇게 위협을 준다는게 과연 사실일까?
 어떤 암을 어떻게? 구체적인 설명이 필요해!" onClick={() => this.onClickKeyword("무선이어폰 전자파 실험")}/>호소문을 유럽연합(UN)과 세계보건기구(WHO)에 제출했다. 전세계 40여개국 생물·건강 분야 과학자 250여명은 최근 "무선장치에서 발생하는 비이온화 전자기장(EMF)가 암 유발 가능성이 있다"며 심각한 우려(serious concern)를 표명했다.<br/>EMF는 전기장치 등에서 발생하는 '극저주파 전자기장'(ELF-EMF)와 블루투스, 와이파이, 안테나, 기지국 등에서 나오는 '고주파 방사선'(RFR)을 말한다. 과학자들은 "애플 에어팟 등 <Clue innerText={`무선 이어폰이 두뇌에 어떤 영향을 미치는지 아직 연구결과가 없다"`} tooltip="실험결과가 뒷받침 된다고 하진 않네.. " onClick={() => this.onClickClue("실험 등 근거 없음")}/>면서도 "RFR을 동물들에게 노출한 결과 생식적·신경적·유전적 손상이 나타난 것을 발견했다"고 설명했다.  에어팟은 EMF에 관한 법적 기준치를 준수하고 있다.<br/>하지만 과학자들은 EMF가 기준치보다 낮아도 암을 유발할 가능성은 있으며 낮은 수준의 EMF 노출이 장시간 이뤄질 경우 건강에 좋지 않은 영향을 미칠 수도 있음을 고려해야 한다고 주장한다.  특히 에어팟은 귓구멍 안에 깊게 들어가 두뇌가 RFR 노출 위험에 더욱 취약하다는 게 전문가들의 지적이다. 제리 필립스 콜로라도 대학 교수는 외신 미디엄과의 인터뷰에서 "에어팟은 외이도 안에 들어가 있어 상대적으로 높은 수준의 RFR이 머릿 속 피부 조직에 가까이 노출된다는 점이 걱정스럽다"고 설명했다. <br/>
이들은 <Clue innerText={`"EMF 기준을 강화하고 예방책을 마련해야 한다"며`} tooltip="그럼 지금까지 전세계적으로 팔린 무선 이어폰들이 기준치를 어겼는데도 출시된건가?" onClick={() => this.onClickClue("비현실적인 주장")}/> "또, WHO가 이용자들에게 EMF에 대한 교육을 충분히 하도록 지도해야 한다"고 주장했다.
</div>
					<div><Clue innerText={`"3~4시간 줄서 2장 샀다"… 서울시민의 '개탄'`} tooltip="관련자료 없이 한쪽의 입장을 대변하는 자극적인 헤드라인?" onClick={() => this.onClickClue("자극적인 헤드라인")}/></div>				
					<div>출처: 배틀그라운드 공식카페 - PLAYERUNKNOWN'S BATTLEGROUNDS 자유게시판</div>
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

export default QuizPage3