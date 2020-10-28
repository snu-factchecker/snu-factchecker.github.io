import React from 'react';

import GaugeChart from 'react-gauge-chart'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch
} from "@fortawesome/free-solid-svg-icons";


import quiz1 from "./quiz1_img.png"

import "./QuizPage.scss"

import Clue from "../NewsArticle/Clue";

class QuizPage6 extends React.Component{
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
				웹사이트
			</strong>

			<div className="search-result noimage">
				
				<div>
					<div className="item-title" onClick={()=>{
						this.displayResult(0)
						}}>2007년 국제선방호위원회 권고</div>
					<div className="item-preview">방사선방호체계를 위한 이 개정 권고는 이전 1990년 권고를 대체하며, 1990년 이후 발간된 방사선원으로부터 피폭을 관리하는 추가지침을 갱신하고 집
약하며 발전시킨다.</div>
					<div className="sourceBox">
						<Clue innerText="대한방사선학회 |" tooltip="전문적인 연구를 진행하는 학회에서 발표한 연구 논문이야." className="item-source" onClick={()=>{
							this.onClickClue("공신력 있는 출처의 자료 설명");
						}}></Clue>
						<div className="item-date">2007.01.03</div>
					</div>
					<div className={`item-content ${this.state.visibility[0]?"":"invisible"}`}>
						<p>선량한도는 환자 의료피폭이 아닌 계획피폭상황에만 적용된다. ICRP는
ICRP 60(ICRP 1991b)에서 권고한 기존 선량한도가 계속 적절한 수준의 방호를
제공할 것으로 결론을 내렸다. 종사자와 일반인 모두에 대한 명목위해계수는 수
치상 1990년도에 규정한 값보다 어느 정도 낮아졌지만 1990년 권고와 부합한
다. 수치의 작은 차이는 실제 별로 중요하지 않다(부록A 참조). 피폭범주 내 즉, 직무피폭 또는 일반인피폭에서 선량한도란 이미 정당화된 행위들에 관련된 선원
으로부터 발생하는 피폭의 합에 적용된다. 권고하는 선량한도를 표6에 요약하였
다.
</p><p>
 (244) 계획피폭상황에서 직무피폭의 경우, ICRP는 어느 한 해 동안 유효선량
이 50 mSv를 초과하지 않아야 한다는 추가 규정과 함께 지정된 5년 동안 평균
하여 연간 20 mSv(5년 동안 100 mSv)의 유효선량을 선량한도로 하는 권고를 계
속 유지한다.
</p><p>
(245) 계획피폭상황에서 <Clue innerText="일반인피폭의 경우, ICRP는 선량한도를 연간 1 mSv의 유효선량으로 하는 권고를 유지한다." tooltip="탈핵전문가의 말대로 국제 권고 수치는 연간 1mSv가 맞네.
" onClick={()=>{
	this.onClickClue("주장과 일치하는 연구 자료");
	this.setFactScore(10);
}}/> 단, 특수한 상황에서 그보다 높은 유효
선량이 한 해에 대해 허용되지만, 이 경우에도 5년 동안 평균값이 연간 1 mSv를
초과하면 안 된다. 
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
						}}>Worldwide Responses to the 20 Millisievert Controversy</div>
					<div className="item-preview">On April 19, the Japanese government raised the allowable annual radiation exposure limit from 1 mSV (millisievert) to 20 mSV. The decision has ...</div>
					<div className="sourceBox">
					<div className="item-source">Asia-Pacific Journal |</div>
						<div className="item-date">2012.12.31</div>
					</div>

					<div className={`item-content ${this.state.visibility[1]?"":"invisible"}`}>
					
						<p>Between 2012 and 2014 we posted a number of articles on contemporary affairs without giving them volume and issue numbers or dates. Often the date can be determined from internal evidence in the article, but sometimes not. We have decided retrospectively to list all of them as Volume 10, Issue 54 with a date of 2012 with the understanding that all were published between 2012 and 2014.
						</p><p>
						Satoko Norimatsu
						</p><p>
						On April 19, the <Clue innerText="Japanese government raised the allowable annual radiation exposure limit from 1 mSV (millisievert) to 20 mSV." tooltip="외신에서도 실제로 1밀리시버트에서 20밀리시버트로 정책을 바꿨다는 내용을 언급하고 있네." onClick={()=>{
	this.onClickClue("주장과 일치하는 외신 보도 자료");
	this.setFactScore(20);
}} /> The decision has been heavily criticized by experts inside and outside Japan, as it is applied to children who are more susceptible to radiation, and this limit does not take internal radiation dosage into consideration. 20 mSV is the yearly average of what is allowed for Japanese nuclear plant workers under normal circumstances. On this website, we have so far primarily written and provided information in English on this "20 mSV" issue and on the Fukushima nuclear crisis in general.</p>
	

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
			<div id="quizitem-title">제발 한국국민만이라도 꼭 다 봤으면ㅠ_김익중 의대 교수가 밝히는 일본 방사능의 진실(풀버젼)_썰태양 by 미래당</div>
			<div id="quizitem-author">미래당 TV</div>
			<br></br>
			<iframe width="560" height="315" src="https://www.youtube.com/embed/D_xgt7-lbc4" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
			<div id="quizitem-content">
		
				김익중 탈핵 전문가: <Clue innerText="방사능 기준치" tooltip="방사능 피폭 기준치에 대해 이야기하고 있어." onClick={()=>this.onClickKeyword("방사능 피폭 기준치")}/>는 ICRP 국제방사선방호위원회에서 먼저 제안을 합니다. 그럼 그 제안을 대부분의 나라에서 받아들입니다. <Clue innerText="현재는 1인당 1년에 1밀리시버트로 되어 있어요." tooltip="원래 1인당 1밀리시버트로 되어있었다는 것이 맞는 주장일까?" onClick={()=>{
					this.onClickClue("특정 수치를 언급한 주장")
				}}/> 그래서 한국, 미국, 일본 등 모두 1밀리시버트였어요. <Clue innerText={`그런데 후쿠시마 원전사고가 나니까 일본은 1밀리시버트를 지킬 수가 없게 된 겁니다. 그래서 후쿠시마 근처에 20밀리시버트로 기준치를 올려버렸어요.`} tooltip="이 정보가 맞는지 알려면
				정말로 원전사고 이후에
				기준치를 바꾸었는지
				그 정책을 확인해봐야겠네. 
				" onClick={()=>this.onClickClue("일본의 정책 수정 관련 주장")}/>
		
				<div>출처: 미래당TV 유튜브 채널</div>
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
					<GaugeChart id="gauge" percent={(this.state.factScore + 50) / 100} hideText={true} nrOfLevels={2} colors={["#FF0000","#00FF00"]}/>
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
						<li>실제 방사능 피폭 국제 기준치는 1 수준이었고 
 </li>
						<li>외신 비판과 원자료를 살펴보니 일본이 2011년 20 수준으로 올렸다는 것이 확인되었음 
</li>
					</ol>
					따라서 사실이라고 볼 수 있음!
				</div>

				<div id="myresults">
					<div>
						<div className="notebook-title">나의 결과</div>
						<div>{this.formatGaugeValue(this.state.factScore+50)}</div>
					</div>
					<div>
						<div className="notebook-title">내가 찾은 단서들</div>
						<div className="notebook-content">{clues}</div>
					</div>
				</div>
				<div id="clueCount">총 5개의 단서 중 {clues.length}개의 단서를 찾았습니다.</div>
				<div>
					본 퀴즈 내용에 대한 상세한 팩트체크 내용은 
					SNU팩트체크센터 홈페이지 다음 링크에 있습니다.<br></br>
					<a href="https://factcheck.snu.ac.kr/v2/facts/2003

">https://factcheck.snu.ac.kr/v2/facts/2003


</a>
				</div>

			</div>):(<div>

			</div>)}
		</div>)
	}	
}

export default QuizPage6