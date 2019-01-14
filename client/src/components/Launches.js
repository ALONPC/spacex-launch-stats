import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

import Launch from "./Launch";
import MissionKey from "./MissionKey";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_year
      launch_date_local
      launch_success
    }
  }
`;

export default class Launches extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <h1 className="col-md-8 display-4">Launches</h1>
            <MissionKey />
          </div>
          <Query query={LAUNCHES_QUERY}>
            {({ loading, error, data }) => {
              if (loading) return <h4>Loading...</h4>;
              if (error) console.log(error);
              console.log("Launches:", data);
              // this.setState(data);
              // console.log("Launches = State:", this.state);
              // <Launch />;
              return (
                <Fragment>
                  {data.launches.map(launch => (
                    <Launch key={launch.flight_number} launch={launch} />
                  ))}
                </Fragment>
              );
            }}
          </Query>
        </div>
      </Fragment>
    );
  }
}
