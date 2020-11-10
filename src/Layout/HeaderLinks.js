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
          aria-label="instagram link"
          target="_blank"
          rel="noopener"
        >
          <InstagramIcon />
        </Button>
        <Button
          href="https://www.youtube.com/channel/UCK4jMcojhUlS_zEAPg2Gldg"
          aria-label="youtube link"
          target="_blank"
          rel="noopener"
        >
          <YouTubeIcon />
        </Button>
        <Button href="https://vk.com/postsignal" target="_blank" rel="noopener">
          vk
        </Button>
        <Button
          href="https://www.facebook.com/postsignal"
          aria-label="facebook link"
          target="_blank"
          rel="noopener"
        >
          <FacebookIcon />
        </Button>
        <Button
          href="https://soundcloud.com/postsignal"
          aria-label="soundcloud link"
          target="_blank"
          rel="noopener"
        >
          <CloudQueueIcon />
        </Button>
        <Button
          href="mailto:postsignal.band@gmail.com"
          aria-label="mailto link"
        >
          <MailOutlineIcon />
        </Button>
      </Box>
    );
  }
}

export default withStyles(styles)(HeaderLinks);
