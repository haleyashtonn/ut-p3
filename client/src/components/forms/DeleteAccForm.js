import React from 'react'
import DeleteBtn from '../buttons/DeleteBtn';

function DeleteForm(){
    return(
        <div>
            <form action="/api/delete-account_{{user.id}}?_method=DELETE" method="POST">
            <h5>Warning this will permently Delete this user account!!!</h5>
            <DeleteBtn/>
            </form>
            <div className="code-separator-3"></div>
        </div>
    )
}
export default DeleteForm