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
    }

	render(){
        // Answer set
        let answers = [6 ,5, 5, 7, 6];

		return(<div id="sidebar">
            <div><img id="sidebarlogo" src={logo}/></div>
            <div className="quiz-tracker">
                <div class="quiz-title">1. 국가행사
                    <div className="cleared">CLEAR!</div>
                </div>
                <div class="quiz-stamps">
                    <div class="stamp"><div>✔︎</div></div>
                    <div class="stamp"><div>✔︎</div></div>
                    <div class="stamp"><div>✔︎</div></div>
                    <div class="stamp"><div>✔︎</div></div>
                    <div class="stamp"><div>✔︎</div></div>
                    <div class="stamp"><div>✔︎</div></div>
                </div>
                <div class="quiz-title">2. 사회/교육
                    <div className="cleared">CLEAR!</div>
                </div>
                <div class="quiz-stamps">
                    <div class="stamp"><div>✔︎</div></div>
                    <div class="stamp"><div>✔︎</div></div>
                    <div class="stamp"><div>✔︎</div></div>
                    <div class="stamp"><div>✔︎</div></div>
                    <div class="stamp"><div>✔︎</div></div>
                </div>
                <div class="quiz-title">3. 사회/IT과학
                    <div className="cleared">CLEAR!</div>
                </div>
                <div class="quiz-stamps">
                    <div class="stamp"><div>✔︎</div></div>
                    <div class="stamp"><div>✔︎</div></div>
                    <div class="stamp"><div>✔︎</div></div>
                    <div class="stamp"><div>✔︎</div></div>
                    <div class="stamp"><div>✔︎</div></div>
                </div>
                <div class="quiz-title">4. 국가행사
                    <div className="cleared">CLEAR!</div>
                </div>
                <div class="quiz-stamps">
                    <div class="stamp"><div>✔︎</div></div>
                    <div class="stamp"><div>✔︎</div></div>
                    <div class="stamp"><div>✔︎</div></div>
                    <div class="stamp"><div>✔︎</div></div>
                    <div class="stamp"><div>✔︎</div></div>
                    <div class="stamp"><div>✔︎</div></div>
                    <div class="stamp"><div>✔︎</div></div>
                </div>
                <div class="quiz-title">5. 과학/보건
                    <div className="cleared">CLEAR!</div>
                </div>
                <div class="quiz-stamps">
                    <div class="stamp"><div>✔︎</div></div>
                    <div class="stamp"><div>✔︎</div></div>
                    <div class="stamp"><div>✔︎</div></div>
                    <div class="stamp"><div>✔︎</div></div>
                    <div class="stamp"><div>✔︎</div></div>
                    <div class="stamp"><div>✔︎</div></div>
                </div>
            </div>

            <div>
            <div>© SNU 팩트체크센터</div>
            </div>

        </div>)
	}
}

export default QuizSidebar