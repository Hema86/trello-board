import React from 'react'
import updateCardData from '../data/getTrelloData'

 class Popup extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      chandedText:this.props.card.name
    }
  }
    divStyle = {
    top: this.props.domRect.top,
    left: this.props.domRect.left,
    bottom: this.props.domRect.bottom,
    right: this.props.domRect.right
  }

  cardEditingDone = (event) => {
    console.log('done')
    console.log(this.props.card.id)
      updateCardData(event.target.value, this.props.card.id)
  }
  
  handleEditingChange = (event) => {
    console.log(event.target.value)
    const newText = event.target.value
    this.setState({chandedText:newText})
  }
  render () {
  return (
    <div className='card-editor'>
      <div className='popup'>
      <form onSubmit={this.cardEditingDone}> 
      <textarea className='textarea' value={this.state.chandedText} onChange={this.handleEditingChange}></textarea>
        {/* <input  style={this.divStyle} value={this.state.chandedText} onKeyDown={this.cardEditingDone} onChange={this.handleEditingChange}/> */}
        {/* <button className='save-card' onClick={this.cardEditingDone}>save</button> */}
      </form>
      </div>
    </div>
  )
 }
 }

export default Popup
