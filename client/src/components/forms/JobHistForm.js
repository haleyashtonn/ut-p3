import React from 'react'
import PostBtn from '../buttons/PostBtn';
import GenString from '../inputs/TitleInput';
import TextArea from '../inputs/TextArea';


class AddJobCurrent extends React.Component {

    

    handleChange = (event)=>{
        console.log(this.props)
        const name = event.target.id
        this.props.onformChange(event.target.value, name);
        console.log("good")
    }
    
    handleUpload=(url, publicId)=>{
        this.props.onAcceptPass(url, publicId)
        console.log(this.props)
        console.log(url)
        
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