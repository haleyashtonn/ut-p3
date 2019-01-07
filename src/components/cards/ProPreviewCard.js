import React from 'react';
import UserNameInput from '../inputs/UsernameInput';


class PreviewCard extends React.Component{
state={
    name: "John Doe",
    school: "UT",
    graduated: 2004,
    degree: "B.S C.S.",
    job: "hackplace",
    title:"Jr Dev",
    timeWith:10 +"months",
    skills:"Html"
    
}

HandleNameInput=()=>{
 this.setstate({ name: this.state.name });
}
HandleSchoolInput=()=>{
    this.setstate({ school: this.state.name });
}
HandleNameInput=()=>{
    this.setstate({ name: this.state.name });
}
HandleNameInput=()=>{
    this.setstate({ name: this.state.name });
}
HandleNameInput=()=>{
    this.setstate({ name: this.state.name });
}
HandleNameInput=()=>{
    this.setstate({ name: this.state.name });
}
HandleNameInput=()=>{
    this.setstate({ name: this.state.name });
}
HandleNameInput=()=>{
    this.setstate({ name: this.state.name });
}
HandleNameInput=()=>{
    this.setstate({ name: this.state.name });
}
HandleNameInput=()=>{
    this.setstate({ name: this.state.name });
}


render(){
    return(
        <div>
            
                
                    
            <form id="code-resume">
                <h4>Education</h4>
                <h5>{this.state.school}</h5>
                <div>{this.state.graduated}</div>
                <div>{this.state.degree}</div>
                <h4>Work Experience</h4>
                <h5>{this.state.job}</h5>
                <h6>{this.state.title}</h6>
                <div>{this.state.timeWith}</div>
                <h4>Skills</h4>
                <div>{this.state.skills}</div>

            </form>
        </div>
        
        
        
    )
}
}


export default PreviewCard