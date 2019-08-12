import React, { Component } from 'react'
import './popup.css'
import image from '../../images.jpeg'
import { updateDescription } from '../../actions/index'
import { connect } from 'react-redux'
import DueDate from '../cards/DueDate'

class Properties extends Component {
  constructor (props) {
    super(props)
    this.state = {
        desc:this.props.desc,
        isEditing: false,
        showDate:false,
        dueDate:this.props.dueDate
    }
  }
 handleClick = () => {
     this.setState({
         isEditing:true
     })
 }

 handleDate = () => {
   this.setState({
     showDate:true
   })
 }
 handleOnChange = (event) =>{
     this.setState({
         desc:event.target.value
     })
 }
 handleSubmit = (event) => {
  this.props.updateDescription(event.target.value, this.props.cardId, this.props.listId)
  this.setState({
      isEditing:false
  })
   
 }
 clickBack = () => {
this.setState({
  isEditing:false
})
 }

 setDate = (date) =>{
  console.log(date)
  this.setState({
    dueDate: date,
    showDate:false
  })
  this.props.setDue(date)
}
  render () {
    return (
      <div className='properties'>
        <h3>Description</h3>
        {this.state.isEditing
          ? <div className='desc-editor'>
            <textarea className='desc-edit-mode' value={this.state.desc} onChange={this.handleOnChange} />
            <div className='wrap-btn'>
              <input type='submit' value='Save' className='save-desc-btn' onClick={this.handleSubmit} />
              <p className='cancel-btn' onClick={this.clickBack} >X</p>
            </div>
          </div>
          : this.state.desc.length > 0
            ? <div>
              <p onClick={this.handleClick}>{this.state.desc}</p>
            </div>
            : <div>
              <p onClick={this.handleClick}>add a description</p>
            </div>
        }
        <h3 className='duedate'>Due Date</h3>
        {this.state.showDate
        ? <DueDate setDate={this.setDate}/>
        : this.state.dueDate
        ? <p>{this.state.dueDate}</p>
        : <p onClick={this.handleDate}>add a duedate</p>
        }
        <div className='card-edit-button' onClick={this.handleColor}>
          <img src={image} className='color-img' alt='color picker' />
          <a className='option-link'>color</a>
        </div>
      </div>
    )
  }
}

export default connect(null, { updateDescription })(Properties)
