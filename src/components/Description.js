import React from 'react'

export default function Description (props) {
  return (
    <div>
      <span>Description</span>
      <textarea className='card-edit-mode' value={props.desc} />
    </div>
  )
}
