import { fetchBoardData, updateBoard, createList, getAllFiles, attachFile, updateCardName, updateDesc, createCheckList, 
  getAllcheckLists, checkItem, dltCheckList } from '../data/boardData'

export const GET_BOARD = 'GET_BOARD'
export const UPDATE_BOARD = 'UPDATE_BOARD'
export const ADD_LIST = 'ADD_LIST'
export const GET_FILES = 'GET_FILES'
export const ATTACH_FILE = 'ATTACH_FILE'
export const UPDATE_CARD = 'UPDATE_CARD'
export const UPDATE_DESC = 'UPDATE_DESC'
export const CREATE_CHECKLIST = 'CREATE_CHECKlIST'
export const GET_CHECKLISTS = 'GET_CHECKLISTS'
export const CHECK_ITEM = 'CHECK_ITEM'
export const DELETE_CHECKLIST = 'DELETE_CHECKLIST'

export function getBoard (payload) {
  return { type: GET_BOARD, payload }
}
export function updateBoardData (data) {
  return { type: UPDATE_BOARD, data }
}
export function addList (listName) {
  return { type: ADD_LIST, listName }
}
export function getFiles (files, cardId, listId) {
  return { type: GET_FILES, files, cardId, listId }
}
export function addFile (file, cardId, listId) {
  return { type: ATTACH_FILE, cardId, listId, file }
}

export function updateCardData (card, cardId, listId) {
  return { type: UPDATE_CARD, card, cardId, listId }
}

export function updateDescData (desc, cardId, listId) {
  return { type: UPDATE_DESC, desc, cardId, listId }
}

export function checkListCreater (checkList, cardId, listId) {
  return { type: CREATE_CHECKLIST, cardId, checkList, listId }
}

export function fetchCheckLists (checkLists, cardId, listId) {
  return { type: GET_CHECKLISTS, checkLists, cardId, listId }
}

export function checkItemCreater (checkItem, checkListId, cardId, listId) {
  return { type: CHECK_ITEM, checkItem, checkListId, cardId, listId }
}

export function dltCheckListCreater (deletedCheckList, checkListId, cardId, listId) {
  return { type: DELETE_CHECKLIST, deletedCheckList, checkListId, cardId, listId }
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
    const actn = dispatch(addList(newList))
    return actn
  }
}
// export function updateList (listName, listId) {

// }

export function updateCard (cardName, cardId, listId) {
  return async function (dispatch) {
    const newCard = await updateCardName(cardName, cardId)
    const actn = dispatch(updateCardData(newCard.name, cardId, listId))
    return actn
  }
}

export function updateDescription (desc, cardId, listId) {
  return async function (dispatch) {
    const description = await updateDesc(desc, cardId)
    console.log(description)
    const action = dispatch(updateDescData(description.desc, cardId, listId))
    return action
  }
}

export function getAllFilesAttached (cardId, listId) {
  return async function (dispatch) {
    const files = await getAllFiles(cardId)
    // console.log(files)
    const actn = dispatch(getFiles(files, cardId, listId))
    return actn
  }
}
export function attachNewFile (fileName, filePath, cardId, listId) {
  return async function (dispatch) {
    const file = await attachFile(fileName, filePath, cardId)
    const actn = dispatch(addFile(file, cardId, listId))
    // console.log(actn)
    return actn
  }
}

export function addCheckList (cardId, title, listId) {
  return async function (dispatch) {
    const checkList = await createCheckList(cardId, title)
    console.log(checkList)
    const actn = dispatch(checkListCreater(checkList, cardId, listId))
    return actn
  }
}
export function getCheckLists (cardId, listId) {
  return async function (dispatch) {
    const checkLists = await getAllcheckLists(cardId)
    // console.log(checkLists)
    const actn = dispatch(fetchCheckLists(checkLists, cardId, listId))
    return actn
  }
}

export function createCheckItem (name, checkListId, cardId, listId) {
  // console.log(listId, checkListId, cardId, name)
  return async function (dispatch) {
    const newCheckItem = await checkItem(name, checkListId)
    // console.log('check')
    // console.log(newCheckItem)
    const actn = dispatch(checkItemCreater(newCheckItem, checkListId, cardId, listId))
    return actn
  }
}

export function deleteCheckList (cardId, checkListId, listId) {
  return async function (dispatch) {
    const deletedCheckList = await dltCheckList(cardId, checkListId)
    console.log(deletedCheckList)
    const actn = dispatch(dltCheckListCreater(deletedCheckList, checkListId, cardId, listId))
    return actn
  }
}
// export function addDescription 
