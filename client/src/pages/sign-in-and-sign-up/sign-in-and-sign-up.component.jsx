import React, { Component } from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import "./sign-in-and-sign-up.styles.scss";

const SignInSignUpPage = () => (
  <div>
    <SignIn />
    <SignUp />
  </div>
);

export default SignInSignUpPage;
