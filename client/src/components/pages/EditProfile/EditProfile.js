import React from 'react';
import NavBar from '../Navbar';
import Footer from '../Footer';
import ReactDOM from "react"

import AddJobCurrent from '../../forms/JobHistForm';
import Skills from '../../forms/Skills';
import EduForm from '../../forms/EduForm';
import PreviewCard from '../../cards/ProPreviewCard';
import LinkForm from '../../forms/LinkForm';


class CreateProfile extends React.Component{
    state={ 
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
     
formChanged= (props, name)=>{
    
    this.setState({
      [name]: props
    });
    console.log(props, name)
    console.log("name")
}
handleTab=(event)=>{
    const name=event.target.id;
   this.setState({formName: name})
    
    console.log(name)
    }
checkedBox=(props,name)=>{
    this.setState({
        skills: this.state.skills +"   "+ [name]
    })
    console.log(props)
    console.log(name)
}

    
    render(){
        return(
           
            
            <div className = "pic">
                <NavBar/>
                
                <div className="code-separator-2"></div>
                <div id ="editContainer" className="row code-index ">
                <div className="col s12 m6 l5 offset-l1">
                <ul className="tabs" id="forms">
        <li className= "tab col s3" ><button className="form-tab"id = "edu"name ="edu" onClick={this.handleTab}>Education</button></li>
        
        <li className="tab col s3" ><button className="form-tab"id = "job"name ="job" onClick={this.handleTab}>Work Exp</button></li>
       
        <li className="tab col s3 " ><button className="form-tab"id = "skills"name ="skills" onClick={this.handleTab}>Skills</button></li>
        <li className="tab col s3 " ><button className="form-tab"id = "pLinks"name ="pLinks" onClick={this.handleTab}>Links</button></li>
      </ul>

                
                {this.state.formName ==="job"?
                <AddJobCurrent onformChange={this.formChanged}/>: 
                this.state.formName ==="skills"? 
                <Skills onformCheck={this.checkedBox}/>:
                this.state.formName ==="pLinks"? 
                <LinkForm onformChange={this.formChanged}/>: 
                <EduForm onformChange={this.formChanged}/>}
                
                </div>
                
                
                <div id="code-resume"  className="col s12 m6 l4 offset-l1">
                <PreviewCard {...this.state}/>
                </div>
                </div>
                
                <Footer/>
            </div>
            
        )
    }
}
export default CreateProfile