import React, { Component } from 'react';

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: '50%',
      drag: false,
    };
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
  }

  onMouseDown(event) {
    const targetLeft = event.target.offsetLeft;
    this.setState({
      width: `${event.clientX - targetLeft}px`,
      drag: true,
    });
  }

  onMouseMove(event) {
    if (!this.state.drag) return;
    const targetLeft = event.target.offsetLeft;
    this.setState({ width: `${event.clientX - targetLeft}px` });
  }

  onMouseUp() {
    this.setState({ drag: false });
  }

  render() {
    return (
      <div>
        <div
          className="react-simple-slider"
          onMouseDown={this.onMouseDown}
          onMouseMove={this.onMouseMove}
          onMouseUp={this.onMouseUp}
          style={{
            marginLeft: '20px',
            marginTop: '90px',
            width: '100px',
            height: '10px',
            backgroundColor: 'gray',
          }}>
          <div
            className="react-simple-slider-gauge"
            style={{
              zIndex: '4000',
              width: this.state.width,
              height: '100%',
              top: '0',
              left: '0',
              backgroundColor: 'aqua',
            }}>
          </div>
        </div>
      </div>
    );
  }
}
