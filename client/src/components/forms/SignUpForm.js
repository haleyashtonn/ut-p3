import React from "react";
import FullNameInput from "../inputs/NameInput";
import EmailInput from "../inputs/EmailInput";
import UserNameInput from "../inputs/UsernameInput";
import PasswordInput from "../inputs/PasswordInput";
import SignUpBtn from "../buttons/SignUpBtn";
import axios from "axios";
import { Redirect } from "react-router-dom";

class SignUpForm extends React.Component {
  state = {
    username: "",
    password: "",
    email: "",
    fullname: "",
    redirectTo: null
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    console.log("sign-up handleSubmit, state: ");
    console.log(this.state);
    event.preventDefault();
    if (this.state.username === "" || this.state.password === "") {
      console.log("invalid input");
      return;
    }

    //request to server to add a new username/password
    axios
      .post("/user/", {
        username: this.state.username,
        password: this.state.password,
        fullname: this.state.fullname,
        email: this.state.email
      })
      .then(response => {
        console.log(response);
        if (!response.data.error) {
          console.log("successful signup");
          this.setState({
            //redirect to login page
            redirectTo: "/login"
          });
        } else {
          console.log("username already taken");
          this.setState({
            signupError: "Username already taken. Choose another username."
          });
        }
      })
      .catch(error => {
        console.log("signup error: ");
        console.log(error);
      });
  };

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div>
          <div
            id="code-signup"
            className="row code-index code-vertical-align-wrapper"
          >
            <div className="col s12 m10 offset-m1 l7 offset-l4 xl5 offset-xl4">
              <div className="row">
                <div className="col s10 offset-s1">
                  <h1 id="logo">[Coding Connect]</h1>
                </div>

                <div className="col s10 offset-s1">
                  <form id="code-form-signup">
                    <FullNameInput
                      onChange={this.handleChange}
                      value={this.state.fullname}
                    />
                    <EmailInput
                      onChange={this.handleChange}
                      value={this.state.email}
                    />
                    <UserNameInput
                      onChange={this.handleChange}
                      value={this.state.username}
                    />
                    <PasswordInput
                      onChange={this.handleChange}
                      value={this.state.password}
                    />

                    <div className="code-separator-2" />
                    <div>{this.state.signupError}</div>

                    <SignUpBtn onClick={this.handleSubmit} />
                  </form>

                  <div className="code-separator-2" />
                </div>

                <div className="col s10 offset-s1">
                  <a href="/" id="logo">
                    Have an account? Log in.
                  </a>

                  <div className="code-separator-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
export default SignUpForm;
