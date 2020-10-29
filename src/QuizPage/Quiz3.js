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
			<strong>웹사이트 검색 결과</strong>

			<div className="search-result noimage">
				<div>
					<div className="item-title" onClick={()=>{
						this.displayResult(0)
						}}>생활제품 공간 전자파 측정 (극장편)</div>
					<div className="item-preview">우리가 자주 사용하는 블루투스 이어폰에 대한 인체영향과 관련한 기준과 시험은 전자파 흡수율이며 어떻게 측정하는지 알아보도록 하겠습니다. 블루투스이어폰에서 나오는 전자파가..</div>
					<div className="sourceBox">
						<Clue innerText="국립전파연구원 |" tooltip="실험결과를 보여주는 국립전파연구원 사이트가 연결되네. 여기서 바로 결과 확인이 가능해! " className="item-source" onClick={()=>{
							this.onClickClue("공신력 있는 기관에서 진행한 실험");
						}}></Clue>
						<div className="item-date">2020.03.08</div>
					</div>
					<div className={`item-content ${this.state.visibility[0]?"":"invisible"}`}>
					<iframe width="560" height="315" src="https://www.youtube.com/embed/LrISkpjNKFA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					<div>
						<p>(나래이션) 무인주문기, 대형패널, 가정내 소형 이동통신 중계기 등 생활 공간의 다양한 설비에서 발생하는 전자파는 인체호보기준 대비 1~2% 수준입니다.</p><p>
우리가 자주 사용하는 블루투스 이어폰에 대한 인체영향과 관련한 기준과 시험은 전자파 흡수율이며 어떻게 측정하는지 알아보도록 하겠습니다.
</p><p>
블루투스이어폰에서 나오는 전자파가 인체에 얼마나 흡수되는지를 시험하고 기준에 만족하는지 확인하는 것인데요. 보시는 바와 같이 사람과 유사한 모의 인체에 사람 몸과 유사한 액체 물질을 부어 놓은 상태에서 이어폰을 모의 인체에 접촉해 놓고 측정을 진행합니다.
</p><p>
<Clue innerText= "블루투스 이어폰 측정결과 인체보호 기준 대비 0.5% 수준으로" tooltip ="블루투스 이어폰은 측정 결과,
인체보호 기준 대비 0.5프로에 해당되네."  onClick={()=>{
	this.onClickClue("글 내용과 반박되는 실험 결과");
	this.setFactScore(-30);
}}></Clue> 실제 사용하는 조건에서는 전자파가 인체에 미치는 영향은 매우 적습니다.
</p><p>
[자막] 전자파흡수율(SAR) : 생체조직에 흡수되는 단위질량 당 에너지율
</p><p>
(나래이션) : 국내 전자파 흡수율의 안전기준은 1.6 W/kg 이며, 기준에 적합한 제품이 시중에 판매될 수 있으며, 인증을 위해 최대 출력 조건에서 측정한 값보다 일상행솰에서 사용하실 때에는 전자파흡수율이 아주 작은 값으로 측정됩니다.
</p><p>
휴대폰 wifi 등 시중에 유통되는 무선기기는 전자파 흡수율 이외에도 전자파 출력 등이 적당한지, 다른기기에 영향을 주는지 등의 무선기술기준, 전자파 적합성 기준 등의 시험을 거쳐 합격해야만 판매될 수 있습니다.
</p></div>
					</div>
				</div>
			</div>

			<div className="search-result noimage">
				<div>
					<div className="item-title" onClick={()=>{
						this.displayResult(1)
						}}>과기정통부, 다양한 생활제품공간 전자파 측정결과 공개</div>
					<div className="item-preview">□ 과학기술정보통신부(장관
유영민, 이하 ‘과기정통부’)는 생활제품·공간에서 나오는 전자파에
대한 국민의 궁금증과 우려를 해소하기 위하여 지난 2월부터 국민 신청을 받아 3월까지 접수된 생활제품‧공간(37종)에 대해 전자파를 측정한 결과 전자파 인체보호기준을 모두 만족한 것으로 나타났다고 밝혔다.</div>
					<div className="sourceBox">
						<Clue innerText="과학기술정보통신부 |" tooltip="관련 분야의 국가 종합기관에서 진행한 실험이야." className="item-source" onClick={()=>{
							this.onClickClue("공신력 있는 기관에서 진행한 실험");
						}}></Clue>
						<div className="item-date">2020.03.08</div>
					</div>

					<div className={`item-content ${this.state.visibility[1]?"":"invisible"}`}><p>
					□ 전기를 사용하는 대부분 생활가전에서는 전자파 발생량이 인체보호기준
