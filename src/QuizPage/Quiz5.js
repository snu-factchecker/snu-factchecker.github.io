import React from 'react';

import GaugeChart from 'react-gauge-chart'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch
} from "@fortawesome/free-solid-svg-icons";


import quizimg from "./quiz5.png"

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
			<strong>
				뉴스 검색 결과
			</strong>

			<div className="search-result noimage">
				<div>
					<div className="item-title" onClick={()=>{
						this.displayResult(0)
						}}>'우울한' 한국의 노동절…산재사망률 EU의 5배, 네덜란드의 10배</div>
					<div className="item-preview">2014년 기준 한국 노동자 10만명당 10.8명…EU 평균 2.3명<br></br>
EU 최악 루마니아도 7.1명, 최저 네덜란드는 1.0명 수준</div>
					<div className="sourceBox">
						<div className="item-source">연합뉴스</div>
						<div className="item-date">2017.05.01</div>
					</div>
					<div className={`item-content ${this.state.visibility[0]?"":"invisible"}`}>
						<p>(브뤼셀=연합뉴스) 김병수 특파원 = 유럽연합(EU)의 산업재해 사망률이 한국의 5분의 1수준인 것으로 파악됐다.</p><p>

특히 EU에서 최악의 산재 사망률을 기록한 루마니아도 한국보다 낮았으며, 가장 낮은 네덜란드의 경우 한국의 10분의 1도 안 됐다.
</p><p>
EU의 공식 통계 기구인 유로스타트(Eurostat)가 1일 '노동절'을 맞아 발표한 2014년 기준 직장 안전 통계 자료에 따르면 EU 28개 회원국에서 지난 2014년 산재 사고로 사망한 사람은 모두 3천348명인 것으로 집계됐다.
</p><p>
유로스타트는 이는 환산하면 노동자 10만 명에 2.3명꼴로 사망한 것이라고 설명했다.
</p><p>
통계청에 따르면 지난 2014년 기준 <Clue innerText="한국의 노동자 10만 명에 산재 사망자는 10.8명으로, 경제협력개발기구(OECD) 회원국 가운데 1위였다." tooltip="다른 국가와 비교한 결과를 보면, 실제로 우리 나라의 산재 사망자 수가 많은 것을 알 수 있네." onClick={()=>{
							this.onClickClue("주장과 일치하는 국제 통계 비교자료");
							this.setFactScore(10);
						}}/>
</p><p>
한국의 산재 사망률이 EU 평균의 5배에 가까운 것이다.
						</p>
					</div>
				</div>
			</div>

			<strong>
				웹사이트
			</strong>
			
			<div className="search-result noimage">
				<div>
					<div className="item-title" onClick={()=>{
						this.displayResult(1)
						}}>2019 산업재해 발생현황</div>
					<div className="item-preview">2019년 산업재해 사고 및 재해 관련 통계</div>
					<div className="sourceBox">
						<Clue innerText="산업재해예방 안전보험공단 |" tooltip="통계 자료를 확인할 수 있는 공식 기관이야." className="item-source" onClick={()=>{
							this.onClickClue("공신력 있는 기관에서 발표한 통계 자료");
						}}></Clue>
						<div className="item-date">2020.04.27</div>
					</div>

					<div className={`item-content ${this.state.visibility[1]?"":"invisible"}`}>
						<p>○ <Clue innerText="사망만인율 및 사망자수" tooltip="통계자료는 존재하지만, 사망률, 사망자수, 재해율, 재해자 수를 보고 최악의 산재국가라고 바로 이야기할 수 있을까?" onClick={()=>{
							this.onClickClue("공신력 있는 기관에서 발표한 통계 자료");
						}}
/>  </p><p>
 
 ㅁ 사망만인율: 1.08 º/ooo(전년 동기 대비 0.04 º/ooop 감소)<br/>
   - 사고 사망만인율: 0.46 º/ooo(전년 동기 대비 0.05 º/ooop 감소)<br/>
   - 질병 사망만인율: 0.62 º/ooo(전년 동기 대비 0.01 º/ooop 증가)<br/>
   </p><p>
 ㅁ 사망자수: 2,020명(전년 동기 대비 122명(5.7%) 감소)<br/>
   - 사고 사망자수: 855명(전년 동기 대비 116명(11.9%) 감소)<br/>
   - 질병 사망자수: 1,165명(전년 동기 대비 6명(0.5%) 감소)<br/>

   </p><p>
