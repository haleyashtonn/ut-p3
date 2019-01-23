import React from 'react';
import ImageBox from '../display/Image';



class PreviewCard extends React.Component{
componentDidUpdate=()=>{

}

render(props){
    console.log(props)
    return(
        <div>
            
                
            <div className="code-separator-3"></div>        
            <form id="preview">
            
                <ImageBox {...this.props}/>
                <h6>Your Name Here</h6>
                <h6>{this.props.location}</h6>
                <h4>Education</h4>
                <h5 id ="school" >{this.props.school}</h5>
                <div id = "graduated">{this.props.graduated}</div>
                <div id="degree">{this.props.degree}</div>
                <div className="textbox" id="otherEdu">{this.props.otherEdu}</div>
                <div className="textbox" id="awards">{this.props.awards}</div>
                <h4>Work Experience</h4>
                <h5 id ="job">{this.props.job}</h5>
                <h6 id ="jobtitle">{this.props.jobtitle}</h6>
                <div id="time" >{this.props.timewith}</div>
                <div className="textbox" id="duties">{this.props.duties}</div>
                <h4>Skills</h4>
                <div className="textbox" id ="skills"></div>
                <h4>Professional Links:</h4>
                <div className="textbox" id="links">{this.props.links}</div>

            </form>
        </div>
        
        
        
    )
}
}


export default PreviewCard