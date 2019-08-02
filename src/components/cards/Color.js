import React, { Component } from 'react'

export default class Color extends Component {
  handleClick = (e) =>{
    this.props.setBackground(e.target.style['background-color'])  
  }
  render () {
    return (
      <div className='color-container'>
        <div className='color-div' style={{ background: '#ff6666' }} onClick={this.handleClick} />
        <div className='color-div' style={{ background: '#ffaa44' }} onClick={this.handleClick} />
        <div className='color-div' style={{ background: '#ffff66' }} onClick={this.handleClick} />
        <div className='color-div' style={{ background: '#66ff66' }} onClick={this.handleClick} />
        <div className='color-div' style={{ background: '#66ddff' }} onClick={this.handleClick} />
        <div className='color-div' style={{ background: '#ffffff' }} onClick={this.handleClick} />
      </div>
    )
  }
}
