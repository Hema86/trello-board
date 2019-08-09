import React, { Component } from 'react'
import CheckList from './CheckList'
import '../../popup/popup.css'
import { addCheckList } from '../../../actions/index'
import { connect } from 'react-redux'

class AddCheckList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      checkLists: this.props.checkLists,
      checkListTitle:'',
      isAdding: false
    }
  }
  componentDidUpdate () {
    if(this.props.checkLists !== this.state.checkLists) {
      this.setState({
        checkLists:this.props.checkLists
      })
    }
  }
  handleChange = (event) => {
  this.setState({
    checkListTitle: event.target.value
  })
  }
  handleSubmit = (event) => {
    console.log('done')
    console.log(this.state.checkListTitle)
    event.preventDefault()
    this.props.addCheckList(this.props.cardId, this.state.checkListTitle, this.props.listId)
    this.setState({ 
      checkListTitle: '',
      isAdding:true
   })
 }

  render () {
    console.log(this.state.checkLists)
    console.log(this.props.listId)
    return (
      <div className='checkList'>
        <div className='check-list-adder'>
          <form onSubmit={this.handleSubmit}>
            <input type='text' className='check-list-input' onChange={this.handleChange} value={this.state.checkListTitle}/>
            <input type='submit' value='createCheckList' className='submit-board-button' />
          </form>
        </div>    
      <CheckList checkLists={this.state.checkLists} listId={this.props.listId}/>
      </div>

    )
  }
}

export default connect(null, { addCheckList })(AddCheckList)