// import { getBoardData } from '../data/getTrelloData'
// import store from '../store'
import { fetchBoardData } from '../data/boardData'

export const GET_BOARD = 'GET_BOARD'

// export function loader () {
//   return { type: 'LOADER' }
// }
export function getBoard (payload) {
  return { type: 'GET_BOARD', payload }
}

export function fetchBoard () {
  return async function (dispatch) {
    const board = await fetchBoardData()
    const actn = dispatch(getBoard(board))
    return actn
  }
}
