import React from 'react'
import { updateCardData } from './data/getTrelloData'
import './index.css'
// import Label from './Label'
import Description from './components/Description'

 class Popup extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      chandedText:this.props.card.name,
      isEditing:false,
      isPropertyClicked:false
    }
  }
  //   divStyle = {
  //   top: this.props.domRect.top,
  //   left: this.props.domRect.left,
  //   bottom: this.props.domRect.bottom,
  //   right: this.props.domRect.right
  // }

  handleEditing = () => {
    this.setState({
      isEditing: true
    })
  }
  cardEditingDone = (event) => {
    console.log('done')
    if (event.keyCode === 13) {
      updateCardData(event.target.value, this.props.card.id)
      this.setState({
        isEditing: false
      })
    }
  }

  handleEditingChange = (event) => {
    console.log(event.target.value)
    const newText = event.target.value
    this.setState({ chandedText: newText })
  }
  clickBack = () => {
    this.props.closePopup()
  }
  handlick = () =>{
    this.setState({
      isPropertyClicked:true
    })
  }

  render () {
  return (
    <div className='card-editor'>
      <div className='popup'>
      {this.state.isEditing
      ? <div className='content'>
        <input type='text' className='card-edit-mode' value={this.state.chandedText}
          onKeyDown={this.cardEditingDone} onChange={this.handleEditingChange} />
        {/* <Description desc={this.props.card.desc}/>
        <h3 className="duedate">Due Date</h3>
        <input id="date" type="date" /> */}
        </div>
      : <div className='content'>
        <div className='card-header'>
        <h2 onClick={this.handleEditing}>{this.state.chandedText}</h2>
        </div>
        <div className='prop-wrapper'>
          <span className='prop' onClick={this.handleClick}>Properties</span>
          <Properties />
          <span className='prop' onClick={this.handleClick}>Comments</span>
          <Comments />
          <span className='prop' onClick={this.handleClick}>Files &amp; links</span>
          <AttachFile />
        </div>
        {/* { <Description desc={this.props.card.desc}/> }
        <h3 className="duedate">Due Date</h3>
        <form>
        <input id="date" type="date" />
        </form>
        <h3>Comments</h3>
        <form>
        <textarea className='comment-editor' type="text" placeholder='Write a comment'/>
        </form>
        <input type='submit' value='Save' className='save-desc-btn' onClick={this.handleSubmit}/> */}
        </div>
      }
       </div>
       <h3 className='cancel-btn' onClick={this.clickBack} >X</h3>
  
    </div>
  )
 }
 }

export default Popup
