import React, { Component } from 'react';
import './DirectoryForm.css';

class DirectoryForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            directoryLevel1: null,
            directoryLevel2: null
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

    onsubmit(event){
        event.preventDefault();
        if(!this.state.directoryLevel1 && this.state.directoryLevel2){
            alert('Please fill in the root directory first!');
            return;
        }
        var data = {
            directoryLevel1: this.state.directoryLevel1,
            directoryLevel2: this.state.directoryLevel2,
            category: this.props.category
        };
        fetch(`/api/menuNode`, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },         
            body: JSON.stringify(data),
        })
        .then(response => {
            console.log(response.json());
            this.props.closeForm();
            location.reload();
        })
        .catch(err => console.log(err))
    }
    render() {
        return (
            <div className="Form card text-dark bg-white mb-3">
                <div className="card-header bg-primary text-white">
                    Add Directory
                    <button className="btn btn-info" onClick={this.props.closeForm}>close</button>
                </div>
                <div className="card-body">
                    <div className="card-wrapper">
                        <div className="my-1">
                            <label htmlFor="category">Category: {this.props.category}</label>
                        </div>
                        <form onSubmit={this.onsubmit}>

                            <div className="form-group">
                            <label htmlFor="diretoryLevel1">Directory Level1:</label>
                                <input className="form-control" name="directoryLevel1" onChange={this.onchange}/>
                            </div>   
                            <div className="form-group">
                            <label htmlFor="diretoryLevel2">Directory Level2:</label>
                                <input className="form-control" name="directoryLevel2" onChange={this.onchange}/>
                            </div>
                          
                            <button className="btn btn-primary" type="submit">Add</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default DirectoryForm;