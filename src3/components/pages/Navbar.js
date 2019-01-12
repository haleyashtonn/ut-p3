import React from 'react'

class NavBar extends React.Component{
    render(){
        return(
        <div>
<div className="navbar-fixed">
        <div>
            <nav>
                <div className="nav-wrapper cyan darken-1">
                    <a>[Coding Connect]</a>
                   
                    <a href="#" data-activates="ani-menu-mobile" className="button-collapse"><i className="material-icons">menu</i></a>

                    <ul id="ani-dropdown-writer" className="dropdown-content">
                        <li><a href="/meet-ani">Singles</a></li>
                        <li><a href="/meet-ani-team">Meet Team</a></li>

                        <li className="divider"></li>

                        <li><a href="/settings">Settings</a></li>
                        <li><a href="/logout">Logout</a></li>
                    </ul>

                    <ul className="right hide-on-med-and-down" id="ani-menu-desktop">
                        <li><a className="ani-menu-desktop-items" href="/">Home<i className="material-icons right"></i></a></li>
                        <li className="cyan darken-3"><a className="ani-menu-desktop-items" href="/upload-photos">Compose<i className="material-icons right"></i></a></li>
                        <li><a className="ani-menu-desktop-items" href="/animals">Find Dates<i className="material-icons right"></i></a></li>
                        <li><a className="ani-menu-desktop-items dropdown-button" href="#" data-activates="ani-dropdown-writer"><i className="material-icons right"></i></a></li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
    </div>
    )
}
}

export default NavBar