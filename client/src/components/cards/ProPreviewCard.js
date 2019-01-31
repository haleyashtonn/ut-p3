import React from "react";
import ImageBox from "../display/Image";

class PreviewCard extends React.Component {
  componentDidUpdate = () => {
    console.log(this.props.skills);
  };

  render() {
    return (
      <div>
        <div className="code-separator-3" />
        <form id="preview">
          <ImageBox {...this.props} />
          <h4>
            <b>{this.props.userFullName}</b>
          </h4>
          <p>{this.props.email}</p>
          <h6>
            Location:<div />
            {this.props.location}
          </h6>
          <h4>Education:</h4>
          <h5 id="school">{this.props.school}</h5>
          <div id="graduated">
            Grad:<div />
            {this.props.graduated}
          </div>
          <div id="degree">
            Degree:<div />
            {this.props.degree}
          </div>
          <div className="textbox" id="otherEdu">
            Other Training:<div />
            {this.props.otherEdu}
          </div>
          <div className="textbox" id="awards">
            Awards:<div />
            {this.props.awards}
          </div>
          <h4>Work Experience:</h4>
          <h5 id="job">{this.props.job}</h5>
          <h6 id="jobtitle">
            Title:<div />
            {this.props.jobtitle}
          </h6>
          <div id="time">
            Time<div />
            {this.props.timewith}
          </div>
          <div className="textbox" id="duties">
            Duties:<div />
            {this.props.duties}
          </div>
          <h4>Skills:</h4>
          <div className="textbox" id="skills">
            {this.props.skills}
          </div>
          <h4>Professional Links:</h4>
          <div className="textbox" id="links">
            {this.props.links}
          </div>
        </form>
      </div>
    );
  }
}

export default PreviewCard;
