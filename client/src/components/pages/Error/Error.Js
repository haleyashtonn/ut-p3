import React from 'react'


 
class PhotoUp extends React.Component{
    
    uploadWidget=()=>{
        console.log(this.props)
        
        window.cloudinary.openUploadWidget(
          { cloud_name: 'dm2obdaq7', upload_preset: 'doggie' },
          function(error, result, props) {
            
              if(error){
                 console.log("err")
              }
              if(result.length>0 && result.length<2){
                 console.log(this.props)
                // this.props.uploadSubmit(result[0].url)
                //  console.log(this.props.uploadSubmit)
                 console.log("got it")
             }
             else{console.log(result)}
             
           
            
          },
        );
      }
    render(){
        return(
            <div >
               <button onClick={this.uploadWidget(this.props)}{...this.props}>Add Photo</button>
            </div>
        )
    }
}
export default PhotoUp