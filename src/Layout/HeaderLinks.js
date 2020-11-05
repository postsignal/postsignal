import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import CloudQueueIcon from "@material-ui/icons/CloudQueue";
import { Button, ButtonGroup } from "@material-ui/core";

class HeaderLinks extends React.Component {
  render() {
    return (
      <ButtonGroup variant="text" color="secondary">
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
    );
  }
}

export default HeaderLinks;
