import React from 'react'
import ReactDOM from "react"
import PostBtn from '../buttons/PostBtn';
import AddJobCurrent from './JobHistForm';
import EduForm from './EduForm';

class Skills extends React.Component{
    handleCheck=(event)=>{
        const name = event.target.id
        this.props.onformCheck(event.target.value, name);
        console.log("good")
    }
    render(){
        return(
            <div>
                <div id="add-skills" className="row code-index code-vertical-align-wrapper">
                <div className="col s12 ">
                    <div className="row">
                
                <form className= "skills" >
                <div className="col s12">
     
    </div>
                <h2>Skills</h2>
                <div className ="row">
                    <div className="col s3">
                    <p>
                        <label>
                            <input id = "HTML"type="checkbox" className="filled-in" checked={this.props.checked} onChange={this.handleCheck}/>
                            <span>HTML</span>
                        </label>
                    </p>
                    </div>
                    <div className="col s3">
                    <p>
                        <label>
                            <input id ="CSS"type="checkbox" className="filled-in"  checked={this.props.checked} onChange={this.handleCheck}/>
                            <span>CSS</span>
                        </label>
                    </p>
                    </div>
                    <div className="col s3">
                    <p>
                        <label>
                            <input id ="JavaScript"type="checkbox" className="filled-in" checked={this.props.checked} onChange={this.handleCheck}/>
                            <span>Javascript</span>
                        </label>
                    </p>
                    </div>
                    <div className="col s3">
                    <p>
                        <label>
                            <input id ="Node"type="checkbox" className="filled-in" checked={this.props.checked} onChange={this.handleCheck}/>
                            <span>Node</span>
                        </label>
                    </p>
                    </div>
        </div>
        <div className ="row">            
                    <div className="col s3">
                    <p>
                        <label>
                            <input id ="SQL"type="checkbox" className="filled-in"  checked={this.props.checked} onChange={this.handleCheck}/>
                            <span>SQL</span>
                        </label>
                    </p>
                    </div>
                    <div className="col s3">
                    <p>
                        <label>
                            <input id ="React"type="checkbox" className="filled-in" checked={this.props.checked}  onChange={this.handleCheck}/>
                            <span>React</span>
                        </label>
                    </p> 
                    </div>
                    <div className="col s3">
                    <p>
                        <label>
                            <input id="NoSQL"type="checkbox" className="filled-in"  checked={this.props.checked} onChange={this.handleCheck}/>
                            <span>NO SQL</span>
                        </label>
                    </p>
                    </div>
                    <div className="col s3">
                    <p>
                        <label>
                            <input id ="Ruby"type="checkbox" className="filled-in" checked={this.props.checked} onChange={this.handleCheck}/>
                            <span>Ruby</span>
                        </label>
                    </p> 
                    </div>   
                </div>
                <div className ="row">
                    <div className="col s3">
                    <p>
                        <label>
                            <input id ="PHP"type="checkbox" className="filled-in" checked={this.props.checked} onChange={this.handleCheck}/>
                            <span>PHP</span>
                        </label>
                    </p>
                    </div>
                    <div className="col s3">
                    <p>
                        <label>
                            <input id ="Angular"type="checkbox" className="filled-in"  checked={this.props.checked} onChange={this.handleCheck}/>
                            <span>Angular</span>
                        </label>
                    </p>
                    </div>
                    <div className="col s3">
                    <p>
                        <label>
                            <input id ="Java" type="checkbox" className="filled-in" checked={this.props.checked} onChange={this.handleCheck}/>
                            <span>Java</span>
                        </label>
                    </p>
                    </div>
                    <div className="col s3">
                    <p>
                        <label>
                            <input id ="C#"type="checkbox" className="filled-in"  checked={this.props.checked} onChange={this.handleCheck}/>
                            <span>C#</span>
                        </label>
                    </p>
                    </div> 
                    </div>   
                    <div className ="row">
                    <div className="col s3">
                    <p>
                        <label>
                            <input id ="NPM"type="checkbox" className="filled-in"  checked={this.props.checked} onChange={this.handleCheck}/>
                            <span>NPM</span>
                        </label>
                    </p>
                    </div>
                    <div className="col s3">
                    <p>
                        <label>
                            <input id ="Bootstrap"type="checkbox" className="filled-in"  checked={this.props.checked} onChange={this.handleCheck}/>
                            <span>Bootstrap</span>
                        </label>
                    </p>
                    </div>
                    <div className="col s3">
                    <p>
                        <label>
                            <input id ="Kotlin"type="checkbox" className="filled-in"  checked={this.props.checked} onChange={this.handleCheck}/>
                            <span>Kotlin</span>
                        </label>
                    </p>
                    </div>
                    <div className="col s3">
                    <p>
                        <label>
                            <input id ="Swift"type="checkbox" className="filled-in"  checked={this.props.checked} onChange={this.handleCheck}/>
                            <span>Swift</span>
                        </label>
                    </p>
                    </div> 
                    </div> 
                    <div className ="row">
                    <div className="col s3">
                    <p>
                        <label>
                            <input id ="Python"type="checkbox" className="filled-in"  checked={this.props.checked} onChange={this.handleCheck}/>
                            <span>Python</span>
                        </label>
                    </p>
                    </div>
                    <div className="col s3">
                    <p>
                        <label>
                            <input id ="WordPress"type="checkbox" className="filled-in" checked={this.props.checked} onChange={this.handleCheck}/>
                            <span>Word Press</span>
                        </label>
                    </p>
                    </div>
                    <div className="col s3">
                    <p>
                        <label>
                            <input id ="Yarn"type="checkbox" className="filled-in" checked={this.props.checked} onChange={this.handleCheck}/>
                            <span>Yarn</span>
                        </label>
                    </p>
                    </div>
                    <div className="col s3">
                    <p>
                        <label>
                            <input id ="Git"type="checkbox" className="filled-in"  checked={this.props.checked} onChange={this.handleCheck}/>
                            <span>Git</span>
                        </label>
                    </p>
                    </div> 
                    </div>
                    
                    <PostBtn/>
                     
                </form>
                
                        </div>
                
                </div>
                </div>
                </div>
        
        
        )
    }
}
export default Skills