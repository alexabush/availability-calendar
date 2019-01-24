import React, { Component } from 'react';

class Timeslot extends Component {
  handleClick = (e) => {
    this.props.toggleSelect(this.props.start)
  };

  render() {
    return this.props.selected ? (
      <div className="Timeslot full" onClick={this.handleClick}>
        {this.props.start}-{this.props.end}
      </div>
    ) : (
      <div className="Timeslot available" onClick={this.handleClick}>
        {this.props.start}--
        {this.props.end}
      </div>
    );
  }
}

export default Timeslot;
