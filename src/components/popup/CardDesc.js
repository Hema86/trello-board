import React from 'react'
import Properties from './Properties'
import AddCheckList from './CheckList/AddCheckList'
import FilesAttach from './FilesAttach'
import Tabs from './Tabs'
import CheckList from './CheckList/CheckList'


class CardDesc extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      card:this.props.card,
      checkLists:this.props.checkLists,
      chandedText: this.props.card.name,
      isEditing: false,
      isPropertyClicked: false
    }
  }

  componentDidUpdate () {
    if(JSON.stringify(this.props.checkLists) !== JSON.stringify(this.state.checkLists)) {
      this.setState({
        checkLists: this.props.checkLists
      })
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
      this.props.updateCard(event.target.value, this.state.card.id, this.state.card.idList)
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
    // console.log(this.props.card)
    // console.log(this.state.chandedText)
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
              <Properties desc={this.state.card.desc} cardId={this.state.card.id} listId={this.state.card.idList} />
            </div>
            <div label='CheckLists'>
            <AddCheckList cardId={this.state.card.id} listId={this.state.card.idList} />
            {this.state.checkLists.map((checkList, index) => {
              return <CheckList checkList={checkList} listId={this.state.card.idList} key={index}/>            
            })}
            </div>
            <div label='Files And Links'>
              <FilesAttach files={this.props.files} attachNewFile={this.props.attachNewFile}/>
            </div>
          </Tabs>
        </div>
      </div>
    )
  }
}
export default CardDesc
