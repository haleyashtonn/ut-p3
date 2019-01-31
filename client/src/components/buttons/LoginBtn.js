import React from "react";

function LoginBtn(props) {
  return (
    <button
      type="submit"
      className="btn-large waves-effect waves-light"
      title="Click to sign up."
      {...props}
    >
      Login
    </button>
  );
}
export default LoginBtn;
