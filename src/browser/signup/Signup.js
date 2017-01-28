import React, { Component } from 'react'
import ChooseStartDate from './ChooseStartDate'

export default class Signup extends Component {
  constructor() {
    super()
    this.state = {
      showStartDate: false
    }
  }

  toggleStartDate = () =>
    this.setState({ showStartDate: !this.state.showStartDate })

  signUp = role => {
    console.log(`Signing up new ${role}!`)
  }

  render() {
    const startDatePicker = this.state.showStartDate ?
      <ChooseStartDate signUp={this.signUp}/> :
      null

    return (
      <div>
        <div>Choose your role</div>
        <div onClick={() => this.signUp('mentor')}>Mentor</div>
        <div onClick={this.toggleStartDate}>Noob</div>
        {startDatePicker}
      </div>
    )
  }
}
