import React, { Component } from "react";
import "./App.css";
import logo from "./logo.png";
import Launches from "./components/Launches";
import LaunchItem from "./components/LaunchItem";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route } from "react-router-dom";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
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
            <Route exact path="/" component={Launches} />
            <Route exact path="/launch/:flight_number" component={LaunchItem} />
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
