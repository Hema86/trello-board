import React from 'react'

export default function Popup (props) {
  return (
    <div className='popup'>
      <div className='inner-popup'>
        {props.card.name}
      </div>
      <button>X</button>
    </div>
  )
}
