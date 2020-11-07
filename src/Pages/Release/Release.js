import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import Layout from "../../Layout/Layout";
import Background from "./ReleaseBackground";
import ReleaseCard from "./ReleaseCard";

class Release extends Component {
  render() {
    return (
      <Layout>
        <Background img="Имаго.jpg" />
        {/* <Box>{this.props.match.params.id}</Box> */}
        <Grid container justify="center">
          <ReleaseCard img="Имаго.jpg" />
        </Grid>
      </Layout>
    );
  }
}

export default Release;
