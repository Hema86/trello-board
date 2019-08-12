import React, { Component } from 'react'
import CardDesc from '../popup/CardDesc'
import '../cards/card.css'
import EditPopup from './EditPopup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import { getAllFilesAttached, attachNewFile, updateCard, getCheckLists } from '../../actions/index'

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chandedText: this.props.card.name,
      showPopup: false,
      isEditing: false,
      dueDate: this.props.card.due,
      bgColor: '#fff'
    }
  }
  componentDidMount() {
    this.props.getAllFilesAttached(this.props.card.id, this.props.card.idList)
    this.props.getCheckLists(this.props.card.id, this.props.card.idList)
  }
  componentDidUpdate() {
    if (this.props.card.name !== this.state.chandedText)
      this.setState({
        chandedText: this.props.card.name
      })
  }

  handleClick = (event) => {
    this.setState({
      showPopup: true

    })
  }
  closePopup = () => {
    this.setState({
      showPopup: false
    })
  }
  closeEditor = (event) => {
    // event.preventDefault()
    // event.stopPropagation()
    this.setState({
      isEditing: false
    })
  }
  clickEdit = () => {
    this.setState({
      isEditing: true
    })
  }
  setDue = (date) => {
    this.setState({
      dueDate: date
    })
  }
  setLabel = (color) => {
    console.log(color)
    this.setState({
      bgColor: color
    })
  }
  attachNewFile = (fileName, filePath) => {
    this.props.attachNewFile(fileName, filePath, this.props.card.id, this.props.card.idList)
  }
  updateCardData = (cardName, cardId, listId) => {
    this.props.updateCard(cardName, cardId, listId)
  }
  render() {
    // console.log('card')
    // console.log(this.props.card)
    return (
      this.state.showPopup
        ? <React.Fragment>
          <CardDesc card={this.props.card} closePopup={this.closePopup} files={this.props.card.files} attachNewFile={this.attachNewFile}
            updateCard={this.updateCardData} checkLists={this.props.card.checkLists} setDue={this.setDue} />
          <span onClick={this.handleClick} draggable={true}>{this.state.chandedText}</span>
          <FontAwesomeIcon icon={faPen} color='#1f5c87' />
        </React.Fragment>
        : <React.Fragment>
          {this.state.isEditing
            ? <div className='pop'>
              <EditPopup closeEditor={this.closeEditor} setLabel={this.setLabel} setDue={this.setDue} card={this.props.card} updateCard={this.updateCardData} />
              <span onClick={this.handleClick} draggable={true}>{this.state.chandedText}</span>
            </div>
            : <React.Fragment>
              {/* <span style={{backgroundColor: this.state.bgColor}}></span> */}
              <div className='card-content' style={{ backgroundColor: this.state.bgColor }}>
                <span onClick={this.handleClick} draggable={true}>{this.state.chandedText}</span>
                <span className='due-date'>{this.state.dueDate}</span>
              </div>
              <FontAwesomeIcon icon={faPen} color='#1f5c87' className='ab' onClick={this.clickEdit} />
            </React.Fragment>
          }
        </React.Fragment>
    )
  }
}

export default connect(null, { getAllFilesAttached, attachNewFile, updateCard, getCheckLists })(Card)
