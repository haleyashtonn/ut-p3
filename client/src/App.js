import React, { Component } from "react";
import axios from "axios";

import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AddJobCurrent from "./components/forms/JobHistForm";
import EduForm from "./components/forms/EduForm";
import Login from "./components/pages/Login/Login";
import SignupUser from "./components/pages/SignupUser/SignupUser";
import Settings from "./components/pages/Settings/Settings";
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
    username: null,
    updateUser: this.updateUser // does this work with spread operator?
  };

  componentDidMount() {
    this.getUser();
  }

  updateUser = userObject => {
    this.setState(userObject);
  };

  getUser = () => {
    axios.get("/user/").then(response => {
      console.log("Get user response: ");
      console.log(response.data);
      if (response.data.user) {
        console.log("Get User: There is a user saved in the server session: ");

        this.setState({
          loggedIn: true,
          username: response.data.user.username
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

  render() {
    let renderHome;
    if (this.state.loggedIn) {
      console.log(this.state);
      renderHome = <ViewProfile {...this.state} />;
    } else {
      renderHome = <LoginForm updateUser={this.updateUser} />;
    }

    return (
      <Router>
        <div>
          <NavBar {...this.state} />
          <Switch>
            <Route exact path="/" render={() => renderHome} />
            <Route exact path="/home" component={ViewProfile} />
            <Route exact path="/createprofile" component={CreateProfile} />
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/signup" component={SignupUser} />
            {/* <Route exact path="/login" component={Login} /> */}
            <Route
              path="/login"
              render={() => <LoginForm updateUser={this.updateUser} />}
            />
            <Route exact path="/meetteam" component={MeetTeam} />
            <Route exact path="/EduForm" component={EduForm} />
            <Route exact path="/AddJobCurrent" component={AddJobCurrent} />
            <Route exact path="/Skills" component={Skills} />
            <Route exact path="/FindJobs" component={FindJobs} />
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
