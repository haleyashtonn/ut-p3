import React from 'react'
import OldPassword from '../inputs/OldPass';
import NewPassword from '../inputs/NewPass';
import EditBtn from '../buttons/EditBtn';

function SettingsFormR(){
    return(
        <div>
            <form action="/api/update-password_{{animal.id}}?_method=PATCH" method="POST">
            <OldPassword/>
            <NewPassword/>
            <div className="ani-separator-2"></div>
            <EditBtn/>
            </form>
        </div>
    )
}
export default SettingsFormR