import React from "react";
import TodoPresenter from "./TodoPresenter";
import { todoApi } from "../../api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addTodoModal: false,
      updatetitle: null,
      updatetime: null,
      updatebody: null,
    };
  }

  handleUpdateTitle = (value) => {
    this.setState({ updatetitle: value });
  };

  handleUpdateTime = (value) => {
    this.setState({ updatetime: value });
  };

  handleUpdateBody = (value) => {
    this.setState({ updatebody: value });
  };

  handleTodoModal = () => {
    this.setState({ addTodoModal: !this.state.addTodoModal });
  };

  async UpdateTodoList(id, title, body, time) {
    await todoApi.patchOne(id, title, body, time);
    this.props.updateTodoData();
  }

  render() {
    return (
      <TodoPresenter
        UpdateTodoList={this.UpdateTodoList.bind(this)}
        todoList={this.props.todoList}
        isLogin={this.props.isLogin}
        handleTodoModal={this.handleTodoModal.bind(this)}
        addTodoModal={this.state.addTodoModal}
        handleUpdateTitle={this.handleUpdateTitle.bind(this)}
        handleUpdateTime={this.handleUpdateTime.bind(this)}
        handleUpdateBody={this.handleUpdateBody.bind(this)}
        handleClearAll={this.props.handleClearAll}
        handleClearOne={this.props.handleClearOne}
        updatetitle={this.state.updatetitle}
        updatetime={this.state.updatetime}
        updatebody={this.state.updatebody}
        updateTodoData={ this.props.updateTodoData}
      />
    );
  }
}
