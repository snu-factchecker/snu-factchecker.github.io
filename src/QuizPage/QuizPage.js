import React from "react";

import GaugeChart from "react-gauge-chart";
import QuizSidebar from "./QuizSidebar.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch,
    faAngleDown,
    faAngleUp,
} from "@fortawesome/free-solid-svg-icons";

import quiz1 from "./quiz1_img.png";

import "./QuizPage.scss";

import Clue from "../NewsArticle/Clue";

class QuizPage extends React.Component {
    state = {
        currentStep: 0,
        cluesCollected: [],
        keywordsCollected: [],
        factScore: 0,
        factScoreChanged: false,
        tipList: [],

        searchTerm: "찾은 키워드를 오른쪽 화면에서 클릭하여 검색할 수 있습니다",
        searchResult: [],

        visibility: [false, false, false],

        highlightsActive: false,

        currentLink: {},
        searchResultDB: {
            "2020년 광복절 행사": [
                {
                    image: "https://imgnews.pstatic.net/image/022/2019/08/15/20190815508490_20190815184507880.jpg?type=w647",
                    previewText:
                        "“우리 경제 신성장 동력 마련 / 분단 극복할 때 광복도 완성” / “日 부당한 수출규제에 맞서 / 뚜벅뚜벅 경제강국 길 갈 것” / 2020 도쿄올림픽 성원 보내 / 한·일 갈등 외교적 해결 방점",
                    mainText:
                        "<p>문재인 대통령은 15일 “일본의 부당한 수출규제에 맞서 우리는 책임 있는 경제강국을 향한 길을 뚜벅뚜벅 걸어갈 것”이라며 주요 부품·소재의 국산화와 수입 다변화를 통한 ‘극일(克日)’ 의지를 분명히 했다.문 대통령은 이날 충남 천안 독립기념관에서 열린 광복절 경축식 경축사에서 “국제 분업체계 속에서 어느 나라든 자국이 우위에 있는 부문을 무기화한다면 평화로운 자유무역 질서가 깨질 수밖에 없다”며 “먼저 성장한 나라가 뒤따라 성장하는 나라의 사다리를 걷어차서는 안 된다”고 지적했다. </p> 그러나 동시에 “지금이라도 일본이 대화와 협력의 길로 나온다면 우리는 기꺼이 손을 잡을 것”이라며 “공정하게 교역하고 협력하는 동아시아를 함께 만들어갈 것”이라고 강조했다. 문 대통령은 “세계인들이 평창에서 평화의 한반도를 보았듯이 도쿄 올림픽에서 우호와 협력의 희망을 갖게 되길 바란다”며 2020년 도쿄 올림픽에 대한 성원도 보냈다. 이 같은 발언들은 최악의 상황으로 치닫고 있는 한·일 갈등에 대한 외교적 해결을 위해 대화의 문을 열어놓으면서 유화적 메시지를 보낸 것으로 풀이된다. <p> 문 대통령은 또 “평화로 번영을 이루는 평화경제를 구축하고 통일로 광복을 완성하고자 한다”며 “평화경제에 우리가 가진 모든 것을 쏟아부어 ‘새로운 한반도’의 문을 활짝 열겠다. 평화경제를 통해 우리 경제의 신성장동력을 만들겠다”고 밝혔다. 그러면서 “‘분단’을 극복해낼 때 비로소 우리의 ‘광복’은 완성되고 아무도 흔들 수 없는 나라가 될 것”이라고 말했다. </p> 남북 평화경제가 실현되면 8000만 단일 시장을 가진 세계 6위권 경제대국이 될 수 있다는 전망도 제시했다. 문 대통령은 특히 “평화경제는 한반도의 완전한 비핵화 위에 북한이 핵이 아닌 경제와 번영을 선택할 수 있도록 대화와 협력을 계속해 나가는 데서 시작한다”며 ‘비핵화를 전제로 한 평화경제’ 개념을 규정해 주목됐다. 최근 북한의 잇단 미사일 도발로 인해 평화경제론에 대한 부정적 의견이 나오는 점을 의식한 듯 문 대통령은 “미국이 북한과 동요 없이 대화를 계속하고 일본 역시 북한과 대화를 추진하고 있는 현실을 직시하기 바란다”며 “이념에 사로잡힌 외톨이로 남지 않길 바란다”고 반박했다. 평화경제를 비난한 자유한국당 등 야당 일각을 ‘이념에 사로잡힌 외톨이’라고 몰아세운 것이다. <p> 문 대통령은 경축사 초반 김기림의 ‘새나라 송(頌)’에 나오는 ‘아무도 흔들 수 없는 나라’를 인용하며 “‘아무도 흔들 수 없는 나라’는 외세의 침략과 지배에서 벗어난 신생독립국가가 가져야 할 당연한 꿈이었지만 아직 이루지 못했다. 아직도 우리가 충분히 강하지 않기 때문이며 아직도 우리가 분단되어 있기 때문”이라고 설명했다. 이어 “저는 오늘 어떤 위기에도 의연하게 대처해온 국민들을 떠올리며 우리가 만들고 싶은 나라, ‘아무도 흔들 수 없는 나라’를 다시 다짐한다”며 이를 위해 △경제강국 △교량국가 △평화경제 구축이라는 3대 목표를 제시했다. 문 대통령은 “경제에서 주권이 확고할 때 우리는 우리 운명의 주인으로 흔들리지 않는다”며 “우리가 힘을 가지면 대륙과 해양을 잇는 나라, 동북아 평화와 번영의 질서를 선도하는 나라가 될 수 있다”고 역설했다.</p>  <p> 김달중 기자 dal@segye.com </p> ",
                    title: "文대통령 “평화경제에 모든 것 쏟아부을 것”",
                    source: "세계일보",
                    uploadDate: "2019.08.15",
                    key: 1,
                },
                {
                    image: "https://pbs.twimg.com/media/Efc-728UcAI3BOI?format=jpg&name=large",
                    previewText:
                        "문 대통령, 이날 경축식에서 광복회원과 4부요인, 정당대표, 종단대표, 정부 주요인사, 주한외교단, 사회 각계 주요 인사 등과 함께 대한민국이 앞으로도 포용과 조화의 가치 꽃피우며 발전해 나가기를 기원",
                    mainText:
                        "문재인 대통령은 김정숙 여사와 함께 15일(토) 오전 10시 동대문디자인플라자(DDP)에서 열린 제75주년 광복절 경축식에 참석하였다.<p>문 대통령은 ‘우리나라’를 주제어로 한 이날 경축식에서 광복회원과 4부요인, 정당대표, 종단대표, 정부 주요인사, 주한외교단, 사회 각계 주요 인사 등과 함께 수많은 애국지사와 순국선열이 꿈꿔온 평화와 공존의 공동체인 대한민국이 앞으로도 포용과 조화의 가치를 꽃피우며 발전해 나가기를 기원하였다.</p><p>특히 청산리 전투 100주년을 맞아 김좌진 장군의 후손인 배우 송일국 씨와 함께, 3살 때 청력장애를 앓았지만 포기하지 않고 미래의 꿈을 향해 도전 중인 대한민국 청년 이소별 씨가 경축식 사회를 맡음으로써, 처음으로 장애인과 비장애인이 함께 국가 기념식 사회를 맡음으로써 애국지사와 순국선열의 애국애족 정신이 오늘날 우리 사회 내에서 조화로운 공동체 정신으로 이어지길 바라는 뜻을 더하였다.</p><p>이날은 통상 진행되는 국가 기념식 의전과 달리 특별히 네 분의 애국지사 대표가 주빈이 될 수 있도록 의장대의 호위를 받으며 입장함으로써 공식 행사가 시작되었다. 미리 경축식장에 도착하여 기다리던 문 대통령 내외는 애국지사 한 분 한 분께 존경과 감사의 인사를 드리며 이들을 주빈석으로 맞이함으로써 애국지사들의 숭고한 희생정신을 기리고 사회적 예우를 강화하고자 하는 대통령과 정부의 뜻을 나타냈다.</p><p>또한 고령의 애국지사들과 포상 대상자들의 건강을 최우선 고려하여 별도의 대기 공간을 마련하고 보건소와 의료진 협조를 통해 응급상황 대응체계를 미리 갖추었으며, 특히 경축식에 참석하신 네 분의 애국지사들은 별도로 준비된 의전차량을 이용하여 서울지방경찰청의 차량 경호를 받으며 출발지에서 행사장까지 모시는 등 예우에 부족함이 없도록 하였다.</p>",
                    title: "문 대통령 내외, 제75주년 광복절 경축식 참석",
                    source: "광남일보",
                    uploadDate: "2020.08.15",
                    key: 2,
                },
                {
                    image: "https://pbs.twimg.com/media/Efc-728UcAI3BOI?format=jpg&name=large",
                    previewText: "",
                    mainText: "",
                    title: "제75주년 광복절 경축식 ",
                    source: "대한민국 청와대",
                    uploadDate: "2020.08.15",
                    key: 2,
                },
            ],
        },
    };

