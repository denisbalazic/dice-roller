import React, { Component } from "react";

export default class GraphBar extends Component {
  render() {
    const { freq, share } = this.props.result;
    return (
      <div className="Graph-bar">
        <p>{freq}</p>
        <div className="bar" style={{ height: `${share * 180}%` }}></div>
      </div>
    );
  }
}
