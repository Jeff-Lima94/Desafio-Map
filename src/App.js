import React, { Component } from "react";
export default class App extends Component {
  state = {
    devs: [
      {
        name: "Jefferson",
        age: 28,
        team: "Vai na Web"
      },
      {
        name: "Jessica",
        age: 30,
        team: "Vai na Web"
      },
      {
        name: "Livia",
        age: 13,
        team: "Vai na Web"
      }
    ]
  };
  render() {
    return (
      <div>
        {this.state.devs.map((item) => (
          <div>
            <h2>Name: {item.name}</h2>
            <h2>Team: {item.team}</h2>
          </div>
        ))}
      </div>
    );
  }
}
