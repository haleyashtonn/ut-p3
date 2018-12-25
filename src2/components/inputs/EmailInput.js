import React from 'react'
function EmailInput(props){
    return(
        <div>
            <div className="input-field">
                <label className="blue-grey-text text-darken-2">Email</label>
                <input type="text" name="email" id="ani-email" className="validate" required></input>
            </div>
        </div>
    )
}
export default EmailInput