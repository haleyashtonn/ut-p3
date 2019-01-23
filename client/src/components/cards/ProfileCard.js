import React from 'react'
import ImageBox from '../display/Image';

class Profile extends React.Component{
    state={ 
        user:"",
        location:"",
        publicId:"",
        userFullName:"",
        job:"",
        jobtitle:"",
        timewith:"",
        duties:"",
        graduated:"",
        school:"",
        degree:"",
        otherEdu:"",
        awards:"",
        formName:"",
        links:[],
        skills:[]
        
        }
    render(){
        return(
            <div id ="Profile" className="row code-index ">
                <div className="col s12 m10 offset-m1 l10 offset-l1">
            <form id="proPage">
            <ImageBox {...this.state}/>
                <h6>Your Name Here</h6>
                <h6>{this.state.location}</h6>
                <h4>Education</h4>
                <h5 id ="school" >{this.state.school}</h5>
                <div id = "graduated">{this.state.graduated}</div>
                <div id="degree">{this.state.degree}</div>
                <div className="textbox" id="otherEdu">{this.state.otherEdu}</div>
                <div className="textbox" id="awards">{this.props.awards}</div>
                <h4>Work Experience</h4>
                <h5 id ="job">{this.state.job}</h5>
                <h6 id ="jobtitle">{this.state.jobtitle}</h6>
                <div id="time" >{this.state.timewith}</div>
                <div className="textbox" id="duties">{this.state.duties}</div>
                <h4>Skills</h4>
                <div className="textbox" id ="skills"></div>
                <h4>Professional Links:</h4>
                <div className="textbox" id="links">{this.state.links}</div>
            </form>
            </div>
            </div>
        )
    }
}
export default Profile