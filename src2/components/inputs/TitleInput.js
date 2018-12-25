import React from 'react'
function GenString(props){
    return(
        <div>
            <div className="input-field">
                <label  className="blue-grey-text text-darken-2">Title</label>
                <input type="text" name="genString"  className="validate" required></input>
            </div>
        </div>
    )
}
export default GenString