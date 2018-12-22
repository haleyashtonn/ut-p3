import React from  'react'
import SettingsFormR from '../forms/SettingsRight';

function SettingsCardR(){
    return(
        <div>
            <div className="col s12 m10 offset-m1 l6">
            <div className="card">
                <div className="card-content">
                    <div className="row">
                        <div className="col s12 l10 offset-l1">
                            <h2>Update password</h2>

                            <div className="ani-separator-2"></div>
                                <SettingsFormR/>
                            <div className="ani-separator-3"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>    
    )
}
export default SettingsCardR