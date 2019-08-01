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
      chandedText:this.props.list.name,
      draggedTask:{}
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

   allowDrop = (ev) =>{
    ev.preventDefault();
  }
  
  onDrag = (ev, card) =>{
    ev.dataTransfer.setData("text", ev.target.id);
    // console.log(ev.target.id)
    this.setState({
      draggedTask: card  
    })
  
  }
  
   drop = (ev) => {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    const index = ev.target.id
    // console.log(data)
    this.props.updateDropElement(data, this.state.draggedTask, index)
  }
  render () {
    // console.log(this.props.list)
    // console.log(JSON.stringify(this.props.list))
    return (
      <div className='lists'>
      <div className='list-header'>
        {this.state.isEditing
          ? <input type='text' className='board-input' value={this.state.chandedText}
            onKeyDown={this.listEditingDone} onChange={this.handleEditingChange} />
          : <span className='list' onClick={this.handleEditing}>{this.state.chandedText}</span>
        }
        </div>
        <div className='drop-container' onDrop={this.drop} onDragOver={this.allowDrop} id='data'>
        {this.props.list.cards
          ? (this.props.list.cards.map((card, index) => {
            return (
              <div className='cards' key={index} onDragStart={(event) => this.onDrag(event, card)} draggable='true' id={index} >
                <Card card={card} updateSingleCard={this.props.updateSingleCard} deleteCard={this.props.deleteCard}/>
              </div>
            )
          })
          )
          : <CardAdder addCard={this.props.addCard} listId={this.props.list.id} />
        }
        </div>
        {/* <CardAdder addCard={this.props.addCard} listId={this.props.list.id} /> */}

      </div>
    )
  }
}
