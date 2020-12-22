import React, { Component } from "react";
import GraphBar from "./GraphBar";

export default class Graph extends Component {
  render() {
    const { results, numOfRolls } = this.props;
    return (
      <div className="Graph">
        <div className="display">
          {results.map((result) => (
            <GraphBar result={result} />
          ))}
        </div>
        <div className="legend">
          {results.map((result) => (
            <p>{result.sum}</p>
          ))}
        </div>
        <p>Number of throws: {numOfRolls}</p>
      </div>
    );
  }
}
