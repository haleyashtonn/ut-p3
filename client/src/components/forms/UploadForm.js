import React from 'react'
import PhotoUp from '../inputs/Photo';
import GenString from '../inputs/TitleInput';

class UploadForm extends React.Component{
   
 
  componentDidMount(event){ 
      
    console.log("loaded")
  

  }

//     uploadWidget=()=>{
//         let props=this.props
//         console.log(this.props)
//         if(this.props.url===""){
        
        
//         window.cloudinary.openUploadWidget(
//           { cloud_name: 'dm2obdaq7', upload_preset: 'doggie', form:'upload', multiple:false, 
//            maxWidth: 220, height: 140, crop: true},
//           function(error, result) {
//             if (result ) {
//                 const url=result[0].url
//                 console.log(this.props)
//                  console.log(url)
//                  console.log(result)
//                  return url
//             }
            
//              else if(result===undefined){
//                  console.log("length undefined")
//              }
//              else{
           
//             console.log(result)}
             
//           }
//         )
      
//     }
    
// }
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
            <div  className="row code-index code-vertical-align-wrapper">
                <div className="col s12 ">
                    <div className="row">
                        <div className="form-upload">
                            <div className="code-separator-2"></div>

                            <form >
                                <div name= "upload">

                                <label id="form-label">Location:</label>
                                <GenString label ="Location"placeholder="ex. Austin,Tx" type="text" id="location" onChange={this.handleChange} value={this.props.location}/>
                                <script src="https://widget.cloudinary.com/v2.0/global/all.js" type="text/javascript"></script> 
                                <PhotoUp uploadSubmit={this.handleUpload} />
                               
                                
                             </div>
                            </form>

                            
                        </div>
                    </div>
                                 
                    {/* <form action="/api/create-story" method="POST"> 
                        <button onclick="publish()" type="submit" className="btn-large waves-effect waves-light" title="Click to publish.">Publish</button>
                   </form> */}
                    
                    <div className="code-separator-3"></div>
                </div>
            </div>
        </div>
        )
                }
            }
export default UploadForm