import React from 'react';

import GaugeChart from 'react-gauge-chart'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch
} from "@fortawesome/free-solid-svg-icons";

import quiz1 from "../QuizPage/quiz1_img.png"

import "../QuizPage/QuizPage.scss"
import "./Tutorial.scss"

import Clue from "../NewsArticle/Clue";



class Tutorial extends React.Component{
	state = {
		tutorialStep: 0,
		currentStep : 0,
		cluesCollected: [],
		keywordsCollected:[],
		factScore: 0,
		factScoreChanged:false,
		tipList: [],

		searchTerm: "찾은 키워드를 클릭하여 검색해보기",
		searchResult: [],

		visibility: [false, false, false],

		currentLink: {},
		searchResultDB: {"2020년 광복절 행사": [{
			image: "https://imgnews.pstatic.net/image/022/2019/08/15/20190815508490_20190815184507880.jpg?type=w647",
			previewText: "“우리 경제 신성장 동력 마련 / 분단 극복할 때 광복도 완성” / “日 부당한 수출규제에 맞서 / 뚜벅뚜벅 경제강국 길 갈 것” / 2020 도쿄올림픽 성원 보내 / 한·일 갈등 외교적 해결 방점",
			mainText:"<p>문재인 대통령은 15일 “일본의 부당한 수출규제에 맞서 우리는 책임 있는 경제강국을 향한 길을 뚜벅뚜벅 걸어갈 것”이라며 주요 부품·소재의 국산화와 수입 다변화를 통한 ‘극일(克日)’ 의지를 분명히 했다.문 대통령은 이날 충남 천안 독립기념관에서 열린 광복절 경축식 경축사에서 “국제 분업체계 속에서 어느 나라든 자국이 우위에 있는 부문을 무기화한다면 평화로운 자유무역 질서가 깨질 수밖에 없다”며 “먼저 성장한 나라가 뒤따라 성장하는 나라의 사다리를 걷어차서는 안 된다”고 지적했다. </p> 그러나 동시에 “지금이라도 일본이 대화와 협력의 길로 나온다면 우리는 기꺼이 손을 잡을 것”이라며 “공정하게 교역하고 협력하는 동아시아를 함께 만들어갈 것”이라고 강조했다. 문 대통령은 “세계인들이 평창에서 평화의 한반도를 보았듯이 도쿄 올림픽에서 우호와 협력의 희망을 갖게 되길 바란다”며 2020년 도쿄 올림픽에 대한 성원도 보냈다. 이 같은 발언들은 최악의 상황으로 치닫고 있는 한·일 갈등에 대한 외교적 해결을 위해 대화의 문을 열어놓으면서 유화적 메시지를 보낸 것으로 풀이된다. <p> 문 대통령은 또 “평화로 번영을 이루는 평화경제를 구축하고 통일로 광복을 완성하고자 한다”며 “평화경제에 우리가 가진 모든 것을 쏟아부어 ‘새로운 한반도’의 문을 활짝 열겠다. 평화경제를 통해 우리 경제의 신성장동력을 만들겠다”고 밝혔다. 그러면서 “‘분단’을 극복해낼 때 비로소 우리의 ‘광복’은 완성되고 아무도 흔들 수 없는 나라가 될 것”이라고 말했다. </p> 남북 평화경제가 실현되면 8000만 단일 시장을 가진 세계 6위권 경제대국이 될 수 있다는 전망도 제시했다. 문 대통령은 특히 “평화경제는 한반도의 완전한 비핵화 위에 북한이 핵이 아닌 경제와 번영을 선택할 수 있도록 대화와 협력을 계속해 나가는 데서 시작한다”며 ‘비핵화를 전제로 한 평화경제’ 개념을 규정해 주목됐다. 최근 북한의 잇단 미사일 도발로 인해 평화경제론에 대한 부정적 의견이 나오는 점을 의식한 듯 문 대통령은 “미국이 북한과 동요 없이 대화를 계속하고 일본 역시 북한과 대화를 추진하고 있는 현실을 직시하기 바란다”며 “이념에 사로잡힌 외톨이로 남지 않길 바란다”고 반박했다. 평화경제를 비난한 자유한국당 등 야당 일각을 ‘이념에 사로잡힌 외톨이’라고 몰아세운 것이다. <p> 문 대통령은 경축사 초반 김기림의 ‘새나라 송(頌)’에 나오는 ‘아무도 흔들 수 없는 나라’를 인용하며 “‘아무도 흔들 수 없는 나라’는 외세의 침략과 지배에서 벗어난 신생독립국가가 가져야 할 당연한 꿈이었지만 아직 이루지 못했다. 아직도 우리가 충분히 강하지 않기 때문이며 아직도 우리가 분단되어 있기 때문”이라고 설명했다. 이어 “저는 오늘 어떤 위기에도 의연하게 대처해온 국민들을 떠올리며 우리가 만들고 싶은 나라, ‘아무도 흔들 수 없는 나라’를 다시 다짐한다”며 이를 위해 △경제강국 △교량국가 △평화경제 구축이라는 3대 목표를 제시했다. 문 대통령은 “경제에서 주권이 확고할 때 우리는 우리 운명의 주인으로 흔들리지 않는다”며 “우리가 힘을 가지면 대륙과 해양을 잇는 나라, 동북아 평화와 번영의 질서를 선도하는 나라가 될 수 있다”고 역설했다.</p>  <p> 김달중 기자 dal@segye.com </p> ",
			title:"文대통령 “평화경제에 모든 것 쏟아부을 것”",
			source: "세계일보",
			uploadDate:"2019.08.15",
			key:1
		},
		{
			image: "http://www.gwangnam.co.kr/upimages/gisaimg/202008/15_363657-45.jpg",
			previewText: "문 대통령, 이날 경축식에서 광복회원과 4부요인, 정당대표, 종단대표, 정부 주요인사, 주한외교단, 사회 각계 주요 인사 등과 함께 대한민국이 앞으로도 포용과 조화의 가치 꽃피우며 발전해 나가기를 기원",
			mainText:"문재인 대통령은 김정숙 여사와 함께 15일(토) 오전 10시 동대문디자인플라자(DDP)에서 열린 제75주년 광복절 경축식에 참석하였다.<p>문 대통령은 ‘우리나라’를 주제어로 한 이날 경축식에서 광복회원과 4부요인, 정당대표, 종단대표, 정부 주요인사, 주한외교단, 사회 각계 주요 인사 등과 함께 수많은 애국지사와 순국선열이 꿈꿔온 평화와 공존의 공동체인 대한민국이 앞으로도 포용과 조화의 가치를 꽃피우며 발전해 나가기를 기원하였다.</p><p>특히 청산리 전투 100주년을 맞아 김좌진 장군의 후손인 배우 송일국 씨와 함께, 3살 때 청력장애를 앓았지만 포기하지 않고 미래의 꿈을 향해 도전 중인 대한민국 청년 이소별 씨가 경축식 사회를 맡음으로써, 처음으로 장애인과 비장애인이 함께 국가 기념식 사회를 맡음으로써 애국지사와 순국선열의 애국애족 정신이 오늘날 우리 사회 내에서 조화로운 공동체 정신으로 이어지길 바라는 뜻을 더하였다.</p><p>이날은 통상 진행되는 국가 기념식 의전과 달리 특별히 네 분의 애국지사 대표가 주빈이 될 수 있도록 의장대의 호위를 받으며 입장함으로써 공식 행사가 시작되었다. 미리 경축식장에 도착하여 기다리던 문 대통령 내외는 애국지사 한 분 한 분께 존경과 감사의 인사를 드리며 이들을 주빈석으로 맞이함으로써 애국지사들의 숭고한 희생정신을 기리고 사회적 예우를 강화하고자 하는 대통령과 정부의 뜻을 나타냈다.</p><p>또한 고령의 애국지사들과 포상 대상자들의 건강을 최우선 고려하여 별도의 대기 공간을 마련하고 보건소와 의료진 협조를 통해 응급상황 대응체계를 미리 갖추었으며, 특히 경축식에 참석하신 네 분의 애국지사들은 별도로 준비된 의전차량을 이용하여 서울지방경찰청의 차량 경호를 받으며 출발지에서 행사장까지 모시는 등 예우에 부족함이 없도록 하였다.</p>",
			title:"문 대통령 내외, 제75주년 광복절 경축식 참석",
			source: "광남일보",
			uploadDate:"2020.08.15",
			key:2
		},
		{
			image: "http://www.gwangnam.co.kr/upimages/gisaimg/202008/15_363657-45.jpg",
			previewText: "",
			mainText:"",
			title:"제75주년 광복절 경축식 ",
			source: "대한민국 청와대",
			uploadDate:"2020.08.15",
			key:2
		}]}
	}

