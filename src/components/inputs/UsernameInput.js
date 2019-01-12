import React from 'react'
function UserNameInput(props){
    return(
        <div>
            <div className="input-field">
                <label  id="form-label">Username</label>
                <input type="text" name="username" id="code-username" className="validate" required {...props}></input>
            </div>
        </div>
    )
}
export default UserNameInput