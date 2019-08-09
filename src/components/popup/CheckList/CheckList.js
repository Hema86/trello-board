import React, { Component } from 'react'
import Progress from './Progress'
import '../../popup/popup.css'
import CheckListItems from './CheckListItems'
import { createCheckItem } from '../../../actions/index'
import { connect } from 'react-redux'

class CheckList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      checkLists:this.props.checkLists,
      task:''
    }
  }
  handleChange = (event) => {
    // console.log(event.target.value)
    this.setState({
    task: event.target.value
  })
  }
  handleSubmit = (checkList) => {
    return (e) => {
    e.preventDefault()
    // console.log('done')
    // console.log(checkList)
    // console.log(this.props.listId)
    this.props.createCheckItem(this.state.task, checkList.id, this.props.listId, checkList.idCard)
    this.setState({
      task:''
    })
  }
  }
  deleteCheckList = () => {

  }

  render () {
    // console.log(this.props.checkLists)
    return (
      <div className='checkList'>
      {this.state.checkLists.map((checkList, index) => {
        return <div className='checkList-wrapper' key={index}>
        <div className='check-list-header'>
          <h3>{checkList.name}</h3>
          <input type='submit' value='delete' onClick= {this.deleteCheckList}/>
        </div>
        {/* <Progress /> */}
        <div className='check-list-adder'>
            <form onSubmit={this.handleSubmit(checkList)}>
            <input type='text' className='check-list-input' onChange={this.handleChange} value={this.state.task}/>
              <input type='submit' value='Add' className='submit-board-button'/>
              <p className='close-input' onClick={this.clickBack} >X</p>
            </form>
          </div>
          <CheckListItems tasks={checkList.checkItems}/>
          </div>
        })
      }
    </div>
    )
  }
}
export default connect(null, { createCheckItem })(CheckList)