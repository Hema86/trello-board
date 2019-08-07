import React, { Component } from 'react'
import Progress from './Progress'
import '../../popup/popup.css'
import CheckListItems from './CheckListItems'

export default class AddCheckList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tasks:[]
    }
  }
  handleChange = (event) => {
    console.log(event.target.value)
  this.setState({
    tasks:[...this.tasks, event.target.value]
  })
  }
  handleSubmit = (event) => {
    event.preventDefault()
  }

  render () {
    return (
      <div className='checkList'>
      <div className='check-list-header'>
      <div>{this.props.title}</div>
      <input type='button' value='delete'/>
      </div>
        <Progress />
        <div className='check-list-adder'>
          <form onSubmit={this.handleSubmit}>
            <input type='text' className='check-list-input' onChange={this.handleChange} />
              <input type='submit' value='Add' className='submit-board-button' onSubmit={this.handleSubmit}/>
              <p className='cancel-btn' onClick={this.clickBack} >X</p>
          </form>
        </div>
        <CheckListItems tasks={this.state.tasks}/>
      </div>
    )
  }
}