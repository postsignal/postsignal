import React, { Component } from "react";
import { Grid, Box, withStyles, makeStyles } from "@material-ui/core";
import Player from "material-ui-audio-player";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import red from "@material-ui/core/colors/red";

const useStyles = makeStyles(() => {
  return {
    root: {
      background: "#4242423d",
    },
    playIcon: {
      color: red[700],
      "&:hover": {
        color: "#9c3e3e",
      },
    },
    pauseIcon: {
      color: red[700],
      "&:hover": {
        color: "#9c3e3e",
      },
    },
  };
});

const styles = (theme) => ({
  root: { margin: "10px" },
});

class AudioPlayer extends Component {
  render() {
    const { classes } = this.props;
    const pathToTrack = this.props.pathToTrack;
    return (
      <Box className={classes.root}>
        <Grid container spacing={1} justify="center">
          <Player
            useStyles={useStyles}
            src={pathToTrack}
            elevation={4}
            volume={false}
            icons={{
              PlayIcon: PlayCircleOutlineIcon,
              PauseIcon: PauseCircleOutlineIcon,
            }}
          />
        </Grid>
      </Box>
    );
  }
}

export default withStyles(styles)(AudioPlayer);
