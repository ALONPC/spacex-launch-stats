import React from "react";

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
        <div className="card-header col-md-8">
          <span
            className={
              props.launch.launch_success
                ? "badge badge-light"
                : "badge badge-secondary"
            }
          >
            {props.launch.launch_success ? success : failure}
          </span>
          <h4>
            {props.launch.mission_name} ({props.launch.launch_year})
          </h4>
          <h6>{props.launch.launch_date_local}</h6>
        </div>
        <div className="card-header col-md-4">
          <button className="btn btn-secondary">Launch details</button>
        </div>
      </div>
    </div>
  );
}
