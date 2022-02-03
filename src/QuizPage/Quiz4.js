import React from 'react';

import GaugeChart from 'react-gauge-chart'
import QuizSidebar from './QuizSidebar.js'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch
} from "@fortawesome/free-solid-svg-icons";


import "./QuizPage.scss"

import Clue from "../NewsArticle/Clue";

class QuizPage4 extends React.Component{
	state = {
		currentStep : 0,
		cluesCollected: [],
		keywordsCollected:[],
		factScore: 0,
		factScoreChanged:false,
		tipList: [],

		searchTerm: "찾은 키워드를 오른쪽 화면에서 클릭하여 검색할 수 있습니다",
		searchResult: [],

		visibility: [false, false, false],
	}

	proceedStep = () =>{
		this.setState({currentStep : this.state.currentStep+1});
	}

	revertStep = () =>{
		this.setState({currentStep : this.state.currentStep-1});
	}

	returnToTopics = (num)=>{
		this.saveToSessionStorage(num)
		this.props.history.push("/topics")
	}

	saveToSessionStorage = (numOfClues) =>{
		window.sessionStorage.setItem("quiz4_clues", numOfClues)
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
				지식백과
			</strong>

			<div className="search-result">
				<img className="item-image" src="https://post-phinf.pstatic.net/MjAxOTExMjdfMTU5/MDAxNTc0ODMwMTA5NTE1.JXmQic965HDr3fykAurvYelIlt2qIIn0v8kdr5yqqjIg.iYCRcylfzcc1IHORFpZp6EAt3_sxhSJBRKhZ5hy6-1gg.JPEG/noname012.jpg?type=w1200" alt="search result"/>
				<div>
				
					<div className="item-title" onClick={()=>{
						this.displayResult(0)
						}}>노란딱지</div>
					<div className="item-preview">유튜브가 운영 기준에 위배되는 콘텐츠에 붙이는 아이콘으로 광고 부적합을 의미한다. 노란색 달러 모양이며 이 아이콘을 받으면 공고 게재가 제한돼 해당 콘텐츠를 올린 유튜버가 수익을 내기 어려워진다.</div>
					<div className="sourceBox">
						<Clue innerText="네이버 지식백과 |" tooltip="네이버 지식백과는 중립적인 정보 서술을 하겠지." className="item-source" onClick={()=>{
							this.onClickClue("중립적인 출처의 자료 설명");
						}}></Clue>
						<div className="item-date">2019.11.27</div>
					</div>
					<div className={`item-content ${this.state.visibility[0]?"":"invisible"}`}>
						<p>구글이 운영하는 세계 최대의 동영상 서비스 업체인 유튜브가 <Clue innerText="선정성, 폭력성, 혐오 조장, 정치적 편향성 등의 운영 기준에 위배되는 콘텐츠에 붙이는 노란색 달러 모양의 아이콘으로 광고 부적합을 의미한다." tooltip="노란딱지는 보수유튜버만 준다는 투의 이야기는 없네" onClick={()=>{
							this.onClickClue("주장과 위배되는 자료");
							this.setFactScore(-10);
						}}/> 광고주들이 논란이 되는 영상에 자사 제품 광고가 노출되는 것을 꺼리면서 2017년 8월 도입했다.
						</p><p>
						유튜브 채널을 운영하면 구독자 수와 조회 수가 일정 기준 이상이 되면 자동으로 광고가 붙으면서 운영자가 수익을 얻을 수 있다. 노란딱지가 붙은 콘텐츠는 광고 게재가 제한되기 때문에 해당 콘텐츠를 올린 유튜버가 수익을 내기 어려워진다. 그러나 노란딱지가 명확한 기준 없이 부과된다며 표현의 자유를 침해하고 있다는 주장도 나온다. 이에 노란딱지를 붙일 때 어떤 규정을 위반했는지 구체적으로 공개하라는 요구가 있다.
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
						}}>광고주 친화적인 콘텐츠 가이드라인</div>
					<div className="item-preview">YouTube 파트너 프로그램에 참여하고 있다면 광고로 수익을 창출할 수 있습니다. 이 도움말은 내 채널에 있는 어떤 동영상이 광고주에게 적합한지에 관한 이해를 돕는 것을 목표로 합니다. 동영상, 실시간 스트림, 미리보기 이미지, 제목, 설명, 태그 등 콘텐츠의 모든 부분에 YouTube 정책이 적용됩니다</div>
					<div className="sourceBox">
						<Clue innerText="구글 고객센터 |" tooltip="가장 정확한 기준은 해당 기업의 고객센터 글에서 확인할 수 있어." className="item-source" onClick={()=>{
							this.onClickClue("기업에서 공개한 가이드라인");
						}}></Clue>
						<div className="item-date">2020.03.08</div>
					</div>

					<div className={`item-content ${this.state.visibility[1]?"":"invisible"}`}>
					<p >YouTube 파트너 프로그램에 참여하고 있다면 광고로 수익을 창출할 수 있습니다. 이 도움말은 내 채널에 있는 어떤 동영상이 광고주에게 적합한지에 관한 이해를 돕는 것을 목표로 합니다. 동영상, 실시간 스트림, 미리보기 이미지, 제목, 설명, 태그 등 콘텐츠의 모든 부분에 YouTube 정책이 적용됩니다. <a href="/youtube/answer/9348366" rel="noopener">YouTube 권장사항 자세히 알아보기</a>&nbsp;</p>
					<p>YouTube 시스템이 항상 정확한 것은 아니므로 자동 시스템의 결정 사항에 대해 <a href="/youtube/answer/7083671?hl=ko" rel="noopener">검토자의 직접 검토를 요청</a>할 수 있습니다.&nbsp;</p>
					<p><Clue innerText="다음은 광고주 친화적이지 않은 주요 주제입니다." tooltip="노란딱지의 부여 이유에 대한 상세한 설명들이 나와 있어." onClick={()=>{
							this.onClickClue("기업에서 공개한 가이드라인");
							this.setFactScore(-20);
						}}/></p>

					<table class="no-stripes wide">
      <tbody>
        <tr>
          <td>
          <ul>
            <li><a href="#부적절한_언어" rel="noopener">부적절한 언어</a></li>
            <li><a href="#폭력" rel="noopener">폭력</a></li>
            <li><a href="#성인" rel="noopener">성인용 콘텐츠</a></li>
            <li><a href="#충격적인_콘텐츠" rel="noopener">충격적인 콘텐츠</a></li>
            <li><a href="#유해하고_위험한_콘텐츠" rel="noopener">유해하거나 위험한 행위</a></li>
            <li><a href="#증오성_콘텐츠" rel="noopener">증오성 콘텐츠</a></li>
          </ul>
          </td>
          <td>
          <ul>
            <li><a href="#도발_비하" rel="noopener">도발, 비하</a></li>
            <li><a href="#기분전환용_약물" rel="noopener">기분전환용 약물 및 마약 관련 콘텐츠</a></li>
            <li><a href="#담배" rel="noopener">담배 관련 콘텐츠</a></li>
            <li><a href="#총기류" rel="noopener">총기 관련 콘텐츠</a></li>
            <li><a href="#논란의_소지가_있는_문제_및_민감한_사건" rel="noopener">논란의 소지가 있는 문제 및 민감한 사건</a></li>
            <li><a href="#가족용_콘텐츠에_포함된_성인용_콘텐츠" rel="noopener">가족용 콘텐츠에 포함된 성인용 콘텐츠</a></li>
          </ul>
          </td>
        </tr>
      </tbody>
    </table>
					

					</div>
				</div>
			</div>

			<div className="search-result noimage">
				<div>
					<div className="item-title" onClick={()=>{
						this.displayResult(2)
						}}> 내가 겪은 유튜브 노란딱지. 유형과 대처방법 【유튜브1년결산】</div>
					<div className="item-preview">지난 1년간 유튜브 노란딱지 몇번 받았는데요
