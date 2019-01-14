import React, { Component } from "react";
import "./App.css";
import logo from "./logo.png";
import Launches from "./components/Launches";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <img
            className="logo"
            src={logo}
            alt="spacex"
            style={{
              width: 400,
              display: "block",
              margin: "auto",
              marginTop: "1em",
              marginBottom: "1em"
            }}
          />
          <Launches />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
