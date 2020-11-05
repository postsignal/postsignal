import React from "react";
import { Container, CssBaseline } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Header from "./components/Header";
import Body from "./components/Body";

export const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Container>
          <Body />
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
