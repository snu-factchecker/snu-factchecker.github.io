import React from 'react';
import './App.scss';

import { Route, Switch, Redirect } from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router';
import { connect } from "react-redux";

import Intro from "./Intro/Intro"
import TopicList from './TopicList/TopicList';
import QuizPage from './QuizPage/QuizPage';
import QuizPage2 from './QuizPage/QuizPage2';
import QuizPage3 from './QuizPage/QuizPage3';
import QuizPage4 from './QuizPage/QuizPage4';
import QuizPage5 from './QuizPage/QuizPage5';
import QuizPage6 from './QuizPage/QuizPage6';



class App extends React.Component {
  render(){
    return (
      <div className="App">
        <div id="guide">
          <div id="guide-title">팩트체크의 기본 원리</div>
          <div id="guide-text">1. 정보를 있는 그대로 받아들이지 않는다.<br/><br/>
          2. 정보 표면을 둘러싼 내용들을 의심해본다. <br/>
            1) 정보의 출처를 확인한다. <br/>
            2) 저자를 확인해본다. <br/>
            3) 언제, 어디서 만들어진 것인지 알아본다.<br/>
            4) 다른 정보를 추가적으로 찾아본다.<br/>
          </div>
        </div>
        <div id="main">
        <ConnectedRouter history={this.props.history}>
          <Switch>
            <Route path="/" exact component={Intro} />
            <Route path="/topics" exact component={TopicList} />
            <Route path="/topic/1" exact component={QuizPage} />
            <Route path="/topic/2" exact component={QuizPage2} />
            <Route path="/topic/3" exact component={QuizPage3} />
            <Route path="/topic/4" exact component={QuizPage4} />
            <Route path="/topic/5" exact component={QuizPage5} />
            <Route path="/topic/6" exact component={QuizPage6} />
            <Redirect exact to="/"/>
          </Switch>
        </ConnectedRouter>
        </div>
        <footer>© 서울대학교 팩트체크연구소 2020</footer>
      </div>
    );
  }
}

export default connect(null, null)(App);