○ 재해율 및 재해자수
</p><p>
 ㅁ 재해율: 0.58%(전년 동기 대비 0.04%p 증가)<br/>
   - 사고 재해율: 0.50%(전년 동기 대비 0.02%p 증가)<br/>
   - 질병 재해율: 0.08%(전년 동기 대비 0.02%p 증가)<br/>
   </p><p>
 ㅁ 재해자수: 109,242명(전년 동기 대비 6,937명(6.8%) 증가) <br/> 
   - 사고 재해자수: 94,047명(전년 동기 대비 3,215명(3.5%) 증가)<br/>
   - 질병 재해자수: 15,195명(전년 동기 대비 3,722명(32.4%) 증가) </p>
					</div>
				</div>
			</div>

			<div className="search-result noimage">
				<div>
					<div className="item-title" onClick={()=>{
						this.displayResult(2)
						}}>2009 OECD 국가의 산업재해 및 사회경제활동 지표 변화에 관한 비교연구</div>
					<div className="item-preview">자료명/저자사항 oecd국가의 산업재해 및 사회경제활동지표 변화에 관한 비교연구 / 김수근 [저] ; 한국산업안전보건공단 산업안전보건연구원 [편]; 발행사항 인천 : 한국산업안전보건공단 산업안전보건연구원, 2009; 청구기호 363.1163 -10-3 ; </div>
					<div className="sourceBox">
						<Clue innerText="한국산업 안전보험공단 |" tooltip="통계 자료를 확인할 수 있는 공식 기관이야." className="item-source" onClick={()=>{
							this.onClickClue("공신력 있는 기관에서 발표한 통계 자료");
						}}></Clue>
						<div className="item-date">2009.04.23</div>
					</div>

					<div className={`item-content ${this.state.visibility[2]?"":"invisible"}`}>
						<img src={quizimg} alt="supplementary"></img>
						<p><Clue innerText="국가별 사고사망 10만인율 현황" tooltip="2009년 자료이지만, 정말로 우리나라가 국가별 사고사망 10만인율(10만명당 사고사망 비율) 1위를 기록하고 있어" onClick={()=>{
							this.onClickClue("주장과 일치하는 연구 자료");
							this.setFactScore(10);
						}}
/>  </p>
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
					첫째, 해당 주장들에 대한 사실여부를 검토해본다.<br/>
					둘째, 간접정보보다는 직접정보를 찾아볼 수 있도록 한다.</div>
				</div>
			</div>)
			}
			{this.state.currentStep === 0?
			(<div className="quizContent" id="quiz1">
			<div id="quizitem-title">[보도자료] 심상정 대표·윤소하 원내대표·김종민 부대표·임한솔 부대표 외, 1차 상무위원회 모두발언</div>
			<div id="quizitem-author">정의당 보도자료</div>
			
			<div id="quizitem-content">
				<p><Clue innerText="윤소하 원내대표: " tooltip="아무리 한 정당의 원내대표라 해도, 이런 표현이 맞는지, 실제 전문가인지 확인할 필요가 있겠다." onClick={()=>{
							this.onClickClue("발화자의 전문성 확인 필요");
						}}/> 
			국회 환경노동위원회가 난항을 겪고 있습니다. 이 난항이 노동자에게 더 나은 법률을 만들기 위한 난항이 아니라 탄력근로제 개악에 더해 선택근로제 개악이 더해진 것에 이유가 있다니 황당할 따름입니다.</p><p>

여당은 탄력근로제 단위 기간을 현행 3개월에서 6개월로 늘리자고 주장하고 있습니다. 이마저도 개악인데, 한국당은 여기에 더해 선택근로제 정산기간을 현 1개월에서 3개월로 늘리자고 주장하고 있습니다. 이미 세계 최고의 장시간 노동국가, <Clue innerText="최악의 산재국가라는 오명" tooltip="최악의 산재국가라는 표현이 정말 맞는지 확인할 필요가 있겠어. " onClick={()=>{
							this.onClickKeyword("산재 통계");
						}}/>은 이들 민주당과 한국당의 머릿속에서 사라진지 오래입니다.</p><p>

탄력근로제 단위기간 확대는 물론이고, 선택근로제 정산기간 확대는 노동자들에게 더 큰 과로사의 위협을 안겨다 줍니다. 반드시 저지되어야 합니다. 특히 친노동을 표방한 집권여당이 애초의 약속대로 주40시간 노동제를 정착시키기 위해 초심으로 돌아올 것을 강력히 촉구하는 바입니다.</p>
				<div>출처: 정의당 보도자료</div>
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
						<li>우리나라 통계에서 산재사상자의 비율이 높다는 것이 
     확인되었고
 </li>
						<li>다른나라 수치와 비교한 보고서, 다른 나라 통계에서도 
    수치가 높음이 확인되었음
</li>
					</ol>
					따라서 <span id="spec">대체로 사실</span>이라고 볼 수 있다!
				</div>

				<div id="myresults">
					<div id="resp">
						<div className="notebook-title">나의 결과</div>
						<div id="myresponse">{this.formatGaugeValue(this.state.factScore+50)}</div>
		<div id="resultcheck">{this.formatGaugeValue(this.state.factScore+50)==="대체로 사실"?(<div>정답과 일치합니다. <br/>성공적으로 팩트체크를 진행하셨습니다.</div>):(<div>결과가 일치하지 않습니다.<br/>단서를 더 찾고 싶다면 이전 단계로 돌아가서 찾아보세요.</div>)}</div>
					</div>
					<div>
						<div className="notebook-title">내가 찾은 단서들</div>
						<div className="notebook-content">{clues}</div>
					</div>
				</div>
				<div id="clueCount">총 3개의 단서 중 <span id="spec">{clues.length}</span>개의 단서를 찾았습니다.</div>
				<div>
					본 퀴즈 내용에 대한 상세한 팩트체크 내용은 
					SNU팩트체크센터 홈페이지 다음 링크에 있습니다.<br></br>
					<a href="https://factcheck.snu.ac.kr/v2/facts/1973
">https://factcheck.snu.ac.kr/v2/facts/1973
</a>
				</div>

			</div>):(<div>

			</div>)}
		</div>)
	}	
}

export default QuizPage5