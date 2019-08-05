import React, { Component } from 'react'
import Description from '../popup/Description'
import './popup.css'

export default class Properties extends Component {
  render () {
    return (
      <div className='properties'>
        <Description desc={this.props.desc} />
        <h3 className='duedate'>Due Date</h3>
        <form className='data'>
          <input id='date' type='date' />
        </form>
      </div>
    )
  }
}
