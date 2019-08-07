import { getBoardData, getTrelloLists, getAllCards, updateBoardData, createTrelloList, getAllFilesAttached, createFileAttach } from './getTrelloData'

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

export const createList = async (listName) => {
  const createNewList = await createTrelloList(listName)
  // console.log(createNewList)
  return createNewList
}

export const getAllFiles = async (cardId) => {
  console.log(cardId)
  const files = await getAllFilesAttached(cardId)
  console.log(files)
  return files
}
export const attachFile = async (fileName, filePath, cardId) => {
  const file = await createFileAttach(fileName, filePath, cardId)
  console.log(file)
  return file
}
