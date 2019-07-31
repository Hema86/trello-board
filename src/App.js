import React, { Component } from 'react'
import Board from './components/board/Board'
// import { getBoardData, getTrelloLists, getAllCards, createTrelloList, createCard, updateCardData, dltCard } from './data/getTrelloData'
// import produce from 'immer'
import Loader from 'react-loader-spinner'
import './index.css'
import { connect } from 'react-redux'
import { fetchBoard } from './actions/index'

// function mapDispatchToProps (dispatch) {
//   return {
//     addBoard: board => dispatch(addBoard(board))
//   }
// }
const mapStateToProps = state => {
  return { board: state.board,
    isLoading: state.isLoading }
}

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoaded: false
    }
  }
  componentDidMount () {
    this.props.fetchBoard()
  }
  // updateLists = lists => {
  //   // console.log(lists)
  //   const board = produce(this.state.board, newBoard => {
  //     newBoard['lists'] = lists
  //   })
  //   this.setState({
  //     board: board
  //   }, () => {
  //     lists.map(list => {
  //       getAllCards(list.id).then(resp => resp.json())
  //         .then(cards => {
  //           this.updateCards(cards, list.id)
  //         })
  //     })
  //   })
  // }
  // updateCards = (cards, id) => {
  //   const board = produce(this.state.board, newBoard => {
  //     newBoard.lists.map(list => {
  //       if (list.id === id) {
  //         list['cards'] = cards
  //       }
  //     })
  //   })
  //   this.setState({
  //     board: board,
  //     isLoaded: true
  //   })
  // }

  //   addList = (listName) => {
  //     // console.log(listName)
  //     if (listName) {
  //       createTrelloList(listName)
  //         .then(response => response.json())
  //         .then(data => {
  //           // console.log(data)
  //           // console.log(this.state.board.lists)
  //           const board = produce(this.state.board, newBoard => {
  //             if (newBoard.lists) {
  //               newBoard.lists = [...newBoard.lists, data]
  //             }
  //             else {
  //               newBoard['lists'] = [data]
  //             }
  //           })
  //           this.setState({
  //             board: board,
  //             isLoaded: true
  //           })
  //         })
  //         .catch(console.log)
  //     } else {
  //       return
  //     }
  //     // console.log(this.board)
  //   }

  //   addCard = (cardName, id) => {
  //     // console.log(cardName, id)
  //     if (cardName && id) {
  //       createCard(cardName, id)
  //         .then(response => response.json())
  //         .then(data => {
  //           // console.log(data)
  //           const board = produce(this.state.board, newBoard => {
  //             newBoard.lists.map(list => {
  //               if (list.id === id) {
  //                 if (list.cards) {
  //                   list.cards = [...list.cards, data]
  //                 }
  //                 else {
  //                   list['cards'] = [data]
  //                 }
  //               }
  //             })
  //           })
  //           // console.log(board)
  //           this.setState({
  //             board: board,
  //             isLoaded: true
  //           })
  //         })
  //         .catch(console.log)
  //     } else {
  //       return
  //     }
  //   }
  //   updateSingleCard = (name, id, idList) => {
  //     console.log(name, id, idList)
  //     if (name && id) {
  //       updateCardData(name, id)
  //         .then(response => response.json())
  //         .then(data => {
  //           // console.log(data)
  //           const updatedBoard = produce(this.state.board, newBoard => {
  //             newBoard.lists.map(list => {
  //               if (list.id === idList) {
  //                 list.cards.map(card => {
  //                   if(card.id === id) {
  //                     card.name = name
  //                   }
  //                 })
  //               }
  //             })
  //           })
  //           this.setState({
  //             board: updatedBoard
  //           })
  //         })
  //         .catch(console.log)
  //     } else {
  //       return
  //     }
  //   }
  //   updateDropElement = (oldIndex, card, newIndex) => {
  //     const newBoard = produce(this.state.board, newBoard => {
  //       newBoard.lists.map(list => {
  //         if (list.id === card.idList) {
  //          list.cards.splice(newIndex, 0, list.cards.splice(oldIndex, 1)[0])
  //          list.cards.map(card =>{

  //          })
  //         }
  //       })
  //     })
  //     this.setState({
  //       board: newBoard
  //     })
  //   }

  //   handleDelete = (cardObj) => {
  //     console.log(cardObj)
  //   const newBoard = produce(this.state.board, newBoard => {
  //     newBoard.lists.map(list => {
  //       if (list.id === cardObj.idList) {
  //        let updatedCards = list.cards.filter(card => card.id !== cardObj.id)
  //          list.cards = updatedCards
  //           dltCard(cardObj.id)
  //          }
  //        })
  //     })
  //   this.setState({
  //     board: newBoard
  //   })
  // }
  render () {
    console.log(this.props.board)
    return (
      <div className='main'>
        <div className='header'>
          <h2>Trello</h2>
        </div>
        {this.props.isLoading
          ? <Board updateSingleCard={this.updateSingleCard} updateDropElement={this.updateDropElement} addCard={this.addCard} deleteCard={this.handleDelete} />
          : <div className='loader'>
            <div className='load'>
              <h2 onClick={this.handleClick}>Loading cards</h2>
              <Loader
                type='ThreeDots'
                color='#1f5c87'
                height='50'
                width='50' />
            </div>
          </div>
        }
      </div>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     board: state.board
//   }
// }

// export default connect(mapStateToProps)(App)

export default connect(mapStateToProps, { fetchBoard })(App)
