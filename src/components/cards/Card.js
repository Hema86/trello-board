import React, { Component } from 'react'
import Popup from '../Popup'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPen } from '@fortawesome/free-solid-svg-icons'

export default class Card extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showPopup: false,
      domRect:''
    }
  }
  handleClick = (event) => {
    this.setState({
        showPopup:true,
        domRect: event.target.getBoundingClientRect() 
    })
  }
  render () {
    console.log(this.props.card)
    return (
      <div>
        {this.state.showPopup
        ?<Popup card={this.props.card} domRect={this.state.domRect} />
        :<div className='card-container'>
          <span onClick={this.handleClick}>{this.props.card.name}</span>
          {/* <span>{this.props.card.desc}</span>
          <span>{this.props.card.due}</span> */}
          {/* <div className='icon-container' onClick={this.handleClick}><FontAwesomeIcon className='icon'icon={faPen} /></div> */}
          </div>
        }
      </div>
    )
  }
}