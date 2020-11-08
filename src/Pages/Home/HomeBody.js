import React from "react";
import LinkToReleaseCard from "./LinkToReleaseCard";
import { Grid, Typography, withStyles, Button } from "@material-ui/core";
import releasesMetadata from "../../data/releasesMetadata.json";

const styles = (theme) => ({
  releasesHeader: {
    // padding: 5,
  },
});

class Body extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Grid container spacing={8} justify="center">
          <Grid item key="releasesHeader" xs={12} sm={12} md={12}>
            <Button variant="text" style={{ width: "100%" }}>
              <Typography variant="h4" className={classes.releasesHeader}>
                релизы
              </Typography>
            </Button>
          </Grid>
          {releasesMetadata.map((release) => (
            <Grid
              item
              key={release.title}
              xs={12}
              sm={6}
              md={6}
              style={{ maxWidth: 450 }}
            >
              <LinkToReleaseCard
                id={release.id}
                title={release.title}
                img={release.img}
                description={release.description}
              />
            </Grid>
          ))}
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Body);
