import React, { Component } from 'react'

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
        {this.state.isAdding
          ? <div className='check-list-adder'>
             <h3>Checklist</h3>
             <input type='checkbox' className='checkbox' />
             <input type='text' className='check-list-input'
                  onKeyDown={this.handleSubmit} onChange={this.handleChange} />
             </div>
          : <div className='check-list-adder'>
              <h3 className='check-list-header'>Checklist</h3>
              <h3 className='checklist-link'onClick={this.handleClick}>Add a checklist</h3>
            </div>
        }
      </div>
    )
  }
}
