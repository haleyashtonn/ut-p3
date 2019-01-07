import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dropzone from 'react-dropzone';
import classNames from 'classnames'
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
function upload(files){
//   let blob =new Blob([files],{type: 'image/jpeg'})
//  console.log(blob)
let base64 = btoa(files)
console.log(files)
console.log(base64)
let reg = atob(base64)
console.log(reg)
 }
class MyDropzone extends React.Component {
  
  onDrop = (acceptedFiles, rejectedFiles) => {
    // Do something with files
    
    console.log(acceptedFiles)
    console.log(rejectedFiles)
    upload(acceptedFiles)
  }

  render() {
   return (
     <Dropzone onDrop={this.onDrop}>
       {({getRootProps, getInputProps, isDragActive}) => {
         return (
           <div
             {...getRootProps()}
             className={classNames('dropzone', {'dropzone--isActive': isDragActive})}
           >
             <input {...getInputProps()} />
             {
               isDragActive ?
                 <p>Drop files here...</p> :
                 <p>Try dropping some files here, or click to select files to upload.</p>
             }
           </div>
         )
       }}
     </Dropzone>
   );
 }
}

   

export default MyDropzone
