// import { getBoardData } from '../data/getTrelloData'
// import store from '../store'
import { fetchBoardData, updateBoard } from '../data/boardData'

export const GET_BOARD = 'GET_BOARD'
export const UPDATE_BOARD = 'UPDATE_BOARD'

// export function loader () {
//   return { type: 'LOADER' }
// }
export function getBoard (payload) {
  return { type: GET_BOARD, payload }
}
export function updateBoardData (data) {
  return { type: UPDATE_BOARD, data }
}

export function fetchBoard () {
  return async function (dispatch) {
    const board = await fetchBoardData()
    const actn = dispatch(getBoard(board))
    return actn
  }
}

export function updtBoard (boardName) {
  console.log(boardName)
  return async function (dispatch) {
    const updatedBoard = await updateBoard(boardName)
    console.log(updateBoard)
    const actn = dispatch(updateBoardData(updatedBoard))
    return actn
  }
}
