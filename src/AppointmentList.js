import React, { Component } from 'react';
import Appointment from './Appointment';

class AppointmentList extends Component {
  render() {
    console.log('AppointmentList');
    let appointments = this.props.appointments.map(({start,end}) => {
      return <Appointment key={start} start={start} end={end}></Appointment>
    })
    return <div className="AppointmentList">
     {appointments}
    </div>;
  }
}

export default AppointmentList;
