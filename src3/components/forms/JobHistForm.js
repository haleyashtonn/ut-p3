import React from 'react'
import FullNameInput from '../inputs/NameInput';
import PostBtn from '../buttons/PostBtn';
import GenString from '../inputs/TitleInput';
import TextArea from '../inputs/TextArea';
class AddJobCurrent extends React.Component {
    render(){
        return(
            <div>
            <div id="ani-signup" className="row ani-index ani-vertical-align-wrapper">
                <div className="col s12 m10 offset-m1 l7 offset-l4 xl5 offset-xl4">
                    <div className="row">
                    <h1>Add Job</h1>
            <form id= "job" action="/api/addJob" method= "POST">
            
            <FullNameInput/>
            <GenString/>
            <GenString/>
            <TextArea/>
            <div>"Add Inputs for  Dates, Promotions. notes, location"</div>
            <div className="ani-separator-2"></div>
            
            <PostBtn/>
            
            </form>
                            <div className="ani-separator-2"></div>
                        </div>


                <div className="ani-separator-3"></div>
            </div>
        </div>
    </div>
    

        )
    }
}
export default AddJobCurrent