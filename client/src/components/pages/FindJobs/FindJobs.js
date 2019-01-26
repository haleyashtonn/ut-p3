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
        // const postings = [];
        console.log(res.data);
        if (err) {
          console.log(err);
        } else if (res) {
          // for (let i = 0; i < res.data.length; i++) {
          //   postings.push({
          //     title: res.data[i].title,
          //     company: res.data[i].company,
          //     url: res.data[i].url,
          //     location: res.data[i].location
          //   });
          // }
          // postings.push(res.data)
          // console.log(postings);
          let result = res.data;

          this.setState({
            results: result
          });
          // console.log(this.state);
        }
      });
  };

  formChanged = (props, name) => {
    this.setState({
      [name]: props
    });
    console.log(props, name);
    console.log("name");
  };

  render() {
    return (
      <div className="pic" id="form">
        <div className="code-separator-3" />
        <div className="row">
          <div className="col s12 m10 l6 offset-l3">
            <JobsForm onformChange={this.formChanged} />
            <button
              id="findJobs"
              onClick={this.searchJobs}
              // onSubmit={this.showRes}
            >
              Find Jobs
            </button>
            <Results jobs={this.state.results} />
          </div>
        </div>
      </div>
    );
  }
}
export default SearchJobs;
