import React, { Component } from 'react'
import Board from './components/board/Board'
import { getBoardData, getTrelloLists, getAllCards, createTrelloList, createCard } from './data/getTrelloData'
import produce from 'immer'
import Loader from 'react-loader-spinner'
import './index.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      board: '',
      isLoaded: false
    }
  }
  componentDidMount() {
    getBoardData()
      .then(res => res.json())
      .then(board => {
        // console.log(board)
        this.setState({
          board: board,
          chandedText: board.name
        }, () => {
          getTrelloLists(board.id).then(resp => resp.json())
            .then(lists => {
              // console.log(lists)
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
      newBoard.lists.map(list => {
        if (list.id === id) {
          list['cards'] = cards
        }
      })
    })
    this.setState({
      board: board,
      isLoaded: true
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
            if (newBoard.lists) {
              newBoard.lists = [...newBoard.lists, data]
            }
            else {
              newBoard['lists'] = [data]
            }
          })
          this.setState({
            board: board,
            isLoaded: true
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
            newBoard.lists.map(list => {
              if (list.id === id) {
                if (list.cards) {
                  list.cards = [...list.cards, data]
                }
                else {
                  list['cards'] = [data]
                }
              }
            })
          })
          console.log(board)
          this.setState({
            board: board,
            isLoaded: true
          })
        })
        .catch(console.log)
    } else {
      return
    }
  }


  render () {
    return (
      <div className='main'>
        <div className='header'>
          <h2>Trello</h2>
        </div>
        {this.state.isLoaded
        ? <Board board={this.state.board}/>
        : <div className='loader'>
              <div className='load'>
                 <h2>Loading cards</h2>
                 <Loader
                 type="ThreeDots"
                 color="#FFF"
                 height="50"
                 width="50"/>
              </div>
            </div>
        }
      </div>
    )
  }
}
