import React from 'react';
import GenString from '../inputs/TitleInput';

class JobsForm extends React.Component{
    handleChange=(event)=>{
        const name = event.target.id
        this.props.onformChange(event.target.value, name);
    }
    render(){
        return(
            
            <div>
                <form>
                    <label id="form-label">Where:</label>
                    <GenString placeholder="Austin, Tx" type="text" id="where" onChange={this.handleChange} value={this.props.where}/>
                    <label id="form-label">Job:</label>
                    <GenString placeholder="Web Developer" type="text" id="job" onChange={this.handleChange} value={this.props.job}/>
                    
                </form>
            </div>
        )
    }
}
export default JobsForm