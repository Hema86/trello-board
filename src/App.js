import React, { Component } from 'react'
import Board from './components/board/Board'
import Loader from 'react-loader-spinner'
import { connect } from 'react-redux'
import { fetchBoard } from './actions/index'
import './index.css'

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
  render () {
    const board = this.props.board[0]
    // console.log(board)
    return (
      <div className='main'>
        <div className='header'>
          <h2>Trello</h2>
        </div>
        {this.props.isLoading
          ? <Board board={board} updateSingleCard={this.updateSingleCard} updateDropElement={this.updateDropElement} addCard={this.addCard} deleteCard={this.handleDelete} />
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

const mapStateToProps = state => {
  return { board: state.board,
    isLoading: state.isLoading }
}

export default connect(mapStateToProps, { fetchBoard })(App)
