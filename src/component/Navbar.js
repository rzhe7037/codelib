import React, { Component } from 'react';
import SearchBar from './SearchBar';
import './Navbar.css';
class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Code Library</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <SearchBar/>
                </div>
                <ul>
                    <li className="navbar-item"><a href="/">Home</a></li>
                </ul>
         
            </nav>
        );
    }
}

export default Navbar;