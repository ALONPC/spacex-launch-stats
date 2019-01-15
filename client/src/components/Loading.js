import React, { Component } from "react";
import { css } from "@emotion/core";
import { RingLoader } from "react-spinners";

// const override = css`
//   height: 50vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

export default class Loading extends Component {
  state = { loading: true };

  render() {
    return (
      <div className="loading">
        <RingLoader
          //   css={override}
          sizeUnit={"em"}
          size={15}
          color={"#005288"}
          loading={this.state.loading}
        />
      </div>
    );
  }
}
