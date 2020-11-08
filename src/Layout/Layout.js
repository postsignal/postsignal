import React from "react";
import {
  Container,
  CssBaseline,
  Typography,
  Box,
  withStyles,
} from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Header from "./Header";

export const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
  },
});

class Layout extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Box className={classes.root}>
          <CssBaseline />
          <Header />
          <Container>{this.props.children}</Container>
          <footer className={classes.footer}>
            <Typography variant="body2" color="textSecondary" align="center">
              {`© ${new Date().getFullYear()} postsignal`}
            </Typography>
          </footer>
        </Box>
      </ThemeProvider>
    );
  }
}

export default withStyles(styles)(Layout);
