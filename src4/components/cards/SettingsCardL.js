import React from 'react'
import SettingsFormL from '../forms/SettingsLeft';

function SettingsCardL(props){
return(
    <div>
        <div className="row">
            <div className="col s12 m10 offset-m1 l6">
                <div className="card">
                    <div className="card-content">
                        <div className="row">
                            <div className="col s12 l10 offset-l1">
                                <h2>Update profile</h2>

                                <div className="ani-separator-2"></div>

                                    <SettingsFormL/>

                                <div className="ani-separator-3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

}

export default SettingsCardL