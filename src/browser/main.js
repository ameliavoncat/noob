import React, { Component } from 'react'
import { render } from 'react-dom'
import Signup from './signup/Signup'

class Farts extends Component {
  render() {
    return (
      <Signup />
    )
  }
}

render(<Farts />, document.getElementById('root'))
