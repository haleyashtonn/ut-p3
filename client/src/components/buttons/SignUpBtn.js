import React from "react";

function SignUpBtn(props) {
  return (
    <button
      type="submit"
      className="btn-large waves-effect waves-light"
      title="Click to sign up."
      {...props}
    >
      Sign up
    </button>
  );
}
export default SignUpBtn;
