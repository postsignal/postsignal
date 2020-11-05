import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./Routing.js";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Routing />
      </Router>
    );
  }
}

export default App;
