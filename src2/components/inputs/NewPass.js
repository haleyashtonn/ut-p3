import React from 'react'

function NewPassword(props){
    return(
        <div>
            <div className="input-field">
                <label  className="blue-grey-text text-darken-2">Current password</label>
                <input type="password" name="password_current" id="ani-current-password" className="validate" placeholder="********" required></input>
            </div>
        </div>
    )
}
export default NewPassword