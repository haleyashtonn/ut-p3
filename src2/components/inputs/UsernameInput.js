import React from 'react'
function UserNameInput(props){
    return(
        <div>
            <div className="input-field">
                <label  className="blue-grey-text text-darken-2">Username</label>
                <input type="text" name="username" id="ani-username" className="validate" required></input>
            </div>
        </div>
    )
}
export default UserNameInput