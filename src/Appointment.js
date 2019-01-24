import React, { Component } from 'react';

class Appointment extends Component {
  render() {
    return (
      <div className="Appointment">
        Appointment from {this.props.start} to {this.props.end}
      </div>
    );
  }
}

export default Appointment;
