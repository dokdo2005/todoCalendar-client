import React from "react";
// import Login from "./components/nav/Login";
import Signup from "./components/nav/Signup";
import Nav from "./components/nav/Nav";
import GlobalStyles from "./GlobalStyles";

// import Cal from "./components/calendar/Calender";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <GlobalStyles />
        <Nav />
        {/* <Login /> */}
        <Signup />
      </>
    );
  }
}

export default App;
