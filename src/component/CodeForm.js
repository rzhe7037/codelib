import React, { Component } from 'react';
import './CodeForm.css'

class CodeForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            label:this.props.codecard.label,
            code:this.props.codecard.code,
            description:this.props.codecard.description,
            id: this.props.codecard.id,
            formType: this.props.formType
        }
        this.onchange = this.onchange.bind(this);
        this.onsubmit = this.onsubmit.bind(this);
        
    }

    onchange(e){
        var name = e.target.name;
        var value = e.target.value; 
        this.setState({
           [name]:value
        });
    }

    onsubmit(e){
        e.preventDefault();
        var requestType;
        switch(this.props.formType){
            case "Add":
                requestType = "POST";
                break;
            case "Edit":
                requestType = "PUT";
                break;
            default: 
                console.log("Form type is not specified!")
                return;   
        }

        var data = {...this.state, menunode_id: this.props.menunode_id};
        fetch(`/api/codeobject`,{
            method: requestType, 
            headers: {
                "Content-Type": "application/json",
            },         
            body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            this.props.closeForm();
            location.reload();
        })
        .catch(err => console.log(err))



    }

    render() {
        return (
            <div className="Form card text-dark bg-white mb-3">
                <div className="card-header bg-primary text-white">{this.state.formType} Code component
                    <button className="btn btn-info" onClick={this.props.closeForm}>close</button>
                </div>
                <div className="card-body">
                        <div className="my-1">
                        </div>
                        <form onSubmit={this.onsubmit}>
                            <div className="form-group">
                                <label htmlFor="label">Code label:</label>
                                <input className="form-control" name="label" onChange={this.onchange} value={this.state.label}/>
                            </div>   
                            <div className="form-group">
                                <label htmlFor="code">Code:</label>
                                <textarea className="form-control" name="code" onChange={this.onchange} value={this.state.code}></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description:</label>
                                <textarea className="form-control" name="description" onChange={this.onchange} value={this.state.description}></textarea>
                            </div>
                          
                            
                            <button className="btn btn-primary" style={{float:"right"}} type="submit">{this.state.formType}</button>
                        
                        </form>
                </div>
            </div>
        );
    }
}

export default CodeForm;