import React, { Component } from 'react'
import { render } from 'react-dom'
import Login from './loginPage'

class Farts extends Component {
  render() {
    return (
      <Login />
    )
  }
}

render(<Farts />, document.getElementById('root'))
