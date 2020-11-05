import React from "react";
import HeaderLinks from "./HeaderLinks";
import {
  withStyles,
  Grid,
  Button,
  Toolbar,
  AppBar,
  Typography,
} from "@material-ui/core";

const styles = (theme) => ({
  root: {
    background: "linear-gradient(45deg, #544157 30%, #4b0959 90%)",
  },
});

class Header extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <AppBar position="sticky" className={classes.root}>
          <Toolbar>
            <Grid container justify="space-between" alignItems="center">
              <Grid item key="releasesHeader">
                <Button href="/">
                  <Typography
                    variant="h4"
                    style={{ textTransform: "lowercase" }}
                  >
                    postsignal
                  </Typography>
                </Button>
              </Grid>
              <Grid item key="links">
                <HeaderLinks />
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
