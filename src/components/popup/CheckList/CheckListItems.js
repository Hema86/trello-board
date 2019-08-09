import React, { Component } from 'react'
import '../popup.css'

export default class CheckListItems extends Component {
  constructor (props) {
    super(props)
    this.state = {
      progress: 0
    }
  }
  clickHandler = () => {
    this.setState({
      progress: this.state.progress < 100 ? this.state.progress + Math.ceil(100/this.props.tasks.length) : 100
    })
  }
  render () {
    let progress = {
      width: this.state.progress + '%'
    } 
    return (
      <React.Fragment>
      <div className='shell'>
        <span className='bar-value'>{ this.state.progress + '%' }</span>
        <div className={'bar' + (this.state.progress === 100 ? '-complete' : '')} style={progress} />
      </div>
      {this.props.tasks.map((task, index) => {
        return <div key={index}>
          <div>
            <input type='checkbox' onClick={this.clickHandler}/>
            {task.name}</div>
        </div>
      
      })
    }
      </React.Fragment>
    )
  }
}
