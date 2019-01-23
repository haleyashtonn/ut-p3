// import React from "react";
// import UserNameInput from "../inputs/UsernameInput";
// import PasswordInput from "../inputs/PasswordInput";
// import LoginBtn from "../buttons/LoginBtn";

import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      redirectTo: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("handleSubmit");
    console.log(this.props);

    axios
      .post("/user/login", {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        console.log("login response: ");
        console.log(response);
        if (response.status === 200) {
          // update App.js state
          this.props.updateUser({
            loggedIn: true,
            username: response.data.username
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
  }

  render() {
    console.log("LoginForm props: ", this.props);
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div>
          <h4>Login</h4>
          <form className="form-horizontal">
            <div className="form-group">
              <div className="col-1 col-ml-auto">
                <label className="form-label" htmlFor="username">
                  Username
                </label>
              </div>
              <div className="col-3 col-mr-auto">
                <input
                  className="form-input"
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-1 col-ml-auto">
                <label className="form-label" htmlFor="password">
                  Password:{" "}
                </label>
              </div>
              <div className="col-3 col-mr-auto">
                <input
                  className="form-input"
                  placeholder="password"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group ">
              <div className="col-7" />
              <button
                className="btn btn-primary col-1 col-mr-auto"
                onClick={this.handleSubmit}
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      );
    }
  }
}

export default LoginForm;

// class LoginForm extends React.Component {
//   state = {
//     username: "",
//     password: ""
//   };

//   handleChange = event => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     });
//     console.log("Like an Adult");
//   };

//   render() {
//     return (
//       <div className="row">
//         <div
//           id="code-login"
//           className="row code-index code-vertical-align-wrapper login"
//         >
//           <div className="col s12 m10 offset-m1 l7 offset-l4 xl5 offset-xl4">
//             <div className="row">
//               <div className="col s10 offset-s1" className="login">
//                 <h1 id="logo">[Coding Connect]</h1>
//               </div>
//             </div>
//             <div className="col s10 offset-s1">
//               <form id="code-form-login" action="/api/login" method="POST">
//                 <UserNameInput
//                   onChange={this.handleChange}
//                   value={this.state.username}
//                 />

//                 <PasswordInput
//                   onChange={this.handleChange}
//                   value={this.state.password}
//                 />

//                 <div className="code-separator-2" />

//                 <LoginBtn />
//               </form>

//               <div className="code-separator-2" />
//             </div>

//             <div className="col s10 offset-s1">
//               <a href="signup" id="logo">
//                 Don't have an account? Sign up.
//               </a>

//               <div className="code-separator-3" />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// export default LoginForm;
