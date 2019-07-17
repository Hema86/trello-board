import React, { Component } from 'react'

export default class Color extends Component {
  render () {
    return (
      <div className='color-container'>
        <div className='color-div' style={{ background: '#ff6666' }} />
        <div className='color-div' style={{ background: '#ffaa44' }} />
        <div className='color-div' style={{ background: '#ffff66' }} />
        <div className='color-div' style={{ background: '#66ff66' }} />
        <div className='color-div' style={{ background: '#66ddff' }} />
        <div className='color-div' style={{ background: '#ffffff' }} />
      </div>
    )
  }
}
