import React from 'react'
function FullNameInput(props){
    return(
        <div>
            <div className="input-field">
                <label  className="blue-grey-text text-darken-2">Full name</label>
                <input type="text" name="fullname" id="code-fullname" className="validate" required {...props}></input>
            </div>
        </div>
    )
}
export default FullNameInput