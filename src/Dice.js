import React, { Component } from "react";

// const dices = [
//   <i class="fas fa-dice-one"></i>,
//   <i class="fas fa-dice-two"></i>,
//   <i class="fas fa-dice-three"></i>,
//   <i class="fas fa-dice-four"></i>,
//   <i class="fas fa-dice-five"></i>,
//   <i class="fas fa-dice-six"></i>,
// ];

export default class Dice extends Component {
  render() {
    const dices = [
      <i className="fas fa-dice-one"></i>,
      <i className="fas fa-dice-two"></i>,
      <i className="fas fa-dice-three"></i>,
      <i className="fas fa-dice-four"></i>,
      <i className="fas fa-dice-five"></i>,
      <i className="fas fa-dice-six"></i>,
    ];
    const { num, isRolling } = this.props;
    return <div className={isRolling ? "Dice rolling" : "Dice"}>{dices[num - 1]}</div>;
  }
}
