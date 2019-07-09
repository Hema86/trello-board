import React, { Component } from 'react'
import { updateListData } from '../../data/getTrelloData'
import Card from '../cards/Card'
import CardAdder from '../cards/CardAdder'
import '../lists/list.css'

export default class List extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isEditing: false,
      chandedText:this.props.list.name
        }
      }
  handleEditing = () =>{
    this.setState({
      isEditing:true
    })
  }
  listEditingDone = (event) => {
    if(event.keyCode === 13) {
      updateListData(event.target.value, this.props.list.id)
      this.setState({
        isEditing:false
      })
    }
  }
  
  handleEditingChange = (event) => {
    const newText = event.target.value
    this.setState({chandedText:newText})
  }  
  render () {
      // console.log(this.props.list)
    return (
      <div className='lists'>
      <div className='list-header'>
        {this.state.isEditing
          ? <input type='text' className='board-input' value={this.state.chandedText}
            onKeyDown={this.listEditingDone} onChange={this.handleEditingChange} />
          : <span className='list' onClick={this.handleEditing}>{this.state.chandedText}</span>
        }
        </div>
        {this.props.list.cards
          ? (this.props.list.cards.map((card, index) => {
            return (
              <div className='cards' key={index}>
                <Card card={card} updateSingleCard={this.props.updateSingleCard}/>
              </div>
            )
          })
          )
          : <CardAdder addCard={this.props.addCard} listId={this.props.list.id} />
        }
        <CardAdder addCard={this.props.addCard} listId={this.props.list.id} />

      </div>
    )
  }
}
