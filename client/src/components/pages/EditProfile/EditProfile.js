import React from "react";
import NavBar from "../Navbar";
import Footer from "../Footer";
import AddJobCurrent from "../../forms/JobHistForm";
import Skills from "../../forms/Skills";
import EduForm from "../../forms/EduForm";
import PreviewCard from "../../cards/ProPreviewCard";
import LinkForm from "../../forms/LinkForm";
import UploadForm from "../../forms/UploadForm";

class CreateProfile extends React.Component {
  state = {
    user: "",
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
    skills: {
      HTML: false,
      CSS: true,
      PHP: false,
      SQL: false,
      NoSQL: false,
      NPM: false,
      Kotlin: false,
      Swift: false,
      Node: false,
      Bootstrap: false,
      Yarn: false,
      Git: false,
      Javascript: false,
      React: false,
      Angular: false,
      Ruby: false,
      Java: false,
      Python: false,
      Flutter: false,
      WordPress: false
    }
  };

  formChanged = (props, name) => {
    this.setState({
      [name]: props
    });
    console.log(props, name);
    console.log("name");
  };
  handleTab = event => {
    console.log(event.target.className);
    if (event.target.className === "form-tab") {
      const name = event.target.id;
      this.setState({ formName: name });

      console.log(name);
    } else {
      console.log("dont switch");
    }
  };
  checkedBox = (val, name) => {
    console.log(val);
    let skillsArr = {
      HTML: false,
      CSS: this.state.skills.Css,
      PHP: false,
      SQL: false,
      NoSQL: false,
      NPM: false,
      Kotlin: false,
      Swift: false,
      Node: false,
      Bootstrap: false,
      Yarn: false,
      Git: false,
      Javascript: false,
      React: false,
      Angular: false,
      Ruby: false,
      Java: false,
      Python: false,
      Flutter: false,
      WordPress: false
    };

    // add checked attribute to all options
    // write function based on that
    console.log(name);

    console.log(skillsArr);

    let skill = skillsArr[name];
    console.log(skill);
    let asset = [name];
    console.log(asset);

    skill = val;
    console.log(skill);
    console.log(skillsArr[name]);
    console.log(skillsArr);
    // this.setState({skills:skillsArr})

    // this.setState({skill:val})
    // console.log("match")
    //  this.setState({
    //     skills:[{[name]:true}]
    // })
    //     console.log(this.state.skills)
    //     console.log(name)
    // }
    // else if(skillName===true){
    // this.setState({
    //     skills:{[name]:false}
    //     })
    //}
  };
  stateUpload = (link, pId) => {
    this.setState({ url: link, publicId: pId });
    console.log("last");
    console.log(link);
  };

  render() {
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
            ) : this.state.fromName === "" ? (
              <EduForm onformChange={this.formChanged} />
            ) : (
              <EduForm onformChange={this.formChanged} />
            )}
          </div>

          <div id="code-resume" className="col s12 m6 l4 offset-l1">
            <PreviewCard {...this.state} />
          </div>
        </div>
      </div>
    );
  }
}
export default CreateProfile;
