import React, { Component } from 'react'

export default class Description extends Component {
  constructor (props) {
    super(props)
    this.state = {
        desc:this.props.desc,
        isEditing: false
    }
  }
 handleClick = () => {
     this.setState({
         isEditing:true
     })
 }
 handleOnChange = (event) =>{
     this.setState({
         desc:event.target.value
     })
 }
 handleSubmit = (event) => {
//   updateDesc(this.state.desc)
  this.setState({
      isEditing:false
  })
   
 }

  render () {
    return (
      <div>
        <h3>Description</h3>
        { this.state.isEditing
          ?<div className='desc-editor'> 
              <textarea className='desc-edit-mode' value={this.state.desc} onChange={this.handleOnChange}/>
              <div className='wrap-btn'>
                <input type='submit' value='Save' className='save-desc-btn' onClick={this.handleSubmit}/>
                <p className='cancel-btn' onClick={this.clickBack} >X</p>
              </div>
           </div>
          : <p onClick={this.handleClick}>{this.state.desc}</p>
        }
      </div>
    )
  }
}
