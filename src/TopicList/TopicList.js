import React from "react";

import Topic from "./Topic";
import "./Topic.scss";

import img1 from "../QuizPage/quiz1_img.png";
import img2 from "../QuizPage/quiz2.jpeg";
import img3 from "../QuizPage/quiz3_img.png";
// import img4 from "../QuizPage/quiz4_img.png";
import img5 from "../QuizPage/quiz5.png";

class TopicList extends React.Component {
    state = {
        topics: [
            {
                text: "대통령이 국가행사에서 노마스크?",
                topic: "국가행사",
                link: 1,
                image: img1,
            },
            {
                text: "한국인 문해력 OECD 국가 중 최하위 수준!",
                topic: "사회/교육",
                link: 2,
                image: img2,
            },
            {
                text: "무선이어폰을 쓰면 암에 걸린다?",
                topic: "사회/IT과학",
                link: 3,
                image: img3,
            },
            // {
            // 	text: "유튜브 정책이 우파 크리에이터들을 억압하고 있다!",
            // 	topic: "IT과학/정치인 발언",
            // 	link: 4,
            // 	image: img4,
            // },
            {
                text: "한국인 70% 이미 코로나 항체 있다?",
                topic: "과학/보건",
                link: 5,
                image: img5,
            },
        ],
    };

    render() {
        let getCertificate = () => {
            this.props.history.push("/certificate");
        };
        let answers = [6, 6, 6, 7, 6];
        let allcleared =
            window.sessionStorage.getItem("quiz1_clues") == answers[0] &&
            window.sessionStorage.getItem("quiz2_clues") == answers[1] &&
            window.sessionStorage.getItem("quiz3_clues") == answers[2] &&
            window.sessionStorage.getItem("quiz5_clues") == answers[4];
        const topics = this.state.topics.map((item) => {
            let cleared = false;

            if (item.link === 1) {
                cleared =
                    window.sessionStorage.getItem("quiz1_clues") ===
                    answers[0].toString();
            } else if (item.link === 2) {
                cleared =
                    window.sessionStorage.getItem("quiz2_clues") ===
                    answers[1].toString();
                console.log(answers[1]);
            } else if (item.link === 3) {
                cleared =
                    window.sessionStorage.getItem("quiz3_clues") ===
                    answers[2].toString();
            } else if (item.link === 4) {
                cleared =
                    window.sessionStorage.getItem("quiz4_clues") ===
                    answers[3].toString();
            } else {
                cleared =
                    window.sessionStorage.getItem("quiz5_clues") ===
                    answers[4].toString();
            }

            return (
                <Topic
                    link={item.link}
                    text={item.text}
                    key={item.link}
                    image={item.image}
                    topic={item.topic}
                    cleared={cleared}
                />
            );
        });

        return (
            <div id="topic">
                <div id="header-title">주제 선택하기</div>
                <div id="inner">
                    {!allcleared ? (
                        <div>
                            총 네 가지 주제에 대한 팩트체크 게임을 시작합니다.{" "}
                            <br />
                            <br />네 번 모두 팩트를 검증하는 데 성공하고 clear
                            도장을 받으시면, Facts, Please 인증서가 제공됩니다.
                        </div>
                    ) : (
                        <div>
                            모든 레벨을 성공적으로 끝마쳤습니다!
                            <br />
                            아래 링크를 통해 Facts, Please 인증서를
                            발급받으세요.
                            <button onClick={() => getCertificate()}>
                                인증서 발급받기
                            </button>
                        </div>
                    )}
                    <div id="topic-list">{topics}</div>
                </div>
                {/* <footer>© SNU 팩트체크센터</footer> */}
            </div>
        );
    }
}

export default TopicList;
