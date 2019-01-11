import React from 'react';
import NavBar from '../Navbar';
import SignUpForm from '../../forms/SignUpForm';
import Footer from '../Footer';

class SignupUser extends React.Component{

    render(){
        return(
            <div>
                <NavBar/>
                <SignUpForm/>
                <Footer/>
            </div>
        )
    }
}
export default SignupUser