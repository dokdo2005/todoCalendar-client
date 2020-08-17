import React from "react";
import TodoPresenter from "./TodoPresenter";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <TodoPresenter />;
  }
}
