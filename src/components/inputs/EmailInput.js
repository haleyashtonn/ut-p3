import React from 'react'
function EmailInput(props){
    return(
        <div>
            <div className="input-field">
                <label className="blue-grey-text text-darken-2">Email</label>
                <input type="email" name="email" id="code-email" className="validate" required {...props}></input>
            </div>
        </div>
    )
}
export default EmailInput