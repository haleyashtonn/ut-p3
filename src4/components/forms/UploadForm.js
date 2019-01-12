import React from 'react'
import MyDropzone from '../inputs/Dropzone';
import GenString from '../inputs/TitleInput';
import UploadBtn from '../buttons/UploadBtn';

function UploadForm(props){
    return(
        <div>
            <div className="row">
                <div className="col s12 m10 offset-m1 l8 offset-l2 xl6 offset-xl3">
                    <div className="card">
                        <div className="card-content">
                            <div className="ani-separator-2"></div>

                            <form action="/api/upload-photos" method="POST" className="dropzone" id="ani-form-upload-photos" encType="multipart/form-data">
                                    <GenString/>
                                <div className="ani-separator-2"></div>
                                <div className="fallback">
                                   <MyDropzone/>
                                </div>
                                <div className="ani-separator-2"></div>
                                <UploadBtn/>
                            </form>

                            
                        </div>
                    </div>
                                 
                    {/* <form action="/api/create-story" method="POST"> 
                        <button onclick="publish()" type="submit" className="btn-large waves-effect waves-light" title="Click to publish.">Publish</button>
                   </form> */}
                    
                    <div className="ani-separator-3"></div>
                </div>
            </div>
        </div>
       
    )
}
export default UploadForm