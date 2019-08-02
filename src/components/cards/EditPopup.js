import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faCalendar, faFastForward } from '@fortawesome/free-solid-svg-icons'
import Color from './Color'
import DueDate from './DueDate'
import image from '../../images.jpeg'
import '../cards/card.css'

export default class EditPopup extends Component {
  constructor (props) {
    super(props)
    this.state = {
      changedText:this.props.card.name,
      isEditing:false,
      showDate: false,
      showColor: false,
      bgColor: 'white',
      dueDate:''
    }
  }

  handleChange = (event) => {
    this.setState({
      changedText:event.target.value
    })
  }

  cardEditingDone = (event) => {
    console.log('done')
    // console.log(this.props.card.idList)
    if (event.keyCode === 13) {
      this.props.updateSingleCard(event.target.value, this.props.card.id, this.props.card.idList)
      this.props.closeEditor()
    }
  }
  handleDueDate = () => {
    this.setState({
      showDate:true
    })
  }
  editCard = () => {
    this.setState({
      isEditing:true
    })
  }

  handleColor = () => {
    this.setState({
      showColor:true
    })
  }
   handleDelete = (event) => {
     console.log(this.props.card)
    this.props.deleteCard(this.props.card)
    this.setState({
      isEditing:true
    })
   }
 
   setBackground = (color) => {
     console.log(color)
     this.setState({
       bgColor: color
     })
   }
   setDate = (date) =>{
     console.log(date)
     this.setState({
       dueDate: date
     })
   }
   render () {
    console.log(this.props.card.name)
    return (
      <div className='card-edit-modal'>
        <div className='modal' style={{backgroundColor: this.state.bgColor}}>
         {this.state.isEditing
         ? <input type='text' className='edit-card' value={this.state.changedText} onChange={this.handleChange} onKeyDown={this.cardEditingDone}/>
         : <div>
           <span className='edit-card' onClick={this.editCard}>{this.state.changedText}</span>
           <div className='due-date'>{this.state.dueDate}</div>
           </div>
         }
        </div>
        <div className='options'>
          {this.state.showDate
            ? <DueDate setDate={this.setDate}/>
            : <div className='card-edit-button' onClick={this.handleDueDate}>
                <FontAwesomeIcon icon={faCalendar} color='#fff' />
                <a className='option-link'>due date</a>
            </div>
          }
          { this.state.showColor
          ? <Color setBackground={this.setBackground}/>
          : <div className='card-edit-button' onClick={this.handleColor}>
              <img src={image} className='color-img' alt='color picker'/>
              <a className='option-link'>color</a>
            </div>
          }
          <div className='card-edit-button' onClick={this.handleDelete}>
            <FontAwesomeIcon icon={faTrash} color='#fff' />
            <a className='option-link'>delete</a>
          </div>
        </div>
      </div>
    )
  }
}