import React from 'react'
import Card from './Card'

export default function Cards (props) {
  // console.log(props)
  return props.cards.map((card, index) => {
    return (
      <div className='cards' key={index}>
        <Card card={card} />
      </div>
    )
  })
}
