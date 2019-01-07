import React from 'react'
function GenString(props){
    
    return(
        <div>
            <div className="input-field">
                <label  className="blue-grey-text text-darken-2"></label>
                <input    className="validate" required {...props}></input>
            </div>
        </div>
    )
}
export default GenString