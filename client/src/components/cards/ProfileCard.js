import React from "react";
import ImageBox from "../display/Image";
import { Button } from "react-materialize";

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
    this.setState({ ...this.props });
    if (this.props.education.length === 0) {
      console.log("empty education array");
    } else {
      console.log("spread props.education");
      this.setState({ ...this.props.education[0] });
    }
  };

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
            <h4>Education:</h4>
            <h5 id="school">{this.state.school}</h5>
            <div id="graduated">
              Grad:<div />
              {this.state.gradyear}
            </div>
            <div id="degree">
              Degree<div />
              {this.state.degree}
            </div>
            <div className="textbox" id="otherEdu">
              Other Training:<div />
              {this.state.otheredu}
            </div>
            <div className="textbox" id="awards">
              Awards:<div />
              {this.state.awards}
            </div>
            <h4>Work Experience:</h4>
            <h5 id="job">{this.state.job}</h5>
            <h6 id="jobtitle">
              Title:<div />
              {this.state.jobtitle}
            </h6>
            <div id="time">
              Time With: <div />
              {this.state.timewith}
            </div>
            <div className="textbox" id="duties">
              Duties:<div />
              {this.state.duties}
            </div>
            <h4>Skills</h4>
            <div className="textbox" id="skills">
              {this.state.skills}
            </div>
            <h4>Professional Links:</h4>
            <div className="textbox" id="links">
              {this.state.links}
            </div>
          </form>
          {this.props.jobs.length > 0 ? (
            <form>
              <h5>{this.props.jobs[0].company}</h5>
              <h6>{this.props.jobs[0].title}</h6>
              <Button type="button" id="apply" className="joblink">
                <a href={this.props.jobs[0].link}>Apply</a>
              </Button>
              :
            </form>
          ) : (
            <form>
              <h5>Saved Job Searches</h5>
            </form>
          )}
        </div>
      </div>
    );
  }
}
export default Profile;
