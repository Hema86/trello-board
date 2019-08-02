import React from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import '../cards/card.css'

// export default class Example extends React.Component {
//   constructor (props) {
//     super(props)
//     this.handleDayClick = this.handleDayClick.bind(this)
//     this.state = {
//       selectedDays: []
//     }
//   }
//   handleDayClick (day, { selected }) {
//     const { selectedDays } = this.state
//     if (selected) {
//       const selectedIndex = selectedDays.findIndex(selectedDay =>
//         DateUtils.isSameDay(selectedDay, day)
//       )
//       selectedDays.splice(selectedIndex, 1)
//     } else {
//       selectedDays.push(day)
//     }
//     this.setState({ selectedDays })
//   }
//   render () {
//     return (
//       <div>
//         <DayPicker
//           selectedDays={this.state.selectedDays}
//           onDayClick={this.handleDayClick}
//         />
//       </div>
//     )
//   }
// }
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
