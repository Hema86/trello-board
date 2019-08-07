import React, { Component } from 'react'

export default class CheckListItems extends Component {
  render () {
    return (
      this.props.tasks.map(task => {
        return <div>
          <span>{task}</span>
        </div>
      })
    )
  }
}
