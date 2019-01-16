import React from 'react'
import DeleteForm from '../forms/DeleteAccForm';

function DeleteAccCard(props){
    return(
        <div>
            <div className="card">
                <div className="card-content">
                    <div className="row">
                        <div className="col s12 l10 offset-l1">
                            <h2>Delete Account</h2>

                            <div className="code-separator-3"></div>

                            <DeleteForm/>

                            <div className="code-separator-3"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DeleteAccCard