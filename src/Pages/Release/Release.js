import React, { Component } from "react";
import { Box } from "@material-ui/core";
import Layout from "../../Layout/Layout";

class Release extends Component {
  render() {
    return (
      <Layout>
        <Box>{this.props.match.params.id}</Box>
      </Layout>
    );
  }
}
export default Release;
