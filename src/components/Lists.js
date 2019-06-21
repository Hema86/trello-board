import React, { Component } from 'react'
import Cards from './Cards'
import CardAdder from './CardAdder'
import List from './List'

class Lists extends Component {
  render () {
    return this.props.lists.map((list, index) => {
      return list.cards
        ? (<div className='lists' key={index}>
          <List list={list} />
          <Cards cards={list.cards} />
          <CardAdder addCard={this.props.addCard} listId={list.id} />
        </div>
        )
        : (<div className='lists' key={index}>
          <List list={list} />
          <CardAdder addCard={this.props.addCard} listId={list.id} />
        </div>
        )
    })
  }
}
export default Lists
