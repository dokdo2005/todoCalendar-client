import React from "react";
import SignupPresenter from "./SignupPresenter";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputname: null,
      inputemail: null,
      inputpassword: null,
      inputpasswordcheck: null,
      checkMessageName: null,
      checkMessageEmail: null,
      checkMessagePassword: null,
      checkMessagePasswordcheck: null,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    if ([e.target.name][0] === "inputname") {
      console.log("이름유효성검사");
      this.checkingName();
    } else if ([e.target.name][0] === "inputemail") {
      console.log("이메일유효성검사");
      this.checkingEmail();
    } else if ([e.target.name][0] === "inputpassword") {
      console.log("비밀번호유효성검사");
      this.checkingPassword();
    } else if ([e.target.name][0] === "inputpasswordcheck") {
      console.log("비밀번호재확인");
      this.checkingPasswordcheck();
    }
  };

  checkingName() {
    let check_num = /[0-9]/; // 숫자
    let check_eng = /[a-zA-Z]/; // 문자
    let check_spc = /[~!@#$%^&*()_+|<>?:{}]/; // 특수문자
    let check_kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/; // 한글체크

    let { inputname } = this.state;

    if (
      (check_kor.test(inputname) &&
        !check_num.test(inputname) &&
        !check_eng.test(inputname) &&
        !check_spc.test(inputname)) ||
      (!check_kor.test(inputname) &&
        !check_num.test(inputname) &&
        check_eng.test(inputname) &&
        !check_spc.test(inputname))
    ) {
      this.setState({
        checkMessageName: "👌",
      });
    } else if (inputname === null) {
      this.setState({
        checkMessageName: null,
      });
    } else {
      this.setState({
        checkMessageName: "한글이나 영어로 입력해주세요.",
      });
    }
  }

  checkingEmail() {
    let reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

    const { inputemail } = this.state;

    if (reg_email.test(inputemail)) {
      this.setState({
        checkMessageEmail: "👌",
      });
    } else {
      this.setState({
        checkMessageEmail: "이메일을 입력하세요",
      });
    }
  }

  checkingPassword() {
    let reg_password = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    const { inputpassword } = this.state;

    if (reg_password.test(inputpassword)) {
      this.setState({
        checkMessagePassword: "👌",
      });
    } else {
      this.setState({
        checkMessagePassword:
          "비밀번호는 8자 이상이어야 하며, 숫자/대문자/소문자/특수문자를 모두 포함해야 합니다",
      });
    }
  }

  checkingPasswordcheck() {
    const { inputpassword, inputpasswordcheck } = this.state;

    if (inputpassword === inputpasswordcheck) {
      console.log("same");
      this.setState({
        checkMessagePasswordcheck: "👌",
      });
    } else {
      console.log("wrong");
      this.setState({
        checkMessagePasswordcheck: "비밀번호가 일치하지 않습니다",
      });
    }
  }

  render() {
    return (
      <SignupPresenter
        handleChange={this.handleChange.bind(this)}
        checkMessageName={this.state.checkMessageName}
        checkMessageEmail={this.state.checkMessageEmail}
        checkMessagePassword={this.state.checkMessagePassword}
        checkMessagePasswordcheck={this.state.checkMessagePasswordcheck}
      />
    );
  }
}
