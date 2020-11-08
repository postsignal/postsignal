import React, { Component } from "react";
import { Box } from "@material-ui/core";

class ReleaseBackground extends Component {
  render() {
    return (
      <Box
        style={{
          backgroundImage: `url("/img/covers/${this.props.img}")`,
          filter: "blur(25px)",
          WebkitFilter: "blur(25px)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          opacity: 0.7,
          height: "100%",
          zIndex: -1,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
        }}
      />
    );
  }
}

export default ReleaseBackground;
