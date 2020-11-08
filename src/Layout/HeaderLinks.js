import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import CloudQueueIcon from "@material-ui/icons/CloudQueue";
import { Button, withStyles, Box } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    "& a": {
      minWidth: 40,
    },
  },
});
class HeaderLinks extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Box classes={classes}>
        <Button
          href="https://www.instagram.com/postsignal.band/"
          target="_blank"
        >
          <InstagramIcon />
        </Button>
        <Button
          href="https://www.youtube.com/channel/UCK4jMcojhUlS_zEAPg2Gldg"
          target="_blank"
        >
          <YouTubeIcon />
        </Button>
        <Button href="https://vk.com/postsignal" target="_blank">
          vk
        </Button>
        <Button href="https://www.facebook.com/postsignal" target="_blank">
          <FacebookIcon />
        </Button>
        <Button href="https://soundcloud.com/postsignal" target="_blank">
          <CloudQueueIcon />
        </Button>
        <Button href="mailto:postsignal.band@gmail.com">
          <MailOutlineIcon />
        </Button>
      </Box>
    );
  }
}

export default withStyles(styles)(HeaderLinks);
