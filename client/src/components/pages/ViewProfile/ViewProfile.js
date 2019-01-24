import React from "react";
import NavBar from "../Navbar";
import Footer from "../Footer";
import Profile from "../../cards/ProfileCard";

class ViewProfile extends React.Component {
  render() {
    return (
      <div className="pic">
        <Profile />
      </div>
    );
  }
}
export default ViewProfile;
