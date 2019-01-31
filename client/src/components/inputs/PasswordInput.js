import React from 'react'
function PasswordInput(props){
    return(
        <div>
            <div className="input-field">
                <label  className="blue-grey-text text-darken-2">Password</label>
                <input type="password" name="password" id="code-password" className="validate" required {...props}></input>
            </div>
        </div>
    )
}
export default PasswordInput