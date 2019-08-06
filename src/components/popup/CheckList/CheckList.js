import React, { Component } from 'react'
import Progress from './Progress'
import '../../popup/popup.css'

export default class AddCheckList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isAdding: false,
      tasks:''
    }
  }
  handleChange = (event) => {
    console.log(event.target.value)
  this.setState({
    tasks:[...this.tasks, event.target.value]
  })
  }
  handleClick = () => {
      this.setState({
          isAdding:true
  })
}

  render () {
    return (
      <div className='checkList'>
      <div className='check-list-header'>
      <div>Checklist</div>
      <input type='button' value='delete'/>
      </div>

        <Progress />
        <div className='check-list-adder'>
          <input type='text' className='check-list-input' onKeyDown={this.handleSubmit} onChange={this.handleChange} />
            <input type='submit' value='Add' className='submit-board-button' />
            <p className='cancel-btn' onClick={this.clickBack} >X</p>
        </div>
      </div>
    )
  }
}