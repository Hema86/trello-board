import React from 'react'

export default class ProgressBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      progress: 25
    }
  }

  clickHandler () {
    this.setState({
      progress: this.state.progress < 100 ? this.state.progress + 10 : 100
    })
  }

  render () {
    var progress = {
      width: this.state.progress + '%'
    }

    return (
      <div>
        <div className='shell'>
          <span className='bar-value'>{ this.state.progress + '%' }</span>
          <div className='bar' style={progress} />
        </div>
        <button onClick={this.clickHandler.bind(this)}>+</button>
      </div>
    )
  }
}
