import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AddJobCurrent from './components/forms/JobHistForm';
import EduForm from './components/forms/EduForm';

import Login from './components/pages/Login/Login';
import SignupUser from './components/pages/SignupUser/SignupUser';
import Settings from './components/pages/Settings/Settings';

import Skills from './components/forms/Skills';
import CreateProfile from './components/pages/EditProfile/EditProfile';
import FindJobs from './components/pages/FindJobs/FindJobs';
import  MeetTeam  from './components/pages/MeetTeam/MeetTeam';
import ViewProfile from './components/pages/ViewProfile/ViewProfile';
import LinkForm from './components/forms/LinkForm';
import UploadForm from './components/forms/UploadForm';




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
          <Route exact path="/meetteam" component={MeetTeam}/>
          <Route exact path ="/EduForm" component={EduForm}/>
          <Route exact path ="/AddJobCurrent" component={AddJobCurrent}/>
          <Route exact path ="/Skills" component={Skills}/>
          <Route exact path ="/FindJobs" component={FindJobs}/>
          <Route exact path ="/LinkForm" component={LinkForm}/>
          <Route exact path ="/UploadForm" component={UploadForm}/>
   
          <Route component={FindJobs} />
        </Switch>
        
      </div>
    </Router>
  );
}


export default App;
