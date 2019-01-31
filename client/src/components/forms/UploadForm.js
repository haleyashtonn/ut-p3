import React from "react";
import PhotoUp from "../inputs/Photo";
import GenString from "../inputs/TitleInput";

class UploadForm extends React.Component {
  componentDidMount(event) {
    console.log("loaded");
  }

  handleChange = event => {
    const name = event.target.id;
    this.props.onformChange(event.target.value, name);
  };
  handleUpload = (url, publicId) => {
    this.props.onAcceptPass(url, publicId);
  };

  render() {
    return (
      <div>
        <div className="row code-index code-vertical-align-wrapper">
          <div className="col s12 ">
            <div className="row">
              <div className="form-upload">
                <form>
                  <div name="upload">
                    <script
                      src="https://widget.cloudinary.com/v2.0/global/all.js"
                      type="text/javascript"
                    />
                    <PhotoUp uploadSubmit={this.handleUpload} />
                    <label id="form-label">Location:</label>
                    <GenString
                      label="Location"
                      placeholder="ex. Austin,Tx"
                      type="text"
                      id="location"
                      onChange={this.handleChange}
                      value={this.props.location}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default UploadForm;
