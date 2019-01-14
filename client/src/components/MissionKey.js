import React, { Component } from "react";

export default class MissionKey extends Component {
  render() {
    return (
      <div className="col-md-4 my-4">
        {/* <span className="badge badge-success">Success</span>
          <span className="badge badge-danger">Danger</span> */}
        <button type="button" class="btn btn-outline-success">
          Success
        </button>{" "}
        <button type="button" class="btn btn-outline-danger">
          Failed
        </button>
      </div>
    );
  }
}
