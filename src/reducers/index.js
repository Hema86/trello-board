import { GET_BOARD } from '../actions/index'

const initialState = {
  board: [{
    name: 'geekskool'
  }]
}

function rootReducer (state = initialState, action) {
  if (action.type === 'LODER')
  { 
if (action.type === GET_BOARD) {
    return Object.assign({}, state, {
      board: state.board.concat(action.payload)
    })
  } 
}

  return state
}
export default rootReducer
