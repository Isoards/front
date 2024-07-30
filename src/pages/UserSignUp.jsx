import React from "react";
import "./Search.css";

import Content from "../components/form/ContentForm";
import UserSignUpForm from "../components/member/UserSignUpForm";

const UserSignUp = () => {
  return (
    <div className="sign-up">
      <div className="container">
        <Content title={"회원 가입"} /> <UserSignUpForm />
      </div>
    </div>
  );
};

export default UserSignUp;
