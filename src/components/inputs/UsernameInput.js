import React from 'react'
function UserNameInput(props){
    return(
        <div>
            <div className="input-field">
                <label  className="blue-grey-text text-darken-2">Username</label>
                <input type="text" name="username" id="code-username" className="validate" required {...props}></input>
            </div>
        </div>
    )
}
export default UserNameInput