import React from 'react'
import OldPassword from '../inputs/OldPass';
import NewPassword from '../inputs/NewPass';
import EditBtn from '../buttons/EditBtn';

class SettingsFormR extends React.Component{
    state ={
        old:"",
        new1:"",
        new2:"",
    }
    handleChange = (event)=>{
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
        console.log("Like an Adult")
    }

    render(props){
    return(
        <div>
            <form className="update" action="/api/update-password_{{coder.id}}?_method=PATCH" method="POST">
            <h2>Update password</h2>
            <OldPassword onChange ={this.handleChange} value = {this.state.old}/>
            <NewPassword onChange ={this.handleChange} name="new1" value = {this.state.new1}/>
            <NewPassword onChange ={this.handleChange} name="new2" value = {this.state.new2}/>
            <div className="code-separator-2"></div>
            <EditBtn/>
            </form>
        </div>
    )
}
}
export default SettingsFormR