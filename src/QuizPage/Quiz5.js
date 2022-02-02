import React from "react";

import GaugeChart from "react-gauge-chart";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import quiz5 from "./quiz5.png";

import "./QuizPage.scss";

import Clue from "../NewsArticle/Clue";

class QuizPage5 extends React.Component {
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
		if (this.state.currentStep===1){
			window.alert("팩트체크 완료! 완료 버튼을 누르시고 간단한 설문에 응하시면 됩니다. 꼭 응답해주세요.")
		}
		this.setState({ currentStep: this.state.currentStep + 1 });
	};

	revertStep = () => {
		this.setState({ currentStep: this.state.currentStep - 1 });
	};

	returnToTopics = () => {
		// window.open("https://forms.gle/JC5eYqiokYXfMeKN6");
		this.props.history.push("/end");
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

		const results = (
			<div id="searchresults">
				<strong>연구 검색 결과</strong>

				<div className="search-result noimage">
					<div>
						<div
							className="item-title"
							onClick={() => {
								this.displayResult(0);
							}}
						>
							<Clue
								tooltip="정말 기사대로 국제 저널에 실린 논문이 맞네. 내용이 너무 전문적이니 더 검색해봐야겠어"
								onClick={() => {
									this.onClickClue("공신력있는 근거자료 확인");
									this.setFactScore(10);
								}}
							>
								Stereotypic neutralizing VH antibodies against SARS-CoV-2 spike
								protein receptor binding domain in patients with COVID-19 and
								healthy individuals
							</Clue>
						</div>
						<div className="item-preview">
							Stereotypic antibodies (Abs) are produced in healthy individuals by
							preexisting naïve B cells that have not undergone somatic hypermutation
							or class switching. Kim et al. have identified stereotypic neutralizing
							Abs (nAbs) against SARS-CoV-2 spike protein receptor binding domain
							(RBD) in healthy individuals and patients with COVID-19..
						</div>
						<div className="sourceBox">
							<div className="item-source">Science Translational Medicine</div>
							<div className="item-date">2021.01.27</div>
						</div>
					</div>
				</div>

				<strong>기사 검색 결과</strong>

				<div className="search-result noimage">
					<div>
						<div
							className="item-title"
							onClick={() => {
								this.displayResult(1);
							}}
						>
							코로나 안걸린 사람도 이미 면역 세포 있다” 서울대 연구에 대한 논란
						</div>
						<div className="item-preview">
							최근 서울대병원과 서울대학교가 코로나 항체를 연구해 발표한 한 논문이
							전문가는 물론 소셜미디어와 온라인 상에서 화제가 되고
							있습니다. 서울대병원(감염내과 오명돈·박완범)과 서울대학교(생화학교실
							김상일·정준호, 전기정보공학부 노진성 권성훈) 공동 연구팀 국내 코로나
							환자 17명을 분석한 결과 13명이 코로나 바이러스에 대항하는 동일한
							중화항체를 형성했다고 합니다.
						</div>
						<div className="sourceBox">
							<div className="item-source">조선일보 | </div>
							<div className="item-date">2021.06.09</div>
						</div>

						<div
							className={`item-content ${
								this.state.visibility[1] ? "" : "invisible"
							}`}
						>
							<p>
								최근 서울대병원과 서울대학교가 코로나 항체를 연구해 발표한 한 논문이
								전문가는 물론 소셜미디어와 온라인 상에서 화제가 되고
								있습니다. 서울대병원(감염내과 오명돈·박완범)과 서울대학교(생화학교실
								김상일·정준호, 전기정보공학부 노진성 권성훈) 공동 연구팀 국내 코로나
								환자 17명을 분석한 결과 13명이 코로나 바이러스에 대항하는 동일한
								중화항체를 형성했다고 합니다. 놀라운 건 연구팀이 코로나 사태가
								발생하기 전 일반인 10명의 데이터를 분석해보니 이 중 6명은 코로나에
								걸리지 않았는데도 환자들과 동일한 면역세포를 가지고 있는 것으로
								확인됐습니다.
							</p>

							<p>
								이에 대하여{" "}
								<Clue
									tooltip="전문가들도 이 연구 결과에 관심을 갖고 해석하고 있구나."
									onClick={() => {
										this.onClickClue("연구 결과에 대한 전문가의 해석");
									}}
								>
									마상혁 대한백신학회 부회장은 항체나 면역세포가 있을 수 있지만,
								</Clue>
								그렇다고 해서 반드시 코로나를 이겨낼 수 있는 게 아니라는 점을
								강조하였습니다.  ”중화항체가 충분해야 감염에 대한 방어력이
								형성된다”며 “단순히 항체가 있다고 해서 면역력이 있다고 볼 수 없고,
								그래서 백신이나 방역이 필요 없다고 보면 안된다는 점을 강조합니다.
							</p>
						</div>
					</div>
				</div>

				<div className="search-result noimage">
					<div>
						<div
							className="item-title"
							onClick={() => {
								this.displayResult(2);
							}}
						>
							서울대 연구팀, 코로나19 면역세포 있어도.. 방역·백신 여전히 중요
						</div>
						<div className="item-preview">
							서울대 연구팀의 논문은 안 맞아도 될 백신을 맞힌다는 음모론, 또
							가짜뉴스로 소비되고 있습니다. 코로나19면역세포가 한국인 10명 중 6명에게
							발견됐다는 연구 결과에 대해서 백신 무용론과 같은 해석은 “너무 멀리 나간
							것”이라 설명합니다.
						</div>
						<div className="sourceBox">
							<div className="item-source">JTBC 뉴스룸</div>
							<div className="item-date">2021.03.16</div>
						</div>
						<div
							className={`item-content ${
								this.state.visibility[2] ? "" : "invisible"
							}`}
						>
							<p>
								서울대 연구팀의 논문은 안 맞아도 될 백신을 맞힌다는 음모론, 또
								가짜뉴스로 소비되고 있습니다. 코로나19면역세포가 한국인 10명 중
								6명에게 발견됐다는 연구 결과에 대해서 백신 무용론과 같은 해석은
								“너무 멀리 나간 것”이라 설명합니다.
							</p>
							<p>논문을 쓴 연구팀에 직접 들어봤습니다.</p>
							<p>
								[정준호/서울대 의대 생화학교실 교수 : 메르스 바이러스나 사스
								바이러스 같은 경우에는 10명 중에서 3명이 돌아가시거든요. 이번
								코로나바이러스는 걸려도 돌아가시는 분들의 숫자가 적은 거죠.
								(면역세포 때문에) 질병의 중증도가 조금 약해질 가능성이 있는 거죠.]
							</p>
							메르스의 경우 치명률이 30%를 넘어가지만, 코로나의 경우 2% 수준이라는 것,
							이미 알려져 있죠. 이 논문은 이런 상황이 왜 일어나는지 답을 줍니다.
							그런데도 논문을 놓고 "백신을 안 맞아도 된다는 뜻"이라는 반응이 나온다고
							연구팀에 전했습니다. 답변을 들어보시죠.
							<p>
								<Clue
									tooltip="해당 논문의 연구자들도 연구 결과의 중요성을 강조하는 동시에 과도한 해석의 우려를 제기하고 있어."
									onClick={() => {
										this.onClickClue("연구팀의 연구 결과에 대한 인터뷰 내용");
									}}
								>
									[정준호/서울대 의대 생화학교실 교수 : 이런 면역세포가 있다고
									백신 접종을 안하는 것은 완전히 큰 오해라고 보셔야 할 것
									같습니다. (오히려) 백신 접종을 하셔서 이 세포가 그 항체를 잘
									분비할 수 있는 변화가 되게 도와줘야 되고요.]
								</Clue>
							</p>
						</div>
					</div>
				</div>
			</div>
		);

		return (
			<div id="quiz">
				{this.state.currentStep === 0?
				(<div id="quiz-header">
					<div id="header-title">Step 1: 있는 그대로 받아들이지 않고, 의심스러운 부분 찾기.</div>
				</div>):(<div id="quiz-header">
					<div id="header-title">Step 2: 추가적으로 정보를 검색하기</div>
				</div>)
				}
				{this.state.currentStep === 0 ? (
					<div className="quizContent" id="quiz1">
						<div id="quizitem-title" style={{ display: "flex", alignItems: "center" }}>
							<Clue
								tooltip="한국인 70%가 코로나 항체를 이미 가지고 있다고?"
								onClick={() => {
									this.onClickKeyword("10명 중 7명 코로나 항체");
								}}
							>
								한국인 10명 중 7명은 코로나 항체
							</Clue>{" "}
							있다
							<Clue
								tooltip="연합뉴스는 공신력 있는 언론사 중 하나야."
								onClick={() => {
									this.onClickClue("공신력 있는 언론사의 기사");
									this.setFactScore(10);
								}}
							>
								<img
									src="https://news.imaeil.com/inc/photos/2020/03/10/2020031019075094251_l.jpg"
									style={{ width: "100px", marginLeft: "20px" }}
								></img>
							</Clue>
						</div>
						<div id="quizitem-author">
							기사입력 2021.06.02 오후 01:21
							<br />
							연합뉴스 배준용 기자
						</div>

						<div id="quizitem-content">
							<br />
							<img src={quiz5} style={{ width: "70%", margin: "0 auto" }} />
							<br />
							<Clue
								tooltip="서울대학교 연구팀의 연구 결과로군."
								onClick={() => {
									this.onClickClue("연구 결과");
								}}
							>
								최근 서울대병원 (감염내과 오명돈, 박완범)과 서울대학교 (생화학교실
								김상일, 정준호, 전기정보공학부 노진성, 권성훈) 공동 연구팀이 코로나
								사태가 발생하기 전 일반인 13명의 데이터를 분석해보니 이 중 10명은
								코로나에 걸리지 않았는데도 코로나 환자들과 동일한 면역세포를 가지고
								있는 것으로 확인됐습니다.
							</Clue>
							<br />
							<br />
							또한, 연구팀이 코로나 사태가 발생하기 전 미국에서 수집된 미국인 10명의
							데이터를 분석해보니 이 환자들과 동일한 면역세포를 가진 사람이 6명
							나왔다고 합니다.
							<br />
							<br />
							논문 공동 저자인 정준호 교수는 "단순 수치로 보면 한국인은 약 70% 이상,
							미국인은 60%에서 코로나에 대항하는 항체를 만드는 동일한 면역세포를
							가지고 있었다는 것"이라며 "인류 중 상당수가 코로나가 발생하기 전에 이미
							코로나에 대항할 수 있는 면역세포를 가지고 있었다는 추정을 조심스럽게 해
							볼 수 있다"고 말했습니다.
							<br />
							<br />정 교수는 "이번 연구로 인류 중 상당수가 코로나에 대항하는 항체를
							만들 능력을 이미 갖고 있기 때문에 치명률이 낮은 게 아닌가 하는 추론을
							해볼 수 있게 된 것"이라고 말했습니다.
							<Clue
								tooltip="자료의 출처가 있네. 검색해봐야겠다."
								onClick={() => {
									this.onClickClue("근거자료의 구체적 제시");
								}}
							>
								해당 연구 논문은 세계적인 중개의학 학술지 트랜스레셔널 메디신
								(Science Translational Medicine)에 실렸습니다.
							</Clue>
							<br />
							<br />
							▶▶ 배준용 기자
							<br />
							사회정책부 기자입니다. 코로나19, 의료 이슈를 취재하고 있습니다
							<br />
							<br />
							{"<저작권자(c) 연합뉴스>"}
							<br />
							<br />
							<div>출처: 연합뉴스</div>
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
						{this.state.displayResult ? results : <div />}
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
								총 단서 6개 중 {this.state.cluesCollected.length}개를 찾았습니다.
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
								<li>해당 정보는 공신력 있는 언론사 기사이며, </li>
								<li>내용 역시 국제 저널에 실린 연구 결과에 대한 것</li>
								<li>
									연구진 역시 코로나19 항체에 대한 연구 결과와 백신 접종의
									필요성과 결부시켜 오해하는 것을 우려하며 객관적 사실만을
									강조하고 있음.
								</li>
							</ol>
							따라서 <span id="spec">대체로 사실!</span>
						</div>

						<div id="myresults">
							<div id="resp">
								<div className="notebook-title">나의 결과</div>
								<div id="myresponse">
									{this.formatGaugeValue(this.state.factScore + 50)}
								</div>
								<div id="resultcheck">
									{this.formatGaugeValue(this.state.factScore + 50) ===
									"대체로 사실" ? (
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
							총 6개의 단서 중 <span id="spec">{clues.length}</span>개의 단서를
							찾았습니다.
						</div>
					</div>
				) : (
					<div></div>
				)}
			</div>
		);
	}
}

export default QuizPage5;
