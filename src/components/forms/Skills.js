import React from 'react'
import ReactDOM from "react"
import PostBtn from '../buttons/PostBtn';
import AddJobCurrent from './JobHistForm';
import EduForm from './EduForm';

class Skills extends React.Component{
    state={
        checked: []
    }
    render(){
        return(
            <div>
                <div id="add-skills" className="row code-index code-vertical-align-wrapper">
                <div className="col s12 ">
                    <div className="row">
                
                <form className= "skills" id="showhere">
                <div class="col s12">
      <ul class="tabs" id="forms">
        <li className="tab col s4" id="eduForm"><a href="/EduForm">Education</a></li>
        <li className="tab col s4" onClick={ () => ReactDOM.render(<AddJobCurrent/>,document.getElementById('showhere'))}><a class="active" href="/AddJobCurrent">Work Exp</a></li>
        <li className="tab col s4 "><a href="/Skills">Skills</a></li>
        
      </ul>
    </div>
                <h2>Skills</h2>
                <div className ="row">
                    <div className="col s3">
                    <p>
                        <label>
                            <input type="checkbox" className="filled-in"  />
                            <span>HTML</span>
                        </label>
                    </p>
                    </div>
                    <div className="col s3">
                    <p>
                        <label>
                            <input type="checkbox" className="filled-in"  />
                            <span>CSS</span>
                        </label>
                    </p>
                    </div>
                    <div className="col s3">
                    <p>
                        <label>
                            <input type="checkbox" className="filled-in"  />
                            <span>Javascript</span>
                        </label>
                    </p>
                    </div>
                    <div className="col s3">
                    <p>
                        <label>
                            <input type="checkbox" className="filled-in"  />
                            <span>Node</span>
                        </label>
                    </p>
                    </div>
        </div>
        <div className ="row">            
                    <div className="col s3">
                    <p>
                        <label>
                            <input type="checkbox" className="filled-in"  />
                            <span>SQL</span>
                        </label>
                    </p>
                    </div>
                    <div className="col s3">
                    <p>
                        <label>
                            <input type="checkbox" className="filled-in"  />
                            <span>React</span>
                        </label>
                    </p> 
                    </div>
                    <div className="col s3">
                    <p>
                        <label>
                            <input type="checkbox" className="filled-in"  />
                            <span>NO SQL</span>
                        </label>
                    </p>
                    </div>
                    <div className="col s3">
                    <p>
                        <label>
                            <input type="checkbox" className="filled-in"  />
                            <span>Ruby</span>
                        </label>
                    </p> 
                    </div>   
                </div>
                <div className ="row">
                    <div className="col s3">
                    <p>
                        <label>
                            <input type="checkbox" className="filled-in"  />
                            <span>PHP</span>
                        </label>
                    </p>
                    </div>
                    <div className="col s3">
                    <p>
                        <label>
                            <input type="checkbox" className="filled-in"  />
                            <span>Angular</span>
                        </label>
                    </p>
                    </div>
                    <div className="col s3">
                    <p>
                        <label>
                            <input type="checkbox" className="filled-in"  />
                            <span>Java</span>
                        </label>
                    </p>
                    </div>
                    <div className="col s3">
                    <p>
                        <label>
                            <input type="checkbox" className="filled-in"  />
                            <span>C++</span>
                        </label>
                    </p>
                    </div> 
                    </div>   
                    <div className ="row">
                    <div className="col s3">
                    <p>
                        <label>
                            <input type="checkbox" className="filled-in"  />
                            <span>NPM</span>
                        </label>
                    </p>
                    </div>
                    <div className="col s3">
                    <p>
                        <label>
                            <input type="checkbox" className="filled-in"  />
                            <span>Bootstrap</span>
                        </label>
                    </p>
                    </div>
                    <div className="col s3">
                    <p>
                        <label>
                            <input type="checkbox" className="filled-in"  />
                            <span>Kotlin</span>
                        </label>
                    </p>
                    </div>
                    <div className="col s3">
                    <p>
                        <label>
                            <input type="checkbox" className="filled-in"  />
                            <span>Swift</span>
                        </label>
                    </p>
                    </div> 
                    </div> 
                    <div className ="row">
                    <div className="col s3">
                    <p>
                        <label>
                            <input type="checkbox" className="filled-in"  />
                            <span>Python</span>
                        </label>
                    </p>
                    </div>
                    <div className="col s3">
                    <p>
                        <label>
                            <input type="checkbox" className="filled-in"  />
                            <span>Word Press</span>
                        </label>
                    </p>
                    </div>
                    <div className="col s3">
                    <p>
                        <label>
                            <input type="checkbox" className="filled-in"  />
                            <span>Yarn</span>
                        </label>
                    </p>
                    </div>
                    <div className="col s3">
                    <p>
                        <label>
                            <input type="checkbox" className="filled-in"  />
                            <span>Git</span>
                        </label>
                    </p>
                    </div> 
                    </div>
                    <div className="code-separator-3"></div>
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
export default Skills