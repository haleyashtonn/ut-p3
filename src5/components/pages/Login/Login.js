import React from 'react';
import NavBar from '../Navbar';
import LoginForm from '../../forms/LoginForm';
import Footer from '../Footer';

class Login extends React.Component{
    render(){
        return(
            <div>
                <NavBar/>
                <LoginForm/>
                <Footer/>
            </div>
        )
    }
}
export default Login