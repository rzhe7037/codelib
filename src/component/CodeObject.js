import React, { Component } from 'react';
import './CodeObject.css';

class CodeObject extends Component {
    render() {
        const {label,code,description} = this.props.codecard;
        return (
            <div className="card my-3  border-secondary">
                <div className="card-header">
                    {label}
                    <button className="btn btn-dark" id={this.props.id} onClick={this.props.toggleEditForm}>Edit</button>
                    
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-8 text-success">
                            <div className="card-title">
                                Code:
                            </div>
                            {code}
                        </div>
                        <div className="col-sm-4">
                            <div className="card-title">
                                Description:
                            </div>
                            {description}
                           
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CodeObject;