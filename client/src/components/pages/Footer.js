import React from "react";
import axios from "axios";

class Footer extends React.Component {
  handleLogout = event => {
    event.preventDefault();
    console.log("logging out");
    axios
      .post("/user/logout")
      .then(response => {
        console.log(response.data);
        if (response.status === 200) {
          this.props.updateUser({
            loggedIn: false,
            username: null
          });
        }
      })
      .catch(error => {
        console.log("Logout error:");
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <footer className="page-footer  light-blue darken-2">
          <div className="container">
            <div className="row">
              <div className="col s5 l4 offset-l2">
                <h3 className="white-text">Follow us!</h3>

                <ul id="code-footer-social">
                  <div className="row">
                    <div className="col s3 l2">
                      <li
                        className="white-text text-lighten-3"
                        href="https://github.com/sohai9/Project-2"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Follow Us on GitHub!"
                      >
                        <i className="fa fa-github-square" aria-hidden="true" />
                      </li>
                    </div>
                    <div className="col s3 l2">
                      <li
                        className="white-text text-lighten-3"
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Follow Us on Facebook!"
                      >
                        <i
                          className="fa fa-facebook-square"
                          aria-hidden="true"
                        />
                      </li>
                    </div>
                    <div className="col s3 l2">
                      <li
                        className="white-text text-lighten-3"
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Follow Us on LinkedIn!"
                      >
                        <i
                          className="fa fa-linkedin-square"
                          aria-hidden="true"
                        />
                      </li>
                    </div>
                    <div className="col s3 l2">
                      <li
                        className="white-text text-lighten-3"
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Follow Us on Instagram!"
                      >
                        <i className="fa fa-instagram" aria-hidden="true" />
                      </li>
                    </div>
                    <div className="col s3 l2">
                      <li
                        className="white-text text-lighten-3"
                        href="https://www.twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Follow Us on Twitter!"
                      >
                        <i
                          className="fa fa-twitter-square"
                          aria-hidden="true"
                        />
                      </li>
                    </div>
                  </div>
                </ul>
              </div>

              <div className="col s6 offset-s1 l4 offset-l1">
                <h3 className="white-text">Links</h3>

                <ul id="code-footer-links">
                  <li>
                    <a className="white-text text-lighten-3" href="/">
                      Home
                    </a>
                  </li>

                  <li>
                    <a className="white-text text-lighten-3" href="/settings">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a className="white-text text-lighten-3" href="/FindJobs">
                      Find Jobs
                    </a>
                  </li>
                  <li>
                    <a className="white-text text-lighten-3" href="/signup">
                      Sign Up
                    </a>
                  </li>

                  <li>
                    <a
                      className="white-text text-lighten-3"
                      href="/user/logout"
                      onClick={this.handleLogout}
                    >
                      Logout
                    </a>
                  </li>
                  <li>
                    <a className="white-text text-lighten-3" href="/meetteam">
                      Meet Team
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-copyright cyan darken-2">
            <div className="container">
              <div className="center-align">
                Copyright © 2018 by{" "}
                <a
                  className="lime-text text-lighten-4"
                  href="https://www.linkedin.com/in/sohai9/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  sohai9
                </a>
                ,{" "}
                <a
                  className="lime-text text-lighten-4"
                  href="https://www.linkedin.com/in/christian-henry-27a7a7167/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Christian
                </a>
                ,{" "}
                <a
                  className="lime-text text-lighten-4"
                  href="https://www.linkedin.com/in/yenpingliu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ping
                </a>
                ,{" "}
                <a
                  className="lime-text text-lighten-4"
                  href="https://www.linkedin.com/in/haley-murawski/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Haley
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
