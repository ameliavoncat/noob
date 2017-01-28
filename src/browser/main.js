import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import Dashboard from './Dashboard'
import Signup from './signup/Signup'

class Root extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Dashboard} />
        <Route path='/signup' component={Signup} />
      </Router>
    )
  }
}

render(<Root />, document.getElementById('root'))
