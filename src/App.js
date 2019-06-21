import React, { Component, Fragment } from 'react'
import { getBoardData, getTrelloLists, getAllCards, createTrelloList, createCard, updateBoardData } from './data/getTrelloData'
import Lists from './components/Lists'
import ListAdder from './components/ListAdder'
import produce from 'immer'
import Loader from 'react-loader-spinner'

class App extends Component {
  constructor () {
    super()
    this.state = {
      board: '',
      isLoaded: false,
      isEditing:false
    }
  }
  componentDidMount () {
    getBoardData()
      .then(res => res.json())
      .then(board => {
        // console.log(board)
        this.setState({
          board: board,
          chandedText:board.name
        }, () => {
          getTrelloLists(board.id).then(resp => resp.json())
            .then(lists => {
              console.log(lists)
              this.updateLists(lists.reverse())
            })
        })
      })
}
  updateLists = lists => {
    // console.log(lists)
    const board = produce(this.state.board, newBoard => {
      newBoard['lists'] = lists
    })
    this.setState({
        board: board
     }, () => {
      lists.map(list => {
                getAllCards(list.id).then(resp => resp.json())
                  .then(cards => {
                    this.updateCards(cards, list.id)
              })
     })
  })
}
updateCards = (cards, id) => {
  const board = produce(this.state.board, newBoard => {
    newBoard.lists.map(list =>{
      if(list.id === id) {
        list['cards'] = cards
      }
    })
  })
  this.setState({
    board: board,
    isLoaded:true
 })
}

addList = (listName) => {
  // console.log(listName)
  if (listName) {
      createTrelloList(listName)
          .then(response => response.json())
          .then(data => {
              console.log(data)
              // console.log(this.state.board.lists)
              const board = produce(this.state.board, newBoard => {
                if(newBoard.lists) {
                newBoard.lists = [...newBoard.lists, data]
                }
                else {
                newBoard['lists'] = [data]
                }
              })
              this.setState({
                  board: board,
                  isLoaded:true
              })
          })
          .catch(console.log)
  } else {
      return
  }
  // console.log(this.board)
}

addCard = (cardName, id) => {
  // console.log(cardName, id)
  if (cardName && id) {
      createCard(cardName, id)
          .then(response => response.json())
          .then(data => {
              // console.log(data)
              const board = produce(this.state.board, newBoard => {
                newBoard.lists.map(list =>{
                  if(list.id === id) {
                    if(list.cards) {
                    list.cards = [...list.cards, data]
                    }
                    else{
                      list['cards'] = [data]
                    }
                }
              })
            })
              console.log(board)
              this.setState({
                  board:board,
                  isLoaded:true
              })
          })
          .catch(console.log)
  } else {
      return
  }
}

handleEditing = () =>{
  this.setState({
    isEditing:true
  })
}
boardEditingDone = (event) => {
  console.log('done')
  if(event.keyCode === 13) {
    updateBoardData(event.target.value)
    this.setState({
      isEditing:false
    })
  }
}

handleEditingChange = (event) => {
  console.log(event.target.value)
  const newText = event.target.value
  this.setState({chandedText:newText})
}

  render () {
    // console.log(this.state.board)
    return (
      <Fragment>
        <div className='header'>
          <h2>Trello</h2>
        </div>
        {this.state.isLoaded
          ? <div className='App'>
            <div className='board-header'>
            {this.state.isEditing
            ?<input type='text' className='edit-board' value={this.state.chandedText} 
            onKeyDown={this.boardEditingDone} onChange={this.handleEditingChange}/>
            :<span onClick={this.handleEditing}>{this.state.chandedText}</span>
            }
              
            </div>
            <div className='list-container'>
            <Lists lists={this.state.board.lists} addCard={this.addCard}/>
            <ListAdder addList={this.addList}/>
            </div>
          </div>
          : <div className='loader'>
          <div className='load'>
          <h2>Loading cards</h2>
          <Loader  
         type="ThreeDots"
         color="#FFF"
         height="50"	
         width="50"
      /></div>
          </div>
        }
      </Fragment>

    )
  }
}

export default App
