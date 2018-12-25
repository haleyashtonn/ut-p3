import React from 'react'
function PasswordInput(props){
    return(
        <div>
            <div className="input-field">
                <label  className="blue-grey-text text-darken-2">Password</label>
                <input type="text" name="password" id="ani-password" className="validate" required></input>
            </div>
        </div>
    )
}
export default PasswordInput