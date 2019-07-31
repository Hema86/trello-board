import React, { Component, Fragment } from 'react'
import List from '../lists/List'
import ListAdder from '../lists/ListAdder'
import { updateBoardData } from '../../data/getTrelloData'
import '../board/board.css'

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
      updateBoardData(event.target.value)
      this.setState({
        isEditing: false
      })
    }
  }

  handleEditingChange = (event) => {
    console.log(event.target.value)
    const newText = event.target.value
    this.setState({ chandedText: newText })
  }

  render() {
    const board = this.props.board
    // console.log(board.name)
    return (
      <Fragment>
        <div className='board-content'>
            <div className='board-header'>
              {this.state.isEditing
                ? <input type='text' className='edit-board' value={this.state.chandedText}
                  onKeyDown={this.boardEditingDone} onChange={this.handleEditingChange} />
                : <span onClick={this.handleEditing}>{this.state.chandedText}</span>
              }
            </div>
            <div className='list-container'>
              {board.lists.map((list, index) =>{
                 return <List list={list} key={index} updateSingleCard={this.props.updateSingleCard} updateDropElement={this.props.updateDropElement} addCard={this.props.addCard} deleteCard={this.props.deleteCard}/>
              })}
              <ListAdder addList={this.addList} />
            </div>
          </div>
      </Fragment>

    )
  }
}

export default Board
