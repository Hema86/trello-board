import React, { Component } from 'react'
import '../../popup/popup.css'
import { addCheckList } from '../../../actions/index'
import { connect } from 'react-redux'

class AddCheckList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // checkLists: this.props.checkLists,
      checkListTitle: '',
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
    console.log(this.state.checkListTitle)
    event.preventDefault()
    this.props.addCheckList(this.props.cardId, this.state.checkListTitle, this.props.listId)
    this.setState({
      checkListTitle: '',
      isAdding: true
    })
  }

  render() {
    // console.log(this.props.checkLists)
    console.log(this.props.listId)
    return (
      <div className='checkList'>
        <div className='check-list-adder'>
          <form onSubmit={this.handleSubmit}>
            <input type='text' className='check-list-input' onChange={this.handleChange} value={this.state.checkListTitle} />
            <input type='submit' value='createCheckList' className='submit-board-button' />
          </form>
        </div>
      </div>

    )
  }
}

export default connect(null, { addCheckList })(AddCheckList)