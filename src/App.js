import React, { Component } from "react";
import Dice from "./Dice";
import Graph from "./Graph";
import "./App.css";

class App extends Component {
  state = {
    nums: [6, 6],
    results: [
      { sum: 2, freq: 0, share: 0 },
      { sum: 3, freq: 0, share: 0 },
      { sum: 4, freq: 0, share: 0 },
      { sum: 5, freq: 0, share: 0 },
      { sum: 6, freq: 0, share: 0 },
      { sum: 7, freq: 0, share: 0 },
      { sum: 8, freq: 0, share: 0 },
      { sum: 9, freq: 0, share: 0 },
      { sum: 10, freq: 0, share: 0 },
      { sum: 11, freq: 0, share: 0 },
      { sum: 12, freq: 0, share: 0 },
    ],
    numOfRolls: 0,
    isRolling: false,
  };

  addResult = (result) => {
    const updatedResults = this.state.results.map((r) => {
      if (r.sum === result) {
        return { ...r, freq: r.freq + 1, share: (r.freq + 1) / (this.state.numOfRolls + 1) };
      }
      return { ...r, share: r.freq / (this.state.numOfRolls + 1) };
    });
    return updatedResults;
  };

  rollDice = (e) => {
    this.setState({ isRolling: true });
    setTimeout(() => {
      this.setState((prevState) => {
        const newNums = prevState.nums.map((n) => (n = Math.ceil(Math.random() * 6)));
        const result = newNums.reduce((acc, cur) => acc + cur);
        return {
          nums: newNums,
          results: this.addResult(result),
          numOfRolls: prevState.numOfRolls + 1,
          isRolling: false,
        };
      });
    }, 2000);
  };

  render() {
    return (
      <div className="App">
        <div className="dice-container">
          <Dice num={this.state.nums[0]} isRolling={this.state.isRolling} />
          <Dice num={this.state.nums[1]} isRolling={this.state.isRolling} />
        </div>
        <Graph results={this.state.results} numOfRolls={this.state.numOfRolls} />
        <button onClick={this.rollDice} disabled={this.state.isRolling}>
          {this.state.isRolling ? "Rolling..." : "Roll"}
        </button>
      </div>
    );
  }
}

export default App;
