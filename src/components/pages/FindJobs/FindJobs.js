import React from 'react';
import NavBar from '../Navbar';
import Footer from '../Footer';
import JobsForm from '../../forms/JobsSearch';

class FindJobs extends React.Component {
    state={
        where:"",
        job:"",
        
    }
    formChanged= (props, name)=>{
    
        this.setState({
          [name]: props
        });
        console.log(props, name)
        console.log("name")
    }
    render(){
        return(
            <div className = "pic">
                <NavBar/>
                <div className="code-separator-3"></div>
                <div className="row">
                <div className="col s12 m10 l6 offset-l3">
                <JobsForm onformChange={this.formChanged}/>
                </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default FindJobs