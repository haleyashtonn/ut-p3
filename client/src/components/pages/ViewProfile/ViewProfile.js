import React from 'react';
import NavBar from '../Navbar';
import Footer from '../Footer';
import Profile from '../../cards/ProfileCard';

class ViewProfile extends React.Component{
    render(){
        return(
            <div className = "pic">
                <NavBar/>
                <Profile/>

                <Footer/>
            </div>
        )
    }
}
export default ViewProfile