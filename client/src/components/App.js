import React from "react";
import GlobalStyles from "./GlobalStyles";
import Router from "./Router";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <GlobalStyles/>
        <Router/>
      </>
    );
  }
}

export default App;
