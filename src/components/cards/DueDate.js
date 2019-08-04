import React from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import '../cards/card.css'

export default class Example extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedDay: null
    }
  }
  handleDayClick = (day, { selected }) => {
    this.setState({
      selectedDay: selected ? undefined : day
    })
    this.props.setDate(day.toLocaleDateString())
  }
  render () {
    return (
      <div>
        <DayPicker
          selectedDays={this.state.selectedDay}
          onDayClick={this.handleDayClick}
        />
      </div>
    )
  }
}
