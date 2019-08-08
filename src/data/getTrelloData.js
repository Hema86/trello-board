export const getBoardData = async () => {
  const result = await fetch(`https://api.trello.com/1/boards/qaeG0QcQ?key=2c1d38db56b47f819ffc264753d47e07&token=d7fb8033df901dc4f9f231901f8d7e4bbbdb804262a899a87421b405eafd2daf`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
  return result.json()
}

export const updateBoardData = async (name) => {
  const result = await fetch(`https://api.trello.com/1/boards/5cf8fcd23518ef10a2eea9a9?name=${name}&key=2c1d38db56b47f819ffc264753d47e07&token=d7fb8033df901dc4f9f231901f8d7e4bbbdb804262a899a87421b405eafd2daf`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    method: 'PUT'
  })
  return result.json()
}

export const createTrelloList = async (name) => {
  const result = await fetch(`https://api.trello.com/1/boards/qaeG0QcQ/lists?name=${name}&pos=top&key=2c1d38db56b47f819ffc264753d47e07&token=d7fb8033df901dc4f9f231901f8d7e4bbbdb804262a899a87421b405eafd2daf`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    method: 'POST'
  }
  )
  return result.json()
}
export const getTrelloLists = async (id) => {
  const result = await fetch(`https://api.trello.com/1/boards/${id}/lists?cards=none&card_fields=all&filter=open&fields=all&key=2c1d38db56b47f819ffc264753d47e07&token=d7fb8033df901dc4f9f231901f8d7e4bbbdb804262a899a87421b405eafd2daf`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
  return result.json()
}
export const updateListData = async (name, id) => {
  console.log(name, id)
  const result = await fetch(`https://api.trello.com/1/lists/${id}?name=${name}&key=2c1d38db56b47f819ffc264753d47e07&token=d7fb8033df901dc4f9f231901f8d7e4bbbdb804262a899a87421b405eafd2daf`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    method: 'PUT'
  })
  return result.json()
}
export const createCard = async (name, id) => {
  // console.log(name, id)
  const result = await fetch(`https://api.trello.com/1/cards?name=${name}&idList=${id}&keepFromSource=all&key=2c1d38db56b47f819ffc264753d47e07&token=d7fb8033df901dc4f9f231901f8d7e4bbbdb804262a899a87421b405eafd2daf`,
    {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST'
    }

  )
  return result.json()
}
export const updateCardData = async (name, id) => {
  console.log(name, id)
  const result = await fetch(`https://api.trello.com/1/cards/${id}?name=${name}&key=2c1d38db56b47f819ffc264753d47e07&token=d7fb8033df901dc4f9f231901f8d7e4bbbdb804262a899a87421b405eafd2daf`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    method: 'PUT'
  })
  return result.json()
}

export const getAllCards = async (id) => {
  const result = await fetch(`https://api.trello.com/1/lists/${id}/cards?key=2c1d38db56b47f819ffc264753d47e07&token=d7fb8033df901dc4f9f231901f8d7e4bbbdb804262a899a87421b405eafd2daf`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
  return result.json()
}

export const dltCard = async (id) => {
  // console.log(id)
  const result = await fetch(`https://api.trello.com/1/lists/${id}/cards?key=2c1d38db56b47f819ffc264753d47e07&token=d7fb8033df901dc4f9f231901f8d7e4bbbdb804262a899a87421b405eafd2daf`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
  return result.json()
}

export const getAllFilesAttached = async (id) => {
  // console.log(id)
  const result = await fetch(`https://api.trello.com/1/cards/${id}/attachments?key=2c1d38db56b47f819ffc264753d47e07&token=d7fb8033df901dc4f9f231901f8d7e4bbbdb804262a899a87421b405eafd2daf`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
  return result.json()
}

export const createFileAttach = async (name, path, cardId) => {
  console.log(name, cardId, path)
  const result = await fetch(`https://api.trello.com/1/cards/${cardId}/attachments?name=${name}&file=${path}&key=2c1d38db56b47f819ffc264753d47e07&token=d7fb8033df901dc4f9f231901f8d7e4bbbdb804262a899a87421b405eafd2daf`,
    {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST'
    }

  )
  // console.log('********')
  // console.log(result)
  return result.json()
}

export const updateDesc = async (cardId, desc) => {
  const result = await fetch(`https://api.trello.com/1/cards/${cardId}?desc=${desc}&key=2c1d38db56b47f819ffc264753d47e07&token=d7fb8033df901dc4f9f231901f8d7e4bbbdb804262a899a87421b405eafd2daf`,
    {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'PUT'
    }
  )
  return result.json()
}
