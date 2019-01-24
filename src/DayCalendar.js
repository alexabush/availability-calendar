import React, { Component } from 'react';
import Timeslot from './Timeslot';

class DayCalendar extends Component {
  render() {
    let timeslots = this.props.timeslots.map(({ start, end, selected }) => {
      return (
        <Timeslot
          key={start}
          start={start}
          end={end}
          selected={selected}
          toggleSelect={this.props.toggleSelect}
        />
      );
    });
    return <div className="DayCalendar">{timeslots}</div>;
  }
}

export default DayCalendar;
