import React from 'react'

export default function Cards (props) {
  // console.log(props)
  return props.cards.map((card, index) => {
    return (
      <div className='cards' key={index}>
        <h3>{card.name}</h3>
      </div>
    )
  })
}
