import React from "react";
import { Button, Box } from "@material-ui/core";

class HeaderBandName extends React.Component {
  render() {
    return (
      <Button href={`${process.env.PUBLIC_URL}/`}>
        <Box
          letterSpacing={2}
          fontWeight="fontWeightLight"
          fontSize="2.5em"
          style={{ textTransform: "lowercase" }}
          color="#c3bfca"
        >
          postsignal
        </Box>
      </Button>
    );
  }
}

export default HeaderBandName;
