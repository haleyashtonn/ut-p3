import React from 'react';
import NavBar from '../Navbar';
import Footer from '../Footer';
import DeleteAccCard from '../../cards/DeleteCard';
import SettingsFormL from '../../forms/SettingsLeft';
import SettingsFormR from '../../forms/SettingsRight';

class Settings extends React.Component{
    render(){
        return(
            <div className = "pic">
                <NavBar/>
                <div className="code-separator-3"></div>
                <div className= "row">
                    <div className= "col s12 m6" >
                        <SettingsFormL/>
                    </div>    
                    
                    
                    <div className= "col s12 m6" >
                        <SettingsFormR/>
                    </div>
                </div>
                <div className= "row">
                    <div className= "col s12 m6" >
                        <DeleteAccCard/>
                    </div>
                </div>    
                <Footer/>
            </div>
        )
    }
}
export default Settings