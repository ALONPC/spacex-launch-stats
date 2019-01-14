import React, { Component } from "react";
import "./App.css";
import logo from "./logo.png";

class App extends Component {
  render() {
    return (
      <div className="App">
        <img
          className="logo"
          src={logo}
          alt="spacex"
          style={{
            width: 400,
            display: "block",
            margin: "auto",
            marginTop: "1em"
          }}
        />
      </div>
    );
  }
}

export default App;
