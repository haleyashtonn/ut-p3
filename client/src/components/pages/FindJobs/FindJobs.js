import React from "react";
import JobsForm from "../../forms/JobsSearch";
import axios from "axios";

class FindJobs extends React.Component {
  state = {
    where: "",
    job: ""
  };

  componentDidMount() {
    axios.get("/jobs", this.state).then((err, res) => {
      if (err) {
        console.log(err);
      }
      console.log(res);
    });
    ////url company, location, title
  }

  formChanged = (props, name) => {
    this.setState({
      [name]: props
    });
    console.log(props, name);
    console.log("name");
  };
  render() {
    return (
      <div className="pic">
        <div className="code-separator-3" />
        <div className="row">
          <div className="col s12 m10 l6 offset-l3">
            <JobsForm onformChange={this.formChanged} />
            <button id="findJobs" onClick={this.searchJobs}>
              Find Jobs
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default FindJobs;
