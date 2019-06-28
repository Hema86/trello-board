import React from 'react'
import updateCardData from './data/getTrelloData'
import './index.css'
// import Label from './Label'
import Description from './components/Description'

 class Popup extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      chandedText:this.props.card.name,
      isEditing:false
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
  handleEditing = () =>{
    this.setState({
      isEditing:true
    })
  }
  render () {
  return (
    <div className='card-editor'>
      <div className='popup'>
      {this.state.isEditing
      ? <form onSubmit={this.cardEditingDone}> 
        <textarea className='card-edit-mode' value={this.state.chandedText} onChange={this.handleEditingChange} />
        <Description desc={this.props.card.desc}/>
        <span class="duedate">Due Date</span>
        <input id="date" type="date" />
        </form>
      : 
      <div className='content'>
        <h2 onClick={this.handleEditing}>{this.state.chandedText}</h2>
        <Description desc={this.props.card.desc}/>
        <span class="duedate">Due Date</span>
        <input id="date" type="date" />
      </div>
      }
      </div>
    </div>
  )
 }
 }

export default Popup
