import React from "react";
import GenString from "../inputs/TitleInput";
import TextArea from "../inputs/TextArea";
import PostBtn from "../buttons/PostBtn";
import Axios from "axios";
import { Button } from "react-materialize";

class EduForm extends React.Component {
  handleChange = event => {
    const name = event.target.id;
    this.props.onformChange(event.target.value, name);
    console.log(this.props._id);
  };

  handleClick = event => {
    event.preventDefault();
    const payload = {
      school: this.props.school,
      degree: this.props.degree,
      gradyear: this.props.graduated,
      otheredu: this.props.otherEdu,
      awards: this.props.awards
    };
    console.log(payload);
    Axios.post("/education/", { params: this.props._id }, payload)
      .then(response => {
        console.log(response);
        if (response.status === 200) {
          console.log("success" + response);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  render(props) {
    return (
      <div>
        <div
          id="add-edu"
          className="row code-index code-vertical-align-wrapper"
        >
          <div className="col s12 ">
            <div className="row">
              <form id="showhere">
                <h1>Add Education</h1>
                <label id="form-label">School:</label>
                <GenString
                  placeholder="ex. University of Michigan"
                  type="text"
                  id="school"
                  onChange={this.handleChange}
                  value={this.props.school}
                />
                <label id="form-label">Year Graduated:</label>
                <GenString
                  placeholder="ex. 2012"
                  type="number"
                  id="graduated"
                  onChange={this.handleChange}
                  value={this.props.graduated}
                />
                <label id="form-label">Degree:</label>
                <GenString
                  placeholder="ex. B.S. Biology"
                  type="text"
                  id="degree"
                  onChange={this.handleChange}
                  value={this.props.degree}
                />
                <label id="form-label">Other Education or Training:</label>
                <TextArea
                  placeholder="ex. Trilogy Full-Stack Bootcamp 2018"
                  type="text"
                  id="otherEdu"
                  onChange={this.handleChange}
                  value={this.props.otherEdu}
                />
                <label id="form-label">Awards and Acheivements:</label>
                <TextArea
                  placeholder="ex. Awards and Acheivements"
                  type="text"
                  id="awards"
                  onChange={this.handleChange}
                  value={this.props.awards}
                />

                <div className="code-separator-2" />
                {/* <Button href="/user" onSubmit={this.handleClick} /> */}
              </form>
              <div className="code-separator-1" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default EduForm;
