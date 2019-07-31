import React from 'react'
import Properties from './Properties'
import Comments from './Comments'
import FilesAttach from './FilesAttach'
import Tabs from './Tabs'


class CardDesc extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chandedText: this.props.card.name,
      isEditing: false,
      isPropertyClicked: false
    }
  }

  handleEditing = () => {
    this.setState({
      isEditing: true
    })
  }
  cardEditingDone = (event) => {
    console.log('done')
    if (event.keyCode === 13) {
      this.props.updateSingleCard(event.target.value, this.props.card.id, this.props.card.idList)
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
  handlick = () => {
    this.setState({
      isPropertyClicked: true
    })
  }
  render() {
    console.log(this.props)
    return (
      <div className='card-editor'>
        <div className='popup'>
          {this.state.isEditing
            ? <div className='card-header'>
                <input type='text' className='card-edit' value={this.state.chandedText}
                  onKeyDown={this.cardEditingDone} onChange={this.handleEditingChange} />
            </div>
            : <div className='card-header'>
              <h2 onClick={this.handleEditing}>{this.state.chandedText}</h2>
            </div>
          }
          <h3 className='cancel-btn' onClick={this.clickBack} >X</h3>
          <Tabs>
            <div label='Properties'>
              <Properties desc={this.props.card.desc} />
            </div>
            <div label='Comments'>
              <Comments />
            </div>
            <div label='Files And Links'>
              <FilesAttach />
            </div>
          </Tabs>
        </div>
      </div>
    )
  }
}
export default CardDesc