    proceedStep = () => {
        this.setState({ currentStep: this.state.currentStep + 1 });
    };

    revertStep = () => {
        this.setState({ currentStep: this.state.currentStep - 1 });
    };

    returnToTopics = (num) => {
        this.saveToSessionStorage(num);
        this.props.history.push("/topics");
    };

    saveToSessionStorage = (numOfClues) => {
        window.sessionStorage.setItem("quiz1_clues", numOfClues);
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

    onClickClue = (clueText, factscore) => {
        let temp = this.state.cluesCollected;

        for (let i = 0; i < temp.length; i++) {
            if (temp[i] === clueText) {
                return;
            }
        }
        temp.push(clueText);
        this.setState({ cluesCollected: temp });
        this.saveToSessionStorage(this.state.cluesCollected.length);
        this.setFactScore(factscore);
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

    showAnswers = () => {
        let clues = document.querySelectorAll(".clue");
        if (this.state.highlightsActive) {
            for (let i = 0; i < clues.length; i++) {
                clues[i].style.backgroundColor = "transparent";
            }
            this.setState({ highlightsActive: false });
        } else {
            for (let i = 0; i < clues.length; i++) {
                clues[i].style.backgroundColor = "yellow";
            }
            this.setState({ highlightsActive: true });
        }
    };

    render() {
        const keywords = this.state.keywordsCollected.map((item) => {
            return (
                <div
                    key={item}
                    onClick={() => this.searchKeyword(item)}
                    className="keyword"
                >
                    - {item}
                </div>
            );
        });

        const clues = this.state.cluesCollected.map((item) => {
            return <div key={item}>- {item}</div>;
        });

        let childarray = [];
        for (let j = 0; j < 6; j++) {
            if (j < this.state.cluesCollected.length) {
                childarray.push(
                    React.createElement(
                        "div",
                        { className: "stamp", key: j },
                        <div>✔︎</div>
                    )
                );
            } else {
                childarray.push(
                    React.createElement(
                        "div",
                        { className: "stamp", key: j },
                        <div>︎</div>
                    )
                );
            }
        }
        let parent = React.createElement(
            "div",
            { className: "quiz-stamps" },
            childarray
        );

        const results = (
            <div id="searchresults">
                <div className="search-result">
                    <img
                        className="item-image"
                        src="https://imgnews.pstatic.net/image/022/2019/08/15/20190815508490_20190815184507880.jpg?type=w647"
                        alt="search result"
                    />
                    <div>
                        <div className="item-title">
                            文대통령 “평화경제에 모든 것 쏟아부을 것”
                        </div>
                        <div className="item-preview">
                            “우리 경제 신성장 동력 마련 / 분단 극복할 때 광복도
                            완성” / “日 부당한 수출규제에 맞서 / 뚜벅뚜벅
                            경제강국 길 갈 것” / 2020 도쿄올림픽 성원 보내 /
                            한·일 갈등 외교적 해결 방점
                        </div>
                        <div className="sourceBox">
                            <div className="item-source">세계일보 |</div>
                            <Clue
                                innerText="2019.08.15"
                                tooltip="마스크를 쓰지 않은 사진은 2019년 행사 사진이네?"
                                className="item-date"
                                onClick={(event) => {
                                    event.stopPropagation();
                                    this.onClickClue("지난해 행사 사진", -10);
                                    //this.setFactScore(-10);
                                }}
                            ></Clue>
                        </div>
                    </div>
                    <div
                        className={`item-content ${
                            this.state.visibility[0] ? "" : "invisible"
                        }`}
                    >
                        <p>
                            문재인 대통령은 15일 “일본의 부당한 수출규제에 맞서
                            우리는 책임 있는 경제강국을 향한 길을 뚜벅뚜벅
                            걸어갈 것”이라며 주요 부품·소재의 국산화와 수입
                            다변화를 통한 ‘극일(克日)’ 의지를 분명히 했다.문
                            대통령은 이날 충남 천안 독립기념관에서 열린 광복절
                            경축식 경축사에서 “국제 분업체계 속에서 어느 나라든
                            자국이 우위에 있는 부문을 무기화한다면 평화로운
                            자유무역 질서가 깨질 수밖에 없다”며 “먼저 성장한
                            나라가 뒤따라 성장하는 나라의 사다리를 걷어차서는 안
                            된다”고 지적했다.{" "}
                        </p>{" "}
                        그러나 동시에 “지금이라도 일본이 대화와 협력의 길로
                        나온다면 우리는 기꺼이 손을 잡을 것”이라며 “공정하게
                        교역하고 협력하는 동아시아를 함께 만들어갈 것”이라고
                        강조했다. 문 대통령은 “세계인들이 평창에서 평화의
                        한반도를 보았듯이 도쿄 올림픽에서 우호와 협력의 희망을
                        갖게 되길 바란다”며 2020년 도쿄 올림픽에 대한 성원도
                        보냈다. 이 같은 발언들은 최악의 상황으로 치닫고 있는
                        한·일 갈등에 대한 외교적 해결을 위해 대화의 문을
                        열어놓으면서 유화적 메시지를 보낸 것으로 풀이된다.{" "}
                        <p>
                            {" "}
                            문 대통령은 또 “평화로 번영을 이루는 평화경제를
                            구축하고 통일로 광복을 완성하고자 한다”며
                            “평화경제에 우리가 가진 모든 것을 쏟아부어 ‘새로운
                            한반도’의 문을 활짝 열겠다. 평화경제를 통해 우리
                            경제의 신성장동력을 만들겠다”고 밝혔다. 그러면서
                            “‘분단’을 극복해낼 때 비로소 우리의 ‘광복’은
                            완성되고 아무도 흔들 수 없는 나라가 될 것”이라고
                            말했다.{" "}
                        </p>{" "}
                        남북 평화경제가 실현되면 8000만 단일 시장을 가진 세계
                        6위권 경제대국이 될 수 있다는 전망도 제시했다. 문
                        대통령은 특히 “평화경제는 한반도의 완전한 비핵화 위에
                        북한이 핵이 아닌 경제와 번영을 선택할 수 있도록 대화와
                        협력을 계속해 나가는 데서 시작한다”며 ‘비핵화를 전제로
                        한 평화경제’ 개념을 규정해 주목됐다. 최근 북한의 잇단
                        미사일 도발로 인해 평화경제론에 대한 부정적 의견이
                        나오는 점을 의식한 듯 문 대통령은 “미국이 북한과 동요
                        없이 대화를 계속하고 일본 역시 북한과 대화를 추진하고
                        있는 현실을 직시하기 바란다”며 “이념에 사로잡힌 외톨이로
                        남지 않길 바란다”고 반박했다. 평화경제를 비난한
                        자유한국당 등 야당 일각을 ‘이념에 사로잡힌 외톨이’라고
                        몰아세운 것이다.{" "}
                        <p>
                            {" "}
                            문 대통령은 경축사 초반 김기림의 ‘새나라 송(頌)’에
                            나오는 ‘아무도 흔들 수 없는 나라’를 인용하며
                            “‘아무도 흔들 수 없는 나라’는 외세의 침략과 지배에서
                            벗어난 신생독립국가가 가져야 할 당연한 꿈이었지만
                            아직 이루지 못했다. 아직도 우리가 충분히 강하지 않기
                            때문이며 아직도 우리가 분단되어 있기 때문”이라고
                            설명했다. 이어 “저는 오늘 어떤 위기에도 의연하게
                            대처해온 국민들을 떠올리며 우리가 만들고 싶은 나라,
                            ‘아무도 흔들 수 없는 나라’를 다시 다짐한다”며 이를
                            위해 △경제강국 △교량국가 △평화경제 구축이라는 3대
                            목표를 제시했다. 문 대통령은 “경제에서 주권이 확고할
                            때 우리는 우리 운명의 주인으로 흔들리지 않는다”며
                            “우리가 힘을 가지면 대륙과 해양을 잇는 나라, 동북아
                            평화와 번영의 질서를 선도하는 나라가 될 수 있다”고
                            역설했다.
                        </p>{" "}
                        <p> 김달중 기자 dal@segye.com </p>
                    </div>
                    <div
                        className="continue-reading"
                        onClick={() => this.displayResult(0)}
                    >
                        본문 보기/접기 <br />
                        {this.state.visibility[0] == true ? (
                            <FontAwesomeIcon icon={faAngleUp} />
                        ) : (
                            <FontAwesomeIcon icon={faAngleDown} />
                        )}
                    </div>
                </div>
                <div className="search-result">
                    <img
                        className="item-image"
                        src="http://www.gwangnam.co.kr/upimages/gisaimg/202008/15_363657-45.jpg"
                        alt="search result"
                    />
                    <div>
                        <div className="item-title">
                            문 대통령 내외, 제75주년 광복절 경축식 참석
                        </div>
                        <div className="item-preview">
                            문 대통령, 이날 경축식에서 광복회원과 4부요인,
                            정당대표, 종단대표, 정부 주요인사, 주한외교단, 사회
                            각계 주요 인사 등과 함께 대한민국이 앞으로도 포용과
                            조화의 가치 꽃피우며 발전해 나가기를 기원
                        </div>
                        <div className="sourceBox">
                            <div className="item-source">광남일보 |</div>
                            <Clue
                                innerText="2020.08.15"
                                tooltip="올해 사진에서는 마스크를 쓴 모습을 볼 수 있어."
                                onClick={() => {
                                    this.onClickClue(
                                        "올해 행사 사진과 불일치",
                                        -20
                                    );
                                    //this.setFactScore(-20);
                                }}
                                className="item-date"
                            ></Clue>
                        </div>
                    </div>

                    <div
                        className={`item-content ${
                            this.state.visibility[1] ? "" : "invisible"
                        }`}
                    >
                        문재인 대통령은 김정숙 여사와 함께 15일(토) 오전 10시
                        동대문디자인플라자(DDP)에서 열린 제75주년 광복절
                        경축식에 참석하였다.
                        <p>
                            문 대통령은 ‘우리나라’를 주제어로 한 이날 경축식에서
                            광복회원과 4부요인, 정당대표, 종단대표, 정부
                            주요인사, 주한외교단, 사회 각계 주요 인사 등과 함께
                            수많은 애국지사와 순국선열이 꿈꿔온 평화와 공존의
                            공동체인 대한민국이 앞으로도 포용과 조화의 가치를
                            꽃피우며 발전해 나가기를 기원하였다.
                        </p>
                        <p>
                            특히 청산리 전투 100주년을 맞아 김좌진 장군의 후손인
                            배우 송일국 씨와 함께, 3살 때 청력장애를 앓았지만
                            포기하지 않고 미래의 꿈을 향해 도전 중인 대한민국
                            청년 이소별 씨가 경축식 사회를 맡음으로써, 처음으로
                            장애인과 비장애인이 함께 국가 기념식 사회를
                            맡음으로써 애국지사와 순국선열의 애국애족 정신이
                            오늘날 우리 사회 내에서 조화로운 공동체 정신으로
                            이어지길 바라는 뜻을 더하였다.
                        </p>
                        <p>
                            이날은 통상 진행되는 국가 기념식 의전과 달리 특별히
                            네 분의 애국지사 대표가 주빈이 될 수 있도록 의장대의
                            호위를 받으며 입장함으로써 공식 행사가 시작되었다.
                            미리 경축식장에 도착하여 기다리던 문 대통령 내외는
                            애국지사 한 분 한 분께 존경과 감사의 인사를 드리며
                            이들을 주빈석으로 맞이함으로써 애국지사들의 숭고한
                            희생정신을 기리고 사회적 예우를 강화하고자 하는
                            대통령과 정부의 뜻을 나타냈다.
                        </p>
                        <p>
                            또한 고령의 애국지사들과 포상 대상자들의 건강을
                            최우선 고려하여 별도의 대기 공간을 마련하고 보건소와
                            의료진 협조를 통해 응급상황 대응체계를 미리
                            갖추었으며, 특히 경축식에 참석하신 네 분의
                            애국지사들은 별도로 준비된 의전차량을 이용하여
                            서울지방경찰청의 차량 경호를 받으며 출발지에서
                            행사장까지 모시는 등 예우에 부족함이 없도록 하였다.
                        </p>
                    </div>
                    <div
                        className="continue-reading"
                        onClick={() => this.displayResult(1)}
                    >
                        본문 보기/접기 <br />
                        {this.state.visibility[1] == true ? (
                            <FontAwesomeIcon icon={faAngleUp} />
                        ) : (
                            <FontAwesomeIcon icon={faAngleDown} />
                        )}
                    </div>
                </div>
                <div className="search-result">
                    <img
                        className="item-image"
                        src="http://www.gwangnam.co.kr/upimages/gisaimg/202008/15_363657-45.jpg"
                        alt="search result"
                    />
                    <div>
                        <div className="item-title">
                            제75주년 광복절 경축식{" "}
                        </div>
                        <div className="item-preview"></div>
                        <div className="sourceBox">
                            <Clue
                                innerText="대한민국 청와대 |"
                                tooltip="청와대 공식 자료에서는 마스크를 쓴 모습이야."
                                onClick={() => {
                                    this.onClickClue(
                                        "청와대 공식 자료와 불일치",
                                        -50
                                    );
                                    // if (this.state.cluesCollected.indexOf("청와대 공식 자료와 불일치") == -1){
                                    // this.setFactScore(-50);}
                                }}
                                className="item-source"
                            ></Clue>
                            <div className="item-date">2020.08.15</div>
                        </div>
                    </div>
                </div>
            </div>
        );

        return (
            <div id="quiz-wrapper">
                <QuizSidebar />
                <div id="quiz">
                    {this.state.currentStep === 0 ? (
                        <div id="quiz-header">
                            <div id="header-title">
                                Step 1: 있는 그대로 받아들이지 않고, 의심스러운
                                부분 찾기.
                            </div>
                            <div id="header-exp">
                                제시된 게시물의 내용과 특징들을 잘 보고,
                                의심스러운 부분을 찾아 주세요. <br />
                                게시물 상의 특정 부분에 마우스를 올리면 팩트체크
                                단서가 나타납니다. 단서를 클릭하여 팩트체크
                                노트에 기록해 주세요.
                            </div>
                        </div>
                    ) : (
                        <div id="quiz-header">
                            <div id="header-title">
                                Step 2: 추가적으로 정보를 검색하기
                            </div>
                            <div id="header-exp">
                                팩트체크 노트에 기록된 키워드를 클릭하면 검색할
                                수 있습니다. 각 검색결과를 클릭하여 자세히
                                읽어보세요. <br />
                                검색 결과의 특정 부분에 마우스를 올리면 팩트체크
                                단서가 나타납니다. 단서를 클릭하여 팩트체크
                                노트에 기록해 주세요.
                            </div>
                        </div>
                    )}
                    {this.state.currentStep === 0 ? (
                        <div className="quizContent" id="quiz1">
                            <div id="quizitem-title">
                                [일반] 문재인 등{" "}
                                <Clue
                                    innerText="8.15 행사"
                                    tooltip="올해 광복절 행사에서 진행된 일인가 보네."
                                    onClick={() =>
                                        this.onClickKeyword(
                                            "2020년 광복절 행사",
                                            0
                                        )
                                    }
                                />
                                에서 노마스크
                            </div>
                            <div id="quizitem-author">
                                <Clue
                                    innerText="101세형 (181.70)"
                                    tooltip="누군지 알 수 없는 오픈 커뮤니티 이용자의 글? "
                                    onClick={() =>
                                        this.onClickClue(
                                            "신뢰할 수 없는 작성자",
                                            0
                                        )
                                    }
                                />
                            </div>
                            <img
                                id="quizitem-image"
                                src={quiz1}
                                alt="article supplement"
                            />
                            <div id="quizitem-content">
                                저기 실내죠? <br />
                                <Clue
                                    innerText="실내에서 다닥다닥 붙어서 노 마스크로 미친거죠ㅎㅎ"
                                    tooltip="자극적인 메시지.. 무슨 의도가 담겨있는 걸까?"
                                    onClick={() =>
                                        this.onClickClue("자극적인 메시지", 0)
                                    }
                                />
                            </div>
                            <br />
                            <Clue
                                id="source"
                                tooltip="신뢰하기 쉽지 않은 커뮤니티 게시글이네?"
                                innerText="출처: DC인사이드 우한 마이너 갤러리"
                                onClick={() =>
                                    this.onClickClue("오픈 커뮤니티 출처", 0)
                                }
                            />
                        </div>
                    ) : this.state.currentStep === 1 ? (
                        <div id="searchpage">
                            <div id="searchOverlay">
                                <div id="searchpopUp"></div>
                            </div>
                            <div id="searchbox">
                                <div id="input">{this.state.searchTerm}</div>
                                <FontAwesomeIcon
                                    icon={faSearch}
                                ></FontAwesomeIcon>
                            </div>
                            {this.state.displayResult ? results : <div></div>}
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
                                <div>
                                    {this.formatGaugeValue(
                                        this.state.factScore + 50
                                    )}
                                </div>
                                {this.state.currentStep == 0 &&
                                this.state.cluesCollected.length == 3 &&
                                this.state.keywordsCollected.length == 1 ? (
                                    <div>
                                        1단계의 단서를 모두 찾았습니다!
                                        <br />
                                        다음 단계로 넘어가 주세요.
                                    </div>
                                ) : (
                                    <div id="gauge-info">
                                        팩트체크 단서 총 6개 중{" "}
                                        {this.state.cluesCollected.length}개를
                                        찾았습니다.
                                    </div>
                                )}
                            </div>
                            <div id="notebook">
                                <div id="title">팩트체크 노트</div>
                                <div id="characteristics" className="values">
                                    <div
                                        id="char-title"
                                        className="notebook-title"
                                    >
                                        정보의 특징
                                    </div>
                                    <div>{clues}</div>
                                </div>
                                <div id="keywords" className="values">
                                    <div
                                        id="keyword-title"
                                        className="notebook-title"
                                    >
                                        키워드
                                    </div>
                                    <div>{keywords}</div>
                                </div>
                                {this.state.currentStep == 0 ? (
                                    <div id="warning">
                                        ※ 검색할 키워드를 찾아야 다음 단계로
                                        넘어갈 수 있습니다.
                                    </div>
                                ) : (
                                    <div />
                                )}
                            </div>
                            <div id="hint-wrapper">
                                <div id="hint-area">
                                    <div id="hint-button">?</div>
                                    <div>단서를 찾는 데 어려움이 있나요?</div>
                                </div>
                                <div
                                    id="hint-activate"
                                    onClick={() => this.showAnswers()}
                                >
                                    클릭하여 모든 단서 확인하기
                                </div>
                            </div>
                        </div>
                    ) : null}

                    <div id="buttons">
                        {this.state.currentStep > 0 ? (
                            <button
                                id="prev-button"
                                onClick={() => this.revertStep()}
                            >
                                이전 단계
                            </button>
                        ) : (
                            <div />
                        )}
                        {this.state.currentStep === 2 ? (
                            <button
                                id="next-button"
                                disabled={!this.state.factScoreChanged}
                                onClick={() =>
                                    this.returnToTopics(clues.length)
                                }
                            >
                                완료
                            </button>
                        ) : null}
                        {this.state.currentStep < 2 ? (
                            <button
                                id="next-button"
                                disabled={
                                    !this.state.factScoreChanged &&
                                    this.state.currentStep === 1
                                }
                                onClick={() => this.proceedStep()}
                            >
                                다음 단계
                            </button>
                        ) : null}
                    </div>
                    {this.state.currentStep === 2 ? (
                        <div id="quiz-result">
                            {/* <div id="result">
							해당 정보는	
							<ol>
								<li>신뢰할 수 있는 사이트, 이용자의 정보가 아니었고 </li>
								<li>올해 사진이 아니었음</li>
							</ol>
							따라서 <span id="spec">전혀 사실이 아님!</span>
						</div> */}

                            <div id="myresults">
                                <div id="resp">
                                    <div className="notebook-title">
                                        나의 결과
                                    </div>
                                    <GaugeChart
                                        id="gauge"
                                        percent={
                                            (this.state.factScore + 50) / 100
                                        }
                                        hideText={true}
                                        nrOfLevels={2}
                                        colors={["#FF0000", "#009a00"]}
                                    />
                                    <div id="myresponse">
                                        {this.formatGaugeValue(
                                            this.state.factScore + 50
                                        )}
                                    </div>
                                </div>

                                <div id="result">
                                    <div className="notebook-title">
                                        Professional FactChecker의 판정
                                    </div>
                                    <div>
                                        "문재인 대통령 방역수칙 위반" 주장은
                                        <ol>
                                            <li>
                                                올해 사진이 아닌, 코로나 이전의
                                                사진으로,
                                            </li>
                                            <li>
                                                익명 게시판 상의 정치적 의도가
                                                담긴 게시글로 볼 수 있음.
                                            </li>
                                        </ol>
                                        따라서{" "}
                                        <span id="spec">전혀 사실이 아님!</span>
                                        <div id="extra">
                                            본 퀴즈 내용에 대한 상세한 팩트체크
                                            내용을 확인해 보세요.<br></br>
                                            <a href="https://factcheck.snu.ac.kr/v2/facts/2456">
                                                https://factcheck.snu.ac.kr/v2/facts/2456
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/* <div>
								<div className="notebook-title">내가 찾은 단서들</div>
								<div className="notebook-content">{clues}<ㄴdiv>
							</div> */}
                            </div>
                            <div>
                                {this.formatGaugeValue(
                                    this.state.factScore + 50
                                ) === "전혀 사실 아님" ? (
                                    <div id="match">
                                        결과 일치
                                        <br />
                                        Excellent!
                                    </div>
                                ) : (
                                    <div id="match">
                                        일치하지 않음
                                        <br />
                                        Needs More Practice!
                                    </div>
                                )}
                                <div id="clueCount">
                                    총 6개의 단서 중{" "}
                                    <span id="spec">{clues.length}</span>개의
                                    단서를 찾았습니다.
                                </div>
                                {parent}
                            </div>
                            {this.state.cluesCollected.length === 6 ? null : (
                                <div>
                                    Facts, Please 인증서 획득을 위해 단서를 더
                                    찾아보시겠습니까?
                                    <br /> 이전 단계로 돌아가 단서를 더
                                    찾아보세요.
                                </div>
                            )}
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
            </div>
        );
    }
}

export default QuizPage;
