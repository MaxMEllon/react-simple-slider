import React, { Component, PropType } from 'react';
import deepCompare from 'react-addons-deep-compare';

const isFunc = obj => typeof obj === 'function';

const calcWidth = (client, cursor, max) => {
  const width = parseInt(client - cursor);
  if (width >= max) return max;
  if (width <= 0) return 0;
  return width;
};

const calcValue = ({state, props}) => parseInt(state.width / props.width * props.max);

export default class Slider extends Component {
  static get PropTypes() {
    return {
      max: PropType.number.isRequired,
      width: PropType.number.isRequired,
      height: PropType.number.isRequired,
      default: PropType.number,
      backStyle: PropType.object,
      frontStyle: PropType.object,
      onChange:  PropType.func,
    };
  }

  constructor(props) {
    super(props);
    const width = parseInt(this.props.default / this.props.max * this.props.width) || '50%';
    const value = this.props.default || 50;
    this.state = { width, value, drag: false };
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.setValue = this.setValue.bind(this);
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.onMouseMove);
    window.addEventListener('mouseup', this.onMouseUp);
  }

  componentDidUpdate() {
    const value = calcValue(this);
    this.setState({ value });
    if (isFunc(this.props.onChange)) this.props.onChange(event, value);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.value === nextState.value) return false;
    return deepCompare(this, nextProps, nextState);
  }

  componentWillUnMount() {
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('mouseup', this.onMouseUp);
  }

  onMouseDown(event) {
    const width = calcWidth(event.clientX, event.target.offsetLeft, this.props.width);
    const value = calcValue(this);
    this.setState({ width, value, drag: true, });
  }

  onMouseMove(event) {
    if (!this.state.drag) return;
    const width = calcWidth(event.clientX, event.target.offsetLeft, this.props.width);
    const value = calcValue(this);
    this.setState({ width, value });
  }

  onMouseUp() {
    if (this.state.drag) this.setState({ drag: false });
  }

  setValue(value) {
    if (isNaN(value)) throw new TypeError('arguments of setValue should be number type.');
    const width = parseInt(value / this.props.max * this.props.width);
    this.setState({ value, width });
  }

  render() {
    const backStyle = Object.assign({ backgroundColor: 'gray' }, this.props.backStyle, {
      width: this.props.width,
      height: this.props.height,
    });

    const frontStyle = Object.assign({ backgroundColor: 'aqua' }, this.props.frontStyle, {
      width: this.state.width,
      height: '100%',
      zIndex: '4000',
      top: '0',
      left: '0',
    });

    return (
      <div>
        <div
          className="react-simple-slider"
          onMouseDown={this.onMouseDown}
          onMouseUp={this.onMouseUp}
          style={backStyle}
        >
          <div
            className="react-simple-slider-gauge"
            style={frontStyle}
          />
        </div>
      </div>
    );
  }
}
