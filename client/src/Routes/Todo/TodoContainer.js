import React from "react";
import TodoPresenter from "./TodoPresenter";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addTodoModal: false,
      idDetail: false,
    };
  }

  handleTodoModal = () => {
    this.setState({ addTodoModal: !this.state.addTodoModal });
    console.log(this.state.addTodoModal);
  };

  /*
  1. userData를 받아서 todoList에 랜더링해줘야한다
  2. +버튼을 누르면 this.state.addTodoModal값이 true가 되고 모달창이 랜더링된다
  3. clearAll버튼을 누르면 todoList를 전부 삭제한다
  4. 상세보기 버튼을 누르면 모든 데이터가 보여야한다
  5. 수정버튼을 누르면 수정모달창이 떠야한다
  6. 삭제버튼을 누르면 해당 List만 삭제가 되어야한다
  */

  render() {
    console.log(this.props); //{todoList:undefinded, userData: {…}, isLogin: false}
    return (
      <TodoPresenter
        isLogin={this.props.isLogin}
        handleTodoModal={this.handleTodoModal.bind(this)}
        addTodoModal={this.state.addTodoModal}
      />
    );
  }
}
