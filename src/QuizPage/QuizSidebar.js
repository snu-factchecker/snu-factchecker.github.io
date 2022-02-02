import React from 'react';

import "./QuizPage.scss"

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

            <div className="quiz-tracker">
                <div class="quiz-title">1. 국가행사</div>
                <div class="quiz-stamps">
                    <div class="stamp"></div>
                    <div class="stamp"></div>
                    <div class="stamp"></div>
                    <div class="stamp"></div>
                    <div class="stamp"></div>
                    <div class="stamp"></div>
                </div>
            </div>

        </div>)
	}
}

export default QuizSidebar