import React from "react";
import { Dropdown, NavItem, Icon, Button } from "react-materialize";
class NavBar extends React.Component {
  render() {
    return (
      <div>
        <div className="navbar-fixed">
          <div>
            <nav>
              <div className="nav-wrapper cyan darken-1">
                <a href="/" id="title">
                  <b>{this.props.username || "[Coding Connect]"}</b>
                </a>
                <div className="right hide-on-med-and-up">
                  <Dropdown
                    trigger={
                      <Button className="dropbutton">
                        <Icon>dehaze</Icon>
                      </Button>
                    }
                  >
                    <NavItem href="/FindJobs">Find Jobs</NavItem>
                    <NavItem divider />
                    <NavItem href="/meetteam">Meet Team</NavItem>
                    <NavItem divider />
                    <NavItem divider />
                    <NavItem href="/createprofile">Edit Profile</NavItem>
                    <NavItem divider />
                    {/* <NavItem href="/settings">Settings</NavItem>
                    <NavItem divider /> */}
                    <NavItem href="/logout" onClick={this.props.handleLogout}>
                      Log out
                    </NavItem>
                  </Dropdown>
                </div>
                <ul className="right hide-on-small-only" id="code-desktop">
                  <li>
                    <a className="code-drop-menu" href="/">
                      Home
                      <i className="material-icons right" />
                    </a>
                  </li>
                  <li>
                    <a className="code-drop-menu" href="/FindJobs">
                      Find Jobs
                      <i className="material-icons right" />
                    </a>
                  </li>
                  <li>
                    <a className="code-drop-menu" href="/createprofile">
                      Edit Profile
                      <i className="material-icons right" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="code-drop-menu"
                      href="/logout"
                      onClick={this.props.handleLogout}
                    >
                      Logout
                      <i className="material-icons right" />
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
