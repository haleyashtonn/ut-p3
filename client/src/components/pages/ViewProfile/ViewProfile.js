import React from "react";
import Profile from "../../cards/ProfileCard";

class ViewProfile extends React.Component {
  componentDidMount = () => {
    console.log(this.props);
  };
  componentDidUpdate = () => {
    console.log(this.props);
  };
  render() {
    return (
      <div className="pic">
        {" "}
        <Profile {...this.props} />
      </div>
    );
  }
}
export default ViewProfile;
