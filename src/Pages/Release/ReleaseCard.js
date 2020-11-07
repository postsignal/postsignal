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
  },
});

class ReleaseCard extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Cover"
            image={`/img/covers/${this.props.releaseMetadata.img}`}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.releaseMetadata.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {this.props.releaseMetadata.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <ReleaseLinks links={this.props.releaseMetadata.links} />
      </Card>
    );
  }
}

export default withStyles(styles)(ReleaseCard);
