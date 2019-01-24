import React, { Component } from 'react';
import './App.css';
import DayCalendar from './DayCalendar'
import DayDisplay from './DayDisplay'

let generateTimeSlot = (start, end, selected=false) => {
  return { start, end, selected}
}

let hourlyTimeslots = []
for (let i = 6; i < 12; i++) {
  hourlyTimeslots.push(generateTimeSlot(i, i+1, false))
}
for (let i = 1; i < 6; i++) {
  hourlyTimeslots.push(generateTimeSlot(i, i+1, false))
}

class App extends Component {
  state = {
    timeslots: hourlyTimeslots
  }

  toggleSelect = (targetStart) => {
    console.log('toggleSelected');
    this.setState(prev => {
      let updatedTimeslots = prev.timeslots.map(slot => {
        debugger
        if (slot.start === targetStart) {
          debugger
          slot.selected = !slot.selected
        }
        debugger
        return slot
      })
      debugger
      return {timeslots:updatedTimeslots}
    })
  }



  render() {
    let appointments = this.state.timeslots.filter(({selected}) => {
      return !!selected
    })
    console.log(appointments);
    return (
      <div className="App">
        <h1>Day Calendar</h1>
        <div className="display">
          <DayCalendar timeslots={this.state.timeslots}
            toggleSelect={this.toggleSelect}
          />
          <DayDisplay appointments={appointments} />
        </div>
      </div>
    );
  }
}

export default App;
