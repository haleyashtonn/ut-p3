import React, { Component } from 'react';
import './App.css';
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

class App extends Component {
  render() {
    return (

      <div>
      <NavBar/>  
      <DeleteBtn/>
      <PostBtn/>
      <UploadBtn/>
      <SignUpBtn/>
      <EditBtn/>
      <LoginBtn/>
      <Footer/>
      <SignUpForm/>
      <LoginForm/>
      <DeleteAccCard/>
      <SettingsCardL/>
      <SettingsCardR/>
      <UploadForm/>
      <FriendChip/>
      <Carousel/>
      </div>
      
    );
  }
}

export default App;
