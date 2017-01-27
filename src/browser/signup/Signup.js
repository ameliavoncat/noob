import React, { Component } from 'react'
import ChooseStartDate from './ChooseStartDate'

export default class Signup extends Component {
  constructor() {
    super()
    this.state = {
      role: null
    }
  }

  updateSignupState = ( key, value ) =>
    this.setState({
      [key]: value
    })

  signUp = role => {
    console.log(`Signing up new ${role}!`)
  }

  render() {
    if ( this.state.role === null ) {
      return (
        <div>
          <div>Choose your role</div>
          <div onClick={() => this.signUp('mentor')}>
            Mentor
          </div>
          <div onClick={() => this.updateSignupState('role', 'noob')}>
            Noob
          </div>
        </div>
      )
    } else {
      return <ChooseStartDate signUp={this.signUp}/>
    }
  }
}
