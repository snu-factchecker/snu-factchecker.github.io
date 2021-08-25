import React, { isValidElement } from "react";

import GaugeChart from "react-gauge-chart";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import map from "./quiz2_map.png";

import graph1 from "./quiz2_graph1.png";
import graph2 from "./quiz2_graph2.png";

import quiz2 from "./quiz2.jpeg";

import "./QuizPage.scss";

import Clue from "../NewsArticle/Clue";

class QuizPage2 extends React.Component {
	state = {
		currentStep: 0,
		cluesCollected: [],
		keywordsCollected: [],
		factScore: 0,
		factScoreChanged: false,
		tipList: [],

		searchTerm: "찾은 키워드를 클릭하여 검색해보기",
		searchResult: [],

		visibility: [false, false, false],
	};

	proceedStep = () => {
		this.setState({ currentStep: this.state.currentStep + 1 });
	};

	revertStep = () => {
		this.setState({ currentStep: this.state.currentStep - 1 });
	};

	returnToTopics = () => {
		this.props.history.push("/topics");
	};

	formatGaugeValue = (value) => {
		if (!this.state.factScoreChanged) {
			return "단서를 찾아 보세요.";
		}
		if (value > 75) {
			return "사실";
		} else if (value > 50) {
			return "대체로 사실";
		} else if (value > 25) {
			return "대체로 사실 아님";
		} else {
			return "전혀 사실 아님";
		}
	};

	onClickClue = (clueText) => {
		let temp = this.state.cluesCollected;

		for (let i = 0; i < temp.length; i++) {
			if (temp[i] === clueText) {
				return;
			}
		}
		temp.push(clueText);
		this.setState({ cluesCollected: temp });
	};

	// onClickClue = (offset)=>{

	// 	this.setState({factScore: this.state.factScore+offset})
	// }

	onClickKeyword = (keywordText) => {
		let temp = this.state.keywordsCollected;

		for (let i = 0; i < temp.length; i++) {
			if (temp[i] === keywordText) {
				return;
			}
		}
		temp.push(keywordText);
		this.setState({ keywordsCollected: temp });
	};

	searchKeyword = (keywordText) => {
		if (this.state.currentStep === 1) {
			this.setState({ searchTerm: keywordText });
			this.setState({ displayResult: true });
		}
	};

	displayResult = (index) => {
		let vis = this.state.visibility;
		vis[index] = !vis[index];

		this.setState({ visibility: vis });
	};

	clamp = (val, min, max) => {
		return val > max ? max : val < min ? min : val;
	};

	setFactScore = (offset) => {
		let value = this.clamp(this.state.factScore + offset, -50, 50);

		this.setState({ factScore: value, factScoreChanged: true });
	};

