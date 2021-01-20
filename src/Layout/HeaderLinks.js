import React from "react";
import { Button, withStyles, Box, SvgIcon } from "@material-ui/core";
import { ReactComponent as InstagramIcon } from "../data/icons/instagram.svg";
import { ReactComponent as YouTubeIcon } from "../data/icons/youtube.svg";
import { ReactComponent as SoundCloudIcon } from "../data/icons/soundcloud.svg";
import { ReactComponent as VkIcon } from "../data/icons/vk.svg";
import { ReactComponent as FacebookIcon } from "../data/icons/facebook.svg";
import { ReactComponent as EmailIcon } from "../data/icons/email.svg";

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
          <SvgIcon>
            <InstagramIcon />
          </SvgIcon>
        </Button>
        <Button
          href="https://www.youtube.com/channel/UCK4jMcojhUlS_zEAPg2Gldg"
          aria-label="youtube link"
          target="_blank"
          rel="noopener"
        >
          <SvgIcon>
            <YouTubeIcon />
          </SvgIcon>
        </Button>
        <Button
          href="https://vk.com/postsignal"
          target="_blank"
          rel="noopener"
          aria-label="vk link"
        >
          <SvgIcon>
            <VkIcon />
          </SvgIcon>
        </Button>
        <Button
          href="https://soundcloud.com/postsignal"
          aria-label="soundcloud link"
          target="_blank"
          rel="noopener"
        >
          <SvgIcon>
            <SoundCloudIcon />
          </SvgIcon>
        </Button>
        <Button
          href="https://www.facebook.com/postsignal"
          aria-label="facebook link"
          target="_blank"
          rel="noopener"
        >
          <SvgIcon>
            <FacebookIcon />
          </SvgIcon>
        </Button>
        <Button
          href="mailto:postsignal.band@gmail.com"
          aria-label="mailto link"
        >
          <SvgIcon>
            <EmailIcon />
          </SvgIcon>
        </Button>
      </Box>
    );
  }
}

export default withStyles(styles)(HeaderLinks);
