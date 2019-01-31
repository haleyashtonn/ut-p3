import React from "react";
import GenString from "../inputs/TitleInput";

class LinkForm extends React.Component {
  handleChange = event => {
    const name = event.target.id;
    this.props.onformChange(event.target.value, name);
  };

  render(props) {
    console.log(props);
    return (
      <div>
        <form>
          <label id="form-label">Professional Links:</label>
          <GenString
            placeholder="ex.https://github.com/JDoe1111 "
            type="url"
            id="links"
            onChange={this.handleChange}
            value={this.props.links}
          />
        </form>
      </div>
    );
  }
}
export default LinkForm;
