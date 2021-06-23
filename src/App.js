import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

import './App.css'

import Home from './components/Home'
import Weekly from './components/Weekly'
import WeeklyBattle from './components/WeeklyBattle'
import Popular from './components/Popular'
import PopularBattle from './components/PopularBattle'
import Favorites from './components/Favorites'

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <ul className="navbar-nav">
            <li className="nav-item" onClick={this.test}><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/weekly">Weekly</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/weekly-battle">WeeklyBattle</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/popular">Popular</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/popular-battle">PopularBattle</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/favorites">Favorites</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/weekly" component={Weekly}/>
          <Route path="/weekly-battle" component={WeeklyBattle}/>
          <Route path="/popular" component={Popular}/>
          <Route path="/popular-battle" component={PopularBattle}/>
          <Route path="/favorites" component={Favorites}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
