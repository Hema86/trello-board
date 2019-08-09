import { getBoardData, getTrelloLists, getAllCards, updateBoardData, createTrelloList, getAllFilesAttached, createFileAttach, updateCardData, addCheckList, getCheckLists, 
  createCheckItem, deleteCheckList } from './getTrelloData'

export const fetchBoardData = async () => {
  const board = await getBoardData()
  let lists = await getTrelloLists(board.id)
  board['lists'] = lists
  let lists1 = lists.map(async (list) => {
    const cards = await getAllCards(list.id)
    list['cards'] = cards
    return list
  })
  const result = await Promise.all(lists1)
  board['lists'] = result
  return board
}

export const updateBoard = async (boardName) => {
  const updatedBoard = await updateBoardData(boardName)
  // console.log(boardName)
  return updatedBoard
}

export const updateCardName = async (cardName, cardId) => {
  const updatedCard = await updateCardData(cardName, cardId)
  return updatedCard
}

export const createList = async (listName) => {
  const createNewList = await createTrelloList(listName)
  // console.log(createNewList)
  return createNewList
}

export const getAllFiles = async (cardId) => {
  // console.log(cardId)
  const files = await getAllFilesAttached(cardId)
  // console.log(files)
  return files
}
export const attachFile = async (fileName, filePath, cardId, listId) => {
  const file = await createFileAttach(fileName, filePath, cardId)
  // console.log(file)
  return file
}

export const updateDesc = async (cardId, desc) => {
  const description = await updateDesc(cardId, desc)
  console.log(description)
  return description
}
export const createCheckList = async (cardId, title) => {
  const checkList = await addCheckList(cardId, title)
  console.log(checkList)
  return checkList
}

export const getAllcheckLists = async (cardId) => {
  const checkLists = await getCheckLists(cardId)
  return checkLists
}

export const checkItem = async (name, checkListId) => {
  const checkItemData = await createCheckItem(name, checkListId)
  console.log('checkItem')
  console.log(checkItemData)
  return checkItemData
}

export const dltCheckList = async (cardId, checkListId) => {
  const deletedcheckList = await deleteCheckList(cardId, checkListId)
  console.log(deletedcheckList)
  return deletedcheckList
}
