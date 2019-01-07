import React from 'react'
import FullNameInput from '../inputs/NameInput';
import EmailInput from '../inputs/EmailInput';
import UserNameInput from '../inputs/UsernameInput';
import EditBtn from '../buttons/EditBtn';

class SettingsFormL extends React.Component{
    render(props){

    return(
        <div>
        <form className="update" action="/api/update-profile_{{coder.id}}?_method=PATCH" method="POST">
        <h2>Update Info</h2>
            <FullNameInput/>
            <EmailInput/>
            <UserNameInput/>
            <div className="code-separator-2"></div>
            <EditBtn/>
        </form>
        </div>
    )
}
}
export default SettingsFormL