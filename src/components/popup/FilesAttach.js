import React, { Component } from 'react'
import '../popup/popup.css'

export default class FilesAttach extends Component {
  constructor(props) {
    super(props)
    this.state ={
      filesAttached: []
    }
  }
  handleChange = (e) => {
    console.log(e.target)
    let file = e.target.value.split('\\')[e.target.value.split('\\').length-1]
    console.log(file)
    this.setState({
      filesAttached:[...this.state.filesAttached, file]
    })
  }
  render () {
    console.log(this.state.filesAttached.length)
    return (
      <React.Fragment>
      <div className='file-container'>
      <input type='text' className='search-file'/>
        <label className="fileContainer">
          attach files
         <input type="file" style={{ display: 'none' }} onChange={this.handleChange}/>
        </label>
      </div>
      <br/>
      {this.state.filesAttached.map((file, index) => {
        console.log(file)
        return <div className='files-list' key={index}>
          <img src='https://d30795irbdecem.cloudfront.net/assets/default-file-icon-1b4befb8.svg' />
          <span>{file}</span>
          <span>...</span>
        </div>
       
       })
      }
      </React.Fragment>
    )
  }
}
