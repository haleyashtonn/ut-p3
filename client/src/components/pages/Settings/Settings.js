import React from "react";
import DeleteAccCard from "../../cards/DeleteCard";
import SettingsFormL from "../../forms/SettingsLeft";
import SettingsFormR from "../../forms/SettingsRight";

class Settings extends React.Component {
  render() {
    return (
      <div className="pic">
        <div className="code-separator-3" />
        <div className="row">
          <div className="col s12 m6">
            <SettingsFormL />
          </div>

          <div className="col s12 m6">
            <SettingsFormR />
          </div>
        </div>
        <div className="row">
          <div className="col s12 m6">
            <DeleteAccCard />
          </div>
        </div>
      </div>
    );
  }
}
export default Settings;
