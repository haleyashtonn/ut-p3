import React from 'react'
import UserNameInput from "../inputs/UsernameInput";
import PasswordInput from "../inputs/PasswordInput";
import LoginBtn from "../buttons/LoginBtn";

function LoginForm(){
    return(
        <div id="ani-login" className="row ani-index ani-vertical-align-wrapper">
    <div className="col s12 m10 offset-m1 l7 offset-l4 xl5 offset-xl4">
        <div className="row">
            <div className="col s10 offset-s1">
                <h1>Love At First Bite</h1>
            
            </div>

            <div className="col s10 offset-s1">
                <form id="ani-form-login" action="/api/login" method="POST">
                    <UserNameInput/>

                    <PasswordInput/>

                    <div className="ani-separator-2"></div>

                    <LoginBtn/>
                </form>

                <div className="ani-separator-2"></div>
            </div>

            <div className="col s10 offset-s1">
                <a href="javascript:displaySignup();">Don't have an account? Sign up.</a>

                <div className="ani-separator-3"></div>
            </div>
        </div>
    </div>
</div>
    )
}
export default LoginForm
