import React from "react";
import { Button, Typography } from "@material-ui/core";

class HeaderBandName extends React.Component {
  render() {
    return (
      <Button href="/">
        <Typography variant="h4" style={{ textTransform: "lowercase" }}>
          postsignal
        </Typography>
      </Button>
    );
  }
}

export default HeaderBandName;
