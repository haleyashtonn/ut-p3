import React from 'react';
import ImageBox from '../display/Image';


class PreviewCard extends React.Component{


render(props){
    console.log(props)
    return(
        <div>
            
                
            <div className="code-separator-3"></div>        
            <form id="preview">
                <ImageBox src="https://images.pexels.com/photos/58997/pexels-photo-58997.jpeg?cs=srgb&dl=animal-corgi-dog-58997.jpg&fm=jpg"/>
                <h4>Education</h4>
                <h5 id ="school" >{this.props.school}</h5>
                <div id = "graduated">{this.props.graduated}</div>
                <div id="degree">{this.props.degree}</div>
                <div id="otherEdu">{this.props.otherEdu}</div>
                <div id="awards">{this.props.awards}</div>
                <h4>Work Experience</h4>
                <h5 id ="job">{this.props.job}</h5>
                <h6 id ="jobtitle">{this.props.jobtitle}</h6>
                <div id="time" >{this.props.timewith}</div>
                <div id="duties">{this.props.duties}</div>
                <h4>Skills</h4>
                <div id ="skills">{this.props.skills}</div>
                <h4>Professional Links:</h4>
                <div id="links">{this.props.links}</div>

            </form>
        </div>
        
        
        
    )
}
}


export default PreviewCard