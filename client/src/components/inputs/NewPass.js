import React from 'react'

function NewPassword(props){
    return(
        <div>
            <div className="input-field">
                <label  id="form-label">New Password</label>
                <input type="password"  className="validate" placeholder="********" required {...props}></input>
            </div>
        </div>
    )
}
export default NewPassword