import React from 'react';
import './App.scss';

import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";

import Intro from "./Intro/Intro"
import TopicList from './TopicList/TopicList';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Intro} />
          <Route path="/topics" exact component={TopicList} />
          <Redirect exact to="/"/>
        </Switch>
      </BrowserRouter>
      <footer>© 서울대학교 팩트체크연구소 2020</footer>
    </div>
  );
}

export default App;
