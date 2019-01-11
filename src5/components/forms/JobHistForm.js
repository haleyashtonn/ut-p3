import React from 'react'
import ReactDOM from "react"
import FullNameInput from '../inputs/NameInput';
import PostBtn from '../buttons/PostBtn';
import GenString from '../inputs/TitleInput';
import TextArea from '../inputs/TextArea';
import EduForm from './EduForm';
class AddJobCurrent extends React.Component {
    state={
        job:"",
        jobtitle:"",
        timewith:"",
        duties:""
    }
    handleChange = (event)=>{
        const { name, value } = event.target;
        this.setState({
          [name]: value
          
        });
        
        console.log("Like an Adult")
    }
    render(){
        
        return(
            <div>
            <div id="code-job" className="row code-index code-vertical-align-wrapper">
                <div className="col s12">
                    <div className="row">
                    
            <form id= "job" action="/api/addJob" method= "POST">
            <div className="col s12">
      <ul className="tabs" id="forms">
        <li className="tab col s4" id="eduForm" ><a href={this.props.EduForm}>Education</a></li>
        <li className="tab col s4" onClick={ () => ReactDOM.render(<AddJobCurrent/>,document.getElementById('showhere'))}><a className="active" href="/AddJobCurrent">Work Exp</a></li>
        <li className="tab col s4 "><a href="/Skills">Skills</a></li>
        
      </ul>
    </div>
            <h1>Add Job</h1>
            <GenString placeholder="ex. Google" type="text" name="job" onChange={this.handleChange} value={this.state.job}/>
            <GenString placeholder="ex. Sr. Front-End Dev" type="text"name="jobtitle" onChange={this.handleChange} value={this.state.jobtitle}/>
            <GenString placeholder="ex. 4" type="number"name="timewith" onChange={this.handleChange} value={this.state.timewith}/>
            <TextArea placeholder="ex. what did you do there?" type="text"name="duties" onChange={this.handleChange} value={this.state.duties}/>
           
            <div className="code-separator-2"></div>
            
            <PostBtn/>
            
            </form>
                            <div className="code-separator-2"></div>
                        </div>


                <div className="code-separator-3"></div>
            </div>
        </div>
    </div>
    

        )
    }
}
export default AddJobCurrent