import React from 'react'
import Cards from './Cards'
import CardAdder from './CardAdder'

export default function Lists (props) {
  return props.lists.map((list, index) => {
    return list.cards
      ? (<div className='lists' key={index}>
        <h2 className='list'>{list.name}</h2>
        <Cards cards={list.cards} />
        <CardAdder addCard={props.addCard} listId={list.id} />
      </div>
      )
      : (<div className='lists' key={index}>
        <h2 className='list'>{list.name}</h2>
        <CardAdder addCard={props.addCard} listId={list.id} />
      </div>
      )
  })
}
