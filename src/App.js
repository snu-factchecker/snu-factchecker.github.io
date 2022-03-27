import React from "react";
import "./App.scss";

import { Route, Switch, Redirect } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { connect } from "react-redux";

import Intro from "./Intro/Intro";
import Help from "./Intro/Help";
import TopicList from "./TopicList/TopicList";
import QuizPage from "./QuizPage/QuizPage";
import QuizPage2 from "./QuizPage/Quiz2";
import QuizPage3 from "./QuizPage/Quiz3";
// import QuizPage4 from "./QuizPage/Quiz4";
import QuizPage5 from "./QuizPage/Quiz5";
import Tutorial from "./Tutorial/Tutorial";
import Certificate from "./Certificate/Certificate"

import Finished from "./TopicList/Finished";

//import texture from "./Intro/corkboard.jpg";

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<div id="main">
					<ConnectedRouter history={this.props.history}>
						<Switch>
							<Route path="/" exact component={Intro} />
							<Route path="/help" exact component={Help} />
							<Route path="/topics" exact component={TopicList} />
							<Route path="/topic/1" exact component={QuizPage} />
							<Route path="/topic/2" exact component={QuizPage2} />
							<Route path="/topic/3" exact component={QuizPage3} />
							{/* <Route path="/topic/4" exact component={QuizPage4} /> */}
							<Route path="/topic/5" exact component={QuizPage5} />
							<Route path="/tutorial" exact component={Tutorial} />
							<Route path="/certificate" exact component={Certificate} />
							<Route path="/end" exact component={Finished} />
							<Redirect exact to="/" />
						</Switch>
					</ConnectedRouter>
				</div>
			</div>
		);
	}
}

export default connect(null, null)(App);
