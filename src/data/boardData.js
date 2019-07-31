import { getBoardData, getTrelloLists, getAllCards } from './getTrelloData'

export const fetchBoardData = async () => {
  const board = await getBoardData()
  const lists = await getTrelloLists(board.id)
  board['lists'] = lists
  console.log(lists)
  lists.map(async list => {
    const cards = await getAllCards(list.id)
    list['cards'] = cards
    console.log(cards)
  })
  return board
}
