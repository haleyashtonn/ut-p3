import React from "react";
import NavBar from "../Navbar";
import LoginForm from "../../forms/LoginForm";
import Footer from "../Footer";

class Login extends React.Component {
  render() {
    return (
      <div className="pic">
        <LoginForm />
      </div>
    );
  }
}
export default Login;
