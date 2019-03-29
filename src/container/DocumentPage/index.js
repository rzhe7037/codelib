import React, { Component } from 'react';
import "./index.css";
import CodeObject from '../../component/CodeObject';
import AddButton from '../../component/AddButton';
import CodeForm from '../../component/CodeForm';


class DocumentPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            codeCards: null,
            isFormVisiable: false,
            formType: null,
            select_id: null        
        }
        this.toggleAddForm = this.toggleAddForm.bind(this);
        this.toggleEditForm = this.toggleEditForm.bind(this);
        this.closeForm = this.closeForm.bind(this);
    }

    toggleAddForm(){
        this.setState({
            isFormVisiable: !this.state.isFormVisiable,
            formType: "Add",
            select_id: null

        });
    }
 
    toggleEditForm(e){
        this.setState({
            isFormVisiable: !this.state.isFormVisiable,
            formType: "Edit",
            select_id: e.target.id
        }); 
    }

    closeForm(){
        this.setState({
            isFormVisiable: false,
        }); 
    }
       

    componentDidMount(){
        const id = this.props.match.params.id;
        fetch(`/api/menuNode/${id}/codeobject`)
        .then(data => data.json())
        .then(data => {
            this.setState({
                codeCards: data.result
            });
            ;
        })
        .catch(err => console.log(err))        
    }


    render() {
        if(!this.state.codeCards) return null;
        const codecards = this.state.codeCards.map((codecard,id) =>  <li key={id}><CodeObject codecard={codecard} id={id} toggleEditForm={this.toggleEditForm} /></li>)
        const target_codecard = this.state.select_id ? this.state.codeCards[this.state.select_id] : {label: "", code: "", description: ""}
        return (
            <div className="DocumentPage">
                <div className="container">
                    <div className="content">
                        <ul>
                            {codecards}
                            <AddButton ClickHandler={this.toggleAddForm}/>
                        </ul>

                        { this.state.isFormVisiable && (
                            <CodeForm menunode_id = {this.props.match.params.id} formType={this.state.formType} codecard={target_codecard} closeForm={this.closeForm}/>
                        )}

                    </div>
                </div>    
            </div>
        );
    }
}

export default DocumentPage;