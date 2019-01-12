import React from 'react'
import FullNameInput from '../inputs/NameInput';
import EmailInput from '../inputs/EmailInput';
import UserNameInput from '../inputs/UsernameInput';
import EditBtn from '../buttons/EditBtn';

function SettingsFormL(props){
    return(
        <div>
        <form action="/api/update-profile_{{animal.id}}?_method=PATCH" method="POST">
            <FullNameInput/>
            <EmailInput/>
            <UserNameInput/>
            <div className="ani-separator-2"></div>
            <EditBtn/>
        </form>
        </div>
    )
}
export default SettingsFormL