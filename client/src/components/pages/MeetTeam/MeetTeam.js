import React from 'react'
import NavBar from '../Navbar';
import Footer from '../Footer';
import MeetUs from '../../display/Carousel';
 function MeetTeam(){
return(
    <div className = "pic">
    <NavBar/>
    <div className="code-separator-3"></div>
    <div className = "row">
    <div className ="col s10 offset-s1 m8 offset-m2">
    <MeetUs/>
    </div>
    </div>
    <Footer/>
    </div>
)
}
export default MeetTeam