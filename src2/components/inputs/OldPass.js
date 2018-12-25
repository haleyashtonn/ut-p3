import React from 'react'

function OldPassword(props){
    return(
        <div>
            <div className="input-field">
                <label  className="blue-grey-text text-darken-2">New password</label>
                <input type="password" name="password_new" id="ani-new-password" className="validate" placeholder="" required></input>
            </div>
        </div>
    )
}
export default OldPassword