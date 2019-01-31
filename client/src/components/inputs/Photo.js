import React from "react";

class PhotoUp extends React.Component {
  uploadWidget = () => {
    let props = this.props;
    window.cloudinary.openUploadWidget(
      {
        cloud_name: "dm2obdaq7",
        upload_preset: "doggie",
        cropping: true,
        croppingAspectRatio: 0.3,
        showPoweredBy: false,
        autoMinimize: true
      },
      function(error, result) {
        if (error) {
          console.log(error);
        }
        if (result) {
          props.uploadSubmit(result[0].url, result[0].public_id);
        } else {
          console.log(result);
        }
      }
    );
  };
  render() {
    return (
      <div>
        <button onClick={this.uploadWidget}>Add Photo</button>
      </div>
    );
  }
}
export default PhotoUp;
