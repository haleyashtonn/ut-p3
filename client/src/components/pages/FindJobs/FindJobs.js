import React from "react";
import JobsForm from "../../forms/JobsSearch";
import axios from "axios";
import Results from "../../cards/ResultCard";

class SearchJobs extends React.Component {
  state = {
    where: "",
    job: "",
    results: []
  };

  searchJobs = () => {
    axios
      .get("/jobs", {
        params: { where: this.state.where, job: this.state.job }
      })
      .then((res, err) => {
        if (err) {
          console.log(err);
        } else if (res) {
          let result = res.data;

          this.setState({
            results: result
          });
        }
      });
  };
  saveJob = (company, title, link) => {
    axios.post("/jobs/", {
      userId: this.props._id,
      company: company,
      title: title,
      href: link
    });
  };

  formChanged = (props, name) => {
    this.setState({
      [name]: props
    });
  };

  render() {
    return (
      <div className="pic" id="form">
        <div className="code-separator-3" />
        <div className="row">
          <div className="col s12 m10 l6 offset-l3">
            <JobsForm onformChange={this.formChanged} />
            <button id="findJobs" onClick={this.searchJobs}>
              Find Jobs
            </button>
            <Results savingJob={this.saveJob} jobs={this.state.results} />
          </div>
        </div>
      </div>
    );
  }
}
export default SearchJobs;
