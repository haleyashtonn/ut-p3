import React from 'react'
import DeleteBtn from '../buttons/DeleteBtn';

function DeleteForm(){
    return(
        <div>
            <form action="/api/delete-account_{{animal.id}}?_method=DELETE" method="POST">
            <DeleteBtn/>
            </form>
            <div className="ani-separator-3"></div>
        </div>
    )
}
export default DeleteForm