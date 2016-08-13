import React, { Component, PropType } from 'react';

const isFunc = obj => typeof obj === 'function';

const calcWidth = (client, cursor, max) => {
  const width = parseInt(client - cursor);
  if (width >= max) return max;
  if (width <= 0) return 0;
  return width;
};

export default class Slider extends Component {
  static get PropTypes() {
    return {
      max: PropType.number.isRequired,
      width: PropType.number.isRequired,
      height: PropType.number.isRequired,
      backStyle: PropType.object,
      frontStyle: PropType.object,
      onChange:  PropType.func,
    };
  }

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

  componentDidMount() {
    window.addEventListener('mousemove', this.onMouseMove);
    window.addEventListener('mouseup', this.onMouseUp);
  }

  componentDidUpdate() {
    const value = parseInt(this.state.width / this.props.width * this.props.max);
    if (isFunc(this.props.onChange)) this.props.onChange(event, value);
  }

  onMouseDown(event) {
    const width = calcWidth(event.clientX, event.target.offsetLeft, this.props.width);
    this.setState({ width, drag: true, });
  }

  onMouseMove(event) {
    if (!this.state.drag) return;
    const width = calcWidth(event.clientX, event.target.offsetLeft, this.props.width);
    this.setState({ width });
  }

  onMouseUp() {
    if (this.state.drag) this.setState({ drag: false });
  }

  render() {
    return (
      <div>
        <div
          className="react-simple-slider"
          onMouseDown={this.onMouseDown}
          onMouseUp={this.onMouseUp}
          style={{
            width: this.props.width,
            height: this.props.height,
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
