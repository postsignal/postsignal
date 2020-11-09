import React from "react";
import LinkToReleaseCard from "./LinkToReleaseCard";
import { Grid, Typography, withStyles, Button } from "@material-ui/core";
import releasesMetadata from "../../data/releasesMetadata.json";

const styles = (theme) => ({
  gridContainer: {
    width: "100%",
    margin: 0,
  },
});

class Body extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        spacing={8}
        justify="center"
        className={classes.gridContainer}
      >
        <Grid item key="releasesHeader" xs={12} style={{ padding: 0 }}>
          <Button variant="text" style={{ width: "100%" }}>
            <Typography variant="h4">релизы</Typography>
          </Button>
        </Grid>
        {releasesMetadata.map((release) => (
          <Grid item key={release.id} xs={12} sm={6} style={{ maxWidth: 450 }}>
            <LinkToReleaseCard
              id={release.id}
              title={release.title}
              img={release.img}
              description={release.description}
            />
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default withStyles(styles)(Body);
