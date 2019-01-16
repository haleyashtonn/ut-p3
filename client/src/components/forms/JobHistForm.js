import React from 'react'
import ReactDOM from "react"
import FullNameInput from '../inputs/NameInput';
import PostBtn from '../buttons/PostBtn';
import GenString from '../inputs/TitleInput';
import TextArea from '../inputs/TextArea';
import EduForm from './EduForm';
class AddJobCurrent extends React.Component {

    handleChange = (event)=>{
        const name = event.target.id
        this.props.onformChange(event.target.value, name);
        console.log("good")
    }
   
    render(){
        
        return(
            <div>
            <div id="add-job" className="row code-index code-vertical-align-wrapper">
                <div className="col s12">
                    <div className="row">
                    
            <form id= "job" action="/api/addJob" method= "POST">
            <div className="col s12">
     
    </div>
            <h1>Add Job</h1>
            <label id="form-label">Company:</label>
            <GenString label ="Job"placeholder="ex. Google" type="text" id="job" onChange={this.handleChange} value={this.props.job}/>
            <label id="form-label">Position:</label>
            <GenString placeholder="ex. Sr. Front-End Dev" type="text" id="jobtitle" onChange={this.handleChange} value={this.props.jobtitle}/>
            <label id="form-label">Years With:</label>
            <GenString placeholder="ex. 4" type="number"id="timewith" onChange={this.handleChange} value={this.props.timewith}/>
            <label id="form-label">Responsibilities:</label>
            <TextArea placeholder="ex. what did you do there?" type="text"id="duties" onChange={this.handleChange} value={this.props.duties}/>
            
            <label id="form-label">Professional Links:</label>
            <GenString placeholder="ex.https://github.com/JDoe1111 " type="url"id="links" onChange={this.handleChange} value={this.props.links}/>
            <div className="code-separator-2"></div>
            
            <PostBtn/>
            
            </form>
                            <div className="code-separator-2"></div>
                        </div>


                
            </div>
        </div>
    </div>
    

        )
    }
}
export default AddJobCurrent