첨엔 이거 뭐야 했는데
이제는 뭐.... 뭘까요</div>
					<div className="sourceBox">
					<div className="item-source"><Clue innerText="귀농7년차 YouTube |" tooltip="귀농 유튜버도 노란딱지를 받은 적 있는 걸 보니, 보수 유튜버만 받는다는 주장은 거짓이야." onClick={()=>{
							this.onClickClue("주장에 반대되는 예시");
							this.setFactScore(-20);
						}}/></div>
						<div className="item-date">2019.10.21</div>
					</div>
					<div className={`item-content ${this.state.visibility[2]?"":"invisible"}`}>
					<iframe width="560" height="315" src="https://www.youtube.com/embed/v_RtsdHMi18" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					<p>내가 겪은 유튜브 노란딱지. 유형과 대처방법 【유튜브1년결산】</p>
</div>
				</div>
			</div>

		</div>)

		return(
			<div id="quiz-wrapper">
			<QuizSidebar />
		<div id="quiz">
			{this.state.currentStep === 0?
				(<div id="quiz-header">
					<div id="header-title">Step 1: 있는 그대로 받아들이지 않고, 의심스러운 부분 찾기.</div>
				</div>):(<div id="quiz-header">
					<div id="header-title">Step 2: 추가적으로 정보를 검색하기</div>
				</div>)
				}
			{this.state.currentStep === 0?
			(<div className="quizContent" id="quiz1">
			<div id="quizitem-title">(현장취재) 한국당 <Clue innerText="유튜브 노란딱지 " tooltip="유튜브의 노란딱지 검열 정책에 대해 다루는군." onClick={() => this.onClickKeyword("유튜버 노란딱지")}/>전문가 간담회! / 신의한수 19.10.24</div>
			<div id="quizitem-author">신의한수</div>
			<br></br>
			<iframe width="560" height="315" src="https://www.youtube.com/embed/UbCY0MMnPho" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			<div id="quizitem-content">
			

				<Clue innerText="나경원 의원 발언" tooltip="나경원이란 사람이 말한 걸 모두 믿을만 할까? 이 사람이 유튜브 전문가인가?" onClick={() => this.onClickClue("신뢰할 수 없는 화자")}/> 발췌: <Clue innerText={`"구글의 노란딱지가 우파 유튜버를 위축`} tooltip="이 표현은 우파 유튜버의 입장에서 이야기한거네? 이 사람은 우파 유튜버 입장이구나." onClick={() => this.onClickClue("특정 정치적 입장의 발언")}/>하게 하는 부분이 있다고 생각한다. <Clue innerText="인위적인 무엇이 개입할 수 있다는 의심을" tooltip="이건 단순한 의심아닌가. 근거가 있는 말이 아닌데?" onClick={() => this.onClickClue("근거 없는 의심에 기반한 발언")}/> 지울 수 없다. <br/>
				‘우파 유튜버들도 <Clue innerText="이미 블랙리스트가 있는 것 아닌가’" tooltip="블랙리스트가 있을 것 같다는건 이 사람 개인의 생각 같은데…" onClick={() => this.onClickClue("근거 없는 의심에 기반한 발언")}/> 하고 생각한다"
		
				<div>출처: 신의한수 유튜브 채널</div>
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
					<div>총 단서 7개 중 {this.state.cluesCollected.length}개를 찾았습니다.</div>
				</div>
				<div id="notebook">
					<div id="title">팩트체크 노트</div>
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
				{this.state.currentStep === 2?<button id="next-button" disabled={!this.state.factScoreChanged} onClick={()=>this.returnToTopics(clues.length)}>완료</button>:(<div/>)}
				{this.state.currentStep < 2?<button id="next-button" disabled={!this.state.factScoreChanged && this.state.currentStep===1} onClick={()=>this.proceedStep()}>다음 단계</button>:(<div/>)}
			</div>
			{this.state.currentStep === 2?(<div id="quiz-result">
				<div id="result">
					해당 정보는	
					<ol>
						<li>신뢰할 수 있는 특정 영역에 대한 전문가의 정보가 아니었고 </li>
						<li>실제 원 정보를 보니 그런 내용이 없었고</li>
						<li>이를 증명할 다른 사례도 있었음</li>
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
				<div id="clueCount">총 7개의 단서 중 <span id="spec">{clues.length}</span>개의 단서를 찾았습니다.</div>
				<div>
					본 퀴즈 내용에 대한 상세한 팩트체크 내용은 
					SNU팩트체크센터 홈페이지 다음 링크에 있습니다.<br></br>
					<a href="https://factcheck.snu.ac.kr/v2/facts/1895
">https://factcheck.snu.ac.kr/v2/facts/1895

</a>
				</div>

			</div>):(<div>

			</div>)}
		</div>
	</div>)
	}	
}

export default QuizPage4