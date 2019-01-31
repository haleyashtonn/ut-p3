import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddJobCurrent from "./components/forms/JobHistForm";
import EduForm from "./components/forms/EduForm";
import Login from "./components/pages/Login/Login";
import SignupUser from "./components/pages/SignupUser/SignupUser";
import Skills from "./components/forms/Skills";
import CreateProfile from "./components/pages/EditProfile/EditProfile";
import FindJobs from "./components/pages/FindJobs/FindJobs";
import MeetTeam from "./components/pages/MeetTeam/MeetTeam";
import ViewProfile from "./components/pages/ViewProfile/ViewProfile";
import LinkForm from "./components/forms/LinkForm";
import LoginForm from "./components/forms/LoginForm";
import NavBar from "./components/pages/Navbar";
import Footer from "./components/pages/Footer";

class App extends Component {
  state = {
    loggedIn: false,
    username: null
  };

  componentDidMount() {
    this.getUser();
  }

  updateUser = userObject => {
    this.setState(userObject);
  };

  getUser = () => {
    axios.get("/user/").then(response => {
      if (response.data.user) {
        console.log("Get User: There is a user saved in the server session: ");
        // Get rid of password hash in object
        const { password, ...withoutPW } = response.data.user;
        this.setState({
          loggedIn: true,
          // username: response.data.user.username,
          // user: response.data.user
          ...withoutPW
        });
      } else {
        console.log("Get user: no user");
        this.setState({
          loggedIn: false,
          username: null
        });
      }
    });
  };

  handleLogout = event => {
    event.preventDefault();
    console.log("logging out");
    axios
      .post("/user/logout")
      .then(response => {
        console.log(response.data);
        if (response.status === 200) {
          this.setState({
            loggedIn: false,
            username: null,
            user: null
          });
        }
      })
      .catch(error => {
        console.log("Logout error:");
        console.log(error);
      });
  };

  render() {
    // Conditionally rendering homepage based on loggedIn state
    let renderHome;
    if (this.state.loggedIn) {
      console.log(this.state);
      renderHome = <ViewProfile {...this.state} getUser={this.getUser} />;
    } else {
      renderHome = <LoginForm updateUser={this.updateUser} />;
    }

    return (
      <Router>
        <div>
          <NavBar {...this.state} handleLogout={this.handleLogout} />
          <Switch>
            <Route exact path="/" render={() => renderHome} />
            <Route
              path="/createprofile"
              render={() => <CreateProfile {...this.state} />}
            />
            {/* <Route exact path="/settings" component={Settings} /> */}
            <Route exact path="/signup" component={SignupUser} />
            <Route
              path="/login"
              render={() => <LoginForm updateUser={this.updateUser} />}
            />
            <Route
              path="/FindJobs"
              render={() => <FindJobs {...this.state} />}
            />
            <Route exact path="/meetteam" component={MeetTeam} />
            <Route exact path="/EduForm" component={EduForm} />
            <Route exact path="/AddJobCurrent" component={AddJobCurrent} />
            <Route exact path="/Skills" component={Skills} />
            {/* <Route exact path="/FindJobs" component={FindJobs} /> */}
            <Route exact path="/LinkForm" component={LinkForm} />

            <Route component={Login} />
          </Switch>
          <Footer updateUser={this.updateUser} />
        </div>
      </Router>
    );
  }
}

export default App;
