import React from "react";
import LinkToReleaseCard from "./LinkToReleaseCard";
import { Grid, withStyles, Box } from "@material-ui/core";
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
          <Box
            borderBottom={1}
            textAlign="center"
            letterSpacing={15}
            fontWeight="fontWeightLight"
            fontSize="h4.fontSize"
            style={{ textTransform: "uppercase" }}
          >
            музыка
          </Box>
        </Grid>

        {releasesMetadata.map((release) => (
          <Grid item key={release.id} xs={12} sm={6} style={{ maxWidth: 450 }}>
            <LinkToReleaseCard release={release} />
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default withStyles(styles)(Body);
