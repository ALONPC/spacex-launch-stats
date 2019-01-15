import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";

const success = "To infinity and beyond! \u{1F680}";
const failure = "Press F to pay respects \u{1F480}";

export default function Launch(props) {
  return (
    <div
      className={
        props.launch.launch_success
          ? "card border-success mb-3 p-3"
          : "card border-danger mb-3 p-3"
      }
    >
      <div className="row">
        <div className="card-header col-md-10">
          <h4 className="display-3">
            {props.launch.mission_name} ({props.launch.launch_year})
          </h4>
          <div className="row ml-1">
            {" "}
            <h6>
              <span className={"badge badge-secondary"}>
                {props.launch.launch_success ? success : failure}
              </span>{" "}
              <span className={"badge badge-light"}>
                <Moment format="YYYY-MM-DD HH:mm">
                  {props.launch.launch_date_local}
                </Moment>
              </span>
            </h6>
          </div>
        </div>
        <div className="card-header col-md-2 text-right">
          <Link
            to={`/launch/${props.launch.flight_number}`}
            className="btn btn-secondary"
          >
            Launch details
          </Link>
        </div>
      </div>
    </div>
  );
}
