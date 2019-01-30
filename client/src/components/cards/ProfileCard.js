import React from "react";
import ImageBox from "../display/Image";
import axios from "axios";

class Profile extends React.Component {
  state = {
    id: "",
    email: "",
    user: "",
    location: "",
    publicId: "",
    userFullName: "",
    job: "",
    jobtitle: "",
    timewith: "",
    duties: "",
    graduated: "",
    school: "",
    degree: "",
    otherEdu: "",
    awards: "",
    formName: "",
    links: [],
    skills: []
  };
  componentDidMount = () => {
    this.props.getUser();
    console.log("profileCard props", this.props);
    this.setState({ ...this.props });
    if (this.props.education.length === 0) {
      console.log("empty education array");
    } else {
      this.setState({ ...this.props.education[0] });
    }
    // console.log("profileCard props", this.props);
    // this.setState({ ...this.props });
    // if (this.props._id === undefined) {
    //   console.log(this.props);
    // } else {
    //   console.log("updatePro" + this.props.user._id);
    //   axios.get("/user/", this.props.user._id).then((res, err) => {
    //     console.log(res.data);
    //     console.log(err);
    //     const userS = res.data.user;
    //     // const profile = res.data.user.education[0]
    //     this.setState({
    //       ...userS
    //       // id:userS._id,
    //       // userFullName: userS.fullname,
    //       // email: userS.email,
    //       // school: profile.school,
    //       // graduated: profile.gradyear,
    //       // degree: profile.degree,
    //       // otherEdu: profile.otheredu,
    //       // location: profile.location,
    //       // awards: profile.awards,
    //       // job: profile.job,
    //       // jobtitle: profile.jobtitle,
    //       // timewith: profile.timewith,
    //       // links: profile.links,
    //       // skills:profile.skills,
    //       // publicId: profile.publicId
    //     });
    //   });
    // }
  };
  // componentDidUpdate=()=>{
  //     this.setState({id:this.props._id, user:this.props.username,userFullName:this.props.fullname,email:this.props.email})
  // }
  render() {
    return (
      <div id="Profile" className="row code-index ">
        <div className="col s12 m10 offset-m1 l10 offset-l1">
          <form id="proPage">
            <ImageBox publicId={this.state.publicId} />
            <h6 id={this.state.id}>
              <b>{this.props.fullname}</b>
            </h6>
            <p id="email">{this.state.email}</p>
            <h6>{this.state.location}</h6>
            <h4>Education</h4>
            <h5 id="school">{this.state.school}</h5>
            <div id="graduated">{this.state.graduated}</div>
            <div id="degree">{this.state.degree}</div>
            <div className="textbox" id="otherEdu">
              {this.state.otherEdu}
            </div>
            <div className="textbox" id="awards">
              {this.props.awards}
            </div>
            <h4>Work Experience</h4>
            <h5 id="job">{this.state.job}</h5>
            <h6 id="jobtitle">{this.state.jobtitle}</h6>
            <div id="time">{this.state.timewith}</div>
            <div className="textbox" id="duties">
              {this.state.duties}
            </div>
            <h4>Skills</h4>
            <div className="textbox" id="skills" />
            <h4>Professional Links:</h4>
            <div className="textbox" id="links">
              {this.state.links}
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Profile;
