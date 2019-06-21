import React, { Component } from 'react'
import Popup from './Popup'

export default class Card extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showPopup: false
    }
  }
  handleClick = () => {
    this.setState({
        showPopup:true
    })
  }
  render () {
    return (
      <div>
        {this.state.showPopup
        ?<Popup card={this.props.card} />
        :<span onclick={this.handleClick}>{this.props.card.name}</span>
        }
      </div>
    )
  }
}
