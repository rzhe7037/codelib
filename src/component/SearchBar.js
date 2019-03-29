import React, { Component } from 'react';
class SearchBar extends Component {
    render() {
        return (
            <input placeholder="search" className="mr-auto form-control" style={{width: '40%',height:'30px'}}></input>
        );
    }
}

export default SearchBar;