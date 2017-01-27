import React, { Component } from 'react'

export default class ChooseStartDate extends Component {

  render() {
    return (
      <div>
        <div>Choose your start date</div>
        <div onClick={() => this.props.signUp('noob')}>Submit</div>
      </div>
    )

  }
}
