import { getBoardData } from '../data/getTrelloData'
import store from '../store'

export const GET_BOARD = 'GET_BOARD'

export function loader () {
  return { type: 'LOADER' }
}
export function getBoard (payload) {
  return { type: 'GET_BOARD', payload }
}

export function fetchBoard () {
  store.dispatch(loader())
  return function (dispatch) {
    return getBoardData()
      .then(res => res.json())
      .then(board => {
        dispatch(getBoard(board))
      })
  }
}
