import React from 'react'
import{Navbar,NavItem, Icon} from 'react-materialize'
class NavBar extends React.Component{
 
    
    render(){
        
        return(
        <div>
<div className="navbar-fixed">
        <div>

            <nav>
                <div className="nav-wrapper cyan darken-1">
                    <a href="/home" id="title">[Coding Connect]</a>
                    
                    <a data-activates="code-dropdown-writer" href = "#"className="button-collapse"><i className="material-icons">menu</i></a>

                    <ul id="code-dropdown-writer" className="dropdown-content">
                        <li><a href="/FindJobs">Find Jobs</a></li>
                        <li><a href="/meetteam">Meet Team</a></li>

                <ul id="dropMenu" className="dropdown-content">
                  <li>
                    <a href="/FindJobs">Find Jobs</a>
                  </li>
                  <li>
                    <a href="/meetteam">Meet Team</a>
                  </li>

                  <li className="divider" />

                    <ul className="right " id="code-desktop">
                        <li><a className="code-drop-menu" href="/home">Home<i className="material-icons right"></i></a></li>
                        <li className="cyan darken-3"><a className="code-drop-menu" href="/FindJobs">Find Jobs<i className="material-icons right"></i></a></li>
                        <li><a className="code-drop-menu" href="/createprofile">Edit Profile<i className="material-icons right"></i></a></li>
                        <li><a className="code-drop-menu dropdown-button" href="#"data-activates="code-dropdown-writer"><i className="material-icons right"></i></a></li>
                    </ul>
                </div>
            </nav>
          </div>
        </div>
       
    </div>
    </div>
    )
}
}

export default NavBar;
