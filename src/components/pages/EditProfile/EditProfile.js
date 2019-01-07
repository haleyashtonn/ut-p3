import React from 'react';
import NavBar from '../Navbar';
import Footer from '../Footer';
import ReactDOM from "react"
import AddJobCurrent from '../../forms/JobHistForm';
import Skills from '../../forms/Skills';
import EduForm from '../../forms/EduForm';
import PreviewCard from '../../cards/ProPreviewCard';


class CreateProfile extends React.Component{
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
    console.log(value)
}

    
    render(){
        return(
           
            
            <div>
                <NavBar/>
                
                
                <div id ="editContainer" className="row code-index code-vertical-align-wrapper">
                <div className="col s12 m10 offset-m1 l5 offset-l1 xl5 offset-xl1">

                <EduForm onChange={this.handleChange} value={this.state}/>
                
                </div>
                
                
                <div id="code-job"  className="col s12 m10 offset-m1 l4  offset-l7 xl4 offset-xl7">
                <PreviewCard/>
                </div>
                </div>
                
                <Footer/>
            </div>
            
        )
    }
}
export default CreateProfile