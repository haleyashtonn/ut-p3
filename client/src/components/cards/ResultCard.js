import React, { Component } from "react";
import Button from "react-materialize/lib/Button";

class Results extends Component {
  //     componentDidUpdate(){
  //        console.log(this.props)
  state = {};
  //    }
  showRes = () => {
    if (this.props.jobs === null) {
      console.log("nothing to show");
    } else {
      for (let i = 0; i < this.props.jobs.length; i++) {
        return <div>{this.props.jobs[i].title}</div>;
      }
    }
  };
  savingJob = event => {
    let company = event.target.value;
    let title = event.target.name;
    let link = event.target.id;
    console.log(this.props);
    console.log(event.target.id);
    this.props.savingJob(company, title, link);
    console.log("saveMe");
  };

  render() {
    return (
      <form>
        <h6>Results:</h6>
        {this.props.jobs.map(element => (
          <div>
            <h5 id={element}>{element.company}</h5>
            <h6>{element.title}</h6>
            <p>
              <strong>{element.location}</strong>
            </p>
            <Button type="button" id="apply" className="joblink">
              <a href={element.url}>Apply</a>
            </Button>

            <Button
              id={element.url}
              name={element.company}
              value={element.title}
              type="button"
              onClick={this.savingJob}
            >
              Save
            </Button>
            <hr />
          </div>
        ))}
      </form>
    );
  }
}

export default Results;
