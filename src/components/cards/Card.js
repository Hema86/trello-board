import React, { Component } from 'react'
// import Popup from '../../popup/Popup'
import CardDesc from '../../popup/CardDesc'
import '../cards/card.css'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPen } from '@fortawesome/free-solid-svg-icons'

export default class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showPopup: false
    }
  }
  handleClick = (event) => {
    this.setState({
      showPopup: true
      // domRect: event.target.getBoundingClientRect() 
    })
  }
  closePopup = () => {
    this.setState({
      showPopup: false
    })
  }
  render() {
    // console.log(this.props.card)
    return (
      this.state.showPopup
        ? <React.Fragment>
          <CardDesc card={this.props.card} closePopup={this.closePopup} updateSingleCard={this.props.updateSingleCard} />
          <div className='card-container'>
            <span onClick={this.handleClick} draggable={true}>{this.props.card.name}</span>
            <span>{this.props.card.due}</span>
          </div>
        </React.Fragment>
        : <div className='card-container'>
            <span onClick={this.handleClick}  draggable={true}>{this.props.card.name}</span>
            <span>{this.props.card.due}</span>
          </div>
    )
  }
}
