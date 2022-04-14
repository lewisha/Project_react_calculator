import React, { Component, useState } from "react";

export default class Count extends Component {
  count = {
    count: 0
  };
  increase = () => {
    let number = this.select.value * 1;
    let count = this.state.count;
    this.setState({ count: count + number });
  };
  decrease = () => {
    let number = this.select.value * 1;
    let count = this.state.count;
    this.setState({ count: count - number });
  };
  multiple = () => {
    let number = this.select.value * 1;
    let count = this.state.count;
    this.setState({ count: count * number });
  };
  oneSync = () => {
    setTimeout(() => {
      let number = this.select.value * 1;
      let count = this.state.count;
      this.setState({ count: count * number });
    }, 1000);
  };
  render() {
    let count = this.state.count;
    return (
      <div>
        <p>now {count}</p>
        <div>
          <select ref={(select) => (this.select = select)}>
            <option value="1">1</option>
            <option value="1">1</option>
            <option value="1">1</option>
          </select>

          <button onClick={this.increase}>+</button>
          <button onClick={this.decrease}>-</button>
          <button onClick={this.multiple}>*</button>
          <button onClick={this.oneSync}>sync</button>
        </div>
      </div>
    );
  }
}
