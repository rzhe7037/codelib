import React, { Component } from 'react';
import './index.css';
import DirectoryForm from '../../component/DirectoryForm';

class DefaultPage extends Component {
    constructor(props){
        super(props);
        this.state={
            isFormVisiable:false,
            formType:null
        };
        this.toggleForm = this.toggleForm.bind(this);
        this.closeForm = this.closeForm.bind(this);
    }

    toggleForm(){
        this.setState({
            isFormVisiable: !this.state.isFormVisiable
        }); 
    }

    closeForm(){
        this.setState({
            isFormVisiable: false
        }); 
    }
    render() {
        const category = this.props.match.params.path;
        return (

            <div className="DefaultPage">
                <div className="container">
                    <div className="content">
                        <div className="content-wrapper">
                            <p>Welcome to code library,<br/> 
                            here you can search or store frequently used code snippet include some 
                            popular used framework.<br/>
                            You can use the app for a quick reference<br/> 
                            Happy coding!
                            </p>
                            <div className="menu">
                                <button className="btn btn-primary mx-1" onClick={this.toggleForm}>Add new directory</button>
                            </div>
                        </div>

                        { this.state.isFormVisiable && (
                            <DirectoryForm formType={this.state.isFormVisiable.formType} category={category} closeForm={this.closeForm}/>
                        )}
                    </div>
                </div>



            </div>
    
        );
    }
}

export default DefaultPage;