	overlayContent;
	
	PlayGame = () =>{
		this.props.history.push("/topics")
	}

	proceedStep = () =>{
		this.setState({currentStep : this.state.currentStep+1});
	}

	revertStep = () =>{
		this.setState({currentStep : this.state.currentStep-1});
	}

	proceedTutorial = () =>{
		this.setState({tutorialStep : this.state.tutorialStep+1});
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
			return <div key={item} onClick={()=> {this.searchKeyword(item);
				if (this.state.tutorialStep===6){this.proceedTutorial()}
			}} className="keyword">{item}</div>
		})

		const clues = this.state.cluesCollected.map((item)=>{
			return <div key={item}>{item}</div>
		})

		const results = (<div id="searchresults">
			<div className="search-result">
				<img className="item-image" src="https://imgnews.pstatic.net/image/022/2019/08/15/20190815508490_20190815184507880.jpg?type=w647" alt="search result"/>
					<div>
						<div className="item-title" onClick={()=>this.displayResult(0)}>文대통령 “평화경제에 모든 것 쏟아부을 것”</div>
						<div className="item-preview">“우리 경제 신성장 동력 마련 / 분단 극복할 때 광복도 완성” / “日 부당한 수출규제에 맞서 / 뚜벅뚜벅 경제강국 길 갈 것” / 2020 도쿄올림픽 성원 보내 / 한·일 갈등 외교적 해결 방점</div>
						<div className="sourceBox">
							<div className="item-source">세계일보 |</div>
							<Clue innerText="2019.08.15" tooltip="마스크를 쓰지 않은 사진은 2019년 행사 사진이네?" className="item-date" onClick={()=>{
								this.onClickClue("지난해 행사 사진");
								this.setFactScore(-10);
							}}></Clue>
						</div>
						<div className={`item-content ${this.state.visibility[0]?"":"invisible"}`}>
						<p>문재인 대통령은 15일 “일본의 부당한 수출규제에 맞서 우리는 책임 있는 경제강국을 향한 길을 뚜벅뚜벅 걸어갈 것”이라며 주요 부품·소재의 국산화와 수입 다변화를 통한 ‘극일(克日)’ 의지를 분명히 했다.문 대통령은 이날 충남 천안 독립기념관에서 열린 광복절 경축식 경축사에서 “국제 분업체계 속에서 어느 나라든 자국이 우위에 있는 부문을 무기화한다면 평화로운 자유무역 질서가 깨질 수밖에 없다”며 “먼저 성장한 나라가 뒤따라 성장하는 나라의 사다리를 걷어차서는 안 된다”고 지적했다. </p> 그러나 동시에 “지금이라도 일본이 대화와 협력의 길로 나온다면 우리는 기꺼이 손을 잡을 것”이라며 “공정하게 교역하고 협력하는 동아시아를 함께 만들어갈 것”이라고 강조했다. 문 대통령은 “세계인들이 평창에서 평화의 한반도를 보았듯이 도쿄 올림픽에서 우호와 협력의 희망을 갖게 되길 바란다”며 2020년 도쿄 올림픽에 대한 성원도 보냈다. 이 같은 발언들은 최악의 상황으로 치닫고 있는 한·일 갈등에 대한 외교적 해결을 위해 대화의 문을 열어놓으면서 유화적 메시지를 보낸 것으로 풀이된다. <p> 문 대통령은 또 “평화로 번영을 이루는 평화경제를 구축하고 통일로 광복을 완성하고자 한다”며 “평화경제에 우리가 가진 모든 것을 쏟아부어 ‘새로운 한반도’의 문을 활짝 열겠다. 평화경제를 통해 우리 경제의 신성장동력을 만들겠다”고 밝혔다. 그러면서 “‘분단’을 극복해낼 때 비로소 우리의 ‘광복’은 완성되고 아무도 흔들 수 없는 나라가 될 것”이라고 말했다. </p> 남북 평화경제가 실현되면 8000만 단일 시장을 가진 세계 6위권 경제대국이 될 수 있다는 전망도 제시했다. 문 대통령은 특히 “평화경제는 한반도의 완전한 비핵화 위에 북한이 핵이 아닌 경제와 번영을 선택할 수 있도록 대화와 협력을 계속해 나가는 데서 시작한다”며 ‘비핵화를 전제로 한 평화경제’ 개념을 규정해 주목됐다. 최근 북한의 잇단 미사일 도발로 인해 평화경제론에 대한 부정적 의견이 나오는 점을 의식한 듯 문 대통령은 “미국이 북한과 동요 없이 대화를 계속하고 일본 역시 북한과 대화를 추진하고 있는 현실을 직시하기 바란다”며 “이념에 사로잡힌 외톨이로 남지 않길 바란다”고 반박했다. 평화경제를 비난한 자유한국당 등 야당 일각을 ‘이념에 사로잡힌 외톨이’라고 몰아세운 것이다. <p> 문 대통령은 경축사 초반 김기림의 ‘새나라 송(頌)’에 나오는 ‘아무도 흔들 수 없는 나라’를 인용하며 “‘아무도 흔들 수 없는 나라’는 외세의 침략과 지배에서 벗어난 신생독립국가가 가져야 할 당연한 꿈이었지만 아직 이루지 못했다. 아직도 우리가 충분히 강하지 않기 때문이며 아직도 우리가 분단되어 있기 때문”이라고 설명했다. 이어 “저는 오늘 어떤 위기에도 의연하게 대처해온 국민들을 떠올리며 우리가 만들고 싶은 나라, ‘아무도 흔들 수 없는 나라’를 다시 다짐한다”며 이를 위해 △경제강국 △교량국가 △평화경제 구축이라는 3대 목표를 제시했다. 문 대통령은 “경제에서 주권이 확고할 때 우리는 우리 운명의 주인으로 흔들리지 않는다”며 “우리가 힘을 가지면 대륙과 해양을 잇는 나라, 동북아 평화와 번영의 질서를 선도하는 나라가 될 수 있다”고 역설했다.</p>  <p> 김달중 기자 dal@segye.com </p>
						</div>
						
					</div>
				</div>
			<div className="search-result">
				<img className="item-image" src="http://www.gwangnam.co.kr/upimages/gisaimg/202008/15_363657-45.jpg" alt="search result"/>
				<div>
					<div className="item-title" onClick={()=>this.displayResult(1)}>문 대통령 내외, 제75주년 광복절 경축식 참석</div>
					<div className="item-preview">문 대통령, 이날 경축식에서 광복회원과 4부요인, 정당대표, 종단대표, 정부 주요인사, 주한외교단, 사회 각계 주요 인사 등과 함께 대한민국이 앞으로도 포용과 조화의 가치 꽃피우며 발전해 나가기를 기원</div>
					<div className="sourceBox">
						<div className="item-source">광남일보 |</div>
						<Clue innerText="2020.08.15" tooltip="올해 사진에서는 마스크를 쓴 모습을 볼 수 있어." 
						onClick={()=>{
							this.onClickClue("올해 행사 사진과 불일치");
							this.setFactScore(-20);
						}}className="item-date"></Clue>
					</div>
					<div className={`item-content ${this.state.visibility[1]?"":"invisible"}`}>
			문재인 대통령은 김정숙 여사와 함께 15일(토) 오전 10시 동대문디자인플라자(DDP)에서 열린 제75주년 광복절 경축식에 참석하였다.<p>문 대통령은 ‘우리나라’를 주제어로 한 이날 경축식에서 광복회원과 4부요인, 정당대표, 종단대표, 정부 주요인사, 주한외교단, 사회 각계 주요 인사 등과 함께 수많은 애국지사와 순국선열이 꿈꿔온 평화와 공존의 공동체인 대한민국이 앞으로도 포용과 조화의 가치를 꽃피우며 발전해 나가기를 기원하였다.</p><p>특히 청산리 전투 100주년을 맞아 김좌진 장군의 후손인 배우 송일국 씨와 함께, 3살 때 청력장애를 앓았지만 포기하지 않고 미래의 꿈을 향해 도전 중인 대한민국 청년 이소별 씨가 경축식 사회를 맡음으로써, 처음으로 장애인과 비장애인이 함께 국가 기념식 사회를 맡음으로써 애국지사와 순국선열의 애국애족 정신이 오늘날 우리 사회 내에서 조화로운 공동체 정신으로 이어지길 바라는 뜻을 더하였다.</p><p>이날은 통상 진행되는 국가 기념식 의전과 달리 특별히 네 분의 애국지사 대표가 주빈이 될 수 있도록 의장대의 호위를 받으며 입장함으로써 공식 행사가 시작되었다. 미리 경축식장에 도착하여 기다리던 문 대통령 내외는 애국지사 한 분 한 분께 존경과 감사의 인사를 드리며 이들을 주빈석으로 맞이함으로써 애국지사들의 숭고한 희생정신을 기리고 사회적 예우를 강화하고자 하는 대통령과 정부의 뜻을 나타냈다.</p><p>또한 고령의 애국지사들과 포상 대상자들의 건강을 최우선 고려하여 별도의 대기 공간을 마련하고 보건소와 의료진 협조를 통해 응급상황 대응체계를 미리 갖추었으며, 특히 경축식에 참석하신 네 분의 애국지사들은 별도로 준비된 의전차량을 이용하여 서울지방경찰청의 차량 경호를 받으며 출발지에서 행사장까지 모시는 등 예우에 부족함이 없도록 하였다.</p>
					</div>
				</div>
			</div>
			<div className="search-result">
				<img className="item-image" src="http://www.gwangnam.co.kr/upimages/gisaimg/202008/15_363657-45.jpg" alt="search result"/>
				<div>
					<div className="item-title">제75주년 광복절 경축식 </div>
					<div className="item-preview"></div>
					<div className="sourceBox">
						<Clue innerText="대한민국 청와대 |" tooltip="청와대 공식 자료에서는 마스크를 쓴 모습이야." onClick={()=>{
							this.onClickClue("청와대 공식 자료와 불일치");
							this.setFactScore(-50);
							this.proceedTutorial();
						}}className="item-source"></Clue>
						<div className="item-date">2020.08.15</div>
					</div>	
				</div>
			</div>
		</div>)


