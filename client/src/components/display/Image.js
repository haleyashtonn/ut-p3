import React from "react";
import { Image } from "cloudinary-react";

class ImageBox extends React.Component {
  componentDidMount = () => {
    console.log(this.props);
  };
  render(props) {
    return (
      <div>
        <Image cloudName="dm2obdaq7" publicId={this.props.publicId} />
      </div>
    );
  }
}
export default ImageBox;
