import React, { Component } from 'react';
import AppointmentList from './AppointmentList';

class DayDisplay extends Component {
  render() {
    console.log('DayDisplay');
    return (
      <div className="DayDisplay">
        <h3>Day</h3>
        <AppointmentList appointments={this.props.appointments} />
      </div>
    );
  }
}

export default DayDisplay;
