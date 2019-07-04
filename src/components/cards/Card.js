import React, { Component } from 'react'
import Popup from '../../Popup'
import '../cards/card.css'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPen } from '@fortawesome/free-solid-svg-icons'

export default class Card extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showPopup: false
    }
  }
  handleClick = (event) => {
    this.setState({
        showPopup:true
        // domRect: event.target.getBoundingClientRect() 
    })
  }
  closePopup =() =>{
    this.setState({
      showPopup:false
    })
  }
  render () {
    // console.log(this.props.card)
    return (
      this.state.showPopup
        ?<div>
        <Popup card={this.props.card} closePopup={this.closePopup}/>
        <div className='card-container'>
        <span onClick={this.handleClick}>{this.props.card.name}</span>
        {/* <span>{this.props.card.desc}</span> */}
        <span>{this.props.card.due}</span>
        {/* <div className='icon-container' onClick={this.handleClick}><FontAwesomeIcon className='icon'icon={faPen} /></div> */}
        </div>
        </div>
        :<div className='card-container'>
          <span onClick={this.handleClick}>{this.props.card.name}</span>
          {/* <span>{this.props.card.desc}</span> */}
          <span>{this.props.card.due}</span>
          {/* <div className='icon-container' onClick={this.handleClick}><FontAwesomeIcon className='icon'icon={faPen} /></div> */}
          </div>
    )
  }
}
