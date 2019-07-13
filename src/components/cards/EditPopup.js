import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faCalendar } from '@fortawesome/free-solid-svg-icons'
import Color from '../Color'
import DueDate from '../DueDate'
import image from '../../images.jpeg'

export default class EditPopup extends Component {
  constructor (props) {
    super(props)
    this.state = {
      chandedText:'',
      showDate: false,
      showColor: false
    }
  }

  handleChange = () => {
    this.setState({
      chandedText:true
    })
  }
  handleDueDate = () => {
    this.setState({
      showDate:true
    })
  }
  render () {
    return (
      <div className='card-edit-modal'>
        <div className='modal'>
          <input type='text' className='edit-card' value={this.props.chandedText} onChange={this.handleChange}/>
        </div>
        <div className='options'>
          {this.state.showDate
            ? <DueDate />
            : <div className='card-edit-button' onClick={this.handleDueDate}>
                <FontAwesomeIcon icon={faCalendar} color='#fff' />
                <a className='option-link'>due date</a>
            </div>
          }
          { this.state.showColor
          ? <Color />
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
