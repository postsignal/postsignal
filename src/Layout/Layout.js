import React from "react";
import { Container, CssBaseline } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Header from "./Header";

export const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

class Layout extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Container>{this.props.children}</Container>
      </ThemeProvider>
    );
  }
}

export default Layout;