대비 1% 내외로 미미한 수준으로 나타났다
</p><p>
ㅇ 다만 열선에 흐르는 전류로 열을 발생시키거나 전자파 에너지를 이용하여 음식을
가열하는 제품은 일반 가전에 비해 제품 특성상 상대적으로 전자파 발생량이 다소 높은 것으로 나타났다.
</p><p>
ㅇ 특히, 에어프라이어는 일반적 사용방법에서
전자파 발생량이 높지 않았으나 음식을 가열하기 위한 열선이 제품 윗면에 있어 상단 가까운 위치에서 전자파 발생량이 높게 나타났다.
</p><p>
ㅇ 에어프라이어 사용시에 통상적 사용방법에 따르고 제품 가동시 상단 윗면에 불필요하게
신체 부위를 밀착하거나 근접하지 않도록 주의할 필요가 있다.
</p><p>
□ <Clue innerText="탈모치료기, 저주파치료기, 전기장판, 전자담배, 전기면도기, 전동칫솔, 블루투스 이어폰, 키즈헤드폰
등 다양한 인체 밀착 생활제품에서도 전자파 발생량이 모두 인체보호기준 대비 1% 내외로 나타났다" tooltip="실제 상황과 비슷하게 실험을 진행했을 때도 전자파의 효과가 거의 없다는 답이 나왔어." onClick={()=>{
	this.onClickClue("글 내용과 반박되는 실험 결과");
	this.setFactScore(-50);
}}></Clue></p>
					</div>
				</div>
			</div>

			<div className="search-result noimage">
				<div>
					<div className="item-title" onClick={()=>{
						this.displayResult(2)
						}}><Clue innerText="[정정보도문]" tooltip="해당 기사에 대한 정정보도도 나와 있네." onClick={()=>{
							this.onClickClue("기사의 내용에 대한 정정보도");
						}}/> '무선 이어폰, 암 발생 위험'은 오류, 바로 잡습니다</div>
					<div className="item-preview">중앙일보는 18일 오전 8시 59분 "과학자 250명 “에어팟 등 무선 이어폰, 암 발생 위험”"이라는 제목의 기사를 게재했습니다. 관련 내용은 트위터 공동창업자인 에반 윌리엄스가 창업한...</div>
					<div className="sourceBox">
					<div className="item-source">중앙일보 |</div>
						<div className="item-date">2020.03.07</div>
					</div>
					<div className={`item-content ${this.state.visibility[2]?"":"invisible"}`}>
						<p>중앙일보는 18일 오전 8시 59분 "과학자 250명 “에어팟 등 무선 이어폰, 암 발생 위험”"이라는 제목의 기사를 게재했습니다. 관련 내용은 트위터 공동창업자인 에반 윌리엄스가 창업한 온라인 출판 플랫폼 ‘미디엄’의 포스팅을 통해 가장 먼저 알려졌고, 이후 여러 외신에서 인용하면서 구글 등 뉴스 사이트를 통해 확산됐습니다.</p><p>
 
 중앙일보는 이같은 보도 내용을 바탕으로 기사를 작성했습니다. 그러나 본지 보도가 나간 뒤 본 기사의 원문이 된 외신 기사들이 잘못된 정보를 바탕으로 한 것이라는 지적이 나왔습니다. 먼저 본 기사에 언급된 호소문은 4년 전 제출된 것이며, 특정 제품이나 제조사를 언급하지 않은 것으로 확인됐습니다.
 </p><p>
 당시 호소문 작성을 주도한 비영리단체 ‘이엠에프사이언티스트’(EMFscientist)는 에어팟과 같은 무선 이어폰에 대한 유해성을 주장하지는 않은 것으로 확인됐습니다. 2015년 5월 이 단체가 전 세계 과학자 190명의 서명을 받아 유엔과 세계보건기구(WHO), 유엔환경계획(UNEP)에 ‘국제 EMF 과학자 호소문’을 제출한 건 사실입니다. 그러나 이 호소문에는 학술지에 게재된 연구들을 근거로 비전리 전자기장 노출로부터 보호와 방지가 필요하다는 내용이 담겼습니다.
 </p><p>
 전자기파의 유해성을 주장하는 일부 목소리가 있는 것은 사실입니다. 그러나 WHO는 지난 30년 간 2만5000건 넘는 관련 연구가 이뤄졌지만, 일상적인 전자기파의 인체 유해성 주장은 과학적 근거를 찾을 수 없다고 분명하게 밝히고 있습니다.
 </p><p>
 이에 대해 이덕환 서강대 화학과 교수는 중앙일보와의 통화에서 “공신력 있는 기관인 WHO를 비롯 많은 정부기관·학술단체들은 이미 일상생활에서 사용하는 전자파가 인체에 문제가 될 만한 영향을 주지 않는다고 확실하게 검증해 발표했다”고 밝혔습니다. 이어 <Clue innerText="“우리 주변에는 수많은 통신용 마이크로파가 지나다니고 있는데 전화기나 무선이어폰을 가까이 댄다고 문제가 되지 않는다”며 “전자기기는 전세계적으로 같은 기준의 전자파 유출 검사를 거친 뒤 출시하기 때문에 걱정할 필요가 없다”고 설명했습니다." tooltip="전문가의 의견을 보니 세계적 검사를 거친 뒤 출시된 것이라고 하고, 이 부분에 대한 신뢰가 필요하겠어." onClick={()=>{this.onClickClue("해당 분야 전문가의 발언"); this.setFactScore(-50);}}/></p>
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
			(<div className="quizContent">
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
				<div>출처: 배틀그라운드 공식카페 - PLAYERUNKNOWN'S BATTLEGROUNDS 자유게시판</div>
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
					<GaugeChart id="gauge" percent={(this.state.factScore + 50) / 100} hideText={true} nrOfLevels={2} colors={["#FF0000","#009a00"]}/>
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
						<li>공공기관의 여러 실험에서 무선이어폰의 위험성이 
    낮게 나타났고 
</li>
						<li>전문가 의견 탐색 결과,  WHO의 주장 자체를 
   기사가 잘못 표기했음</li>
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
				<div id="clueCount">총 5개의 단서 중 <span id="spec">{clues.length}</span>개의 단서를 찾았습니다.</div>
				<div>
					본 퀴즈 내용에 대한 상세한 팩트체크 내용은 
					SNU팩트체크센터 홈페이지 다음 링크에 있습니다.<br></br>
					<a href="https://factcheck.snu.ac.kr/v2/facts/1987">https://factcheck.snu.ac.kr/v2/facts/1987
</a>
				</div>

			</div>):(<div>

			</div>)}
		</div>)
	}	
}

export default QuizPage3