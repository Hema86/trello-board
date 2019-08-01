import { fetchBoardData, updateBoard, createList } from '../data/boardData'
// import { createTrelloList } from '../data/getTrelloData';

export const GET_BOARD = 'GET_BOARD'
export const UPDATE_BOARD = 'UPDATE_BOARD'
export const ADD_LIST = 'ADD_LIST'

export function getBoard (payload) {
  return { type: GET_BOARD, payload }
}
export function updateBoardData (data) {
  return { type: UPDATE_BOARD, data }
}
export function addList (listName) {
  return { type: ADD_LIST, listName }
}

export function fetchBoard () {
  return async function (dispatch) {
    const board = await fetchBoardData()
    const actn = dispatch(getBoard(board))
    return actn
  }
}

export function updtBoard (boardName) {
  // console.log(boardName)
  return async function (dispatch) {
    const updatedBoard = await updateBoard(boardName)
    // console.log(updateBoard)
    const actn = dispatch(updateBoardData(updatedBoard))
    return actn
  }
}

export function addNewList (listName) {
  return async function (dispatch) {
    const newList = await createList(listName)
    // console.log('newlist')
    // console.log(newList)
    const actn = dispatch(addList(newList))
    return actn
  }
}