let overlay;

switch(this.state.tutorialStep){
	case 0:
		overlay = <div>
			<div className="overlay-innertext">팩트체크 센터에 오신 것을 환영합니다. 지금부터 여러분은 6개의 주제에 걸쳐 특정 글이나 주장에 대한 근거를 탐색하고, 그 결과를 바탕으로 팩트 여부를 검증하는 과정을 거칠 것입니다.</div>
			<button className="overlay-nextButton" onClick={()=>this.proceedTutorial()}>다음 단계</button>
		</div>
		break;
	case 1:
		overlay = <div className="App">
			<div></div>
			<div id="main">
				<div id="quiz">
					<div id="quiz-header"></div>
					<div className="quizContent" id="quiz1">
						<div id="quizitem-title">[일반] 문재인 등 <Clue innerText="8.15 행사" tooltip="올해 광복절 행사에서 진행된 일인가 보네." onClick={() => this.onClickKeyword("2020년 광복절 행사")}/>에서 노마스크</div>
						<div id="quizitem-author"><Clue innerText="101세형 (181.70)" tooltip="누군지 알 수 없는 오픈 커뮤니티 이용자의 글? " onClick={() => this.onClickClue("신뢰할 수 없는 작성자")}/></div>
						<img id="quizitem-image" src={quiz1} alt="article supplement"/>
						<div id="quizitem-content">저기 실내죠? <br/>
						<Clue innerText="실내에서 다닥다닥 붙어서 노 마스크로 미친거죠ㅎㅎ" tooltip="자극적인 메시지.. 무슨 의도가 담겨있는 걸까?" onClick={() => this.onClickClue("자극적인 메시지")}/></div>
						<Clue id="source" tooltip="신뢰하기 쉽지 않은 커뮤니티 게시글이네?" innerText="출처: DC인사이드 우한 마이너 갤러리" onClick={() => this.onClickClue("오픈 커뮤니티 출처")}/>
					</div>
				</div>
			</div>
			<div className="overlay-innertext">첫 단계에서는 팩트체크할 내용을 관찰하고, 여기에서 힌트를 찾게 됩니다. 중앙 왼쪽에 있는 칸에는 팩트체크의 대상이 되는 내용이 제공되어 있습니다. 내용을 잘 살펴보고, 중요한 키워드나 팩트체크를 하는 데 있어 힌트가 될 만한 내용을 찾아내야 합니다.</div>
			<button className="overlay-nextButton" onClick={()=>this.proceedTutorial()}>다음 단계</button>
		</div>
		break;
	case 2:
		overlay = <div className="App">
			<div></div>
			<div id="main">
				<div id="quiz">
					<div id="quiz-header"></div>
					<div className="quizContent" id="quiz1">
						<div id="quizitem-title">[일반] 문재인 등 <Clue innerText="8.15 행사" tooltip="올해 광복절 행사에서 진행된 일인가 보네." onClick={() => {this.onClickKeyword("2020년 광복절 행사"); this.proceedTutorial()}}/>에서 노마스크</div>
						<div id="quizitem-author">101세형 (181.70)</div>
						<img id="quizitem-image" src={quiz1} alt="article supplement"/>
						<div id="quizitem-content">저기 실내죠? <br/>
						실내에서 다닥다닥 붙어서 노 마스크로 미친거죠ㅎㅎ</div>
						<div id="source">출처: DC인사이드 우한 마이너 갤러리</div>
					</div>
				</div>
			</div>
			<div className="overlay-innertext">단서에는 두 가지가 있습니다. 첫 번째는 전체적인 주제를 아우르는 '키워드'와, 두 번째는 내용의 신뢰도를 판단하는 근거가 되는 '정보의 특징'입니다. 우선 키워드를 찾아 보도록 합시다. 아래 글에서 "8.15 행사"라는 텍스트에 마우스를 올려 클릭해보세요.</div>
			
		</div>
		break;
	case 3:
		overlay = <div className="App">
			<div></div>
			<div id="main">
				<div id="quiz">
					<div id="quiz-header"></div>
					<div className="quizContent" id="quiz1">
						<div id="quizitem-title">[일반] 문재인 등 <Clue innerText="8.15 행사" tooltip="올해 광복절 행사에서 진행된 일인가 보네." onClick={() => this.onClickKeyword("2020년 광복절 행사")}/>에서 노마스크</div>
						<div id="quizitem-author">101세형 (181.70)</div>
						<img id="quizitem-image" src={quiz1} alt="article supplement"/>
						<div id="quizitem-content">저기 실내죠? <br/>
						실내에서 다닥다닥 붙어서 노 마스크로 미친거죠ㅎㅎ</div>
						<div id="source">출처: DC인사이드 우한 마이너 갤러리</div>
					</div>
					<div className="left">
					<div>
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
					</div>

				</div>
			</div>
			<div className="overlay-innertext">키워드를 찾아 그 위에 마우스를 올리면 관련 내용에 대한 단서가 뜨고, 이를 클릭하면 왼쪽 탐사 노트의 '키워드'란에 기록됩니다. 주제가 되는 키워드를 반드시 찾아야 이후 단계의 팩트체크를 진행할 수 있으니 이 부분을 반드시 유의해 주세요.</div>
			<button className="overlay-nextButton" onClick={()=>this.proceedTutorial()}>다음 단계</button>
		</div>
		break;
	case 4:
		overlay = <div className="App">
			<div></div>
			<div id="main">
				<div id="quiz">
					<div id="quiz-header"></div>
					<div className="quizContent" id="quiz1">
						<div id="quizitem-title">[일반] 문재인 등 8.15 행사에서 노마스크</div>
						<div id="quizitem-author">101세형 (181.70)</div>
						<img id="quizitem-image" src={quiz1} alt="article supplement"/>
						<div id="quizitem-content">저기 실내죠? <br/>
						실내에서 다닥다닥 붙어서 노 마스크로 미친거죠ㅎㅎ</div>
						<Clue id="source" tooltip="신뢰하기 쉽지 않은 커뮤니티 게시글이네?" innerText="출처: DC인사이드 우한 마이너 갤러리" onClick={() => {this.onClickClue("오픈 커뮤니티 출처"); this.proceedTutorial()}}/>
					</div>
					<div className="left">
					<div>
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
					</div>

				</div>
			</div>
			<div className="overlay-innertext">이번에는 다른 단서들을 찾아 봅시다. 팩트체크할 자료의 '출처' 부분에 마우스를 올린 후, 클릭해보세요.</div>
		</div>
		break;
	case 5:
		overlay = <div className="App">
			<div></div>
			<div id="main">
				<div id="quiz">
					<div id="quiz-header"></div>
					<div className="quizContent" id="quiz1">
						<div id="quizitem-title">[일반] 문재인 등 8.15 행사에서 노마스크</div>
						<div id="quizitem-author">101세형 (181.70)</div>
						<img id="quizitem-image" src={quiz1} alt="article supplement"/>
						<div id="quizitem-content">저기 실내죠? <br/>
						실내에서 다닥다닥 붙어서 노 마스크로 미친거죠ㅎㅎ</div>
						<div id="source">출처: DC인사이드 우한 마이너 갤러리</div>
					</div>
					<div className="left">
					<div>
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
					</div>

				</div>
			</div>
			<div className="overlay-innertext">키워드와 마찬가지로, 정보의 특징 또한 찾을 때마다 탐사 노트에 기록됩니다. 이 정보들을 바탕으로 최종 단계에서 팩트 여부를 검증하게 됩니다. 충분히 키워드를 찾았다면, 후에는, 아래의 '다음 단계' 버튼을 눌러 다음 단계로 넘어갑니다.</div>
			<button className="overlay-nextButton" onClick={()=>{this.proceedTutorial(); this.proceedStep()}}>다음 단계</button>
		</div>
		break;
	case 6:
		overlay = <div className="App">
			<div></div>
			<div id="main">
				<div id="quiz">
					<div id="quiz-header"></div>
					<div id="searchpage">
						<div id="searchOverlay">
							<div id="searchpopUp"></div>
						</div>
						<div id="searchbox">
							<div id="input">{this.state.searchTerm}</div>
							<FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
						</div>
						{this.state.displayResult?results:(<div/>)}
					</div>
					<div className="left">
					<div>
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
					</div>

				</div>
			</div>
			<div className="overlay-innertext">두 번째 단계에서는 앞서 찾은 키워드들을 바탕으로 추가적인 검색과 검증을 진행하게 됩니다. 키워드 리스트에 있는 단어를 클릭하면, 화면 중앙의 검색 창에서 관련 자료를 검색할 수 있습니다. 키워드를 클릭해보세요. </div>
		</div>
		break;
	case 7:
		overlay = <div className="App">
			<div></div>
			<div id="main">
				<div id="quiz">
					<div id="quiz-header"></div>
					<div id="searchpage">
						<div id="searchOverlay">
							<div id="searchpopUp"></div>
						</div>
						<div id="searchbox">
							<div id="input">{this.state.searchTerm}</div>
							<FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
						</div>
						{this.state.displayResult?results:(<div/>)}
					</div>
					<div className="left">
					<div className="factmeter">
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
					</div>

				</div>
			</div>
			<div className="overlay-innertext">검색 결과를 추가적으로 살펴보면서, 앞선 단계와 같이 팩트체크할 내용에 대한 근거와 추가 특징들을 찾아볼 수 있습니다. 가장 마지막 세 번째 검색 결과의 출처 텍스트("대한민국 청와대")를 클릭해 보세요.</div>
		</div>
		break;
		case 8:
			overlay = <div className="App">
			<div></div>
			<div id="main">
				<div id="quiz">
					<div id="quiz-header"></div>
					<div >
						
					</div>
					<div className="left">
					<div className="factmeter">
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
					</div>

				</div>
			</div>
			<div className="overlay-innertext">팩트 여부를 결정하는 데 있어 핵심적인 증거를 찾을 경우, 팩트 게이지가 움직입니다. 팩트 게이지를 참고하면서 충분히 단서를 탐색하고, 모두 끝난 후에 마무리 단계로 넘어가 주세요. 단서마다 증거가 가지고 있는 힘이 다르기 때문에, 팩트 게이지를 움직이는 정도가 다를 수 있습니다.</div>
			<button className="overlay-nextButton" onClick={()=>{this.proceedTutorial()}}>다음 단계</button>
		</div>
		break;
		case 9:
			overlay = <div>
				<div className="overlay-innertext">이제 여러분은 팩트체커로 활동하실 준비가 모두 완료되었습니다. 다양한 주제들을 살펴보면서, 팩트체크 경험을 쌓아 보세요!</div>
				<button className="overlay-nextButton" onClick={()=>{this.PlayGame()}}>플레이하러 가기</button>
			</div>
			break;
		}



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
				<div id="quizitem-title">[일반] 문재인 등 <Clue innerText="8.15 행사" tooltip="올해 광복절 행사에서 진행된 일인가 보네." onClick={() => this.onClickKeyword("2020년 광복절 행사")}/>에서 노마스크</div>
				<div id="quizitem-author"><Clue innerText="101세형 (181.70)" tooltip="누군지 알 수 없는 오픈 커뮤니티 이용자의 글? " onClick={() => this.onClickClue("신뢰할 수 없는 작성자")}/></div>
				<img id="quizitem-image" src={quiz1} alt="article supplement"/>
				<div id="quizitem-content">저기 실내죠? <br/>
				<Clue innerText="실내에서 다닥다닥 붙어서 노 마스크로 미친거죠ㅎㅎ" tooltip="자극적인 메시지.. 무슨 의도가 담겨있는 걸까?" onClick={() => this.onClickClue("자극적인 메시지")}/></div>
				<Clue id="source" tooltip="신뢰하기 쉽지 않은 커뮤니티 게시글이네?" innerText="출처: DC인사이드 우한 마이너 갤러리" onClick={() => this.onClickClue("오픈 커뮤니티 출처")}/>
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
			<div className="factmeter">
					<div id="labels"><div style={{color: "red"}}>거짓</div><div style={{color: "#009a00"}}>사실</div></div>
					<GaugeChart id="gauge2" percent={(this.state.factScore + 50) / 100} hideText={true} nrOfLevels={2} colors={["#FF0000","#009a00"]}/>
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
						<li>신뢰할 수 있는 사이트, 이용자의 정보가 아니었고 </li>
						<li>올해 사진이 아니었음</li>
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
					<a href="https://factcheck.snu.ac.kr/v2/facts/2456">https://factcheck.snu.ac.kr/v2/facts/2456</a>
				</div>

			</div>):(<div>

			</div>)}

			<div id="overlay">
				{overlay}
			</div>
		</div>)
	}	
}

export default Tutorial