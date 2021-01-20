import React, { Component } from "react";
import ReleaseLinks from "./ReleaseLinks";
import AudioPlayer from "./AudioPlayer";
import {
  CardActionArea,
  Card,
  CardContent,
  CardMedia,
  withStyles,
  Typography,
  Grid,
} from "@material-ui/core";
import DownloadIcon from "@material-ui/icons/GetApp";
import Button from "@material-ui/core/Button";
import green from "@material-ui/core/colors/green";

const styles = (theme) => ({
  root: {
    maxWidth: 350,
    boxShadow: "10px 5px 10px -1px rgba(0,0,0,0.2)",
    background: "#4242423d",
  },
});

class ReleaseCard extends Component {
  render() {
    const { classes } = this.props;
    const releaseMetadata = this.props.releaseMetadata;
    const pathToTrack = `${process.env.PUBLIC_URL}/audio/${this.props.releaseMetadata.trackName}`;
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Cover"
            image={`${process.env.PUBLIC_URL}/img/covers/${releaseMetadata.img}`}
          />
        </CardActionArea>
        <CardContent>
          <Grid container justify="space-between" alignItems="center">
            <Grid item>
              <Typography gutterBottom variant="h5" component="h2">
                {releaseMetadata.title}
              </Typography>
            </Grid>
            <Grid item>
              <Button
                href={pathToTrack}
                size="large"
                startIcon={<DownloadIcon />}
                style={{ color: green[500] }}
                download
              >
                cкачать
              </Button>
            </Grid>
          </Grid>
          <Typography variant="body2" color="textSecondary" component="p">
            {releaseMetadata.description}
          </Typography>
        </CardContent>
        <AudioPlayer pathToTrack={pathToTrack} />
        <ReleaseLinks links={releaseMetadata.links} />
      </Card>
    );
  }
}

export default withStyles(styles)(ReleaseCard);
