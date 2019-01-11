import React from 'react' 
import FullNameInput from '../inputs/NameInput';
import EmailInput from '../inputs/EmailInput';
import UserNameInput from '../inputs/UsernameInput';
import PasswordInput from '../inputs/PasswordInput';
import SignUpBtn from '../buttons/SignUpBtn';
class SignUpForm extends React.Component{
    state= {
        username:"",
        password:"",
        email:"",
        fullname:""
    }
    
    handleChange = (event)=>{
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
        console.log("Like an Adult")
    }
    handleSubmit= (event)=>{
        this.setState({})
    }
    
    render(){
    return(
        <div>
            <div id="code-signup" className="row code-index code-vertical-align-wrapper">
                <div className="col s12 m10 offset-m1 l7 offset-l4 xl5 offset-xl4">
                    <div className="row">
                        <div className="col s10 offset-s1">
                            <h1 id ="logo">[Coding Connect]</h1>
                            
                        </div>

                        <div className="col s10 offset-s1">
                            <form id="code-form-signup" action="/api/signup" method="POST">
                                <FullNameInput onChange={this.handleChange} value ={this.state.fullname}/>

                                <EmailInput onChange={this.handleChange} value ={this.state.email}/>

                                <UserNameInput onChange={this.handleChange} value ={this.state.username}/>  
                                <PasswordInput onChange={this.handleChange} value ={this.state.pasword}/>

                                <div className="code-separator-2"></div>

                                <SignUpBtn onClick={this.handelSubmit}/>
                            </form>

                            <div className="code-separator-2"></div>
                        </div>

                        <div className="col s10 offset-s1">
                            <a href="/" id="logo">Have an account? Log in.</a>

                <div className="code-separator-3"></div>
            </div>
        </div>
    </div>
</div>
            
        </div>
    )
}
}
export default SignUpForm