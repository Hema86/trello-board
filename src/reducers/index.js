import { GET_BOARD, UPDATE_BOARD, ADD_LIST, GET_FILES, ATTACH_FILE } from '../actions/index'

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
    let board = Object.assign({}, state.board[0])
    board.lists.map(list => {
      if (list.id === action.listId) {
        list.cards.map(card => {
          if (card.id === action.cardId) {
            card['files'] = action.files
          }
        })
      }
    })
    return Object.assign({}, state, {
      board: [board],
      isLoading: true
    })
  }
  if (action.type === ATTACH_FILE) {
    let board = Object.assign({}, state.board[0])
    board.lists.map(list => {
      if (list.id === action.listId) {
        list.cards.map(card => {
          if (card.id === action.cardId) {
            card.files = [...card.files, action.file]
          }
        })
      }
    })
    return Object.assign({}, state, {
      board: [board],
      isLoading: true
    })
  }
  return state
}
export default rootReducer
