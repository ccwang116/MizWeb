import React  from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MainContent from './components/MainContent'
import About from "./pages/About";
import RxjsWithPokemon from "./components/RxjsWithPokemon";

import NotFoundPage from './pages/NotFoundPage'
import UserForm from './components/UserForm'


function App(props) {
  
  return (
    <Router>
      <>
        <MyNavbar  />
        <MainContent>
          <Switch>
            <Route exact path="/">
              <UserForm />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/pokemon">
              <RxjsWithPokemon />
            </Route>
            <Route exact path="*">
              <NotFoundPage />
            </Route>
          </Switch>
        </MainContent>
        {/* <MyFooter /> */}
      </>
    </Router>
  )
}

export default App
