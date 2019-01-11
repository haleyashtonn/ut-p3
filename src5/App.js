import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DeleteBtn from './components/buttons/DeleteBtn'
import PostBtn from './components/buttons/PostBtn'
import UploadBtn from './components/buttons/UploadBtn'
import SignUpBtn from './components/buttons/SignUpBtn'
import EditBtn from './components/buttons/EditBtn'
import LoginBtn from './components/buttons/LoginBtn'
import NavBar from './components/pages/Navbar';
import Footer from './components/pages/Footer';
import SignUpForm from './components/forms/SignUpForm';
import LoginForm from './components/forms/LoginForm';
import DeleteForm from './components/forms/DeleteAccForm';
import SettingsCardL from './components/cards/SettingsCardL';
import SettingsCardR from './components/cards/SettingsCardR';
import DeleteAccCard from './components/cards/DeleteCard';
import MyDropzone from './components/inputs/Dropzone';
import UploadForm from './components/forms/UploadForm';
import FriendChip from './components/buttons/FriendChip';
import Carousel from './components/display/Carousel';
import AddJobCurrent from './components/forms/JobHistForm';
import EduForm from './components/forms/EduForm';
import Datepicker from './components/inputs/Datepicker';
import Login from './components/pages/Login/Login';
import SignupUser from './components/pages/SignupUser/SignupUser';
import Settings from './components/pages/Settings/Settings';

import Skills from './components/forms/Skills';
import CreateProfile from './components/pages/EditProfile/EditProfile';
import FindJobs from './components/pages/FindJobs/FindJobs';
import  MeetTeam  from './components/pages/MeetTeam/MeetTeam';
import ViewProfile from './components/pages/ViewProfile/ViewProfile';


function App() {
  return (
    <Router>
      <div>
        
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={ViewProfile} />
          <Route exact path="/createprofile" component={CreateProfile} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/signup" component={SignupUser} />
          <Route exact path="/logout" component={Login}/>
          <Route exact path="/meetteam" component={MeetTeam.EduForm}/>
          <Route exact path ="/EduForm" component={EduForm}/>
          <Route exact path ="/AddJobCurrent" component={AddJobCurrent}/>
          <Route exact path ="/Skills" component={Skills}/>


          <Route component={FindJobs} />
        </Switch>
        
      </div>
    </Router>
  );
}


export default App;
