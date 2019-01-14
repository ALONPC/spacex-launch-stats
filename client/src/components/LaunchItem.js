import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Link } from "react-router";
import classNames from "classnames";

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_success
      launch_date_local
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;

export class LaunchItem extends Component {
  render() {
    let { flight_number } = this.props.match.params;
    flight_number = parseInt(flight_number);
    return (
      <div className="container">
        <div className="row">
          <Query query={LAUNCH_QUERY} variables={{ flight_number }}>
            {({ loading, error, data }) => {
              if (loading) return <h4>Loading...</h4>;
              if (error) console.log(error);
              console.log(data);

              //   const {
              //     mission_name,
              //     flight_number,
              //     launch_year,
              //     launch_success,
              //     rocket: { rocket_id, rocket_name, rocket_type }
              //   } = data.launch;

              let laaunch = { ...data.launch };
              console.log("LAUNCH SPREAD", laaunch);

              let launch = { ...data.launch };

              let laaaunch = data.launch;
              console.log("LAUNCH DEFINED", laaaunch);

              return (
                <div className="container">
                  {/* {laaaunch.forEach((item, key) => {
                    console.log(item);
                    console.log(key);
                  })} */}
                  <div className="row">
                    {" "}
                    <h4 className="display-4 mb-3">Launch details</h4>
                  </div>

                  <div className="row">
                    {" "}
                    <h1 className="display-4 my-3">
                      <span className="text-dark">Mission: </span>{" "}
                      {launch.mission_name}
                    </h1>
                  </div>

                  <div className="row">
                    <ul className="list-group">
                      <li className="list-group-item">
                        Flight number: {launch.flight_number}
                      </li>
                      <li className="list-group-item">
                        Launch year: {launch.launch_year}
                      </li>
                      <li className="list-group-item">
                        Launch successful:{" "}
                        <span
                          className={classNames({
                            "text-success": launch.launch_success,
                            "text-danger": !launch.launch_success
                          })}
                        >
                          {launch.launch_success
                            ? "Yes \u{1F680}"
                            : "No \u{1F480}"}
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="row">
                    {" "}
                    <h1 className="display-4 my-3">
                      <span className="text-dark">Rocket details: </span>
                    </h1>
                  </div>

                  <div className="row">
                    <ul className="list-group">
                      <li className="list-group-item">
                        Rocket ID: {launch.rocket.rocket_id}
                      </li>
                      <li className="list-group-item">
                        Rocket name: {launch.rocket.rocket_name}
                      </li>
                      <li className="list-group-item">
                        Rocket type: {launch.rocket.rocket_type}
                      </li>
                    </ul>{" "}
                  </div>
                </div>
              );
            }}
          </Query>
        </div>
      </div>
    );
  }
}

export default LaunchItem;
