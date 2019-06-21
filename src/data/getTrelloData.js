export const getBoardData = () => {
  return fetch(`https://api.trello.com/1/boards/qaeG0QcQ?key=2c1d38db56b47f819ffc264753d47e07&token=28a0eb8601696382e0a5a993e9501166d9623bb2802da8a91919b8ce31d47b48`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
}

export const updateBoardData = (name) => {
  return fetch(`https://api.trello.com/1/boards/5cf8fcd23518ef10a2eea9a9?name=${name}&key=2c1d38db56b47f819ffc264753d47e07&token=28a0eb8601696382e0a5a993e9501166d9623bb2802da8a91919b8ce31d47b48`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    method: 'PUT'
  })
}

export const createTrelloList = (name) => {
  return fetch(`https://api.trello.com/1/boards/qaeG0QcQ/lists?name=${name}&pos=top&key=2c1d38db56b47f819ffc264753d47e07&token=28a0eb8601696382e0a5a993e9501166d9623bb2802da8a91919b8ce31d47b48`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    method: 'POST'
  }
  )
}
export const getTrelloLists = (id) => {
  return fetch(`https://api.trello.com/1/boards/${id}/lists?cards=none&card_fields=all&filter=open&fields=all&key=2c1d38db56b47f819ffc264753d47e07&token=28a0eb8601696382e0a5a993e9501166d9623bb2802da8a91919b8ce31d47b48`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
}
export const updateListData = (name, id) => {
  console.log(name, id)
  return fetch(`https://api.trello.com/1/lists/${id}?name=${name}&key=2c1d38db56b47f819ffc264753d47e07&token=28a0eb8601696382e0a5a993e9501166d9623bb2802da8a91919b8ce31d47b48`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    method: 'PUT'
  })
}
export const createCard = (name, id) => {
  // console.log(name, id)
  return fetch(`https://api.trello.com/1/cards?name=${name}&idList=${id}&keepFromSource=all&key=2c1d38db56b47f819ffc264753d47e07&token=28a0eb8601696382e0a5a993e9501166d9623bb2802da8a91919b8ce31d47b48`,
    {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST'
    }

  )
}

export const getAllCards = (id) => {
  return fetch(`https://api.trello.com/1/lists/${id}/cards?key=2c1d38db56b47f819ffc264753d47e07&token=28a0eb8601696382e0a5a993e9501166d9623bb2802da8a91919b8ce31d47b48`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
}
