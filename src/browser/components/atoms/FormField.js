import React, { Component } from 'react'
// import './form-field.css'

export default class FormField extends Component {

  render () {
    const { label } = this.props
    return (
      <div className="form-input">
        <div className="form--label">{ label }</div>
        <input className="form--field"></input>
      </div>
    )
  }
}
