import React from "react";
import SignupPresenter from "./SignupPresenter";
import { userApi } from "../../api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputname: null,
      inputemail: null,
      inputpassword: null,
      checkMessageName: null,
      checkMessageEmail: null,
      checkMessagePassword: null,
      checkMessagePasswordcheck: null,
      errorMessage: null,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });

    if ([e.target.name][0] === "inputname") {
      let check_num = /[0-9]/; // 숫자
      let check_eng = /[a-zA-Z]/; // 문자
      let check_spc = /[~!@#$%^&*()_+|<>?:{}]/; // 특수문자
      let check_kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/; // 한글체크

      if (
        (check_kor.test(e.target.value) &&
          !check_num.test(e.target.value) &&
          !check_eng.test(e.target.value) &&
          !check_spc.test(e.target.value)) ||
        (!check_kor.test(e.target.value) &&
          !check_num.test(e.target.value) &&
          check_eng.test(e.target.value) &&
          !check_spc.test(e.target.value))
      ) {
        this.setState({
          checkMessageName: "👌",
        });
      } else if (e.target.value === null) {
        this.setState({
          checkMessageName: null,
        });
      } else {
        this.setState({
          checkMessageName: "한글이나 영어로 입력해주세요.",
        });
      }
    } else if ([e.target.name][0] === "inputemail") {
      console.log("이메일유효성검사");
      let reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
      if (reg_email.test(e.target.value)) {
        this.setState({
          checkMessageEmail: "👌",
        });
      } else {
        this.setState({
          checkMessageEmail: "이메일을 입력하세요",
        });
      }
    } else if ([e.target.name][0] === "inputpassword") {
      console.log("비밀번호유효성검사");
      let reg_password = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
      if (reg_password.test(e.target.value)) {
        this.setState({
          checkMessagePassword: "👌",
        });
      } else {
        this.setState({
          checkMessagePassword:
            "비밀번호는 8자 이상이어야 하며, 숫자/대문자/소문자/특수문자를 모두 포함해야 합니다",
        });
      }
    } else if ([e.target.name][0] === "inputpasswordcheck") {
      console.log("비밀번호재확인");
      const { inputpassword } = this.state;

      if (inputpassword === e.target.value) {
        this.setState({
          checkMessagePasswordcheck: "👌",
        });
      } else {
        this.setState({
          checkMessagePasswordcheck: "비밀번호가 일치하지 않습니다",
        });
      }
    }
  };
  handleErrorMessage(){
    this.setState({
      checkMessageEmail: '이메일이 중복이에요'
    })
  }
  SubmitBtn() {
    const { inputname, inputemail, inputpassword } = this.state;

    return userApi.signup(inputname, inputemail, inputpassword)
      .then(res =>  res)
      .catch(e => {
        this.handleErrorMessage();
      })
  }

  render() {
    return (
      <SignupPresenter
        handleChange={this.handleChange.bind(this)}
        checkMessageName={this.state.checkMessageName}
        checkMessageEmail={this.state.checkMessageEmail}
        checkMessagePassword={this.state.checkMessagePassword}
        checkMessagePasswordcheck={this.state.checkMessagePasswordcheck}
        SubmitBtn={this.SubmitBtn.bind(this)}
        handleErrorMessage={this.handleErrorMessage.bind(this)}
      />
    );
  }
}
