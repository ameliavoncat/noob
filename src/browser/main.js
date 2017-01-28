import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import Dashboard from './components/pages/Dashboard'
import TemplateTask from './components/pages/TemplateTask'

class Root extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Dashboard} />
        <Route path='/create_task' component={TemplateTask}/>
      </Router>
    )

  }
}

render(<Root />, document.getElementById('root'))
