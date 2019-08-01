import { GET_BOARD, UPDATE_BOARD, ADD_LIST } from '../actions/index'

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
  return state
}
export default rootReducer
