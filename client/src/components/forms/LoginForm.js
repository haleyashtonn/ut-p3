import React from 'react'
import UserNameInput from "../inputs/UsernameInput";
import PasswordInput from "../inputs/PasswordInput";
import LoginBtn from "../buttons/LoginBtn";

class LoginForm extends React.Component{
    state= {
        username:"",
        password:"",

    }
    handleChange = (event)=>{
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
        console.log("Like an Adult")
    }
    render(){
    return(
        <div className="row">
        <div id="code-login" className="row code-index code-vertical-align-wrapper login">
            <div className="col s12 m10 offset-m1 l7 offset-l4 xl5 offset-xl4">
            
                <div className="row">
                    <div className="col s10 offset-s1 login">
                        <h1 id = "logo">[Coding Connect]</h1>
                    
                    </div>
                    </div>
                    <div className="col s10 offset-s1">
                        <form id="code-form-login" action="/api/login" method="POST">
                            <UserNameInput onChange={this.handleChange} value={this.state.username}/>

                            <PasswordInput onChange={this.handleChange} value={this.state.password}/>

                            <div className="code-separator-2"></div>

                            <LoginBtn/>
                        </form>

                        <div className="code-separator-2"></div>
                    </div>

                    <div className="col s10 offset-s1">
                        <a href="signup" id="logo">Don't have an account? Sign up.</a>

                        <div className="code-separator-3"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
}
export default LoginForm
