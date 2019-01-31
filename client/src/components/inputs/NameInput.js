import React from "react";

function FullNameInput(props) {
  return (
    <div>
      <div className="input-field">
        <label id="form-label">Full name</label>
        <input
          type="text"
          name="fullname"
          id="code-fullname"
          className="validate"
          required
          {...props}
        />
      </div>
    </div>
  );
}
export default FullNameInput;
