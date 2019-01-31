import React from "react";
import AddJobCurrent from "../../forms/JobHistForm";
import Skills from "../../forms/Skills";
import EduForm from "../../forms/EduForm";
import PreviewCard from "../../cards/ProPreviewCard";
import LinkForm from "../../forms/LinkForm";
import UploadForm from "../../forms/UploadForm";
import { Button } from "react-materialize";
import axios from "axios";
import { Redirect } from "react-router-dom";

class CreateProfile extends React.Component {
  state = {
    username: "",
    userId: "",
    location: "",
    userFullName: "",
    url: "",
    publicId: "",
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
    skills: [],
    redirectTo: null
  };
  componentDidMount = () => {
    axios
      .get("/user", { id: this.props.id })
      .then(response => {
        if (response.status === 200) {
          const userN = response.data.user.username;
          const id = response.data.user._id;
          const name = response.data.user.fullname;
          const email = response.data.user.email;
          this.setState({
            username: userN,
            userId: id,
            userFullName: name,
            email: email
          });

          console.log(this.state);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
  submitProfile = () => {
    console.log(this.props._id);
    axios
      .post("/education/", {
        userId: this.props._id,
        education: {
          school: this.state.school,
          degree: this.state.degree,
          gradyear: this.state.graduated,
          otheredu: this.state.otherEdu,
          awards: this.state.awards,
          skills: this.state.skills,
          job: this.state.job,
          jobtitle: this.state.jobtitle,
          timewith: this.state.timewith,
          duties: this.state.duties,
          links: this.state.links,
          publicId: this.state.publicId,
          location: this.state.location
        }
      })
      .then(response => {
        console.log("profile_response", response);
        if (response) {
          console.log(response.data.education[0]);
          const res = response.data.education[0];
          this.setState({ school: res.school });
        }
        this.setState({
          redirectTo: "/"
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
  formChanged = (props, name) => {
    this.setState({
      [name]: props
    });
  };
  handleTab = event => {
    if (event.target.className === "form-tab") {
      const name = event.target.id;
      this.setState({ formName: name });
    } else {
      console.log("dont switch");
    }
  };
  checkedBox = (props, name) => {
    this.setState({
      skills: this.state.skills + "   " + [name]
    });
  };
  stateUpload = (link, pId) => {
    this.setState({ url: link, publicId: pId });
  };

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div className="pic">
          <div className="code-separator-2" />
          <div id="editContainer" className="row code-index ">
            <div className="col s12 m6 l5 offset-l1">
              <ul className="tabs" id="forms">
                <li className="tab col s3">
                  <i
                    className="form-tab"
                    id="edu"
                    name="edu"
                    onClick={this.handleTab}
                  >
                    Education
                  </i>
                </li>
                <li className="tab col s2">
                  <i
                    className="form-tab"
                    id="bio"
                    name="photo"
                    onClick={this.handleTab}
                  >
                    Bio
                  </i>
                </li>
                <li className="tab col s3">
                  <i
                    className="form-tab"
                    id="job"
                    name="job"
                    onClick={this.handleTab}
                  >
                    Work Exp.
                  </i>
                </li>

                <li className="tab col s2 ">
                  <i
                    className="form-tab"
                    id="skills"
                    name="skills"
                    onClick={this.handleTab}
                  >
                    Skills
                  </i>
                </li>
                <li className="tab col s2 ">
                  <i
                    className="form-tab"
                    id="pLinks"
                    name="pLinks"
                    onClick={this.handleTab}
                  >
                    Links
                  </i>
                </li>
              </ul>

              {this.state.formName === "job" ? (
                <AddJobCurrent
                  onformChange={this.formChanged}
                  onAcceptPass={this.stateUpload}
                />
              ) : this.state.formName === "bio" ? (
                <UploadForm
                  onAcceptPass={this.stateUpload}
                  onformChange={this.formChanged}
                />
              ) : this.state.formName === "skills" ? (
                <Skills onformCheck={this.checkedBox} {...this.state.skills} />
              ) : this.state.formName === "pLinks" ? (
                <LinkForm onformChange={this.formChanged} />
              ) : (
                <EduForm onformChange={this.formChanged} {...this.props} />
              )}
              <Button
                id="submitPro"
                href="/profile"
                onClick={this.submitProfile}
              >
                Submit Profile
              </Button>
              <div className="code-separator-2" />
            </div>

            <div id="code-resume" className="col s12 m6 l4 offset-l1">
              <PreviewCard {...this.state} {...this.state.skills} />
            </div>
          </div>
        </div>
      );
    }
  }
}
export default CreateProfile;
