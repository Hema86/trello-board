import React, { Component, Fragment } from 'react'
import List from '../lists/List'
import ListAdder from '../lists/ListAdder'
import '../board/board.css'
import { updtBoard } from '../../actions/index'
import { connect } from 'react-redux'

class Board extends Component {
  constructor (props) {
      super(props)
      this.state = {
          chandedText:this.props.board.name,
          isEditing:false
      }
  }
  handleEditing = () => {
    this.setState({
      isEditing: true
    })
  }
  boardEditingDone = (event) => {
    console.log('done')
    if (event.keyCode === 13) {
      this.props.updtBoard(this.state.chandedText)
      this.setState({
        isEditing:false
      })
    }
  }

  handleEditingChange = (event) => {
    const newText = event.target.value
    this.setState({ chandedText: newText })
  }

  render() {
    const board = this.props.board
    return (
      <Fragment>
        <div className='board-content'>
            <div className='board-header'>
              {this.state.isEditing
                ? <input type='text' className='edit-board' value={this.state.chandedText}
                  onKeyDown={this.boardEditingDone} onChange={this.handleEditingChange} />
                : <span onClick={this.handleEditing}>{this.state.chandedText}</span>
              }
              <div>delete</div>
            </div>
            <div className='list-container'>
              {board.lists.map((list, index) =>{
                 return <List list={list} key={index} updateDropElement={this.props.updateDropElement}/>
              })}
              <ListAdder />
            </div>
          </div>
      </Fragment>

    )
  }
}
export default connect(null, { updtBoard })(Board)
