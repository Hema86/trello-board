import { GET_BOARD, UPDATE_BOARD, ADD_LIST, GET_FILES } from '../actions/index'

const initialState = {
  isLoading: false,
  board: []
}

function rootReducer (state = initialState, action) {
  if (action.type === GET_BOARD) {
    return Object.assign({}, state, {
      board: state.board.concat(action.payload),
      isLoading: true
    })
  }
  if (action.type === UPDATE_BOARD) {
    return Object.assign({}, state, {
      board: state.board.concat(action.payload),
      isLoading: true
    })
  }
  if (action.type === ADD_LIST) {
    let board = Object.assign({}, state.board[0])
    board.lists = board.lists.concat(action.listName)
    return Object.assign({}, state, {
      board: [board],
      isLoading: true
    })
  }
  if (action.type === GET_FILES) {
    console.log(action.files)
    console.log(action.id)
    let board = Object.assign({}, state.board[0])
    board.lists.map(list => {
      list.cards.map(card => {
        if (card.id === action.id) {
          card['files'] = action.files
        }
      })
    })
    return Object.assign({}, state, {
      board: [board],
      isLoading: true
    })
  }
  return state
}
export default rootReducer
