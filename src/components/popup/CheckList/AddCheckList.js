import React, { Component } from 'react'
// import Progress from './Progress'
import CheckList from './CheckList'
import '../../popup/popup.css'

export default class AddCheckList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      checkListTitle:'',
      isAdding: false
    }
  }
  handleChange = (event) => {
  this.setState({
    checkListTitle: event.target.value
  })
  }
  handleSubmit = (event) => {
    console.log('done')
    event.preventDefault()
    this.setState({ 
      checkListTitle: '',
      isAdding:true
   })
 }

  render () {
    return (
      <div className='checkList'>
      { this.state.isAdding
        ? <CheckList title={this.state.checkListTitle}/>
        : <div className='check-list-adder'>
            <form onSubmit={this.handleSubmit}>
              <input type='text' className='check-list-input' onChange={this.handleChange} value={this.state.checkListTitle}/>
              <input type='submit' value='createCheckList' className='submit-board-button' />
            </form>
          </div>    
      }
      </div>

    )
  }
}
