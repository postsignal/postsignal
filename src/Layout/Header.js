import React from "react";
import Links from "./HeaderLinks";
import BandName from "./HeaderBandName";
import { withStyles, Grid, Toolbar, AppBar } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    background: "linear-gradient(45deg, #544157 30%, #4b0959 90%)",
  },
  gridcontainer: {
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
    },
  },
});

class Header extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <AppBar position="sticky" className={classes.root}>
          <Toolbar>
            <Grid
              container
              justify="space-between"
              alignItems="center"
              className={classes.gridcontainer}
            >
              <Grid item key="releasesHeader">
                <BandName />
              </Grid>
              <Grid item key="links">
                <Links />
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Toolbar />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Header);
