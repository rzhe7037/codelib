import React, { Component } from 'react';
import './AddButton.css';

class AddButton extends Component {
    render() {
        return (
            <button className="AddButton noselect" onClick={this.props.ClickHandler}>
                <p>Add New Component</p>
            </button>
        );
    }
}

export default AddButton;