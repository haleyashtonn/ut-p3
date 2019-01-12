import React from 'react';
import NavBar from '../Navbar';
import Footer from '../Footer';
import EduForm from '../../forms/EduForm';

class ViewProfile extends React.Component{
    render(){
        return(
            <div className = "pic">
                <NavBar/>
                <EduForm/>

                <Footer/>
            </div>
        )
    }
}
export default ViewProfile