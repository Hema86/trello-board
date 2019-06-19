import React, { Component } from 'react'

export default class List extends Component {
    constructor (props) {
        super(props)
        this.state={
            isCard:false,
            title:''
        }    
    }
    handleClick = () => {
        this.setState({
            isCard: !this.isCard
        })
    }
    handleChange = (event) => {
        this.setState({
            title: event.target.value
        })
    }
        handleSubmit = (event) => {
            // console.log(this.state.title)
            // console.log(this.props.listId)
            event.preventDefault()
            this.props.addCard(this.state.title, this.props.listId)
            this.setState({ title: '' })
    }
    clickBack = event =>{
        this.setState({
            isCard:false
        })
    }
  render () {
      const isCard = this.state.isCard
    return (
        <div>
        {isCard?
      <div className='Board'>
        <form onSubmit={this.handleSubmit}>
          <input type='text' className='board-input' placeholder='Enter a listName' onChange={this.handleChange} value={this.state.title}/>
          <div className='wrap-btn'>
            <input type='submit' value='Create' className='submit-board-button' />
            <p className='cancel-btn' onClick={this.clickBack} >X</p>
          </div>
        </form>
      </div>
      :<div className='create-card-link'>
         <p className='link' onClick={this.handleClick}>Add another card</p>
       </div>
        }
        </div>
    )
  }
}
