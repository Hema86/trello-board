import React, { Component } from 'react'

export default class Color extends Component {
  handleClick = () =>{
    
  }
  render () {
    return (
      <div className='color-container'>
        <div className='color-div' style={{ background: '#ff6666' }} onClick={this.handleClick} />
        <div className='color-div' style={{ background: '#ffaa44' }} />
        <div className='color-div' style={{ background: '#ffff66' }} />
        <div className='color-div' style={{ background: '#66ff66' }} />
        <div className='color-div' style={{ background: '#66ddff' }} />
        <div className='color-div' style={{ background: '#ffffff' }} />
      </div>
    )
  }
}
