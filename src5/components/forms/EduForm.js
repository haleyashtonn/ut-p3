import React from 'react'

import ReactDOM from "react"
import FullNameInput from '../inputs/NameInput';
import GenString from '../inputs/TitleInput';
import TextArea from '../inputs/TextArea';
import PostBtn from '../buttons/PostBtn';
import AddJobCurrent from './JobHistForm';
import Skills from './Skills';
 class EduForm extends React.Component{
     state={ 
        graduated:"",
        school:"",
        degree:"",
        additionalTraining:"" ,
        otherEdu:"",
        awards:""
        
        }
     
handleChange = (event)=>{
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log("Like an Adult")
}
handleClick= (event)=>{
    this.setState({})
}


     render(props){
         
         return(
            <div>
            <div id="add-edu" className="row code-index code-vertical-align-wrapper">
               
                    
            <form id= "" action="/api/addEduJob" method= "POST">
           
      <ul class="tabs" id="forms">
        <li className= "tab col s4" onClick={ () => ReactDOM.render(<EduForm/>,document.getElementById('showhere'))}><a class="active" href="/EduForm">Education</a></li>
        <li className="tab col s4" name ="job"onClick={ () => ReactDOM.render(<AddJobCurrent/>,document.getElementById('showhere'))}><a class="active" href="/AddJobCurrent">Work Exp</a></li>
        <li className="tab col s4 "onClick={ () => ReactDOM.render(<Skills/>,document.getElementById('showhere'))}><a class="active" href="/Skills">Skills</a></li>
        
      </ul>
   
            <h1>Add Education</h1>
            <GenString placeholder="ex. University of Michigan" type="text"name="school" onChange={this.handleChange} value={this.state.school}/>
            <GenString placeholder="ex. 2012" type="number"name="graduated" onChange={this.handleChange} value={this.state.graduated}/>
            <GenString placeholder="ex. B.S. Biology" type="text"name="degree" onChange={this.handleChange} value={this.state.degree}/>
            <TextArea placeholder="ex. Trilogy Full-Stack Bootcamp 2018" type="text"name="otherEdu" onChange={this.handleChange} value={this.state.otherEdu}/>
            <TextArea placeholder="ex. Awards and Acheivements" type="text"name="awards" onChange={this.handleChange} value={this.state.awards}/>
            
            <div className="code-separator-2"></div>
            <PostBtn onClick={this.handleClick}/>
            </form>
                  <div className="code-separator-2"></div>
                        </div>
                <div className="code-separator-3"></div>
           
        <Skills/>    
    </div>
    
         )
     }
 }
 export default EduForm