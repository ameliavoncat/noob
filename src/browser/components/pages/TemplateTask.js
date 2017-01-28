import React, { Component } from 'react'
import FormField from '../atoms/FormField'

export default class TemplateTask extends Component {

  render () {
    return (
      <div>
        <h1>Template Task</h1>
        <FormField label='task' />
      </div>
    )
  }
}
