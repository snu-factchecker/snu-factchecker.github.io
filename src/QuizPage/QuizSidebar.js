import React from 'react';

import "./QuizPage.scss"

import logo from "../Logo.png"

class QuizSidebar extends React.Component{
    // Receive state from firebase if possible?

    state={
        quiz1_clues: 0,
        quiz2_clues: 0,
        quiz3_clues: 0,
        quiz4_clues: 0,
        quiz5_clues: 0,
        answers : [6 ,5, 5, 7, 6],
    }


    componentDidMount = () =>{
        this.setState({quiz1_clues: window.sessionStorage.getItem("quiz1_clues")});
        this.setState({quiz2_clues: window.sessionStorage.getItem("quiz2_clues")});
        this.setState({quiz3_clues: window.sessionStorage.getItem("quiz3_clues")});
        this.setState({quiz4_clues: window.sessionStorage.getItem("quiz4_clues")});
        this.setState({quiz5_clues: window.sessionStorage.getItem("quiz5_clues")});
    }
	render(){
        let answers = [6 ,5, 5, 7, 6];
        let answerstate = [window.sessionStorage.getItem("quiz1_clues"),
                            window.sessionStorage.getItem("quiz2_clues"),
                            window.sessionStorage.getItem("quiz3_clues"),
                            window.sessionStorage.getItem("quiz4_clues"),
                            window.sessionStorage.getItem("quiz5_clues")]
    
        let checkboxes = [];
        // Answer set
        for (let i = 0; i<5; i++){
            if (i===3){
                continue;
            }
            let childarray = []
            for (let j = 0 ; j<answers[i]; j++){
                if (j < answerstate[i]){
                    childarray.push(React.createElement('div', {className: 'stamp', key: j}, <div>✔︎</div>))
                } else{
                    childarray.push(React.createElement('div', {className: 'stamp', key: j}, <div>︎</div>))
                }
            }
            let parent = React.createElement('div', {className: 'quiz-stamps'}, childarray);
            checkboxes.push(parent);
        }



		return(<div id="sidebar">
            <div><img id="sidebarlogo" src={logo} alt="logo"/></div>
            <div className="quiz-tracker">
                <div className="quiz-title">1. 국가행사
                {window.sessionStorage.getItem("quiz1_clues")==answers[0]?
                    <div className="cleared">CLEAR!</div>:(null)}
                </div>
                {checkboxes[0]}
                <div className="quiz-title">2. 사회/교육
                {window.sessionStorage.getItem("quiz2_clues")==answers[1]?
                    <div className="cleared">CLEAR!</div>:(null)}
                </div>
                {checkboxes[1]}
                <div className="quiz-title">3. 사회/IT과학
                {window.sessionStorage.getItem("quiz3_clues")==answers[2]?
                    <div className="cleared">CLEAR!</div>:(null)}
                </div>
                {checkboxes[2]}
                {/* <div className="quiz-title">4. IT과학/정치인 발언
                {window.sessionStorage.getItem("quiz4_clues")==answers[3]?
                    <div className="cleared">CLEAR!</div>:(null)}
                </div>
                {checkboxes[3]} */}
                <div className="quiz-title">4. 과학/보건
                {window.sessionStorage.getItem("quiz5_clues")==answers[4]?
                    <div className="cleared">CLEAR!</div>:(null)}
                </div>
                {checkboxes[3]}
            </div>

            <div>
            <div>© SNU 팩트체크센터</div>
            </div>

        </div>)
	}
}

export default QuizSidebar