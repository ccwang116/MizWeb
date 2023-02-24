import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import MainContent from "./components/MainContent";
import About from "./pages/About";
import RxjsWithPokemon from "./components/RxjsWithPokemon";

import NotFoundPage from "./pages/NotFoundPage";
import UserForm from "./components/UserForm";
import ScrollAnime from "./pages/ScrollAnime";
import DemoMention from "./pages/DemoMention";
import SongCh from "./pages/SongCh";
import Home from "./pages/Home";
import Poker from "./pages/Quiz/Poker";
import MyNavbarForRent from "./components/MyNavbarForRent";
import QuizLayout from "./layouts/QuizLayout";
import MonitorTest from "./pages/MonitorTest";

function App(props) {
  return (
    <Router>
      <>
        {/* <MyNavbar /> */}
        <MyNavbarForRent />
        <MainContent>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/quiz">
              <QuizLayout />
            </Route>
            <Route path="/monitortest">
              <MonitorTest />
            </Route>
            {/* <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/scroll">
              <ScrollAnime />
            </Route>
            <Route exact path="/pokemon">
              <RxjsWithPokemon />
            </Route>
            <Route exact path="/mention">
              <DemoMention />
            </Route>
            <Route exact path="/songch">
              <SongCh />
            </Route>
            <Route exact path="/poker">
              <Poker />
            </Route> */}
            <Route exact path="*">
              <NotFoundPage />
            </Route>
          </Switch>
        </MainContent>
        <MyFooter />
      </>
    </Router>
  );
}

export default App;
