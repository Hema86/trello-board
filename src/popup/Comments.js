import React, { Component } from 'react'

export default class Comments extends Component {
  constructor (props) {
    super(props)
    this.state = {
      comment: ''
    }
  }

  handleSubmit = (event) =>{
    console.log(event.target.parentNode)
    this.setState({
      comment:event.target.parentNode.firstChild.value
    })
  }

  render () {
    return (
      <div>
        <form>
          <textarea className='comment-editor' type='text' placeholder='Write a comment' onChange={this.handleChange} />
        </form>
        <input type='submit' value='Save' className='save-desc-btn' onClick={this.handleSubmit} />
      </div>
    )
  }
}
