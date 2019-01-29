import React, { Component } from "react";
import Button from "react-materialize/lib/Button";

class Results extends Component {
  //     componentDidUpdate(){
  //        console.log(this.props)

  //    }
  showRes = () => {
    if (this.props.jobs === null) {
      console.log("nothing to show");
    } else {
      for (let i = 0; i < this.props.jobs.length; i++) {
        console.log(this.props.jobs[i].title);

        return <div>{this.props.jobs[i].title}</div>;
      }
    }
  };

  render() {
    const result = this.props;
    // console.log(this.props.jobs);
    // if(this.props.length>0){
    // const posting=result.map(
    //     (res)=><div>{res[i].title}</div>
    // )

    return (
      <form>
        <h6>Results:</h6>
        {this.props.jobs.map(element => (
          <div>
            <h5>{element.company}</h5>
            <h6>{element.title}</h6>
            <p>
              <strong>{element.location}</strong>
            </p>
            <a type="url" href={element.url} className="link">
              {element.url}
            </a>
            <Button>Save</Button>
            <hr />
          </div>
        ))}
        {/* {this.showRes()} */}
      </form>
    );
  }
}

export default Results;
