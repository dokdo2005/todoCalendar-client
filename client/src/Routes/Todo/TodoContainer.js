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
    // 수정폼에서 send버튼을 누르면 서버로 수정요청보내는 함수
    // time을 어떻게 전달할지 생각하기
    //let tododata = await todoApi.patchOne(id, title, body, time);
    //console.log(todoApi.patchOne);

    // 여기서 투두 서버로 보내고 
    // app에있는 투두 바꿔주기
    
    // 리렌더링 플로우 =>
    // 1. 서버에 patch요청
    //   1. app에서 todolist 서버로부터 다시 받아오기
    
    await todoApi.patchOne(id, title, body, time);
    this.props.updateTodoData();

    console.log(id, title, body, time);
  }

  render() {
    // console.log(this.props); //{todoList:[{},{},{}], userData: {…}, isLogin: false}
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
        updatetitle={this.state.updatetitle}
        updatetime={this.state.updatetime}
        updatebody={this.state.updatebody}
      />
    );
  }
}
