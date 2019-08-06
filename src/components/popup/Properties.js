import React, { Component } from 'react'
import Description from '../popup/Description'
import './popup.css'
import image from '../../images.jpeg'

export default class Properties extends Component {
  render () {
    return (
      <div className='properties'>
        <Description desc={this.props.desc} />
        <h3 className='duedate'>Due Date</h3>
        <br />
        <form className='data'>
          <input id='date' type='date' />
        </form>
        <br />
        <div className='card-edit-button' onClick={this.handleColor}>
          <img src={image} className='color-img' alt='color picker' />
          <a className='option-link'>color</a>
        </div>
      </div>
    )
  }
}
