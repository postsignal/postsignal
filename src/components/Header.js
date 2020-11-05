import React from "react";
import {
  withStyles,
  Grid,
  Button,
  Toolbar,
  AppBar,
  ButtonGroup,
  Typography,
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import CloudQueueIcon from "@material-ui/icons/CloudQueue";

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
                <ButtonGroup
                  variant="text"
                  color="secondary"
                  aria-label="text primary button group"
                >
                  <Button>
                    <InstagramIcon />
                  </Button>
                  <Button>
                    <YouTubeIcon />
                  </Button>
                  <Button>vk</Button>
                  <Button>
                    <FacebookIcon />
                  </Button>
                  <Button>
                    <CloudQueueIcon />
                  </Button>
                  <Button>
                    <MailOutlineIcon />
                  </Button>
                </ButtonGroup>
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
