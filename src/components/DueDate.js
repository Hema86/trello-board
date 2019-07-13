import React, { Component } from 'react'
import Calendar from 'react-calendar'

export default class DueDate extends Component {
  render () {
    return (
      <div className='due-popup'>
        <div className='due'>
          <Calendar />
        </div>
      </div>
    )
  }
}
