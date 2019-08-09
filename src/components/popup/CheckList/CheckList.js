import React, { Component } from 'react'
import Progress from './Progress'
import '../../popup/popup.css'
import CheckListItem from './CheckListItem'
import { createCheckItem, deleteCheckList } from '../../../actions/index'
import { connect } from 'react-redux'

class CheckList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      checkList:this.props.checkList,
      task:'',
      progress: 0
    }
  }

  componentDidUpdate () {
    if(this.props.checkList !== this.state.checkList) {
      this.setState({
        checkList: this.props.checkList
      })
    }
  }
  handleChange = (event) => {
    // console.log(event.target.value)
    this.setState({
    task: event.target.value
  })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createCheckItem(this.state.task, this.state.checkList.id, this.props.listId, this.state.checkList.idCard)
    this.setState({
      task:''
    })
  }
  
  deleteCheckList = () => {
     this.props.deleteCheckList(this.state.checkList.id, this.state.checkList.idCard, this.props.listId)
  }

  clickHandler = () => {
    this.setState({
      progress: this.state.progress < 100 ? this.state.progress + Math.floor(100/this.state.checkList.checkItems.length) : 100
    })
  }

  render () {
    let progress = {
      width: this.state.progress + '%'
    }
    // console.log(this.props.checkList)
    return (
      <div className='checkList'>
        <div className='check-list-header'>
          <h3>{this.state.checkList.name}</h3>
          <input type='submit' value='delete' onClick= {this.deleteCheckList}/>
        </div>
        <div className='check-item-creater'>
            <form onSubmit={this.handleSubmit}>
            <input type='text' className='check-item-input' onChange={this.handleChange} value={this.state.task}/>
              <input type='submit' value='Add' className='submit-board-button'/>
              <p className='close-input' onClick={this.clickBack} >X</p>
            </form>
        </div>
        <div className='shell'>
          <span className='bar-value'>{ this.state.progress + '%' }</span>
          <div className={'bar' + (this.state.progress === 100 ? '-complete' : '')} style={progress} />
        </div>
        {this.state.checkList.checkItems.map((checkItem,index) => {
         return <CheckListItem checkItem={checkItem} key={index} clickHandler={this.clickHandler}/>
        })
        } 
      </div>
    )
  
  }
}
export default connect(null, { createCheckItem, deleteCheckList })(CheckList)