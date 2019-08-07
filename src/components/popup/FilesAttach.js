import React, { Component } from 'react'
import '../popup/popup.css'
import image from '../../emptyFile.png'

export default class FilesAttach extends Component {
  constructor(props) {
    super(props)
    this.state ={
      filesAttached: this.props.files,
    }
  }
  handleChange = (e) => {
    // console.log(e.target)
    let file = e.target.value.split('\\')[e.target.value.split('\\').length-1]
    // console.log(file)
    this.props.attachNewFile(file, e.target.value)
  }
  render () {
    // console.log(this.state.filesAttached)
    return (
      <React.Fragment>
      <div className='file-container'>
      <input type='text' className='search-file'/>
        <label className="fileContainer">
          attach files
         <input type="file" style={{ display: 'none' }} onChange={this.handleChange}/>
        </label>
      </div>
      {this.state.filesAttached.length === 0
      ? <img src={image}></img>
      :
      this.state.filesAttached.map((file, index) => {
        console.log(file)
        return <div className='files-list' key={index}>
          <img src='https://d30795irbdecem.cloudfront.net/assets/default-file-icon-1b4befb8.svg' />
          <span><a href={file.url}>{file.name}</a></span>
          <span>size: {file.bytes}bytes</span>
          <span>{file.date}</span>
        </div>
       
       })
      
      }
      </React.Fragment>
    )
  }
}
