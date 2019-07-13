import React, { Component } from 'react'
// import Popup from '../../popup/Popup'
import CardDesc from '../../popup/CardDesc'
import '../cards/card.css'
import EditPopup from './EditPopup'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'

export default class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chandedText:this.props.card.name,
      showPopup: false,
      isEditing:false
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
  clickEdit = () => {
    this.setState({
      isEditing:true
    })
  }
  render() {
    // console.log(this.props.card)
    // element.getBoundingClientRect();
    return (
      this.state.showPopup
        ? <React.Fragment>
          <CardDesc card={this.props.card} closePopup={this.closePopup} updateSingleCard={this.props.updateSingleCard} />
            <span onClick={this.handleClick} draggable={true}>{this.props.card.name}</span>
            <FontAwesomeIcon icon={faPen} color='#1f5c87'/>
            {/* <span>{this.props.card.due}</span> */}
        </React.Fragment>
        :<React.Fragment>
          {this.state.isEditing
            ? <div className='pop'>
               <EditPopup chandedText={this.state.chandedText}/>
              </div>
            : <React.Fragment>
                <span onClick={this.handleClick}  draggable={true}>{this.state.chandedText}</span>
                {/* <span>{this.props.card.due}</span> */}
                <span>
                  <FontAwesomeIcon icon={faPen} color='#1f5c87' className='ab' onClick={this.clickEdit}/>
                </span>
            </React.Fragment>
          }
         </React.Fragment>
    )
  }
}
