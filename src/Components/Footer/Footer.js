import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "wheat",
          marginTop: "5rem",
          minHeight: "5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Made with love
        <img
          alt="img"
          style={{ width: "20px", height: "20px" }}
          src="https://uc-emoji.azureedge.net/orig/ce/7cdb1cae544d41f3c51f35ff8fcdf0.png"
        />
      </div>
    );
  }
}
