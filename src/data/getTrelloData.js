export const getBoardData = () => {
  return fetch(`https://api.trello.com/1/boards/qaeG0QcQ?key=2c1d38db56b47f819ffc264753d47e07&token=d7fb8033df901dc4f9f231901f8d7e4bbbdb804262a899a87421b405eafd2daf`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
}

export const updateBoardData = (name) => {
  return fetch(`https://api.trello.com/1/boards/5cf8fcd23518ef10a2eea9a9?name=${name}&key=2c1d38db56b47f819ffc264753d47e07&token=d7fb8033df901dc4f9f231901f8d7e4bbbdb804262a899a87421b405eafd2daf`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    method: 'PUT'
  })
}

export const createTrelloList = (name) => {
  return fetch(`https://api.trello.com/1/boards/qaeG0QcQ/lists?name=${name}&pos=top&key=2c1d38db56b47f819ffc264753d47e07&token=d7fb8033df901dc4f9f231901f8d7e4bbbdb804262a899a87421b405eafd2daf`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    method: 'POST'
  }
  )
}
export const getTrelloLists = (id) => {
  return fetch(`https://api.trello.com/1/boards/${id}/lists?cards=none&card_fields=all&filter=open&fields=all&key=2c1d38db56b47f819ffc264753d47e07&token=d7fb8033df901dc4f9f231901f8d7e4bbbdb804262a899a87421b405eafd2daf`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
}
export const updateListData = (name, id) => {
  console.log(name, id)
  return fetch(`https://api.trello.com/1/lists/${id}?name=${name}&key=2c1d38db56b47f819ffc264753d47e07&token=d7fb8033df901dc4f9f231901f8d7e4bbbdb804262a899a87421b405eafd2daf`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    method: 'PUT'
  })
}
export const createCard = (name, id) => {
  // console.log(name, id)
  return fetch(`https://api.trello.com/1/cards?name=${name}&idList=${id}&keepFromSource=all&key=2c1d38db56b47f819ffc264753d47e07&token=d7fb8033df901dc4f9f231901f8d7e4bbbdb804262a899a87421b405eafd2daf`,
    {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST'
    }

  )
}
export const updateCardData = (name, id) => {
  console.log(name, id)
  return fetch(`https://api.trello.com/1/cards/${id}?name=${name}&key=2c1d38db56b47f819ffc264753d47e07&token=d7fb8033df901dc4f9f231901f8d7e4bbbdb804262a899a87421b405eafd2daf`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    method: 'PUT'
  })
}

export const getAllCards = (id) => {
  return fetch(`https://api.trello.com/1/lists/${id}/cards?key=2c1d38db56b47f819ffc264753d47e07&token=d7fb8033df901dc4f9f231901f8d7e4bbbdb804262a899a87421b405eafd2daf`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
}

export const dltCard = (id) => {
  // console.log(id)
  return fetch(`https://api.trello.com/1/lists/${id}/cards?key=2c1d38db56b47f819ffc264753d47e07&token=d7fb8033df901dc4f9f231901f8d7e4bbbdb804262a899a87421b405eafd2daf`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
}