import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'

export default class ChooseStartDate extends Component {
  render() {
    return (
      <div>
        <div>Choose your start date</div>
        <DatePicker />
        <div onClick={() => this.props.signUp('noob')}>Submit</div>
      </div>
    )

  }
}
