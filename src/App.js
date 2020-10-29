import React from 'react';
import './App.scss';

import { Route, Switch, Redirect } from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router';
import { connect } from "react-redux";

import Intro from "./Intro/Intro"
import Help from "./Intro/Help"
import TopicList from './TopicList/TopicList';
import QuizPage from './QuizPage/QuizPage';
import QuizPage2 from './QuizPage/Quiz2';
import QuizPage3 from './QuizPage/Quiz3';
import QuizPage4 from './QuizPage/Quiz4';
import QuizPage5 from './QuizPage/Quiz5';
import QuizPage6 from './QuizPage/Quiz6';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <div id="guide">
          <div id="guide-title">게임 플레이 방법</div>
          <div id="guide-text">1. 주어진 자료에서 힌트 및 키워드를 찾습니다.<br/>
          <div style={{paddingLeft: "10px"}}><li>유의미한 자료들에 마우스를 올리면 자료에 대한 해석이 나타나고, 이를 클릭하면 힌트 혹은 키워드를 얻을 수 있습니다.</li>
          <li>최대한 많은 키워드를 발견해 보세요!</li>
          </div>
          <br/>
          2. 1단계에서 찾은 키워드를 클릭하여 검색해 봅니다. <br/>
          <div style={{paddingLeft: "10px"}}>
            <li>검색 결과로 나타난 자료들을 추가적으로 분석하여 힌트를 더 얻고, 정보의 정확성을 판단합니다.</li>
            <li>찾은 힌트들을 클릭하면, 수첩에 저장됩니다.</li>
          </div>
          </div>
        </div>
        <div id="main">
        <ConnectedRouter history={this.props.history}>
          <Switch>
            <Route path="/" exact component={Intro} />
            <Route path="/help" exact component={Help} />
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
        <footer>© SNU 팩트체크센터</footer>
      </div>
    );
  }
}

export default connect(null, null)(App);
