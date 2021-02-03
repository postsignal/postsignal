import React from "react";
import { Typography, Box, Grid, Button, withStyles } from "@material-ui/core";

const styles = () => ({
  footer: {
    "& img": {
      maxWidth: 25,
      maxHeight: 25,
    },
    padding: 5,
  },
});

class Footer extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Box>
        <Grid
          className={classes.footer}
          container
          justify="center"
          alignItems="center"
        >
          <Grid item key="Spotify">
            <Button
              href="https://open.spotify.com/artist/6lEHJL4595fOvVHrG6JjX1"
              aria-label="Spotify artist link"
              target="_blank"
              rel="noopener"
            >
              <img
                src={`${process.env.PUBLIC_URL}/img/logos/SpotifyIcon.png`}
                alt="SpotifyIcon"
              />
            </Button>
          </Grid>
          <Grid item key="YandexMusic">
            <Button
              href="https://music.yandex.by/artist/10820673"
              aria-label="YandexMusic artist link"
              target="_blank"
              rel="noopener"
            >
              <img
                src={`${process.env.PUBLIC_URL}/img/logos/YandexMusicIcon.png`}
                alt="YandexMusicIcon"
              />
            </Button>
          </Grid>
          <Grid item key="Deezer">
            <Button
              href="https://deezer.page.link/xcGDwwSJYmPYZ5vg6"
              aria-label="Deezer artist link"
              target="_blank"
              rel="noopener"
            >
              <img
                src={`${process.env.PUBLIC_URL}/img/logos/DeezerIcon.png`}
                alt="DeezerIcon"
              />
            </Button>
          </Grid>
          <Grid item key="AppleMusic">
            <Button
              href="https://music.apple.com/us/artist/postsignal/1551613721"
              aria-label="AppleMusic artist link"
              target="_blank"
              rel="noopener"
            >
              <img
                src={`${process.env.PUBLIC_URL}/img/logos/AppleMusicIcon.png`}
                alt="AppleMusicIcon"
              />
            </Button>
          </Grid>
        </Grid>
        <Typography variant="body2" color="textSecondary" align="center">
          {`© ${new Date().getFullYear()} postsignal`}
        </Typography>
      </Box>
    );
  }
}

export default withStyles(styles)(Footer);