	render() {
		const keywords = this.state.keywordsCollected.map((item) => {
			return (
				<div key={item} onClick={() => this.searchKeyword(item)} className="keyword">
					{item}
				</div>
			);
		});

		const clues = this.state.cluesCollected.map((item) => {
			return <div key={item}>{item}</div>;
		});

		const results_1 = (
			<div id="searchresults">
				<strong>장소 검색 결과</strong>
				<br />
				<Clue
					tooltip="논술학원이구나.
					그래서 이런 독서교육 홍보 차원에서 게시된 글이구나."
					onClick={() => this.setFactScore(-10)}
				>
					<img src={map} style={{ width: "80%" }} />
				</Clue>
			</div>
		);

		const results_2 = (
			<div id="searchresults">
				<strong>웹사이트 검색 결과</strong>

				<div className="search-result noimage">
					<div>
						<div
							className="item-title"
							onClick={() => {
								this.displayResult(0);
							}}
						>
							한국인의 문해력 OECD 조사결과
						</div>
						<div className="item-preview">
							OECD의 가장 최근 국제성인역량조사(PIAAC: Programme for the International
							Assessment of Adult Competencies)에 따르면
							<Clue
								tooltip="실제로는 문해력이 OECD 평균보다 더 높잖아?"
								onClick={() => {
									this.onClickClue("주장과 반대되는 근거");
									this.setFactScore(-10);
								}}
							>
								한국의 ‘문해력’은 273점으로 OECD평균인 266점보다 상당히 높았습니다
								(그래프1)
							</Clue>
						</div>
						<div className="sourceBox">
							<div className="item-source">뉴스톱 송영훈 팩트체커 |</div>
							<div className="item-date">2021.03.26</div>
						</div>
						<div
							className={`item-content ${
								this.state.visibility[0] ? "" : "invisible"
							}`}
						>
							<img src={graph1} style={{ width: "80%" }} />
							<div>
								{"<그래프 1: 한국인의 문해력 평균과 OECD 국가 전체의 문해력 평균>"}
							</div>
							<img src={graph2} style={{ width: "80%" }} />
							<div>{"<그래프 2: 16-24세의 문해력 순위>"}</div>
							<br />
							OECD의 가장 최근 국제성인역량조사(PIAAC: Programme for the International
							Assessment of Adult Competencies)에 따르면 한국의 ‘문해력’은 273점으로
							OECD평균인 266점보다 상당히 높았습니다 (그래프1). 그런데
							청년층(16~24세)에서는 OECD 국가 중 4위이지만(그래프 2), 25세를 기점으로
							급격히 하락해, 35∼44세에는 평균 아래, 45세 이후에는 하위권, 55∼65세에는
							최하위권으로 떨어졌습니다. 연령이 높아질수록 문해력 측정 점수가 떨어지는
							현상 자체는 일반적이었지만 한국의 경우 그 격차가 매우 크다는 점이 다른
							나라들과 달랐습니다.
						</div>
					</div>
				</div>

				<div className="search-result noimage">
					<div>
						<div
							className="item-title"
							onClick={() => {
								this.displayResult(1);
							}}
						>
							한국인 문서 해독능력 형편없다…OECD국중 최하위수준
						</div>
						<div className="item-preview">
							한국교육개발원 이희수(李熙洙) 연구위원은 지난해 8월 16세 이상 65세
							미만의 국민 1200여명을 대상으로 국제성인문해조사(IALS)를 실시한 결과
							문서문해력 영역에서 908명(75.7%)이 영수증, 열차시간표, 구직원서, 지도,
							약 설명서 등의 그림이나 도표를 제대로 이해하지 못하는 최하 수준인 1,
							2등급으로 분류됐다고 2일 밝혔다.
						</div>
						<div className="sourceBox">
							<div className="item-source">동아일보</div>
							<Clue
								innerText="| 2002-01-02"
								tooltip="최하위 수준은 2002년 기사네."
								className="item-source"
								onClick={() => {
									this.onClickClue("현재 상황과 관련 없는 자료");
									this.setFactScore(-10);
								}}
							></Clue>
						</div>

						<div
							className={`item-content ${
								this.state.visibility[1] ? "" : "invisible"
							}`}
						>
							<p>
								IALS는 단순히 문자를 읽고 쓰는 능력이 아니라 일상생활에서 접하는
								문자 그림 숫자 정보를 이해하고 활용하는 능력을 측정하는 조사로
								산문문해, 문서문해, 수량문해 등 3가지 영역을 측정하며 영역별로 500점
								만점으로 계산한다.
							</p>
							<p>
								OECD와 캐나다 통계청이 회원국 등을 대상으로 실시한 문해조사에서
								한국은 고도의 정보처리 능력을 가진 4, 5등급에 해당하는 비율은
								23개국(스위스는 3개 언어권 별도 실시)의 평균 16.2%에 크게 뒤진
								2.4%에 그쳐 칠레(1.5%)에 이어 최하위를 기록했다. ‘문서문해력’을
								500점 만점으로 환산한 점수는 237.5점으로 세계 20개국 중 19위를
								차지했으며 1위는 스웨덴(305.6점)이었다.
							</p>
							<p>
								이 연구위원은 “한글을 단순히 읽고 쓰는 국민은 많지만 숫자 문서 도표
								등을 정확하게 이해하는 문해능력은 떨어진다”면서 “과학적이고 체계적인
								문해 교육에 국가적인 지원과 관심이 필요하다”고 말했다. 박 용기자
								parky@donga.com
							</p>
						</div>
					</div>
				</div>
			</div>
		);

		return (
			<div id="quiz">
				{this.state.currentStep === 0 ? (
					<div id="quiz-header">
						<div id="header-title">Step 1: 온라인상의 정보 의심하기</div>
						<div id="tip-box">
							<div id="tip-title">허위정보 분별하기 팁</div>
							<div id="tip-content">
								첫째, 있는 그대로 받아들이지 않는다.
								<br />
								둘째, 의심스러운 부분이 있는지 검토한다.
							</div>
						</div>
					</div>
				) : (
					<div id="quiz-header">
						<div id="header-title">Step 2: 단서를 기반으로 정보 확인하기</div>
						<div id="tip-box">
							<div id="tip-title">허위정보 분별하기 팁</div>
							<div id="tip-content">
								첫째, 해당 주장들에 대한 사실여부를 검토해본다.
								<br />
								둘째, 간접정보보다는 직접정보를 찾아볼 수 있도록 한다.
							</div>
						</div>
					</div>
				)}
				{this.state.currentStep === 0 ? (
					<div className="quizContent">
						<div id="quizitem-title">
							읽지만 이해하지 못한다! 한국인 문해력 OECD국중 최하위 수준
						</div>
						<div id="quizitem-author">
							<Clue
								tooltip="VERITAS독서센터는 어떤 블로그일까?"
								innerText="VERITAS 독서센터"
								onClick={() => this.onClickKeyword("출처: VERITAS독서센터")}
							/>
						</div>

						<div id="quizitem-content">
							문해력이라고 들어보셨나요? 우리나라는 세계에서 문맹률이 가장 낮은
							나라라고 합니다. 글자를 읽지 못하는 문맹률은 1% 이하라고 하죠. 누구나
							글자는 읽는다는 것입니다. 하지만! 글을 이해하는 능력인 독해력과 문해력
							즉 '실질 문맹률'은 75%에 달해 OECD 22개국 중 최하위에 해당된다고 합니다.
							어떻게 이런 일이 벌어진 걸까요? <br />
							대신 읽어 주고 요약해주는 시대, 인터넷 정보 중심으로 읽기를 대신하는
							요즘 최근 우리나라 독서 실태에서도 보듯 3명 중 1명은 1년에 책을 한 권도
							읽지 않고, 긴 글을 읽기 싫어하는 세태를 반영해 인터넷 기사나 글에는 3줄
							요약, 이미지 중심의 카드 뉴스 등 읽기와 점점 멀어지고 있습니다. 그
							현실이 그대로 반영되어 글자를 읽기는 하지만 이해하지는 못하는
							<Clue
								innerText="문해율이
							OECD 국가 중 최저"
								tooltip="문해력 최하위라는 근거는 없네?"
								onClick={() => {
									this.onClickClue("주장의 근거 없음");
									this.onClickKeyword("문해력 OECD국중 최하위");
								}}
							/>
							가 되었습니다.
							<br />
							<br />
							<img id="quizitem-image" src={quiz2} alt="article supplement" />
							<Clue
								tooltip="책 판매권수에 대한 이 자료가 근거가 되나? 자세히 보면 판매권수가 모두 줄어들은 것만도 아니네??"
								onClick={() => this.onClickClue("제시된 자료와 주장의 연관성 없음")}
								innerText="▶ 사진출처: 주간경향, 독서의 양극화 '분해 격차' 커진다_ 박은하 기자 (2016.11.08)"
							></Clue>
							<br />
							<br />
							문해력은 성인에게는 물론 학생들에게도 중요한 능력입니다. 문해력은
							아이들의 학습능력과 연관되는 만큼 우리 아이의 문해력을 점검해보고
							문해력을 키울 수 있는 방법을 생각해야 합니다. 단편적인 정보 중심,
							정제되지 않은 언어로 쓰여진 인터넷 글이나 미디어 중심의 정보 습득보다는
							<Clue
								innerText=" 책을 통해 긴 글을 읽고 생각하고 이해하는 교육이 문해력을 키우는
							방법입니다."
								tooltip="VERITAS 독서 센터가 독서 토론 교육을 광고하는 것은 아닐까?"
								onClick={() => this.onClickClue("상업적 의도 의심")}
							/>
							<br />
							<div>출처: VERITAS독서센터 - 네이버 블로그</div>
						</div>
					</div>
				) : this.state.currentStep === 1 ? (
					<div id="searchpage">
						<div id="searchOverlay">
							<div id="searchpopUp"></div>
						</div>
						<div id="searchbox">
							<div id="input">{this.state.searchTerm}</div>
							<FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
						</div>
						{this.state.searchTerm == "출처: VERITAS독서센터" ? (
							results_1
						) : this.state.searchTerm == "문해력 OECD국중 최하위" ? (
							results_2
						) : (
							<div />
						)}
					</div>
				) : null}

				{this.state.currentStep < 2 ? (
					<div className="left">
						<div id="factmeter">
							<div id="labels">
								<div style={{ color: "red" }}>거짓</div>
								<div style={{ color: "#009a00" }}>사실</div>
							</div>
							<GaugeChart
								id="gauge"
								percent={(this.state.factScore + 50) / 100}
								hideText={true}
								nrOfLevels={2}
								colors={["#FF0000", "#009a00"]}
							/>
							<div>{this.formatGaugeValue(this.state.factScore + 50)}</div>
							<div>
								총 단서 5개 중 {this.state.cluesCollected.length}개를 찾았습니다.
							</div>
						</div>
						<div id="notebook">
							<div id="title">탐사 노트</div>
							<div id="characteristics" className="values">
								<div id="char-title" className="notebook-title">
									정보의 특징
								</div>
								<div>{clues}</div>
							</div>
							<div id="keywords" className="values">
								<div id="keyword-title" className="notebook-title">
									키워드
								</div>
								<div>{keywords}</div>
							</div>
						</div>
					</div>
				) : null}

				<div id="buttons">
					{this.state.currentStep > 0 ? (
						<button id="prev-button" onClick={() => this.revertStep()}>
							이전 단계
						</button>
					) : (
						<div />
					)}
					{this.state.currentStep === 2 ? (
						<button
							id="next-button"
							disabled={!this.state.factScoreChanged}
							onClick={() => this.returnToTopics()}
						>
							완료
						</button>
					) : (
						<div />
					)}
					{this.state.currentStep < 2 ? (
						<button
							id="next-button"
							disabled={!this.state.factScoreChanged && this.state.currentStep === 1}
							onClick={() => this.proceedStep()}
						>
							다음 단계
						</button>
					) : (
						<div />
					)}
				</div>
				{this.state.currentStep === 2 ? (
					<div id="quiz-result">
						<div id="result">
							해당 정보는
							<ol>
								<li>게시물의 출처는 다소 상업적 의도를 지닌 블로그 글이며,</li>
								<li>제시된 표는 적절한 근거가 되지 않음.</li>
								<li>해당 주장을 검색해본 결과, 사실과 다름.</li>
							</ol>
							따라서 <span id="spec">전혀 사실이 아님!</span>
						</div>

						<div id="myresults">
							<div id="resp">
								<div className="notebook-title">나의 결과</div>
								<div id="myresponse">
									{this.formatGaugeValue(this.state.factScore + 50)}
								</div>
								<div id="resultcheck">
									{this.formatGaugeValue(this.state.factScore + 50) ===
									"전혀 사실 아님" ? (
										<div>
											정답과 일치합니다. <br />
											성공적으로 팩트체크를 진행하셨습니다.
										</div>
									) : (
										<div>
											결과가 일치하지 않습니다.
											<br />
											단서를 더 찾고 싶다면 이전 단계로 돌아가서 찾아보세요.
										</div>
									)}
								</div>
							</div>
							<div>
								<div className="notebook-title">내가 찾은 단서들</div>
								<div className="notebook-content">{clues}</div>
							</div>
						</div>
						<div id="clueCount">
							총 5개의 단서 중 <span id="spec">{clues.length}</span>개의 단서를
							찾았습니다.
						</div>
						<div>
							본 퀴즈 내용에 대한 상세한 팩트체크 내용은 SNU팩트체크센터 홈페이지 다음
							링크에 있습니다.<br></br>
							<a href="https://factcheck.snu.ac.kr/v2/facts/2910">
								https://factcheck.snu.ac.kr/v2/facts/2910
							</a>
						</div>
					</div>
				) : (
					<div></div>
				)}
			</div>
		);
	}
}

export default QuizPage2;
