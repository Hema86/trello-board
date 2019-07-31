import { getBoardData, getTrelloLists, getAllCards } from './getTrelloData'

export const fetchBoardData = async () => {
  const board = await getBoardData()
  let lists = await getTrelloLists(board.id)
  board['lists'] = lists
  // console.log(lists)
  // get cards for all the lists - using await
  // return board
  let lists1 = lists.map(async (list) => {
    const cards = await getAllCards(list.id)
    list['cards'] = cards
    return list
  })
  const result = await Promise.all(lists1)
  board['lists'] = result
  return board
}
