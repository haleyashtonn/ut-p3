import React from 'react'

function OldPassword(props){
    return(
        <div>
            <div className="input-field">
                <label  id="form-label">Old password</label>
                <input type="password" name="password_old" id="code-current-password" className="validate" placeholder="********" required {...props}></input>
            </div>
        </div>
    )
}
export default OldPassword