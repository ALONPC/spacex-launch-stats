import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Loading from "./Loading";

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
      <Query query={LAUNCH_QUERY} variables={{ flight_number }}>
        {({ loading, error, data }) => {
          if (loading) return <Loading />;
          // <h4 className="display-3">Loading...</h4>;
          if (error) console.log(error);
          console.log(data);

          let launch = { ...data.launch };
          console.log("LAUNCH SPREAD", launch);

          return (
            <div className="container">
              <div className="row my-lg-5">
                <div className="col-md-7">
                  <h1 className="display-3 my-3">
                    <span className="text-dark">Mission </span>{" "}
                    {launch.mission_name}
                  </h1>
                </div>

                <div className="col-md-5 detailTable">
                  <ul className="list-group">
                    <li className="list-group-item">
                      Flight number:{" "}
                      <span className="text-dark detailItem">
                        {launch.flight_number}
                      </span>
                    </li>
                    <li className="list-group-item">
                      Launch year:{" "}
                      <span className="text-dark detailItem">
                        {launch.launch_year}
                      </span>
                    </li>
                    <li className="list-group-item">
                      Launch successful:{" "}
                      <span
                        className={classNames({
                          "text-success detailItem": launch.launch_success,
                          "text-danger detailItem": !launch.launch_success
                        })}
                      >
                        {launch.launch_success
                          ? "Yes \u{1F680}"
                          : "No \u{1F480}"}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <br />

              <div className="row">
                <div className="col-md-7">
                  <h1 className="display-3 my-3">
                    <span className="text-dark">Rocket </span>
                    {launch.rocket.rocket_name}
                  </h1>
                </div>

                <div className="col-md-5 detailTable">
                  <ul className="list-group">
                    <li className="list-group-item">
                      Rocket ID:{" "}
                      <span className="text-dark detailItem">
                        {launch.rocket.rocket_id}
                      </span>
                    </li>
                    <li className="list-group-item">
                      Rocket name:{" "}
                      <span className="text-dark detailItem">
                        {launch.rocket.rocket_name}
                      </span>
                    </li>
                    <li className="list-group-item">
                      Rocket type:{" "}
                      <span className="text-dark detailItem">
                        {launch.rocket.rocket_type}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 my-4 text-right">
                  <Link to="/" className="btn btn-secondary">
                    Home
                  </Link>
                </div>
              </div>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default LaunchItem;
