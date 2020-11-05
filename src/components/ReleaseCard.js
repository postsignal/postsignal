import React from "react";
import {
  Card,
  Typography,
  Box,
  withStyles,
  ButtonBase,
} from "@material-ui/core";
import HeadsetOutlinedIcon from "@material-ui/icons/HeadsetOutlined";

const styles = (theme) => ({
  image: {
    width: "100%",
    "&:hover": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15,
      },
      "& $imageMarked": {
        opacity: 1,
      },
    },
  },
  imageButton: {
    position: "absolute",
  },
  imageSrc: {
    width: "100%",
    paddingBottom: "100%",
    backgroundSize: "cover",
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  },
  imageTitle: {
    position: "relative",
  },
  imageMarked: {
    opacity: 0,
    transition: theme.transitions.create("opacity"),
  },
  imageMarkedText: {},
});

class ReleaseCard extends React.Component {
  constructor(props) {
    super();

    this.release = {
      id: props.id,
      title: props.title,
      img: props.img,
      description: props.description,
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <Card>
        <ButtonBase key={this.release.id} className={classes.image}>
          <Box
            component="span"
            className={classes.imageSrc}
            style={{
              backgroundImage: `url("/img/covers/${this.release.img}")`,
            }}
          />
          <Box component="span" className={classes.imageBackdrop} />

          <Box component="span" className={classes.imageButton}>
            <Typography
              component="span"
              variant="h5"
              className={classes.imageTitle}
            >
              <Box>
                <HeadsetOutlinedIcon fontSize="large" />
              </Box>
              <Box className={classes.imageMarked}>слушать</Box>
            </Typography>
          </Box>
        </ButtonBase>
      </Card>
    );
  }
}

export default withStyles(styles)(ReleaseCard);
