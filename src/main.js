import "./App.css";
import React from "react";
import Background from "./components/shared/background/index";
import ReactDOM from "react-dom";
import { Route, HashRouter as Router } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Community from "./components/community/community";
import Menu from "./components/shared/nav/nav";
import Fed from "./components/fed/fed";
import Projects from "./components/projects/projects";
import Talks from "./components/talks/talks";
import Training from "./components/training/traning";
import Coders from "./components/coders/coders";
import Title from "./components/title/title";
import Panel from "./components/panel/panel";
import TechTalksForm from "./components/forms/techtalksform";
import CodeBestPractices from "./components/forms/codebestpractices";
import GitBestPractices from "./components/forms/gitbestpractices";
import JiraBestPractices from "./components/forms/jirabestpractices";

function Main() {
  return (
    <React.Fragment>
      <Router>
        <Menu />
        {/* <Route render={({location}) => (
					<TransitionGroup>
					<CSSTransition key={location.key} timeout={9000} classNames="fade">
						<Switch location={location}>
							<Route exact path="/">
								<Background />
							</Route>
							<Route path="/fed">
								<Fed />
							</Route>
							<Route path="/projects">
								<Projects />
							</Route>
							<Route path="/talks">
								<Talks />
							</Route>
							<Route path="/training">
								<Training />
							</Route>
							<Route path="/coders">
								<Coders />
							</Route>
						</Switch>
					</CSSTransition>
				</TransitionGroup>
				)} /> */}

        <Route exact path="/" component={Background} />
        <Route exact path="/fed" component={Fed} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/talks" component={Talks} />
        <Route exact path="/training" component={Training} />
        <Route exact path="/coders" component={Coders} />
        <Route exact path="/title" component={Title} />
        <Route exact path="/panel" component={Panel} />
        {<Route exact path="/techtalksform" component={TechTalksForm} />}
        {
          <Route
            exact
            path="/codebestpractices"
            component={CodeBestPractices}
          />
        }
        {<Route exact path="/gitbestpractices" component={GitBestPractices} />}
        {
          <Route
            exact
            path="/jirabestpractices"
            component={JiraBestPractices}
          />
        }
      </Router>
    </React.Fragment>
  );
}

export default Main;
