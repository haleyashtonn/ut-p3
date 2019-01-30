import React from "react";
import UserNameInput from "../inputs/UsernameInput";
import PasswordInput from "../inputs/PasswordInput";
import LoginBtn from "../buttons/LoginBtn";
import axios from "axios";
import { Redirect } from "react-router-dom";

class LoginForm extends React.Component {
  state = {
    username: "",
    password: "",
    redirectTo: null
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("handleSubmit");

    axios
      .post("/user/login", {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        console.log("login response: ", response);
        if (response.status === 200) {
          // update App.js state
          this.props.updateUser({
            loggedIn: true,
            // username: response.data.username
            ...response.data._doc
          });
          // update the state to redirect to home
          this.setState({
            redirectTo: "/"
          });
        }
      })
      .catch(error => {
        console.log("login error: ");
        console.log(error);
      });
  };

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div className="row">
          <div
            id="code-login"
            className="row code-index code-vertical-align-wrapper login"
          >
            <div className="col s12 m10 offset-m1 l7 offset-l4 xl5 offset-xl4">
              <div className="row">
                <div className="col s10 offset-s1 login">
                  <h1 id="logo">[Coding Connect]</h1>
                </div>
              </div>
              <div className="col s10 offset-s1">
                <form id="code-form-login">
                  <UserNameInput
                    onChange={this.handleChange}
                    value={this.state.username}
                  />

                  <PasswordInput
                    onChange={this.handleChange}
                    value={this.state.password}
                  />

                  <div className="code-separator-2" />

                  <LoginBtn onClick={this.handleSubmit} />
                </form>

                <div className="code-separator-2" />
              </div>

              <div className="col s10 offset-s1">
                <a href="signup" id="logo">
                  Don't have an account? Sign up.
                </a>

                <div className="code-separator-3" />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
export default LoginForm;
