import React from 'react' 
import FullNameInput from '../inputs/NameInput';
import EmailInput from '../inputs/EmailInput';
import UserNameInput from '../inputs/UsernameInput';
import PasswordInput from '../inputs/PasswordInput';
import SignUpBtn from '../buttons/SignUpBtn';
function SignUpForm (){
    return(
        <div>
            <div id="ani-signup" className="row ani-index ani-vertical-align-wrapper">
                <div className="col s12 m10 offset-m1 l7 offset-l4 xl5 offset-xl4">
                    <div className="row">
                        <div className="col s10 offset-s1">
                            <h1>Love At First Bite</h1>
                            
                        </div>

                        <div className="col s10 offset-s1">
                            <form id="ani-form-signup" action="/api/signup" method="POST">
                                <FullNameInput/>

                                <EmailInput/>

                                <UserNameInput/>  
                                <PasswordInput/>

                                <div className="ani-separator-2"></div>

                                <SignUpBtn/>
                            </form>

                            <div className="ani-separator-2"></div>
                        </div>

                        <div className="col s10 offset-s1">
                            <a href="javascript:displayLogin();">Have an account? Log in.</a>

                <div className="ani-separator-3"></div>
            </div>
        </div>
    </div>
</div>
            
        </div>
    )
}
export default SignUpForm