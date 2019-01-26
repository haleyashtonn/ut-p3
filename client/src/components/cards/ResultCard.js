import React, { Component } from "react";

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
          <div>{element.title}</div>
        ))}
        {/* {this.showRes()} */}
      </form>
    );
  }
}

export default Results;
