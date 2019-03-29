import React, { Component } from 'react';
import SearchBar from './SearchBar';
import './Navbar.css';
class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">Code Library</a>

                <SearchBar/>
                <div className="navbar-item ml-auto text-white ">
                    <a className="navbar-link" href="/"> <i className="fas fa-home"></i></a>
                   
                </div>
                 
            </nav>
        );
    }
}

export default Navbar;