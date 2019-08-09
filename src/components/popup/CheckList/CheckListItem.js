import React, { Component } from 'react'
import '../popup.css'

export default class CheckListItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      checkItem: this.props.checkItem
    }
  }
  render () {
    return (
      <React.Fragment>
        <div>
          <input type='checkbox' onClick={this.props.clickHandler} />
          <div>{this.state.checkItem.name}</div>
        </div>
      </React.Fragment>
    )
  }
}
