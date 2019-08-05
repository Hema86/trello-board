import React, { Component } from 'react'
import CardDesc from '../popup/CardDesc'
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
      isEditing:false,
      dueDate:'',
      bgColor:'#fff'
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
  closeEditor = () => {
    this.setState({
      isEditing:false
    })
  }
  clickEdit = () => {
    this.setState({
      isEditing:true
    })
  }
  setDue = (date) => {
    this.setState({
      dueDate:date
    })
  }
  setLabel = (color) => {
    console.log(color)
    this.setState({
      bgColor:color
    })
  }
  render() {
    return (
      this.state.showPopup
        ? <React.Fragment>
            <CardDesc card={this.props.card} closePopup={this.closePopup} />
            <span onClick={this.handleClick} draggable={true}>{this.state.chandedText}</span>
            <FontAwesomeIcon icon={faPen} color='#1f5c87'/>
        </React.Fragment>
        :<React.Fragment>
          {this.state.isEditing
            ? <div className='pop'>
                <EditPopup closeEditor={this.closeEditor} setLabel={this.setLabel} setDue ={this.setDue} card={this.props.card}/>
                <span onClick={this.handleClick}  draggable={true}>{this.state.chandedText}</span>
              </div>
            : <React.Fragment>
                {/* <span style={{backgroundColor: this.state.bgColor}}></span> */}
                <div className='card-content' style={{backgroundColor: this.state.bgColor}}>
                  <span onClick={this.handleClick}  draggable={true}>{this.state.chandedText}</span>
                  <span className='due-date'>{this.state.dueDate}</span>
                </div>
                <FontAwesomeIcon icon={faPen} color='#1f5c87' className='ab' onClick={this.clickEdit}/>
            </React.Fragment>
          } 
         </React.Fragment>
    )
  }
}
