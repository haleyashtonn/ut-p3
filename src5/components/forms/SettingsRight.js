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
            <OldPassword onchange ={this.handleChange} value = {this.state.old}/>
            <NewPassword onchange ={this.handleChange} value = {this.state.new1}/>
            <NewPassword onchange ={this.handleChange} value = {this.state.new2}/>
            <div className="code-separator-2"></div>
            <EditBtn/>
            </form>
        </div>
    )
}
}
export default SettingsFormR