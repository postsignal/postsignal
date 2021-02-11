import React, { Component } from "react";
import {
  CardActions,
  CardMedia,
  Button,
  ButtonGroup,
  Grid,
} from "@material-ui/core";
import logosMapper from "./logosMapper";

class ReleaseLinks extends Component {
  render() {
    return (
      <CardActions>
        <ButtonGroup
          orientation="vertical"
          variant="text"
          style={{ width: "100%" }}
        >
          {this.props.links.map((link, index) => (
            <Button
              href={link}
              target="_blank"
              key={index}
              style={{ padding: 20 }}
            >
              <Grid
                container
                spacing={1}
                justify="space-around"
                alignItems="center"
              >
                <Grid item>
                  <CardMedia
                    component="img"
                    alt="Streaming logo"
                    image={`${process.env.PUBLIC_URL}/img/logos/${logosMapper(
                      link
                    )}.png`}
                    style={{ maxWidth: 135 }}
                  />
                </Grid>
                <Grid item>cлушать</Grid>
              </Grid>
            </Button>
          ))}
        </ButtonGroup>
      </CardActions>
    );
  }
}

export default ReleaseLinks;
