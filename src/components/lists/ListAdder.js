import React, { Component } from 'react'
import { addNewList } from '../../actions/index'
import { connect } from 'react-redux'

class ListAdder extends Component {
    constructor (props) {
        super(props)
        this.state={
            isList:false,
            title:''
        }   
    }
    handleClick = () => {
        this.setState({
            isList: !this.isList
        })
    }
    handleChange = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleSubmit = (event) => {
      // console.log(this.state.title)
      event.preventDefault()
      this.props.addNewList(this.state.title)
      this.setState({ title: '' })
    }
    clickBack = event =>{
        this.setState({
            isList:false
        })
    }
  render () {
      const isList = this.state.isList
    return (
        <div className='list'>
        {isList?
      <div className='Board'>
        <form onSubmit={this.handleSubmit}>
          <input type='text' className='board-input' placeholder='Enter a listName' onChange={this.handleChange} value={this.state.title}/>
          <div className='wrap-btn'>
            <input type='submit' value='Create' className='submit-board-button' />
            <p className='cancel-btn' onClick={this.clickBack} >X</p>
          </div>
        </form>
      </div>
      :<div className='create-list-link'>
         <p className='list-link' onClick={this.handleClick}>+ Add another list</p>
       </div>
        }
        </div>
    )
  }
}

export default connect(null, { addNewList })(ListAdder)
