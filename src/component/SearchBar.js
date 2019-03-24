import React, { Component } from 'react';
class SearchBar extends Component {
    render() {
        return (
                <input placeholder="search" className="form-control" style={{width: '40%'}}></input>
        );
    }
}

export default SearchBar;