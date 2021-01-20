import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import Layout from "../../Layout/Layout";
import Background from "../../Layout/Background";
import ReleaseCard from "./ReleaseCard";
import releasesMetadata from "../../data/releasesMetadata.json";
import { Redirect } from "react-router-dom";

class Release extends Component {
  render() {
    const releaseId = this.props.match.params.id;
    const release = releasesMetadata.find(function (release) {
      return release.id === releaseId;
    });

    if (release === undefined) {
      return <Redirect to={`${process.env.PUBLIC_URL}/`} />;
    }

    return (
      <Layout>
        <Background
          img={`${process.env.PUBLIC_URL}/img/covers/${release.img}`}
        />
        <Grid container justify="center">
          <ReleaseCard releaseMetadata={release} />
        </Grid>
      </Layout>
    );
  }
}

export default Release;
