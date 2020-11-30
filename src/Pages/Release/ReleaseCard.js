import React, { Component } from "react";
import ReleaseLinks from "./ReleaseLinks";
import {
  CardActionArea,
  Card,
  CardContent,
  CardMedia,
  withStyles,
  Typography,
} from "@material-ui/core";

const styles = (theme) => ({
  root: {
    maxWidth: 350,
    boxShadow: "10px 5px 10px -1px rgba(0,0,0,0.2)",
  },
});

class ReleaseCard extends Component {
  render() {
    const { classes } = this.props;
    const releaseMetadata = this.props.releaseMetadata;
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Cover"
            image={`${process.env.PUBLIC_URL}/img/covers/${releaseMetadata.img}`}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {releaseMetadata.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {releaseMetadata.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <ReleaseLinks links={releaseMetadata.links} />
      </Card>
    );
  }
}

export default withStyles(styles)(ReleaseCard);
